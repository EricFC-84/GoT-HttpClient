import { Component, OnInit } from '@angular/core';
import { ViewManagerService } from '../services/view-manager.service';

@Component({
  selector: 'app-house-view',
  templateUrl: './house-view.component.html',
  styleUrls: ['./house-view.component.css']
})
export class HouseViewComponent implements OnInit {

  constructor(public _viewManager:ViewManagerService) { }

  ngOnInit() {
  }

}
