
let tabla = positions.standings[0].table;
let Ligue = standingsLigue.standings[0].table;
let Premier = PremierTable.standings[0].table;

//lamadas de funciones
Main(tabla);

//Fecth
// function getData(url) {
//   const cors = "https://cors-anywhere.herokuapp.com/";
//   fetch(url, {
//     method: "GET",
//     headers: new Headers({
//       "X-Auth-Token": "7141c0e024d646f197df4c965baf4529",
//       "Content-Type": "application/json",
//       "Access-Control-Allow-Origin": "*",
//     }),
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data);
//       let tabla = data.positios.standings[0].table;
//       standingsTable(tabla);

//       let LaLiga = document.getElementById("LaLiga");
//       LaLiga.addEventListener("click", () => {
//         Main(tabla);
//       });

//       let Ligue1 = document.getElementById("Ligue1");
//       Ligue1.addEventListener("click", () => {
//         (document.innerHTML = ""), Main(Ligue);
//       });

//       let premier = document.getElementById("Premier");
//       premier.addEventListener("click", () => {
//         (document.innerHTML = ""), Main(Premier);
//       });
//     })
//     .catch((err) => console.log(err));
// }

// getData(
//   "https://api.football-data.org/v2/competitions/2014/standings?season=2022"
// );

function Main(datos) {
  standingsTable(datos);
}

function standingsTable(tomates) {
  let standingsBody = document.getElementById("BodyT");
  document.innerHTML = "";

  for (let f = 0; f < tomates.length; f++) {
    let tr = document.createElement("tr");

    let posicion = document.createElement("p");
    posicion.innerHTML = tomates[f].position;

    let logo = document.createElement("img");
    logo.setAttribute(
      "src",
      "https://crests.football-data.org/" + tomates[f].team.id + ".svg"
    );
    logo.classList.add("logo");

    let equipo = document.createElement("p");
    equipo.innerHTML = tomates[f].team.name;
    equipo.classList.add("equipo");
    console.log(equipo);

    let played = document.createElement("p");
    played.innerHTML = tomates[f].playedGames;

    let victorys = document.createElement("p");
    victorys.innerHTML = tomates[f].won;

    let empates = document.createElement("p");
    empates.innerHTML = tomates[f].draw;

    let perdidos = document.createElement("p");
    perdidos.innerHTML = tomates[f].lost;

    let puntos = document.createElement("p");
    puntos.innerHTML = tomates[f].points;

    let goles = document.createElement("p");
    goles.innerHTML = tomates[f].goalsFor;

    let enContra = document.createElement("p");
    enContra.innerHTML = tomates[f].goalsAgainst;

    let diferencia = document.createElement("p");
    diferencia.innerHTML = tomates[f].goalDifference;

    let Tableau = [
      posicion,
      logo,
      equipo,
      puntos,
      played,
      victorys,
      empates,
      perdidos,
      goles,
      enContra,
      diferencia,
    ];

    for (let h = 0; h < Tableau.length; h++) {
      const td = document.createElement("td");
      td.append(Tableau[h]);
      tr.append(td);
    }

    standingsBody.append(tr);
  }
}

let LaLiga = document.getElementById("LaLiga")
LaLiga.addEventListener("click",()=>{
  Main(tabla)
})

let Ligue1 = document.getElementById("Ligue1")
Ligue1.addEventListener("click", ()=>{
  document.innerHTML = "",
    Main(Ligue)
})

let premier = document.getElementById("Premier")
premier.addEventListener("click", ()=>{
  document.innerHTML = "",
  Main(Premier)
})
