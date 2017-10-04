import { Component } from '@angular/core';

/*import { AngularFireModule } from 'angularfire2';*/
import {Observable} from 'rxjs/Observable';
/*import {AngularFire, FirebaseListObservable} from "angularfire2";*/

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
 /* items: FirebaseListObservable<any[]>;
  constructor(af: AngularFire) {
    this.items = af.database.list('/items');
  }*/
}
