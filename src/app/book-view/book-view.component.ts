import {
  Component,
  OnInit
} from '@angular/core';
import {
  ViewManagerService
} from '../services/view-manager.service';
import { ServApiService } from '../serv-api.service';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-book-view',
  templateUrl: './book-view.component.html',
  styleUrls: ['./book-view.component.css']
})
export class BookViewComponent implements OnInit {
  listCharacters: object[];
  listHouses:string[];

  back() {
    this._viewManager.returnView();
  }

  getGoTChars(): void {

    for (let i = 0; i < this._viewManager.currentBook["povCharacters"].length; i++) {
      this._api.get("https://cors-anywhere.herokuapp.com/" + this._viewManager.currentBook["povCharacters"][i]).subscribe(
        (response) => {
          this.listCharacters.push(response);
        }
      )
    }
  }

  loadCharData(character: object): void {
    this._viewManager.setCurrentChar(character);
    let charHouses = character["allegiances"];
    for (let i = 0; i < charHouses.length; i++) {
        this._api.get(charHouses[i]).subscribe(
         (response) => {
          this._viewManager.currentCharHouses.push(response["name"])
          }
        )  
    }    
     this._viewManager.setView("char");
  }

    releasedDate():string{
      let dateISO = new Date(this._viewManager.listBooks[this._viewManager.currentBook]["released"])
      return stringify(dateISO).slice(0,15);
    }
  constructor(public _api:ServApiService, public _viewManager: ViewManagerService) {}

  ngOnInit() {}

}
