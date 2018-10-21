import { Action } from '@ngrx/store';
import { FootballerModel } from 'src/app/models/footballer.model';
import { FootballActionTypes, footballUpdateTeam } from '../actions/football.actions';

export interface FootballState {
  goalKeeper: FootballerModel;
  defenders: FootballerModel[];
  midfielders: FootballerModel[];
  attackers: FootballerModel[];
  coach: FootballerModel;
}

export const initialState: FootballState = {
  goalKeeper: null,
  defenders: [],
  midfielders: [],
  attackers: [],
  coach: null
}

export function footballReducer(state: FootballState = initialState, action: Action): FootballState {
  switch (action.type) {
    case FootballActionTypes.UPDATE_TEAM_SUCCESS: {
      const { footballer } = <footballUpdateTeam>action;

      switch (footballer.position) {
        case 'Midfielder': {
          if (state.midfielders.some(i => i.id === footballer.id)) {
            return { ...state, midfielders: [...state.midfielders.filter(i => i.id !== footballer.id)] };
          } else {
            return { ...state, midfielders: state.midfielders.concat(footballer) };
          }
        }
        case 'Defender': {
          if (state.defenders.some(i => i.id === footballer.id)) {
            return { ...state, defenders: [...state.defenders.filter(i => i.id !== footballer.id)] };
          } else {
            return { ...state, defenders: state.defenders.concat(footballer) };
          }
        }
        case 'Attacker': {
          if (state.attackers.some(i => i.id === footballer.id)) {
            return { ...state, attackers: [...state.attackers.filter(i => i.id !== footballer.id)] };
          } else {
            return { ...state, attackers: state.attackers.concat(footballer) };
          }
        }
        case 'Goalkeeper': {
          return { ...state, goalKeeper: footballer };
        }
      }

    }

    default: { return state }
  }
}

/*
** Selectors
*/
export const getGoalkeeper = (state: FootballState) => state.goalKeeper;
export const getDefenders = (state: FootballState) => state.defenders;
export const getMidfielders = (state: FootballState) => state.midfielders;
export const getAttackers = (state: FootballState) => state.attackers;
export const getSelectedPlayerIds = (state: FootballState) => {
  let ids = [...state.attackers].map(i => i.id)
    .concat([...state.defenders].map(i => i.id))
    .concat([...state.midfielders].map(i => i.id));
  if (state.goalKeeper) ids.push(state.goalKeeper.id);
  return ids;
}
