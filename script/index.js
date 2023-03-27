
const API_COUNTRIES_URL = 'https://dev.kidopilabs.com.br/exercicio/covid.php?listar_paises=1'

const countryCards = document.querySelectorAll('.content__card')

// countryCards.forEach(countryCard => {
//     countryCard.addEventListener('click', () => {
//         let COUNTRY = countryCard.getAttribute('id')
    
//         const API_COVID_URL = `https://dev.kidopilabs.com.br/exercicio/covid.php?pais=${COUNTRY}`

//         const getSelectedCountryData = async() => {
//             await axios.get(API_COVID_URL).then(response => {
//                 const countryData = response.data
//                 console.log(countryData)

//                 localStorage.setItem("country-data", JSON.stringify(countryData))
//                 location.href="./country.html"
//             })
//         }
//         getSelectedCountryData()
        
    
//     })
// })

const getCountryData = () => {
    const parsedCountryData = JSON.parse(localStorage.getItem('country-data'))

    // const countryContent = document.querySelector('.country__content')

    const allConfirmedVictims = Object.values(parsedCountryData).reduce((acc, states) => {
        return acc + states.Confirmados
    }, 0)

     const allDeathVictims = Object.values(parsedCountryData).reduce((acc, states) => {
        return acc + states.Mortos
    }, 0)


    // const content = `
    //     ${Object.values(parsedCountryData).map(states => {
    //         return `
    //         <div class='table__data'>
    //         <h1> ${states.ProvinciaEstado}  </h1>
    //         </div>
    //         `
    //     }).join('')}
  
    // `


    const countryNumbers = `
            <div class='span__confirmed'> <span class='span__text-conf'> Confirmados </span>  <span> ${allConfirmedVictims.toLocaleString()} </span>  </div>
            <div class='span__dead'> <span class='span__text-conf'> Óbitos </span>  <span> ${allDeathVictims.toLocaleString()} </span>  </div>
    `

    // countryContent.innerHTML = content

    countryTable.innerHTML = countryNumbers

    const countryName = document.getElementById('country-name')

    countryName.textContent = parsedCountryData[0].Pais

}
