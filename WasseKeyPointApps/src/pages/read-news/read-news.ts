import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-read-news',
  templateUrl: 'read-news.html',
})
export class ReadNewsPage {
  value:any;
  newsTitle:any;
  newsBody:any;
  newsImg:any;
  newsBy:any;
  dateNews:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.value = navParams.get('berita');
    this.newsTitle = this.value.title;
    this.newsImg = this.value.urlToImage;
    this.newsBody = this.value.content;
    this.newsBy = this.value.author;
    this.dateNews = this.value.date_news;
  }
  
}
