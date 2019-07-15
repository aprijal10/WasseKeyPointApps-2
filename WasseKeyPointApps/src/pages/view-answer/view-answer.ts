import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ViewAnswerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-view-answer',
  templateUrl: 'view-answer.html',
})
export class ViewAnswerPage {
  value:any;
  jawaban: any;
  judul:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.value = navParams.get('item');
    this.judul = this.value.question_text;
    this.jawaban = this.value.answer_text;
    console.log(navParams.get('item'));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewAnswerPage');
  }

}
