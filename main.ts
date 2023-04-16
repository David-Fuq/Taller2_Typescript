import { Serie } from "./serie.js";
import { series } from "./data.js";

const seriesTbody: HTMLElement = document.getElementById('series')!; 

function renderSeriesInTable(series: Serie[]): void {
  console.log("Desplegando series en la tabla");
  series.forEach(c => {
    let trElement: HTMLElement = document.createElement("tr");
    trElement.setAttribute('class', 'fila-click');
    trElement.innerHTML = `<td><b>${c.id}</b></td>
                           <td><a href=${c.url}>${c.name}</a></td>
                           <td>${c.channel}</td>
                           <td>${c.seasons}</td>`;
    seriesTbody.appendChild(trElement);
  });
}

function getAverageSeason(series: Serie[]): void {
    let totalCredits: number = 0;
    let totalSeries: number = 0;
    series.forEach((serie) => totalCredits = totalCredits + serie.seasons);
    series.forEach((serie) => totalSeries = totalSeries + 1);
    const avr= totalCredits/totalSeries;
    let table: HTMLElement = document.getElementById('tabla')!;
    const html= '<p> &nbsp; Seasons average: '+avr+'</p>'
    table.insertAdjacentHTML('afterend', html)
  }

function detailCard(series : Serie[]): void {
  const div: HTMLElement = document.getElementById('detail-card')!;
  const lst: NodeList = document.querySelectorAll('tr.fila-click');
  console.log(lst.length);
  div.innerHTML = `<div class="card" style="width: 18rem;">
  <img class="card-img-top" src="${series[0].image}" >
  <div class="card-body">
    <h5 class="card-title">${series[0].name}</h5>
    <p class="card-text">${series[0].description}</p>
    <a href="${series[0].url}">${series[0].url}</a>
  </div>`

  for(let i: number = 0; i < lst.length; i++) {
    lst[i].addEventListener('click', function() {
      div.innerHTML = `<div class="card" style="width: 18rem;">
      <img class="card-img-top" src="${series[i].image}" >
      <div class="card-body">
        <h5 class="card-title">${series[i].name}</h5>
        <p class="card-text">${series[i].description}</p>
        <a href="${series[i].url}">${series[i].url}</a>
      </div>`
    });
}
}

renderSeriesInTable(series);
getAverageSeason(series);
detailCard(series);