import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


@IonicPage()
@Component({
  selector: 'page-universities-collection',
  templateUrl: 'universities-collection.html',
})
export class UniversitiesCollectionPage {
  public items_univ:any;
  public linksite:any;
  public data:Observable<any>;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
    this.loadDataUniv();
  }

  viewSite(linksite){
    window.open(linksite, "_system");
  }

  loadDataUniv(){    
    this.data = this.http.get('http://wasscekeypoint.com/api/api.univ.php');
    this.data.subscribe(result => {
      this.items_univ = result;
      console.log(this.items_univ);
    });
  }

  doRefresh(event) {
    console.log('Begin async operation', event);
    this.data.subscribe(result => {
      this.items_univ = result;
      event.complete();
    });
  }
}
