import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ChatsPage } from '../chats/chats';
import { NewsPage } from '../news/news';


@IonicPage()
@Component({
  selector: 'page-top-news',
  templateUrl: 'top-news.html',
})
export class TopNewsPage {
  
  tab1Root = NewsPage; 
  tab2Root = ChatsPage;   

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }
  
  

}
