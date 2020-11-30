class Forecast {
    constructor() {
        this.key = "NOh3vdi0UxGubEqSya3FPle0yO8uEwGw";
        this.weatherURL = 'http://dataservice.accuweather.com/currentconditions/v1/';
        this.cityURL = "http://dataservice.accuweather.com/locations/v1/cities/search";
    }

    //Getting the wheather conditions
    async updateCity(city) {
        const cityDets = await this.getCity(city);
        const weather = await this.getWeather(cityDets.Key)
        return {
            cityDets,
            weather
        }
    }
    // getcity information
    async getCity(city) {
        const query = `?apikey=${this.key}&q=${city}`;

        const response = await fetch(this.cityURL + query);
        const data = await response.json(); // return promise

        // console.log(data[0]);
        return data[0]; // return promise
    }
    // get weather information
    async getWeather(id) {

        const query = `${id}?apikey=${this.key}`;
        const response = await fetch(this.weatherURL + query);
        const data = await response.json();
        // console.log(data);
        return data[0];
    }
}
