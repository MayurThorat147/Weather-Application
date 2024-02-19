export interface WeatherData {
    coord: Coord;
    weather: Weather[];
    base: string;
    main: Main;
    wind: Wind;
    clouds: Clouds;
    dt: number;
    sys: Sys;
    timezone: number;
    id: number;
    name: string;
    cod: number;
  }

  export interface Coord {
    lon: number;
    lat: number;
  }
  
  export interface Weather {
    id: number;
    main: string;
    description: string;
    icon: string;
  }
  
  export interface Main {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    visibility: number;
  }
  
  export interface Wind {
    speed: number;
    deg: number;
  }
  
  export interface Clouds {
    all: number;
  }
  
  export interface Sys {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  }
  
  /*const jsonData: WeatherData = {
    coord: {
      lon: 174.7667,
      lat: -36.8667,
    },
    weather: [
      {
        id: 800,
        main: "Clear",
        description: "clear sky",
        icon: "01n",
      },
    ],
    base: "stations",
    main: {
      temp: 293.28,
      feels_like: 293.07,
      temp_min: 290.04,
      temp_max: 294.1,
      pressure: 1023,
      humidity: 66,
      visibility: 10000,
    },
    wind: {
      speed: 1.54,
      deg: 140,
    },
    clouds: {
      all: 2,
    },
    dt: 1705143482,
    sys: {
      type: 2,
      id: 2012285,
      country: "NZ",
      sunrise: 1705166159,
      sunset: 1705218162,
    },
    timezone: 46800,
    id: 2193733,
    name: "Auckland",
    cod: 200,
  };
  */