export interface WeatherMain {
  humidity: number;
  pressure: number;
  temp: number;
  temp_max: number;
  temp_min: number;
}

export interface Weather {
  id: number;
  name: string;
  main: WeatherMain;
}
