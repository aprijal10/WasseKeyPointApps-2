import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SyllabusPage } from '../pages/syllabus/syllabus';
import { RecomendedBookPage } from '../pages/recomended-book/recomended-book';
import { QuestionAnswerPage } from '../pages/question-answer/question-answer';
import { TutorialPage } from '../pages/tutorial/tutorial';
import { TopNewsPage } from '../pages/top-news/top-news';
import { UniversitiesCollectionPage } from '../pages/universities-collection/universities-collection';
import { ViewSyllabusPage } from '../pages/view-syllabus/view-syllabus';
import { SlidesPage } from '../pages/slides/slides';
import { NewsPage } from '../pages/news/news';
import { ChatsPage } from '../pages/chats/chats';
import { ViewAnswerPage } from '../pages/view-answer/view-answer';
import { SettingPage } from '../pages/setting/setting';
import { ReadNewsPage } from '../pages/read-news/read-news';

import { File } from '@ionic-native/File/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { DocumentViewer } from '@ionic-native/document-viewer/ngx';
import { VideoPlayer } from '@ionic-native/video-player/ngx';
import { RemoteServiceProvider } from '../providers/remote-service/remote-service';

import { HttpModule } from '@angular/http';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { Network } from '@ionic-native/network/ngx';
import { NetworkProvider } from '../providers/network/network';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SyllabusPage,
    RecomendedBookPage,
    QuestionAnswerPage,
    TutorialPage,
    TopNewsPage,
    UniversitiesCollectionPage,
    ViewSyllabusPage,
    SlidesPage,
    NewsPage,
    ChatsPage,
    ViewAnswerPage,
    SettingPage,
    ReadNewsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    PdfViewerModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SyllabusPage,
    RecomendedBookPage,
    QuestionAnswerPage,
    TutorialPage,
    TopNewsPage,
    UniversitiesCollectionPage,
    ViewSyllabusPage,
    SlidesPage,
    NewsPage,
    ChatsPage,
    ViewAnswerPage,
    SettingPage,
    ReadNewsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DocumentViewer,
    File,
    FileOpener,
    FileTransfer,
    VideoPlayer,
    RemoteServiceProvider,
    Network,
    NetworkProvider
  ]
})
export class AppModule {}
