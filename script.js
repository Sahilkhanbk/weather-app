const search = document.querySelector(".search")
const input = document.querySelector("#input")
const result = document.querySelector("#wheatherResult")
const api_Key = "9163dd551742cc3104078ca303ab86f0";

search.addEventListener("click", () => {
    const city = input.value.trim();
    if (city === "") return;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${api_Key}`)
        .then(response => response.json())
        .then(data => {
            if (data.cod === "404") {
                alert("City not found")
                return
            }

            result.classList.remove("hidden");
            document.querySelector("#cityName").textContent = data.name;
            document.querySelector("#description").textContent = data.weather[0].description;
            document.querySelector("#temperature").textContent = `Temperature ${data.main.temp} C`;
            document.querySelector("#humidity").textContent = `Humidity${data.main.humidity} %`;
            document.querySelector("#wind").textContent = `Wind speed ${data.wind.speed} m/s`;
            document.querySelector("#wheatherIcon").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
        })
        .catch(err => {
            alert("Error fatching data")
            console.error(err)
        })
})
