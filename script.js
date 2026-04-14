async function getWeather() {

  document.getElementById("loading").style.display = "block";

  try {
    let city = document.getElementById("city").value;
    let apiKey = "e492b0018a340137ed14ddcdb74008fd";

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    let response = await fetch(url);
    let data = await response.json();

    if (data.cod === "404") {
      alert("City not found");
      return;
    }

    document.getElementById("temp").innerText = data.main.temp + "°C";
    document.getElementById("condition").innerText = data.weather[0].main;
    document.getElementById("humidity").innerText = "Humidity: " + data.main.humidity + "%";

    changeBackground(data.weather[0].main);

  } catch (error) {
    alert("Error fetching weather data");

  } finally {
    document.getElementById("loading").style.display = "none";
  }
}

/* Animated background transitions */
function changeBackground(condition) {
  let body = document.body;

  body.style.transition = "background 1s ease";

  if (condition === "Clear") {
    body.style.background = "linear-gradient(to right, #f6d365, #fda085)";
  } 
  else if (condition === "Rain") {
    body.style.background = "linear-gradient(to right, #4e54c8, #8f94fb)";
  } 
  else if (condition === "Clouds") {
    body.style.background = "linear-gradient(to right, #bdc3c7, #2c3e50)";
  } 
  else {
    body.style.background = "linear-gradient(to right, #74ebd5, #acb6e5)";
  }
}