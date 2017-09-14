import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  bets: any;
  constructor(public navCtrl: NavController , public http: Http) {
    this.http.get('http://ismkdcssh.ismailkundakci.com:5000/values').subscribe(data => {
      this.bets = data.json();
  });
  }

}
