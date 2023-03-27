const countriesCards = document.querySelectorAll('.content__card')

countriesCards.forEach(countryCard => {
  countryCard.addEventListener('click', () => {
    console.log(countryCard)
    let COUNTRY = countryCard.getAttribute('id')

    const API_COVID_URL = `https://dev.kidopilabs.com.br/exercicio/covid.php?pais=${COUNTRY}`

    const getSelectedCountryData = async () => {
      await axios.get(API_COVID_URL).then(response => {
        const countryData = response.data
        console.log(countryData)

        localStorage.setItem("country-data", JSON.stringify(countryData))
        location.href = "./country.html"
      })
    }
    getSelectedCountryData()
  })
})

const viewAllButton = document.getElementById('show-all')

async function getCountryFlag(countryName) {
  try {
    const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);
    const data = await response.json();
    return data[0].flags.svg;
  } catch (error) {
    return null;
  }
}

async function getCountryList() {
  const response = await fetch('https://dev.kidopilabs.com.br/exercicio/covid.php?listar_paises=1');
  const data = await response.json();

  const countryList = await Promise.all(
    Object.values(data)
      .map(async country => {
 
        const flagUrl = await getCountryFlag(country);
        return {
          name: country,
          flagUrl: flagUrl,
          cases: country.cases,
          deaths: country.deaths,
          recovered: country.recovered
        };
      }));

  return countryList;
}

function createCountryCard(country) {

  const cardContent = document.createElement('form')
  cardContent.classList.add('content__card')
  cardContent.setAttribute('id', country.name)

  const flagContent = document.createElement('img')
  flagContent.classList.add('card-country__img')

  if (country.flagUrl) {
    flagContent.src = country.flagUrl;
    flagContent.alt = country.name + ' flag';
  } else {
    flagContent.src = 'https://via.placeholder.com/24x16.png?text=Flag+not+available';
    flagContent.alt = 'Flag not available';
  }

  cardContent.appendChild(flagContent)

  const cardText = document.createElement('div')
  cardText.classList.add('card__text')
  cardContent.appendChild(cardText)

  const countryText = document.createElement('span')
  countryText.classList.add('country__text')
  countryText.textContent = country.name

  cardText.appendChild(countryText)

  const textAnchor = document.createElement('a')
  textAnchor.setAttribute('href', '#')
  textAnchor.classList.add('country__link')
  cardText.appendChild(textAnchor)

  const iconImg = document.createElement('img')
  textAnchor.appendChild(iconImg)

  const spanInformation = document.createElement('span')
  spanInformation.textContent = 'Acesse para mais informações'

  textAnchor.appendChild(spanInformation)


  function getSelectedCountryDataWhenClicked() {
    let COUNTRY = cardContent.getAttribute('id')

    const API_COVID_URL = `https://dev.kidopilabs.com.br/exercicio/covid.php?pais=${COUNTRY}`

    const getSelectedCountryData = async () => {
      await axios.get(API_COVID_URL).then(response => {
        const countryData = response.data
        console.log(countryData)

        localStorage.setItem("country-data", JSON.stringify(countryData))
        location.href = "./country.html"
      })
    }
    getSelectedCountryData()
  }

  cardContent.addEventListener('click', getSelectedCountryDataWhenClicked);

  const cardsElements = document.querySelectorAll('.content__card')

  const filterCountryByName = () => {
    if (filterInput.value != '') {

      cardsElements.forEach(card => {
        let countryName = card.querySelector('.country__text').textContent

        countryName = countryName.toLocaleLowerCase()

        let filterText = filterInput.value.toLowerCase()

        if (!countryName.includes(filterText)) {
          card.classList.add('sr-only')
        } else {
          card.classList.remove('.sr-only')
        }

      })
    } else {
      cardsElements.forEach(card => {
        card.classList.remove('sr-only')
      })
    }
  }

  filterInput.addEventListener('input', filterCountryByName)
  
  const countriesForm = document.querySelectorAll('.content__card')

  countriesForm.forEach(countryForm => {
    countryForm.addEventListener('click', submitForm)
})


  return cardContent;
}

function displayAllCountries() {
  const mainContent = document.querySelector('#main')
  mainContent.innerHTML = '';
  for (let i = 0; i < 8; i++) {
    const skeletonCard = createSkeletonCard();
    mainContent.appendChild(skeletonCard);
  }

  getCountryList().then(countries => {
    const mainContent = document.querySelector('#main')
    mainContent.innerHTML = '';

    countries.forEach(country => {
      const countryCard = createCountryCard(country);
      mainContent.appendChild(countryCard);
    });
  }).catch(error => {
    console.error(error);

  })

}





viewAllButton.addEventListener('click', displayAllCountries)