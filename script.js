const btn = document.getElementById("btn")
const input = document.getElementById("input")
const main = document.getElementById("main")
const body = document.querySelector('body')
const darktheme = document.getElementById('darkmode')

darktheme.addEventListener('click',()=>{
body.classList.toggle('dark-mode')


})
btn.addEventListener("click", () => {
  const inputt = input.value


  fetch(`https://restcountries.com/v3.1/name/${inputt}`)//targeting the input from the input in html
  .then(response => response.json())//we use for each as a replacement for map to target each data as one
  .then(countries => {
    console.log(countries)
    countries.forEach(country => {
     
      const container = document.createElement('div')//creating a div which will store all the elements from the api
      container.className = 'container'
      
      const name  = document.createElement('h2')//creating a h tag that will contain country names and assigning it to div container
      name.textContent = country.name.common
      container.appendChild(name)
      
      const flag = document.createElement('img')//creating an img tag which will contain the flags 
      flag.src = country.flags.png
      container.appendChild(flag)//assigning the created img tag to the created main div
      
      const population = document.createElement('p')//creating a p tag that will contain population
      population.textContent = `Population: ${country.population}`
      container.appendChild(population)//assigning the population to the created element to main div
      
      const continent = document.createElement('p');//creating a p tag to store continents
      continent.textContent = `Continent: ${country.continents}`
      container.appendChild(continent)
      const capital = document.createElement('p')
      capital.textContent = `capital:${country.capital}`
      container.appendChild(capital)
      const independent =document.createElement('p')
      independent.textContent = `independent:${country.independent}`
      container.appendChild(independent)
      main.appendChild(container);//putting all the data we have created in the js div to the main div in html
    })
  })
});


