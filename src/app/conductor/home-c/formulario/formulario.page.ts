import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.page.html',
  styleUrls: ['./formulario.page.scss'],
})

export class FormularioPage implements OnInit {

  usuario = {
    username: 'manolo@duocuc.cl',
    password: '123'
  }
  Nombre = {
    name: 'Manuel'
  }
  Patente = {
    patente: 'P0T0'
  }
  constructor(
    private router: Router,
    private alertController: AlertController
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    if (this.usuario.username == "manolo@duocuc.cl" && this.usuario.password == "123") {
      this.router.navigate(['/home'])
    }
    else {

      this.presentAlert()
    }

  }


  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alerta',
      subHeader: 'Información',
      message: "Usuario y/o password incorrectos",
      buttons: ['OK'],
      backdropDismiss: false,

    });


  }
}
