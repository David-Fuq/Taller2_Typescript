import { series } from "./data.js";
var seriesTbody = document.getElementById('series');
function renderSeriesInTable(series) {
    console.log("Desplegando series en la tabla");
    series.forEach(function (c) {
        var trElement = document.createElement("tr");
        trElement.setAttribute('class', 'fila-click');
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
function detailCard(series) {
    var div = document.getElementById('detail-card');
    var lst = document.querySelectorAll('tr.fila-click');
    console.log(lst.length);
    div.innerHTML = "<div class=\"card\" style=\"width: 18rem;\">\n  <img class=\"card-img-top\" src=\"".concat(series[0].image, "\" >\n  <div class=\"card-body\">\n    <h5 class=\"card-title\">").concat(series[0].name, "</h5>\n    <p class=\"card-text\">").concat(series[0].description, "</p>\n    <a href=\"").concat(series[0].url, "\">").concat(series[0].url, "</a>\n  </div>");
    var _loop_1 = function (i) {
        lst[i].addEventListener('click', function () {
            div.innerHTML = "<div class=\"card\" style=\"width: 18rem;\">\n      <img class=\"card-img-top\" src=\"".concat(series[i].image, "\" >\n      <div class=\"card-body\">\n        <h5 class=\"card-title\">").concat(series[i].name, "</h5>\n        <p class=\"card-text\">").concat(series[i].description, "</p>\n        <a href=\"").concat(series[i].url, "\">").concat(series[i].url, "</a>\n      </div>");
        });
    };
    for (var i = 0; i < lst.length; i++) {
        _loop_1(i);
    }
}
renderSeriesInTable(series);
getAverageSeason(series);
detailCard(series);
