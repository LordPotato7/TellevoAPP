import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  usuario={
    nombre:'',
    apellido:'',
    email:'',
    password:''
   }
  constructor(private storage: Storage) { }

  ngOnInit() {
  }

  async onSubmit()
  {
    //await this.storage.set('name', 'Mr. Ionitron');
    await this.storage.set('nombre',this.usuario.nombre);
    await this.storage.set('apellido',this.usuario.apellido);
    await this.storage.set('email',this.usuario.email);
    await this.storage.set('password',this.usuario.password);
    
  }
}
