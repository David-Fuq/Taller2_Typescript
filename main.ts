import { Serie } from "./serie.js";
import { series } from "./data.js";

const seriesTbody: HTMLElement = document.getElementById('series')!; 

function renderSeriesInTable(series: Serie[]): void {
  console.log("Desplegando series en la tabla");
  series.forEach(c => {
    let trElement: HTMLElement = document.createElement("tr");
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

renderSeriesInTable(series);
getAverageSeason(series);