import { Component } from '@angular/core';
import { NavController,ViewController } from 'ionic-angular';

/*
  Generated class for the CheckModal page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-check-modal',
  templateUrl: 'check-modal.html'
})
export class CheckModal {

  constructor(
    public navCtrl: NavController,
    public viewCtrl: ViewController) {}

  ionViewDidLoad() {
    console.log('Hello CheckModal Page');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
