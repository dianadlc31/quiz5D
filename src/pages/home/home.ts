import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { RegistroPage } from '../registro/registro';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
registro=RegistroPage;
mail="";
pass="";
usuarios=[{mail:"", pass:""}]
  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public storage:Storage) {
    this.storage.keys()
    .then (keys =>{
      if (keys.some(key=> key == 'usuarios')){
        this.storage.get('usuarios')
        .then(usuarios => {
          this.usuarios = JSON.parse(usuarios);
        })
      }
    })

  }



  clickIniciar()
    {
      let index = this.usuarios.findIndex (usuarios => usuarios.mail == this.mail );
      let index2 = this.usuarios.findIndex (usuarios => usuarios.pass ==this.pass);
      
      if(index == index2 )
      {
        const alert = this.alertCtrl.create({
          title: 'Su inicio de sesión tuvo exito',
          buttons:['Ok']
        });
        alert.present();

        this.mail="";
        this.pass="";
      }
      else
      {
        const alert = this.alertCtrl.create({
          title: 'Contraseña o email incorrectos',
          buttons:['Ok']
        });
        alert.present();
      }
    }

  
  clickregistro()
  {
    this.navCtrl.push(this.registro, {usuarios:this.usuarios})
  }
}
