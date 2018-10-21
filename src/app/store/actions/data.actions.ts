import { Action } from '@ngrx/store';
import { Weather } from 'src/app/models/weather.model';
import { FootballerModel } from 'src/app/models/footballer.model';

export const DataActionTypes = {
  FETCH_WEATHER_DATA: '[Data] Fetch Weather Data',
  FETCH_WEATHER_DATA_SUCCESS: '[Data] Fetch Weather Data Success',
  FETCH_WEATHER_DATA_FAILURE: '[Data] Fetch Weather Data Failure',
  FETCH_FOOTBALLERS: '[Data] Fetch Footballers',
  FETCH_FOOTBALLERS_SUCCESS: '[Data] Fetch Footballers Success',
  FETCH_FOOTBALLERS_FAILURE: '[Data] Fetch Footballers Failure',
}

export class dataFetchWeatherData implements Action {
  readonly type = DataActionTypes.FETCH_WEATHER_DATA;
  constructor(public cityId: number) { }
}

export class dataFetchWeatherDataSuccess implements Action {
  readonly type = DataActionTypes.FETCH_WEATHER_DATA_SUCCESS;
  constructor(public response: Weather) { }
}

export class dataFetchWeatherDataFailure implements Action {
  readonly type = DataActionTypes.FETCH_WEATHER_DATA_FAILURE;
  constructor(public error: any) { }
}

export class dataFetchFootballers implements Action {
  readonly type = DataActionTypes.FETCH_FOOTBALLERS;
}

export class dataFetchFootballersSuccess implements Action {
  readonly type = DataActionTypes.FETCH_FOOTBALLERS_SUCCESS;
  constructor(public response: FootballerModel[]) { }
}

export class dataFetchFootballersFailure implements Action {
  readonly type = DataActionTypes.FETCH_FOOTBALLERS_FAILURE;
  constructor(public error: any) { }
}

export type dataActions =
  dataFetchWeatherData |
  dataFetchWeatherDataSuccess |
  dataFetchWeatherDataFailure |
  dataFetchFootballers |
  dataFetchFootballersSuccess |
  dataFetchFootballersFailure;
