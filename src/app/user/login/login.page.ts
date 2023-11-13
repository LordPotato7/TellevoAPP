import { User } from './../../models/user.model';
import { Component, OnInit, inject } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { FirebaseService } from '../../services/firebase.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { UtilsService } from 'src/app/services/utils.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  // usuario={
  //   email:'',
  //   password:''
  //  }

    form = new FormGroup({
      email: new FormControl('',[Validators.required, Validators.email]),
      password: new FormControl('',[Validators.required]),
      
    })
  
      firebaseSvc = inject(FirebaseService); 
      utilsSvc = inject(UtilsService)
      
  
    ngOnInit() {
    }
  
    async submit(){
      if(this.form.valid){
  
        const loading = await this.utilsSvc.loading();
        await loading.present();
        this.firebaseSvc.signIn(this.form.value as User).then(res =>{
          
          this,this.getUserInfo(res.user.uid);

        }).catch(error=>{
          
          this.utilsSvc.presentToast({
            message: error.message,
            duration: 2500,
            color: 'primary',
            icon: 'alert-circle-outline'
          })
        }).finally(()=>{
          loading.dismiss();
        })
      }
    }

    async getUserInfo(uid: string){
      if(this.form.valid){
  
        const loading = await this.utilsSvc.loading();
        await loading.present();
  
        let path = 'users/${uid}';
  
        
  
        this.firebaseSvc.getDocuments(path).then((user : User) =>{
          
          this.utilsSvc.saveInLocalStorage('user', user);
          this.utilsSvc.routerLink('/home');
          this.form.reset;

          this.utilsSvc.presentToast({
            message: 'Bienvenid@ ${user.nombre}',
            duration: 1500,
            color: 'primary',
            icon: 'person-circle-outline'
          })

        }).catch(error=>{
          console.log(error);
          this.utilsSvc.presentToast({
            message: error.message,
            duration: 2500,
            color: 'primary',
            icon: 'alert-circle-outline'
          })
        }).finally(()=>{
          loading.dismiss();
        })
      }
    }
    // {
      
      //if(this.form.valid){}

      // else if (this.usuario.email== await this.storage.get('email') && this.usuario.password== await this.storage.get('password')){
      //   let datosEnviar : NavigationExtras = {
      //     queryParams : {
      //       nombreUsuario : await this.storage.get('nombre')
      //     }
      //   }

      //   this.router.navigate(['/home'], datosEnviar)
      // }
      // else{
        
      //   this.presentAlert()
      // }
  
    }
  
  
    // async presentAlert() {
    //   const alert = await this.alertController.create({
    //     header: 'Alerta',
    //     subHeader: 'Información',
    //     message: "Usuario y/o password incorrectos",
    //     buttons: ['OK'],
    //     backdropDismiss:false,
        
    //   });
  
    //   await alert.present();
  
   
    // }

