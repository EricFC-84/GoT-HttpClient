import {
  Injectable
} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ViewManagerService {

  currentView: string = "book";
  currentBook: object = {};
  currentChar: object = {};
  currentHouse: object = {};
  previousView = "";

  setView(view: string): void {
    this.previousView = this.currentView;
    this.currentView = view;
  }

  returnView(): void {
    this.currentView = this.previousView;
  }

  setCurrentBook(book: object): void {
    this.currentBook = book;
  }
  setCurrentChar(char: object): void {
    this.currentChar = char;
  }


  constructor() {}
}
