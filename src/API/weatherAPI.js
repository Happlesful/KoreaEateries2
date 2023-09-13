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
      fetch(
        `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKey}}/?apikey=${apikey}`,
        {
          method: "GET",
        }
      );
    })
    .then((res) => {
      console.log(res.Headline.Text);
      console.log("Complete");
    })
    .catch((error) => {
      console.log("Error: ", error);
    });
};

dailyWeather("seoul");
