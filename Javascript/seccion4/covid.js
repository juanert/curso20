const url = "https://covid-193.p.rapidapi.com/statistics";
const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "0f72fb545amshd55cba78a64604cp1e632fjsn672837304d0b",
    "x-rapidapi-host": "covid-193.p.rapidapi.com",
  },
};

async function getStatistics() {
  const response = await fetch(url, options);
  const result = await response.json();
  renderStatistics(result.response);
  console.log(result);
}

function renderStatistics(statistics) {
  const container = document.getElementById("covid");
  let html = "";
  statistics.forEach((statistic) => {
    html += `
      <div class="statistic">
        <h2>${statistic.country}</h2>
        <p>Casos nuevos: ${statistic.cases.new ? statistic.cases.new : "0"}</p>
        <p>Casos totales: ${statistic.cases.total}</p>
        <p>Recuperados: ${statistic.cases.recovered}</p>
        <p>Fallecidos: ${
          statistic.deaths.total ? statistic.deaths.total : "0"
        }</p>
      </div>
    `;
  });
  container.innerHTML = html;
}

try {
  getStatistics();
} catch (error) {
  console.error(error);
}

/**
 * Realiza una página trayendo datos de cualquier API que te interese.
 * Fecha de entrega: 27/11/24
 */