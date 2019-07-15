import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ReadNewsPage } from '../read-news/read-news';

@IonicPage()
@Component({
  selector: 'page-chats',
  templateUrl: 'chats.html',
})
export class ChatsPage {
  public items:any;
  public data:Observable<any>;
  url:string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient, public toastCtrl: ToastController) {    
    this.url = "http://wasscekeypoint.com/api/api.news.php";
    this.loadBerita();
  }

  
  
  loadBerita(){    
    this.data = this.http.get(this.url);
    this.data.subscribe(result => {
      this.items = result;         
      console.log(result);   
    });
  }

  doRefresh(event) {       
    this.data.subscribe(result => {
        this.items = result;
        console.log(result);        
    });
   
    setTimeout(() => {      
        console.log('Async operation has ended');
        event.complete();
    }, 2000);   
  }

  readNews(event, berita){
    this.navCtrl.push(ReadNewsPage, {
      berita:berita
    });    
    this.showToast();
  }

  showToast(){
    let toast = this.toastCtrl.create({
      message: 'Press [News] Tab to back News Index',
      duration: 2000,
      position: 'bottom'
    });
    toast.present(toast);
  }

}
