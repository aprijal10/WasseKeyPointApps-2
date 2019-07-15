import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@IonicPage()
@Component({
  selector: 'page-slides',
  templateUrl: 'slides.html',
})
export class SlidesPage {
  public slides:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
    this.loadDataSlides();
  }

  loadDataSlides(){
    let data:Observable<any>;
    data = this.http.get('http://127.0.0.1/Wasse/api/api.slide.php');
    data.subscribe(result => {
      this.slides = result;
      //console.log(this.slides);
    })
  }
  

  lewatkan(){
    this.navCtrl.push(HomePage);
  }
}
