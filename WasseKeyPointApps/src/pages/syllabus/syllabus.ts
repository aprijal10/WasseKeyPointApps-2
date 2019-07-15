import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ViewSyllabusPage } from '../view-syllabus/view-syllabus';

@IonicPage()
@Component({
  selector: 'page-syllabus',
  templateUrl: 'syllabus.html',
})
export class SyllabusPage {
  public items:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
    this.loadData();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SyllabusPage');
  }

  viewSyllabus(event, item){
    this.navCtrl.push(ViewSyllabusPage, {
      item:item
    });    
  }

  loadData(){
    let data:Observable<any>;
    data = this.http.get('http://wasscekeypoint.com/api/api.syllabus.php');
    data.subscribe(result => {
      this.items = result;
    })
  }
}
