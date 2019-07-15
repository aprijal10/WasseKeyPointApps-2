import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-view-syllabus',
  templateUrl: 'view-syllabus.html',
})
export class ViewSyllabusPage {  
  value:any;
  pdfData:any;
  src: any;
  judulSyllabus: any;
  descSyllabus: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    this.value = navParams.get('item');
    //console.log(navParams.get('item'));
    //this.src = this.value.file;
    this.judulSyllabus = this.value.title;
    this.descSyllabus = this.value.describe;
    console.log(this.judulSyllabus);
    this.src = ""; 
    
  }

  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'New Friend!',
      subTitle: 'Your friend, Obi wan Kenobi, just accepted your friend request!',
      buttons: ['OK']
    });
    alert.present();
  }
}
