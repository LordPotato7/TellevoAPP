import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  usuario={
    username:'',
    password:''
   }
  
    constructor(
      private router:Router,
      private alertController:AlertController
      ) { }
  
    ngOnInit() {
    }
  
    onSubmit()
    {
      if (this.usuario.username=="shimuelo" && this.usuario.password=="1234"){
        let datosEnviar : NavigationExtras = {
          queryParams : {
            nombreUsuario : this.usuario.username
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
