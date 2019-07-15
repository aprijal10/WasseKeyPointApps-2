import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { ViewAnswerPage } from '../view-answer/view-answer';

@IonicPage()
@Component({
  selector: 'page-question-answer',
  templateUrl: 'question-answer.html',
})
export class QuestionAnswerPage {
  public items:any;
  public judulTanya:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
    this.loadData();
  }

  loadData(){
    let data:Observable<any>;              
    data = this.http.get('http://wasscekeypoint.com/api/api.question.php');
    data.subscribe(result => {
      this.items = result;            
      this.judulTanya = result.question_text;

      
    })
  }
  viewAnswer(event, item){
    this.navCtrl.push(ViewAnswerPage, {
      item:item
    });
  }
  ionViewDidLoad() {
    
  }

}
