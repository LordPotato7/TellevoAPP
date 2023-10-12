import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  usuario={
    email:'',
    password:''
   }
  
    constructor(
      private router:Router,
      private alertController:AlertController,
      private storage: Storage
      ) { }
      
  
    ngOnInit() {
    }
  
    async onSubmit()
    {
      
      if (this.usuario.email== await this.storage.get('email') && this.usuario.password== await this.storage.get('password')){
        let datosEnviar : NavigationExtras = {
          queryParams : {
            nombreUsuario : await this.storage.get('nombre')
          }
        }

        this.router.navigate(['/home'], datosEnviar)
      }
      else{
        
        this.presentAlert()
      }
  
    }
  
  
    async presentAlert() {
      const alert = await this.alertController.create({
        header: 'Alerta',
        subHeader: 'Información',
        message: "Usuario y/o password incorrectos",
        buttons: ['OK'],
        backdropDismiss:false,
        
      });
  
      await alert.present();
  
   
    }
}
