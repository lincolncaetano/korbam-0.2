import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';

/*
  Generated class for the HoraModal page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-hora-modal',
  templateUrl: 'hora-modal.html'
})
export class HoraModal {

  constructor(
    public navCtrl: NavController,
    public viewCtrl: ViewController) {}

  ionViewDidLoad() {
    console.log('Hello HoraModal Page');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
