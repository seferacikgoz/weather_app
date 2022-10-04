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
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${tokenKey}`

    const response = await fetch(url).then(response => response.json())
    console.log(response);

}