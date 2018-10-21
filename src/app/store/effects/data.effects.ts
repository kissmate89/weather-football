import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';

import { DataActionTypes } from '../actions/data.actions';
import * as dataActions from '../actions/data.actions';
import { WeatherService } from '../../services/weather.service';
import { FootballService } from '../../services/football.service';


@Injectable()
export class DataEffects {

  constructor(
    private actions$: Actions,
    private weatherService: WeatherService,
    private footballService: FootballService
  ) { }

  @Effect() fetchWeatherData$: Observable<Action> = this.actions$.pipe(
    ofType<dataActions.dataFetchWeatherData>(DataActionTypes.FETCH_WEATHER_DATA),
    mergeMap((action) => this.weatherService.fetchWeatherDataFromApi(action.cityId).pipe(
      map((resp) => new dataActions.dataFetchWeatherDataSuccess(resp)),
      catchError((err) => of(new dataActions.dataFetchWeatherDataFailure(err)))
    ))
  )

  @Effect() fetchWFootballers$: Observable<Action> = this.actions$.pipe(
    ofType<dataActions.dataFetchFootballers>(DataActionTypes.FETCH_FOOTBALLERS),
    mergeMap(() => this.footballService.fetchFootballers().pipe(
      map((resp) => new dataActions.dataFetchFootballersSuccess(resp)),
      catchError((err) => of(new dataActions.dataFetchFootballersFailure(err)))
    ))
  )

}
