import {
  Component,
  OnInit
} from '@angular/core';
import {
  ServApiService
} from '../serv-api.service';
import {
  ViewManagerService
} from '../services/view-manager.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  listBooks: object[] = [];
  /*   listChars: object[][] = [
      []
    ]; */



  getGoTBooks(): void {
    // this.listBooks.pop(); //NgIF!!!
    this._api.get("https://cors-anywhere.herokuapp.com/https://anapioficeandfire.com/api/books/").subscribe(
      async (response) => {
        for (let i = 0; i < response.length; i++) {
          let book = {
            "name": response[i]["name"],
            "chars": [],
            "url": response[i]["url"]
          }
          this.listBooks.push(book)
          await this.getGoTChars(response[i]["povCharacters"], i);

        }
      }
    )
  }

  getGoTChars(povChars: string[], bookIndex: number): void {
    for (let i = 0; i < povChars.length; i++) {
      this._api.get("https://cors-anywhere.herokuapp.com/" + povChars[i]).subscribe(
        (response) => {
          this.listBooks[bookIndex]["chars"].push(response);
        }
      )
    }
  }

  loadBookData(book: object): void {
    this._viewManager.setCurrentBook(book);
    this._viewManager.setView("book");
  }

  loadCharData(character: object): void {
    console.log(character["name"])
    this._viewManager.setCurrentChar(character);
    this._viewManager.setView("char");
  }


  constructor(public _api: ServApiService, public _viewManager: ViewManagerService) {
    this.getGoTBooks();

  }

  ngOnInit() {}

}
