
const API_COUNTRIES_URL = 'https://dev.kidopilabs.com.br/exercicio/covid.php?listar_paises=1'

const countryCards = document.querySelectorAll('.content__card')

countryCards.forEach(countryCard => {
    countryCard.addEventListener('click', () => {
        let COUNTRY = countryCard.getAttribute('id')
    
        const API_COVID_URL = `https://dev.kidopilabs.com.br/exercicio/covid.php?pais=${COUNTRY}`

        const getSelectedCountryData = async() => {
            await axios.get(API_COVID_URL).then(response => {
                const countryData = response.data
                console.log(countryData)

                localStorage.setItem("country-data", JSON.stringify(countryData))
                location.href="./country.html"
            })
        }
        getSelectedCountryData()
        
    
    })
})

const getCountryData = () => {
    const parsedCountryData = JSON.parse(localStorage.getItem('country-data'))

    const countryContent = document.querySelector('.country__content')

    const content = `
        ${Object.values(parsedCountryData).map(states => {
            return `
            <h1> ${states.ProvinciaEstado}  </h1>
            <div class='span__confirmed'> <span> ${states.Confirmados.toLocaleString()} </span>  <span> Confirmados </span> </div>
            <span class='span__dead'> ${states.Mortos.toLocaleString()} Óbitos </span>
            `
        }).join('')}
        ${Object.values(parsedCountryData).reduce((acc, states) => {
            return acc + states.Confirmados
        }, 0)}
        ${Object.values(parsedCountryData).reduce((acc, states) => {
            return acc + states.Mortos
        }, 0)}
    `

    countryContent.innerHTML = content


    const countryName = document.getElementById('country-name')

    countryName.textContent = parsedCountryData[0].Pais

}
