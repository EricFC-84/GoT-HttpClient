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

  loadHouse(url:string) {
    // console.log(this._viewManager.currentChar["allegiances"][0])
    this._api.get(url).
    subscribe(
      (response) => {
        return response["name"];
      }

    )
  }

loadCharPhoto():string{
  let url = '../../assets/chars/' + this._viewManager.currentChar['name'].replace(/\s/g, '') + '.jpg';
  
  return url;
}
  loadHouseView(url:string) {
    // console.log(this._viewManager.currentChar["allegiances"][0])
    this._api.get(url).
    subscribe(
      (response) => {
        this._viewManager.currentHouse = response;
        this._viewManager.setView("house");
      }


    )
  }

  constructor(public _api: ServApiService, public _viewManager: ViewManagerService) {}

  ngOnInit() {}

}
