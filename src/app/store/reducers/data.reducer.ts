import { Action } from '@ngrx/store';
import { Weather } from 'src/app/models/weather.model';
import { DataActionTypes, dataFetchWeatherDataSuccess, dataFetchFootballersSuccess } from '../actions/data.actions';
import { APP_DATA } from 'src/app/data/config';
import { FootballerModel } from 'src/app/models/footballer.model';

export interface DataState {
  weatherLondon: Weather;
  weatherBristol: Weather;
  weatherRome: Weather;
  footballers: FootballerModel[];
  footballCoach: FootballerModel;
}

export const initialState: DataState = {
  weatherLondon: null,
  weatherBristol: null,
  weatherRome: null,
  footballers: null,
  footballCoach: null
}

export function dataReducer(state: DataState = initialState, action: Action): DataState {
  switch (action.type) {

    case DataActionTypes.FETCH_WEATHER_DATA_SUCCESS: {
      const { response } = <dataFetchWeatherDataSuccess>action;

      switch (response.id) {
        case APP_DATA.LONDON_ID: {
          return { ...state, weatherLondon: response }
        }
        case APP_DATA.BRISTOL_ID: {
          return { ...state, weatherBristol: response }
        }
        case APP_DATA.ROME_ID: {
          return { ...state, weatherRome: response }
        }
      }
    }

    case DataActionTypes.FETCH_FOOTBALLERS_SUCCESS: {
      const { response } = <dataFetchFootballersSuccess>action;
      const coach = response.find(i => i.role === 'COACH')
      return { ...state, footballers: response.filter(i => i.role !== 'COACH'), footballCoach: coach }
    }

    default: return state;
  }
}

/*
** Selectors
*/
export const getLondonWeather = (state: DataState) => state.weatherLondon;
export const getBristolWeather = (state: DataState) => state.weatherBristol;
export const getRomeWeather = (state: DataState) => state.weatherRome;
export const getFootballers = (state: DataState) => state.footballers;
export const getFootballCoach = (state: DataState) => state.footballCoach;
