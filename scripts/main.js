import { series } from "./data.js";
var seriesTbody = document.getElementById('series');
function renderSeriesInTable(series) {
    console.log("Desplegando series en la tabla");
    series.forEach(function (c) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td><b>".concat(c.id, "</b></td>\n                           <td><a href=").concat(c.url, ">").concat(c.name, "</a></td>\n                           <td>").concat(c.channel, "</td>\n                           <td>").concat(c.seasons, "</td>");
        seriesTbody.appendChild(trElement);
    });
}
function getAverageSeason(series) {
    var totalCredits = 0;
    var totalSeries = 0;
    series.forEach(function (serie) { return totalCredits = totalCredits + serie.seasons; });
    series.forEach(function (serie) { return totalSeries = totalSeries + 1; });
    var avr = totalCredits / totalSeries;
    var table = document.getElementById('tabla');
    var html = '<p> &nbsp; Seasons average: ' + avr + '</p>';
    table.insertAdjacentHTML('afterend', html);
}
renderSeriesInTable(series);
getAverageSeason(series);
