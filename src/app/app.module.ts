import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';

import { HttpClientModule, HttpClient} from '@angular/common/http';
import { BookViewComponent } from './book-view/book-view.component';
import { CharViewComponent } from './char-view/char-view.component';
import { HouseViewComponent } from './house-view/house-view.component'; 

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    BookViewComponent,
    CharViewComponent,
    HouseViewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
