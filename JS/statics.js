// 0. Crear función que va calcular las estadísticas, recibiendo como param el array de partidos:

// 1. Crear array vacía (será array de objetos)

// 2. Iterar por todos los partidos

// 3. Condición: si el partido no está acabado, no seguir y mirar siguiente partido, si no el null
// de los goles lo romperá todo.

// 4. Buscar en la array estadísticas el objeto con el mismo id que el homeTeam del partido y guardarlo en una variable

// 5. Si el objeto buscado no existe, crearlo con estos keys: id, name, goals, matches.
// Rellenar cada key con el valor correspondiente

// 6. Si existe, actualizar los goles y los partidos

// 7. Hacer exactamente lo mismo a partir del punto 4, pero con awayTeam

// 8. Una vez fuera del loop de partidos, iterar por el array estadisticas

// 9. Añadir la key avg a cada objeto, con el valor goals/matches

// 10. Hacer console.log() para ver que todo está correcto.

//Scoop Global
let estadisticas = [];
let estadisticas2 = [];
let estadisticas3 = [];
let tabla = [];
let tabla2 = [];
let tabla3 = [];

//Llamada de funciones
Main3(partidos);

function Main3(games) {
  staticts(games);
  staticts2(games);
  staticts3(games);
  Table2(tabla);
  Table3(tabla2);
  Table4(tabla3);
}

function staticts(juegos) {
  for (let m = 0; m < juegos.length; m++) {
    if (juegos[m].status !== "FINISHED") {
      continue;
    }

    let idLocal = juegos[m].homeTeam.id;
    let nameLocal = juegos[m].homeTeam.name;
    let goalsLocal = juegos[m].score.fullTime.homeTeam;

    let idVis = juegos[m].awayTeam.id;
    let nameVis = juegos[m].awayTeam.name;
    let goalsVis = juegos[m].score.fullTime.awayTeam;

    // console.log(nameLocal);
    // console.log(nameVis);

    let teamHome;
    let teamVis;

    for (let n = 0; n < estadisticas.length; n++) {
      if (estadisticas[n].id === idLocal) {
        teamHome = estadisticas[n];
      }
    }
    if (teamHome === undefined) {
      estadisticas.push({
        id: idLocal,
        name: nameLocal,
        goals: goalsLocal,
        matches: 1,
      });
    } else {
      teamHome.matches++;
      teamHome.goals += goalsLocal;
    }

    for (let p = 0; p < estadisticas.length; p++) {
      if (estadisticas[p].id === idVis) {
        teamVis = estadisticas[p];
      }
    }
    if (teamVis === undefined) {
      estadisticas.push({
        id: idVis,
        name: nameVis,
        goals: goalsVis,
        matches: 1,
      });
    } else {
      teamVis.matches++;
      teamVis.goals += goalsVis;
    }
  }

  for (let b = 0; b < estadisticas.length; b++) {
    let average = (estadisticas[b].goals / estadisticas[b].matches).toFixed(2);
    estadisticas[b].avg = average;
  }
  estadisticas.sort((a, b) => b.avg - a.avg);
  tabla = estadisticas.slice(0, 5);
  console.log(estadisticas);
  console.log(tabla);
}

function Table2(juegos) {
  let staticsBody = document.getElementById("BodyT2");
  staticsBody.innerHTML = "";

  for (let f = 0; f < juegos.length; f++) {
    let tr = document.createElement("tr");

    let posicion = document.createElement("p");
    posicion.innerHTML = f + 1;

    let logo = document.createElement("img");
    logo.setAttribute(
      "src",
      "https://crests.football-data.org/" + juegos[f].id + ".svg"
    );
    logo.classList.add("logo");

    let equipo = document.createElement("p");
    equipo.innerHTML = juegos[f].name;
    equipo.classList.add("equipo");

    let played = document.createElement("p");
    played.innerHTML = juegos[f].matches;

    let goles = document.createElement("p");
    goles.innerHTML = juegos[f].goals;

    let average = document.createElement("p");
    average.innerHTML = juegos[f].avg;

    let Tableau = [posicion, logo, equipo, played, goles, average];

    for (let h = 0; h < Tableau.length; h++) {
      const td = document.createElement("td");
      td.append(Tableau[h]);
      tr.append(td);
    }

    staticsBody.append(tr);
  }
}

function staticts2(juegos) {
  for (let x = 0; x < juegos.length; x++) {
    if (juegos[x].status !== "FINISHED") {
      continue;
    }

    let idVis2 = juegos[x].awayTeam.id;
    let nameVis2 = juegos[x].awayTeam.name;
    let goalsVis2 = juegos[x].score.fullTime.awayTeam;
    let teamVis2;

    for (let p = 0; p < estadisticas2.length; p++) {
      if (estadisticas2[p].id === idVis2) {
        teamVis2 = estadisticas2[p];
      }
    }
     if (teamVis2 === undefined) {
      estadisticas2.push({
        id: idVis2,
        name: nameVis2,
        goals: goalsVis2,
        matches: 1,
      });
    } else {
      teamVis2.matches++;
      teamVis2.goals += goalsVis2;
    }
  }

  estadisticas2.sort((a, b) => a.goals - b.goals);
  tabla2 = estadisticas2.slice(0, 5);
  console.log(estadisticas2);
  console.log(tabla2);
}

function Table3(juegos) {
  let staticsBody3 = document.getElementById("BodyT3");
  staticsBody3.innerHTML = "";

  for (let h = 0; h < juegos.length; h++) {
    let tr = document.createElement("tr");

    let posicion = document.createElement("p");
    posicion.innerHTML = h + 1;

    let logo = document.createElement("img");
    logo.setAttribute(
      "src",
      "https://crests.football-data.org/" + juegos[h].id + ".svg"
    );
    logo.classList.add("logo");

    let equipo = document.createElement("p");
    equipo.innerHTML = juegos[h].name;
    equipo.classList.add("equipo");

    let played = document.createElement("p");
    played.innerHTML = juegos[h].matches;

    let goles = document.createElement("p");
    goles.innerHTML = juegos[h].goals;

    let average2 = document.createElement("p");
    average2.innerHTML = juegos[h].avg;

    let Tableau = [posicion, logo, equipo, played, goles];

    for (let i = 0; i < Tableau.length; i++) {
      const td = document.createElement("td");
      td.append(Tableau[i]);
      tr.append(td);
    }

    staticsBody3.append(tr);
  }
}

function staticts3(juegos) {
  for (let x = 0; x < juegos.length; x++) {
    if (juegos[x].status !== "FINISHED") {
      continue;
    }

    let idVis3 = juegos[x].awayTeam.id;
    let nameVis3 = juegos[x].awayTeam.name;
    let goalshome3 = juegos[x].score.fullTime.homeTeam;
    let teamVis3;

    for (let p = 0; p < estadisticas3.length; p++) {
      if (estadisticas3[p].id === idVis3) {
        teamVis3 = estadisticas3[p];
      }
    }
    if (teamVis3 === undefined) {
      estadisticas3.push({
        id: idVis3,
        name: nameVis3,
        goals: goalshome3,
        matches: 1,
      });
    } else {
      teamVis3.matches++;
      teamVis3.goals += goalshome3;
    }
  }

  estadisticas3.sort((a, b) => a.goals - b.goals);
  tabla3 = estadisticas3.slice(0, 5);
  console.log(estadisticas3);
  console.log(tabla3);
}

function Table4(juegos) {
  let staticsBody4 = document.getElementById("BodyT4");
  staticsBody4.innerHTML = "";

  for (let h = 0; h < juegos.length; h++) {
    let tr = document.createElement("tr");

    let posicion = document.createElement("p");
    posicion.innerHTML = h + 1;

    let logo = document.createElement("img");
    logo.setAttribute(
      "src",
      "https://crests.football-data.org/" + juegos[h].id + ".svg"
    );
    logo.classList.add("logo");

    let equipo = document.createElement("p");
    equipo.innerHTML = juegos[h].name;
    equipo.classList.add("equipo");

    let played = document.createElement("p");
    played.innerHTML = juegos[h].matches;

    let goles = document.createElement("p");
    goles.innerHTML = juegos[h].goals;

    let Tableau = [posicion, logo, equipo, played, goles];

    for (let i = 0; i < Tableau.length; i++) {
      const td = document.createElement("td");
      td.append(Tableau[i]);
      tr.append(td);
    }

    staticsBody4.append(tr);
  }
}

let laliga2 = document.getElementById("LaLiga");
laliga2.addEventListener("click", () => {
  Main3(partidos);
});

let ligue2 = document.getElementById("Ligue1");
ligue2.addEventListener("click", () => {
  Main3(partidosLigue);
});

let premier2 = document.getElementById("Premier");
premier2.addEventListener("click", () => {
  Main3(partidosPremier);
});
