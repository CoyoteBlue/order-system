import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import { Pipe, PipeTransform } from '@angular/core';

@Injectable()
export class MenudataService {

  private _url: string = "../assets/apidata/menudata.json"

  constructor(private _http: Http) { }

  getMenuComponent(){
    return this._http.get(this._url)
      .map((response:Response) => response.json());
  }

}

/*@Pipe({
  name: 'MenuMainPipe'
})
export class MenuMainPipe implements PipeTransform {
  transform(value: any, args: any[] = null): any {
    /*return Object.keys(value).map(key => value[key]);*/
  /*  let [menuType] = args;*/
/*    return value.filter(posts => {
      return post.type = main;
  }
}

@Pipe({
  name: 'MenuStarterPipe'
})
export class MenuStarterPipe implements PipeTransform {
  transform(value: any, args: any[] = null): any {
    return Object.keys(value).map(key => value[key]);
  }
}

@Pipe({
  name: 'keyValues'
})
export class KeysPipe implements PipeTransform {
  transform(value: any, args: any[] = null): any {
    return Object.keys(value).map(key => value[key]);
  }
}*/
