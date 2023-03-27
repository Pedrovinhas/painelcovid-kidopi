const ctx = document.getElementById('myChart');

const chartData = JSON.parse(localStorage.getItem('country-data'))

const numberOfCases = Object.values(chartData).reduce((acc, states) => {
  return acc + states.Confirmados
}, 0)

const numberOfDeaths = Object.values(chartData).reduce((acc, states) => {
  return acc + states.Mortos
}, 0)

let myChart

function renderChart(numberOfCases, numberOfDeaths) {

  if(myChart) {
    myChart.destroy()
  }

  myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['Casos Confirmados', 'Óbitos'],
      datasets: [{
        // label: 'COVID-19',
        data: [numberOfCases, numberOfDeaths],
        borderWidth: 1,
        backgroundColor: [
          'rgba(68, 183, 162, 1)',
          'rgba(217, 91, 91, 1)',
          'rgb(255, 205, 86)'
        ],
        hoverOffset: 4
      }]
    },
    // options: {
    //   scales: {
    //     y: {
    //       beginAtZero: true
    //     }
    //   }
    // }
  })
}

renderChart(numberOfCases, numberOfDeaths)