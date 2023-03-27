const API_URL = 'http://localhost/api/';

function getLastAccess() {
axios.get(API_URL)
  .then(response => {
    const data = response.data;
    const lastAccessDate = data.last_access;
    const country = data.country;

    // const parsedDate = new Date(lastAccessDate)

    console.log(lastAccessDate)

    // const formattedDate = parsedDate.toLocaleDateString('pt-BR', {
    //   year: 'numeric',
    //   month: 'long', 
    //   day: 'numeric', 
    //   hour: '2-digit', 
    //   minute: '2-digit'
    // })
  
    const footer = document.querySelector('footer');
    const footerContent = 
      `
      <span class='footer__text '>
        Último acesso em <span class='footer__highlight'> ${lastAccessDate} </span>
      </span>
      <span class='footer__text'>
       às informações do país <span class='footer__country'>  ${country} </span>
      </span>
      `

      footer.innerHTML = footerContent
  })
  .catch(error => {
    console.log(error);
  })

}


window.addEventListener('load', getLastAccess())