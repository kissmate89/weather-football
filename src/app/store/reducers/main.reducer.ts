import { MetaReducer, ActionReducer, ActionReducerMap } from '@ngrx/store';
import { storeLogger } from 'ngrx-store-logger';
import { localStorageSync } from 'ngrx-store-localstorage';
import { createSelector } from 'reselect';

import * as fromDataState from './data.reducer';
import * as fromFootballState from './football.reducer';

export interface State {
  dataState: fromDataState.DataState;
  footballState: fromFootballState.FootballState;
}

export const reducers: ActionReducerMap<State> = {
  dataState: fromDataState.dataReducer,
  footballState: fromFootballState.footballReducer
}

const LOCAL_STORAGE_KEYS = [
  'dataState',
  'footballState'
]

export function localStorageSyncMetaReducer(reducer: ActionReducer<any>): ActionReducer<any, any> {
  try {
    if (window.localStorage) {
      return localStorageSync({
        keys: LOCAL_STORAGE_KEYS
      })(reducer);
    }
  } catch (e) {
    console.warn(e);
    return reducer;
  }
}

export function loggerMetaReducer(reducer: ActionReducer<any>): any {
  return storeLogger()(reducer);
}

export const metaReducers: MetaReducer<State>[] = [loggerMetaReducer, localStorageSyncMetaReducer];

/*
** Data Selectors
*/
export const getDataState = (state: State): fromDataState.DataState => state.dataState;
export const getLondonWeather = createSelector(getDataState, fromDataState.getLondonWeather);
export const getBristolWeather = createSelector(getDataState, fromDataState.getBristolWeather);
export const getRomeWeather = createSelector(getDataState, fromDataState.getRomeWeather);
export const getFootballers = createSelector(getDataState, fromDataState.getFootballers);
export const getFootballCoach = createSelector(getDataState, fromDataState.getFootballCoach);

/*
** Football Selectors
*/
export const getFootballState = (state: State): fromFootballState.FootballState => state.footballState;
export const getGoalkeeper = createSelector(getFootballState, fromFootballState.getGoalkeeper);
export const getDefenders = createSelector(getFootballState, fromFootballState.getDefenders);
export const getMidfielders = createSelector(getFootballState, fromFootballState.getMidfielders);
export const getAttackers = createSelector(getFootballState, fromFootballState.getAttackers);
export const getSelectedPlayerIds = createSelector(getFootballState, fromFootballState.getSelectedPlayerIds)
