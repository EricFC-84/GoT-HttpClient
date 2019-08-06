import {
  Component,
  OnInit
} from '@angular/core';
import {
  ViewManagerService
} from '../services/view-manager.service';
import {
  ServApiService
} from '../serv-api.service';

@Component({
  selector: 'app-char-view',
  templateUrl: './char-view.component.html',
  styleUrls: ['./char-view.component.css']
})
export class CharViewComponent implements OnInit {

  loadHouse() {
    // console.log(this._viewManager.currentChar["allegiances"][0])
    let url = this._viewManager.currentChar["allegiances"][0];
    this._api.get(url).
    subscribe(
      (response) => {
        this._viewManager.currentHouse = response;
        this._viewManager.setView("house");

        console.log("House:", response)
      }


    )
  }

  constructor(public _api: ServApiService, public _viewManager: ViewManagerService) {}

  ngOnInit() {}

}
