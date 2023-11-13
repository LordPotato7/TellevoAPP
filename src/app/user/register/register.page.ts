import { Component, OnInit, inject } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { FirebaseService } from '../../services/firebase.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {User} from 'src/app/models/user.model';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  // usuario={
  //   nombre:'',
  //   apellido:'',
  //   email:'',
  //   password:''
  //  }
  // constructor(private storage: Storage) { }

  form = new FormGroup({
    uid : new FormControl(''),
    nombre: new FormControl('',[Validators.required, Validators.minLength(3)]),
    apellido: new FormControl('',[Validators.required, Validators.minLength(3)]),
    email: new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('',[Validators.required]),
    
  })

  firebaseSvc = inject(FirebaseService); 
      utilsSvc = inject(UtilsService);
      

  ngOnInit() {
  }

  async submit(){
    if(this.form.valid){

      const loading = await this.utilsSvc.loading();
      await loading.present();
      this.firebaseSvc.signUp(this.form.value as User).then(async res =>{
        
        await this.firebaseSvc.updateUser(this.form.value.nombre);

        let uid = res.user.uid;
        this.form.controls.uid.setValue(uid);

        this.setUserInfo(uid);

        console.log(res);
        this.utilsSvc.routerLink('/home');
        this.form.reset;

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

  async setUserInfo(uid: string){
    if(this.form.valid){

      const loading = await this.utilsSvc.loading();
      await loading.present();

      let path = 'users/${uid}';

      delete this.form.value.password;

      this.firebaseSvc.setDocuments(path, this.form.value).then(async res =>{
        
        this.utilsSvc.saveInLocalStorage('user', this.form.value);
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

  
  // async onSubmit()
  // {
  
  //   await this.storage.set('nombre',this.usuario.nombre);
  //   await this.storage.set('apellido',this.usuario.apellido);
  //   await this.storage.set('email',this.usuario.email);
  //   await this.storage.set('password',this.usuario.password);
    
  // }
}
