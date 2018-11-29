import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';


/**
 * Generated class for the RegistroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',
})
export class RegistroPage {

  mail="";
  pass="";
  usuarios=[];
  home=HomePage;
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController,  public storage:Storage) {
    this.usuarios = this.navParams.get('usuarios');

  }

  
  clickAgregar()
  {
    if(this.mail.length> 0)
    {
      
      this.usuarios.push(
      {
        mail: this.mail, 
        pass: this.pass
      })

      this.navCtrl.pop();
      this.storage.set('usuarios', this.usuarios);
     
    }
    else if (this.mail.length<=0)
    {
      const alert = this.alertCtrl.create({
        title: 'Oops!',
        subTitle: 'Tienes que llenar todos los espacios',
        buttons:['Ok']
      });
      alert.present();
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistroPage');
  }

  }

