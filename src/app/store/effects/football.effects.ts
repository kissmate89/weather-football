import { Injectable } from '@angular/core';
import { Action, Store } from '@ngrx/store';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { map, withLatestFrom } from 'rxjs/operators';

import { FootballActionTypes } from '../actions/football.actions';
import * as footballActions from '../actions/football.actions';
import { State, getFootballState } from '../reducers/main.reducer';
import { FootballerModel } from 'src/app/models/footballer.model';


@Injectable()
export class FootballEffects {

  constructor(
    private actions$: Actions,
    private store: Store<State>
  ) { }

  @Effect() updateTeam$: Observable<Action> = this.actions$.pipe(
    ofType<footballActions.footballUpdateTeam>(FootballActionTypes.UPDATE_TEAM),
    withLatestFrom(this.store.select(getFootballState)),
    map(([action, footballState]) => {
      const footballer: FootballerModel = action.footballer;
      switch (action.footballer.position) {
        case 'Midfielder': {
          if (footballState.midfielders.some(i => i.id === footballer.id)) {
            return new footballActions.footballUpdateTeamSuccess(footballer);
          }
          if (footballState.midfielders.length >= 4) {
            window.alert('You have reached the limit of this position!')
            return new footballActions.footballUpdateTeamfailure(footballer);
          }
        }
        case 'Defender': {
          if (footballState.defenders.some(i => i.id === footballer.id)) {
            return new footballActions.footballUpdateTeamSuccess(footballer);
          }
          if (footballState.defenders.length >= 3) {
            window.alert('You have reached the limit of this position!')
            return new footballActions.footballUpdateTeamfailure(footballer);
          }
        }
        case 'Attacker': {
          if (footballState.attackers.some(i => i.id === footballer.id)) {
            return new footballActions.footballUpdateTeamSuccess(footballer);
          }
          if (footballState.attackers.length >= 3) {
            window.alert('You have reached the limit of this position!')
            return new footballActions.footballUpdateTeamfailure(footballer);
          }
        }
        default: {
          return new footballActions.footballUpdateTeamSuccess(footballer);
        }
      }

    })
  )


}
