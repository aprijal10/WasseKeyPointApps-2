import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { SyllabusPage } from '../pages/syllabus/syllabus';
import { RecomendedBookPage } from '../pages/recomended-book/recomended-book';
import { QuestionAnswerPage } from '../pages/question-answer/question-answer';
import { TutorialPage } from '../pages/tutorial/tutorial';
import { SlidesPage } from '../pages/slides/slides';
import { ReadNewsPage } from '../pages/read-news/read-news';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  //rootPage:any = HomePage;
  rootPage:any = SlidesPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();      
    });
  }
}

