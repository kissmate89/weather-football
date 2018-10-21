import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

/*
** NGRX
*/
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

/*
** Components
*/
import { AppComponent } from './app.component';
import { WeatherComponent } from './components/weather/weather.component';
import { WeatherItemComponent } from './components/weather-item/weather-item.component';
import { QuestionComponent } from './components/question/question.component';
import { FootballComponent } from './components/football/football.component';
import { FootballerComponent } from './components/footballer/footballer.component';

/*
** Services
*/
import { WeatherService } from './services/weather.service';
import { FootballService } from './services/football.service';

/*
** Reducers
*/
import { reducers, metaReducers } from './store/reducers/main.reducer';

/*
** Effects
*/
import { DataEffects } from './store/effects/data.effects';
import { FootballEffects } from './store/effects/football.effects';

/*
** Pipes
*/
import { FootballerAgePipe } from './pipes/footballer-age.pipe';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    WeatherItemComponent,
    QuestionComponent,
    FootballComponent,
    FootballerComponent,
    FootballerAgePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot(
      reducers,
      { metaReducers }
    ),
    EffectsModule.forRoot([
      DataEffects,
      FootballEffects
    ])
  ],
  providers: [WeatherService, FootballService],
  bootstrap: [AppComponent]
})
export class AppModule { }
