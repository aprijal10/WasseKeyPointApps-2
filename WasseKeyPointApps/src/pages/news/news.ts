import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@IonicPage()
@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
})
export class NewsPage { 
  public itemGroups:any; 
  public linkchat:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
    this.loadDataGroup();
  }


  loadDataGroup(){
    let data:Observable<any>;              
    data = this.http.get('http://wasscekeypoint.com/api/api.groupchat.php');
    data.subscribe(result => {
      this.itemGroups = result;            
      console.log(this.itemGroups);
    })
  }

  
  showMessage(linkchat){
    window.open(linkchat, "_system");
  }
  


}
