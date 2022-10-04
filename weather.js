const form = document.querySelector("section.top-banner form")
const input = document.querySelector(".container input")
const msg = document.querySelector("span.msg")
const list = document.querySelector(".ajax-section .cities")

localStorage.setItem("tokenKey", "BLv1t76uq7LhkzQhd17LTasnAJrO9233c+tqP+p4TO/AxRylO5VLTjdFRG7xbM1a")
/* localStorage.setItem("tokenKeyEncrypted", EncryptStringAES("29592c93e41c47469ed9a65f00833f78")) */

form.addEventListener("submit", () => {
    getWeatherDataFromApi()
})

//* Get api func. (http methods == Verbs)
const getWeatherDataFromApi = (e) => {
    e.preventDefault()
    alert("http request is gone")
}