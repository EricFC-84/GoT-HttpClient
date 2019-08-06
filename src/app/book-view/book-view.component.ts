import { Component, OnInit } from '@angular/core';
import { ViewManagerService } from '../services/view-manager.service';

@Component({
  selector: 'app-book-view',
  templateUrl: './book-view.component.html',
  styleUrls: ['./book-view.component.css']
})
export class BookViewComponent implements OnInit {

  back(){
    this._viewManager.returnView();
  }
  constructor(public _viewManager:ViewManagerService) { }

  ngOnInit() {
  }

}
