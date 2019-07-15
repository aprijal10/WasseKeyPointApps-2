import { Component } from '@angular/core';
import { VideoPlayer } from '@ionic-native/video-player/ngx';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@IonicPage()
@Component({
  selector: 'page-tutorial',
  templateUrl: 'tutorial.html',
})
export class TutorialPage {
  public itemsVideo:any;
  public data:Observable<any>;
  constructor(public navCtrl: NavController, public navParams: NavParams, private videoPlayer: VideoPlayer, public http: HttpClient) {
    this.loadVideo();
  }

  loadVideo(){    
    this.data = this.http.get('http://wasscekeypoint.com/api/api.tutorial.php');
    this.data.subscribe(result => {
      this.itemsVideo = result;
      console.log(this.itemsVideo);
    })    
  }

  doRefresh(event) {
    console.log('Begin async operation', event);
    this.data.subscribe(result => {
      this.itemsVideo = result;
      event.complete();
    });
  }

  openVideo(){
    this.videoPlayer.play('http://techslides.com/demos/sample-videos/small.mp4').then(() => {
      console.log('video completed');
    }).catch(err => {
      console.log(err);
    });
  }
}
