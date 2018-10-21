import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { State, getFootballers, getDefenders, getMidfielders, getAttackers, getGoalkeeper, getSelectedPlayerIds, getFootballCoach } from '../../store/reducers/main.reducer';

import { FootballerModel } from 'src/app/models/footballer.model';
import { footballUpdateTeam } from 'src/app/store/actions/football.actions';

@Component({
  selector: 'app-football',
  templateUrl: './football.component.html',
  styleUrls: ['./football.component.scss']
})
export class FootballComponent implements OnInit {
  footballers$: Observable<FootballerModel[]>;
  defenders$: Observable<FootballerModel[]>;
  midfielders$: Observable<FootballerModel[]>;
  attackers$: Observable<FootballerModel[]>;
  goalKeeper$: Observable<FootballerModel>;
  footballCoach$: Observable<FootballerModel>;

  selectedOnes$: Observable<number[]>;

  constructor(
    private store: Store<State>
  ) { }

  ngOnInit() {
    this.footballers$ = this.store.select(getFootballers);
    this.defenders$ = this.store.select(getDefenders);
    this.midfielders$ = this.store.select(getMidfielders);
    this.attackers$ = this.store.select(getAttackers);
    this.goalKeeper$ = this.store.select(getGoalkeeper);
    this.footballCoach$ = this.store.select(getFootballCoach);
    this.selectedOnes$ = this.store.select(getSelectedPlayerIds);
  }

  footballerSelected(player: FootballerModel) {
    this.store.dispatch(new footballUpdateTeam(player));
  }

}
