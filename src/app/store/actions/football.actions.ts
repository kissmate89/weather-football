import { Action } from '@ngrx/store';
import { FootballerModel } from 'src/app/models/footballer.model';

export const FootballActionTypes = {
  UPDATE_TEAM: '[Football] Update Team',
  UPDATE_TEAM_SUCCESS: '[Football] Update Team Success',
  UPDATE_TEAM_FAILURE: '[Football] Update Team Failure',
}

export class footballUpdateTeam implements Action {
  readonly type = FootballActionTypes.UPDATE_TEAM;
  constructor(public footballer: FootballerModel) { }
}

export class footballUpdateTeamSuccess implements Action {
  readonly type = FootballActionTypes.UPDATE_TEAM_SUCCESS;
  constructor(public footballer: FootballerModel) { }
}

export class footballUpdateTeamfailure implements Action {
  readonly type = FootballActionTypes.UPDATE_TEAM_FAILURE;
  constructor(public err: any) { }
}

export type footballActions =
  footballUpdateTeam;

