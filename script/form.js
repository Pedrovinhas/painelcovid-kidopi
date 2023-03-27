const countriesForm = document.querySelectorAll('.content__card')

async function submitForm(event) {
    const url = 'http://localhost/api/'
    const countryForm = event.currentTarget
    const country = countryForm.getAttribute('id')
    console.log(country)

    const postCountryData = {
        last_access: new Date().toISOString(),
        country
    }

    await axios.post(url, postCountryData)
    .then(response => console.log(response.data))
}

countriesForm.forEach(countryForm => {
    countryForm.addEventListener('click', submitForm)
})



