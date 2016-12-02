import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';

/*
  Generated class for the CompartilharmentoModal page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-compartilharmento-modal',
  templateUrl: 'compartilharmento-modal.html'
})
export class CompartilharmentoModal {

  constructor(
    public navCtrl: NavController,
    public viewCtrl: ViewController) {}

  ionViewDidLoad() {
    console.log('Hello CompartilharmentoModal Page');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
