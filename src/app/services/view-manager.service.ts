import {
  Injectable
} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ViewManagerService {

  listBooks:object[] = [];
  currentView: string = "";
  currentBook: number = 0;
  currentBookChars: object[] = [];
  currentChar: object = {};
  currentCharHouses: string[] = [];
  currentHouse: object = {};
  previousView = "";


  setView(view: string): void {
    this.previousView = this.currentView;
    this.currentView = view;
  }

  returnView(): void {
    this.currentView = this.previousView;
  }

  setCurrentBook(bookIndex: number): void {
    this.currentBook = bookIndex;
  }
  setCurrentChar(char: object): void {
    this.currentChar = char;
  }


  constructor() {}
}
