import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ParseFiles } from './parseFiles';

@Component({
  selector: 'app-rosterofchars',
  templateUrl: './rosterofchars.component.html',
  styleUrls: ['./rosterofchars.component.css']
})

export class RosterofcharsComponent implements OnInit {

  private parseFiles: ParseFiles;
  private index: number;
  public fighters: Array<object>;
  public directionName: string;
  public directionGame: string;
  public orderByThisField: string;
  public orderByASC: boolean;
  public filteredName: string;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fighters = [];
    this.index = 0;
    this.directionName = ' ⤦';
    this.directionGame = '';
    this.orderByThisField = 'name';
    this.orderByASC = true;
    this.parseFiles = new ParseFiles();
    this.filteredName = '';
    this.loadNext();
  }

  getData(obj) {
    const ts = new Date().getTime();
    return this.http.get(`/assets/source-data/${ obj.link }?ts=${ts}`, obj.type);
  }

  loadNext() {
    let object = { };
    if (this.index === 0) {
      object = { link: 'capcom.json', type: { responseType: 'json' } };
    }
    if (this.index === 1) {
      object = { link: 'bandainamco.xml', type: { responseType: 'text' } };
    }
    if (this.index === 2) {
      object = { link: 'nether-realm.csv', type: { responseType: 'text' } };
    }
    this.getData(object).subscribe((ret) => {
      this.parseFiles.parseMyData(this.fighters, object, ret);
      this.index += 1;
      if (this.index < 3) {
        this.loadNext();
      }
    });
  }

  orderByName() {
    if (this.orderByThisField !== 'name') {
      this.orderByASC = true;
      this.directionName = ' ⤦';
      this.directionGame = '';
      this.orderByThisField = 'name';
      return true;
    }
    this.orderByASC = !this.orderByASC;
    this.directionName = this.orderByASC ? ' ⤦' : ' ⤣';
    this.directionGame = '';
    return true;
  }

  orderByGame() {
    if (this.orderByThisField !== 'game') {
      this.orderByASC = true;
      this.directionName = '';
      this.directionGame = ' ⤦';
      this.orderByThisField = 'game';
      return true;
    }
    this.orderByASC = !this.orderByASC;
    this.directionName = '';
    this.directionGame = this.orderByASC ? ' ⤦' : ' ⤣';
    return true;
  }

  clearFilter() {
    this.filteredName = '';
  }

}
