import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from './store/reducers/main.reducer';

import { CurrentPage } from './models/pages.model';
import { dataFetchFootballers } from './store/actions/data.actions';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  currentComp: CurrentPage = CurrentPage.Question;

  constructor(
    private store: Store<State>
  ) {
  }

  ngOnInit() {
    this.store.dispatch(new dataFetchFootballers());
  }

  changeComp(page: CurrentPage) {
    this.currentComp = page;
  }
}
