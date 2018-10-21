import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { State, getLondonWeather, getBristolWeather, getRomeWeather } from '../../store/reducers/main.reducer';

import * as dataActions from '../../store/actions/data.actions';
import { APP_DATA } from '../../data/config';
import { Weather } from '../../models/weather.model';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  londonWeather$: Observable<Weather>;
  bristolWeather$: Observable<Weather>;
  romeWeather$: Observable<Weather>;

  constructor(
    private store: Store<State>
  ) { }

  ngOnInit() {
    this.store.dispatch(new dataActions.dataFetchWeatherData(APP_DATA.LONDON_ID));
    this.store.dispatch(new dataActions.dataFetchWeatherData(APP_DATA.BRISTOL_ID));
    this.store.dispatch(new dataActions.dataFetchWeatherData(APP_DATA.ROME_ID))

    this.londonWeather$ = this.store.select(getLondonWeather);
    this.bristolWeather$ = this.store.select(getBristolWeather);
    this.romeWeather$ = this.store.select(getRomeWeather);
  }

}
