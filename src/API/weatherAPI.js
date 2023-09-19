require("dotenv").config({ path: "src/API/.env" });

var apikey = process.env.api_key;

const dailyWeather = (location) => {
  return fetch(
    `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${apikey}&q=${location}`,
    {
      method: "GET",
    }
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error("HTTP status " + response.status);
      }
      return response.json();
    })
    .then((data) => {
      return data[0].Key;
    })
    .then((locationKey) => {
      return fetch(
        `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKey}/?apikey=${apikey}`,
        {
          method: "GET",
        }
      );
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .catch((error) => {
      console.error("An error occurred:", error);
    });
};

(async () => {
  try {
    var forecast = await dailyWeather("seoul");
    weatherDescription = forecast.Headline.Text;
  } catch (error) {
    // Handle errors here if needed
  }
})();

var weatherDescription = "";
