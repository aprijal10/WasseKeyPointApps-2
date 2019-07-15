import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { SyllabusPage } from '../syllabus/syllabus';
import { RecomendedBookPage } from '../recomended-book/recomended-book';
import { QuestionAnswerPage } from '../question-answer/question-answer';
import { TutorialPage } from '../tutorial/tutorial';
import { TopNewsPage } from '../top-news/top-news';
import { UniversitiesCollectionPage } from '../universities-collection/universities-collection';
import { SettingPage } from '../setting/setting';
import { ReadNewsPage } from '../read-news/read-news';

//import { Network } from '@ionic-native/network/ngx';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  
  constructor(public navCtrl: NavController) {
  
  }

  
  openSyllabus(){
    this.navCtrl.push(SyllabusPage);    
  }

  openRecomendedBook(){
    this.navCtrl.push(RecomendedBookPage);
  }

  openQuestionAnswer(){
    this.navCtrl.push(QuestionAnswerPage);
  }

  openTutorial(){
    this.navCtrl.push(TutorialPage);
  }

  openTopNews(){
    this.navCtrl.push(TopNewsPage);
  }
  openUniv(){
    this.navCtrl.push(UniversitiesCollectionPage);
  }

  openSetting(){
    this.navCtrl.push(SettingPage);
  }
}
