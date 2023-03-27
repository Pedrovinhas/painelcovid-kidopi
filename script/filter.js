const filterInput = document.getElementById('filter')

const cardsElements = document.querySelectorAll('.content__card')



const filterCountryByName = () => {
    if(filterInput.value != '') {

        cardsElements.forEach(card => {
            let countryName = card.querySelector('.country__text').textContent

            countryName = countryName.toLocaleLowerCase()

            let filterText = filterInput.value.toLowerCase()

            if(!countryName.includes(filterText)) {
                card.classList.add('sr-only')
                console.log(cardsElements)
            } else {
                card.classList.remove('.sr-only')
            }
           

        })
    }  else {
        cardsElements.forEach( card => {
            card.classList.remove('sr-only')
        })
    }
}

filterInput.addEventListener('input', filterCountryByName)


const getAvailableCountries = async () => {
    await axios.get(API_COUNTRIES_URL)
        .then(response => {

            let countries = response.data
            let countryArray = Object.values(countries)

            renderCountries(countryArray)
          
        })
}



const showAllCountries = async() => {
    await getAvailableCountries()
}
