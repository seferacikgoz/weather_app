const form = document.querySelector("section.top-banner form")
const input = document.querySelector(".container input")
const msg = document.querySelector("span.msg")
const list = document.querySelector(".ajax-section .cities")

localStorage.setItem("tokenKey", "NhICtBcwPwtiuY2s0FjIfyL1bWQXw06+pDkgPjNnMdMuuxOs1d1uWtP5qlDBLQxj")
/* localStorage.setItem("tokenKeyEncrypted", EncryptStringAES("39a65e65af90f699e86e054d41b09249"))
 */
form.addEventListener("submit", (e) => {
    e.preventDefault()
    getWeatherDataFromApi()
})

//* Get api func. (http methods == Verbs)
const getWeatherDataFromApi = async() => {
    /* alert("http request is gone") */
    const tokenKey = DecryptStringAES("NhICtBcwPwtiuY2s0FjIfyL1bWQXw06+pDkgPjNnMdMuuxOs1d1uWtP5qlDBLQxj")
    /* alert(tokenKey) */
    const inputValue = input.value
    const units = "metric"
    const lang = "tr"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${tokenKey}&units=${units}&lang=${lang}`

    const response = await fetch(url).then(response => response.json())
    console.log(response);
    const { main, sys, weather, name} = response


    const iconUrl = `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`

    const iconUrlAWS = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather[0].icon}.svg`;

    const createdLi = document.createElement("li")
    createdLi.classList.add("city")
    createdLi.innerHTML = `<h2 class="city-name" data-name="${name}, ${sys.country}">
    <span>${name}</span>
    <sup>${sys.country}</sup>
</h2>
<div class="city-temp">${Math.round(main.temp)}<sup>°C</sup></div>
<figure>
    <img class="city-icon" src="${iconUrl}">
    <figcaption>${weather[0].description}</figcaption>
</figure>`;


}