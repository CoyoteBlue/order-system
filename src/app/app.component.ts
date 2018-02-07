import { Component } from '@angular/core';

/*import { AngularFireModule } from 'angularfire2';*/
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
/*import { AngularFire, FirebaseListObservable } from "angularfire2";*/
/*import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import * as firebase from 'firebase/app';*/


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
/*items: FirebaseListObservable<any[]>;
  constructor(af: AngularFireDatabase) {
    this.items = af.database.list('/items');
  }*/
}
