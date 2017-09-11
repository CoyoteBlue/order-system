import { Component, OnInit } from '@angular/core';
import { MenudataService } from './menudata.service';
import { Pipe, PipeTransform } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
/*import {MenuStarterPipe} from './menudata.service';*/
/*import { MenudataService } from './menu/menudata.service';*/
/*import { ActivatedRoute } from '@angular/router';
import { MenudataService } from './menu/menudata.service';*/

@Component({
  selector: 'app-menu',
  providers: [MenudataService],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  /*pipes: [MenuMainPipe],*/
})

export class MenuComponent implements OnInit {

  posts = [];

  constructor(private _menu:MenudataService) { }

  ngOnInit() {
    this._menu.getMenuComponent()
    .subscribe(resMenuComponent => this.posts = resMenuComponent)
  }


}
