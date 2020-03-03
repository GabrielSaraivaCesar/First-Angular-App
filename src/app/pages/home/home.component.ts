import { Component, OnInit } from '@angular/core';

// Redux
import { Store, select } from '@ngrx/store';
import { StoreInterface } from '../../interfaces/store';
import {setOn, setOff} from '../../redux/actions/loadingAction';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // States
  loading : Observable<boolean>;

  constructor(
    private store: Store<StoreInterface>
  ) { }

  ngOnInit() {
    this.loading = this.store.pipe(select('loading'));
  }

  setLoading(stateValue : boolean) {
    if (stateValue) {
      this.store.dispatch(setOn());
    }
    else {
      this.store.dispatch(setOff());
    }
  }


}
