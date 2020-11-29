const key = "NOh3vdi0UxGubEqSya3FPle0yO8uEwGw";
// Free Account we can only make 50 request perdsay
// grt weather information
const getWeather = async (id) => {
    const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${id}?apikey=${key}`;
    const response = await fetch(base + query);
    const data = await response.json();
    // console.log(data);
    return data[0];
};
// getcity information
const getCity = async (city) => {
    const base = "http://dataservice.accuweather.com/locations/v1/cities/search";
    const query = `?apikey=${key}&q=${city}`;

    const response = await fetch(base + query);
    const data = await response.json(); // return promise

    // console.log(data[0]);
    return data[0]; // return promise

};

getCity("karachi").then(data => {
    // console.log(data);
    return getWeather(data.Key)
    // return a promise
}).then(data => {
    console.log(data)
}).catch(err => {
    console.log(err)
});

