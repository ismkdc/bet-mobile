
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import { FormControl } from "@angular/forms";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  bets: any;
  betsdata: any;
  searchTerm: any;
  searchControl: FormControl;
  constructor(public navCtrl: NavController , public http: Http) {

      this.searchControl = new FormControl();

    this.http.get('http://ismkdcssh.ismailkundakci.com:5000/values').subscribe(data => {
      this.bets = data.json();
      this.betsdata = this.bets;
      console.log(data.json());
  });
}
doRefresh(refresher) {
  
   this.http.get('http://ismkdcssh.ismailkundakci.com:5000/values').subscribe(data => {
      this.bets = data.json();
      this.betsdata = this.bets;
  });
    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 1000);
  }

  filterItems(searchTerm){
        searchTerm = searchTerm.toUpperCase();
        return this.bets.filter(item => {
          return item.match.toUpperCase().indexOf(searchTerm) !== -1 
        });
 
    }
    setFilteredItems() {
 
        this.bets = this.filterItems(this.searchTerm);
 
    }
    ionViewDidEnter(){
 
     //on searching
    
        this.searchControl.valueChanges.subscribe(search => {
            this.setFilteredItems();
        });
  }
  onCancel($event){
    this.bets = this.betsdata;
  }
   

}