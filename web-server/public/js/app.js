console.log('Client side javascript file is loaded!')

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')

//Message paragraphs
const errorMessage = document.querySelector('#errorMessage')
const locationMessage = document.querySelector('#locationsMessage')
const forecastMessage = document.querySelector('#forecastMessage')

errorMessage.textContent = 'Loading...'
locationMessage.textContent = ''
forecastMessage.textContent = ''

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()  //it prevents the event refreshing the browser
    const location = search.value
    
    fetch(`http://localhost:3000/weather?address=${location}`).then((response) => {
    response.json().then((data) => {
        if (data.error) {
            errorMessage.textContent = data.error
            } else {
                errorMessage.textContent = ''
                locationMessage.textContent = data.location
                forecastMessage.textContent = data.forecast
            }
        })
    })
})