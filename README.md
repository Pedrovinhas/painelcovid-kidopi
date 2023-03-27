<h1 align='center'>
    <img src="./.github/project-logo.png"/>

   <p align="center">
      <img alt="Linguagem mais usada na aplicação" src="https://img.shields.io/github/languages/top/Pedrovinhas/painelcovid-kidopi?color=121212&labelColor=0f352e">
      <img alt="Linguagens usadas" src="https://img.shields.io/github/languages/count/Pedrovinhas/keepalive?color=121212&labelColor=0f352e">
      <img alt="Último commit" src="https://img.shields.io/github/last-commit/Pedrovinhas/keepalive?color=121212&labelColor=0f352e">
      <img alt="Repository size" src="https://img.shields.io/github/repo-size/pedrovinhas/keepalive?color=121212&labelColor=0f352e">
      <img alt="Licença" src="https://shields.io/badge/license-MIT-ff7f00&?&style=flat?&color=121212&labelColor=0f352e">
  </p>  
</h1>


  <p align="center">
  <a href="#-projectname"> Sobre</a>&nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#-Tecnologias"> Tecnologias </a>&nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#-Requisitos-da-aplicação"> Requisitos  </a>&nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#-Configuração-do-ambiente">  Configuração do Ambiente  </a>&nbsp;&nbsp;
</p>



## 😷 Painel Coronavírus
Painel informativo que exibe os dados da situação epidemiológica do vírus COVID-19 em diversos países ao redor do globo. À respeito da fonte dos dados, foram utilizadas duas APIs da Kidopi: uma para listagem dos países, e outra para obtenção das informações de cada uma deles e seus estados.

Este também foi um teste técnico proporcionado pela Kidopi, onde devíamos explorar funcionalidades de consumo de APIs, organização de informações em tela, criação de uma própria API para exibir o último horário de acesso às páginas e outros requisitos que podem ser lidos <a href='#-Requisitos-da-aplicação'> aqui </a>

## 🧪 Tecnologias
- [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [PHP](https://www.php.net/)
- [HTML5](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
- [CSS3](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
- [MySQL](https://www.mysql.com/)
- [Git](https://git-scm.com/)
- [Chart.js](https://storybook.js.org/)
- [Axios](https://axios-http.com/)

## ℹ️ Requisitos da aplicação
**Front-End**
- [X] Exibir informações de Brazil, Canada e Australia.
- [X] Exibir dados da API-Covid-19.
- [X] Exibir dados da API-Países-Disponíveis.
- [X] Mostrar informações de cada estado.
- [X] Consumir própria API para visualizar o último acesso à API-Covid-19
- [X] Mostrar dados de último acesso no rodapé da aplicação.

**Back-end**
- [X] Criação da API em PHP.
- [X] Armazenar data e hora de todos acessos à API-Covid-19 e o país consultado.
- [X] Disponilibizar os dados para o Front-End.
- [X] Utilizar banco de dados MySQL

**Observações**

Em conjunto aos requisitos passados, também foi utilizado a biblioteca Chart.js como forma de visualização dos dados trazidos, assim como o uso da [API Restcountries](https://restcountries.com/) para buscar as bandeiras de cada um dos países e exibi-las em tela.

## 🔧 Configuração do Ambiente
Primeiramente deve ter instalado [XAMPP](https://www.apachefriends.org/pt_br/index.html) na máquina, como também o [MYSQL](https://www.mysql.com/downloads/)

```bash
# Clone o projeto
$ git clone https://github.com/pedrovinhas/painelcovid.git

# Mova a 📁api para o diretório 📂xampp/htdocs 

# Abra o XAMPP e inicie o Servidor Apache e o MySQL.

```

---
<blockquote> Feito por Pedro Henrique Vinhas 🪐 </blockquote>