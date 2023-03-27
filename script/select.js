const selectStateInput = document.getElementById('selectState')

const parsedCountryData = JSON.parse(localStorage.getItem('country-data'))

const countryTitle = document.querySelector('.country__title')
const countryState = document.querySelector('.country-state')
const countryTable = document.querySelector('.table__numbers')

const countryNumberOfCases = Object.values(parsedCountryData).reduce((acc, states) => {
    return acc + states.Confirmados
}, 0)

const countryNumberOfDeaths = Object.values(parsedCountryData).reduce((acc, states) => {
    return acc + states.Mortos
}, 0)

function createDefaultOption() {
    const defaultOption = document.createElement('option');
    defaultOption.value = parsedCountryData[0].Pais;
    defaultOption.text = parsedCountryData[0].Pais;
    selectStateInput.add(defaultOption);

    selectStateInput.addEventListener('change', (event) => {
        if (event.target.value === parsedCountryData[0].Pais) {
            renderChart(countryNumberOfCases, countryNumberOfDeaths);
            getCountryData()
            countryState.textContent = ''
        }
    });
}

const defaultOption = createDefaultOption()

const hasCountryState = parsedCountryData[0].ProvinciaEstado

if (!hasCountryState) {
} else {
    const states = Object.values(parsedCountryData).forEach(
        state => {
            const option = document.createElement('option')

            option.value = state.ProvinciaEstado;
            option.text = state.ProvinciaEstado;

            selectStateInput.add(option)

            const renderStateData = (selectedState) => {
                if (selectedState === option.value) {
                    const stateName = selectedState
                    renderChart(state.Confirmados, state.Mortos)
                    countryState.classList.add('fade-in')
                    countryState.textContent = stateName


                    setTimeout(() => {
                        countryState.classList.remove('fade-in')
                    }, 400)


                    const stateData = `
                    <div class='span__confirmed'> <span class='span__text-conf'> Confirmados </span>  <span> ${state.Confirmados.toLocaleString()} </span>  </div>
                    <div class='span__dead'> <span class='span__text-conf'> Óbitos </span>  <span> ${state.Mortos.toLocaleString()} </span>  </div>
                
                    `
                  
                    countryTable.innerHTML = stateData
                  
                }

            }
            selectStateInput.addEventListener('change', () => {
                const selectedState = selectStateInput.value
                renderStateData(selectedState)
            })},
            )
}