import { Platform } from 'ionic-angular';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { File } from '@ionic-native/File/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@IonicPage()
@Component({
  selector: 'page-recomended-book',
  templateUrl: 'recomended-book.html',
})
export class RecomendedBookPage {
  public itemsBook:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private file: File, private platform: Platform, private document: DocumentViewer, public http: HttpClient) {
    this.loadDataBook();
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad RecomendedBookPage');
  }

  openPDF(){    
    
    const options: DocumentViewerOptions = {
      title: 'My PDF'
    };
    //this.document.viewDocument('assets/pdfku.pdf', 'application/pdf', options);    
    
  }

  loadDataBook(){
    let data:Observable<any>;              
    data = this.http.get('http://wasscekeypoint.com/api/api.recomendedbook.php');
    data.subscribe(result => {
      this.itemsBook = result;  
      console.log(this.itemsBook);
    })
  }
  
}
