const ctx = document.getElementById('myChart');

const chartData = JSON.parse(localStorage.getItem('country-data'))

const numberOfSurvivors = Object.values(chartData).reduce((acc, states) => {
            return acc + states.Confirmados
        }, 0)

console.log(numberOfSurvivors)
        
const numberOfDeaths = Object.values(chartData).reduce((acc, states) => {
            return acc + states.Mortos
        }, 0)

  new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['Casos Confirmados', 'Óbitos'],
      datasets: [{
        // label: 'COVID-19',
        data: [numberOfSurvivors, numberOfDeaths],
        borderWidth: 1,
        backgroundColor: [
            'rgba(68, 183, 162, 1)',
            'rgba(217, 91, 91, 1)',
            'rgb(255, 205, 86)'
          ],
          hoverOffset: 10
      }]
    },
    // options: {
    //   scales: {
    //     y: {
    //       beginAtZero: true
    //     }
    //   }
    // }
  });