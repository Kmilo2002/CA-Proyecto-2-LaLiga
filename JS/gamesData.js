let partidos = games.matches;

let gamesF = document.getElementById("formGroupExampleInput");
let arrayTeams = [];
let alert1 = document.getElementById("alert1");
let alert2 = document.getElementById("alert2");
let alert3 = document.getElementById("alert3");
let alert4 = document.getElementById("alert4");

function gamesTable(lechugas) {
  let tableBody = document.getElementById("bodyT");
  tableBody.innerHTML = "";
  for (let b = 0; b < lechugas.length; b++) {
    let tr = document.createElement("tr");

    let jornada = document.createElement("p");
    jornada.innerHTML = lechugas[b].matchday;
    jornada.classList.add("jornada");

    let logo = document.createElement("img");
    logo.setAttribute(
      "src",
      "https://crests.football-data.org/" + lechugas[b].homeTeam.id + ".svg"
    );
    logo.classList.add("logo");

    let equipoLocal = document.createElement("p");
    equipoLocal.innerHTML = lechugas[b].homeTeam.name;
    equipoLocal.classList.add("team");

    let resultado = document.createElement("p");
    resultado.innerHTML =
      lechugas[b].score.fullTime.homeTeam +
      "-" +
      lechugas[b].score.fullTime.awayTeam;
    resultado.classList.add("resultado");

    let EquipoVis = document.createElement("p");
    EquipoVis.innerHTML = lechugas[b].awayTeam.name;
    EquipoVis.classList.add("team2");

    let logo1 = document.createElement("img");
    logo1.setAttribute(
      "src",
      "https://crests.football-data.org/" + lechugas[b].awayTeam.id + ".svg"
    );
    logo1.classList.add("logo1");

    let fecha = new Date(lechugas[b].utcDate);

    let result = [
      equipoLocal,
      logo,
      resultado,
      logo1,
      EquipoVis,
      fecha.toLocaleString(),
      jornada,
    ];

    for (let d = 0; d < result.length; d++) {
      let td = document.createElement("td");
      td.classList.add("filas");
      td.append(result[d]);
      tr.append(td);
    }

    tableBody.append(tr);
  }
}

gamesTable(partidos);

function gamesFilters(games) {
  arrayTeams = games.filter((partidos) => {
    if (
      partidos.homeTeam.name
        .toLowerCase()
        .includes(gamesF.value.toLowerCase()) ||
      partidos.awayTeam.name.toLowerCase().includes(gamesF.value.toLowerCase())
    ) {
      return true;
    } else {
      return false;
    }
  });

  console.log(arrayTeams);
  gamesTable(arrayTeams);

  if (gamesF.value === "") {
    createAlert();
    return gamesTable(partidos);
  }
  if (gamesF.value.length > 2) {
    quitAlert();
  }

  if (arrayTeams.length === 0) {
    createAlert2();
    return gamesTable(partidos);
  }
}

let search = document.getElementById("formGroupExampleInput");
search.addEventListener("keyup", () => {
  gamesFilters(partidos);
});

function matchdays(games) {
  let jornada2 = document.getElementById("formGroupExampleInput2").value;

  let arrayJornada = games.filter((partidos) => {
    if (partidos.matchday === parseInt(jornada2)) {
      return true;
    } else {
      return false;
    }
  });

  console.log(arrayJornada);
  gamesTable(arrayJornada);

  if (arrayJornada == 0) {
    createAlert3();
    return gamesTable(partidos);
  }
}

let search2 = document.getElementById("formGroupExampleInput2");
search2.addEventListener("keyup", () => {
  matchdays(partidos);
});

let rButtonsF = [];

function rButtons(games) {
  let radioB = document.querySelector("input[type=radio]:checked");
  rButtonsF = arrayTeams.filter((partidos) => {
    if (radioB.value === "Ganados") {
      if (
        (partidos.homeTeam.name
          .toLowerCase()
          .includes(gamesF.value.toLowerCase()) &&
          partidos.score.winner === "HOME_TEAM") ||
        (partidos.awayTeam.name
          .toLowerCase()
          .includes(gamesF.value.toLowerCase()) &&
          partidos.score.winner === "AWAY_TEAM")
      ) {
        return true;
      }
    }
    if (radioB.value === "Perdidos") {
      if (
        (partidos.homeTeam.name
          .toLowerCase()
          .includes(gamesF.value.toLowerCase()) &&
          partidos.score.winner === "AWAY_TEAM") ||
        (partidos.awayTeam.name
          .toLowerCase()
          .includes(gamesF.value.toLowerCase()) &&
          partidos.score.winner === "HOME_TEAM")
      ) {
        return true;
      }
    }
    if (partidos.score.winner === "DRAW" && radioB.value === "Empates") {
      return true;
    }
    if (partidos.status === "SCHEDULED" && radioB.value === "Proximos") {
      return true;
    }
  });

  console.log(rButtonsF);
  gamesTable(rButtonsF);
}

function newSearch() {
  gamesF.value = "";
  document.getElementById("formGroupExampleInput2").value = "";
  let botones = document.getElementsByName("inlineRadioOptions");
  for (let a = 0; a < botones.length; a++) {
    botones[a].checked = false;
  }
  quitAlert();
}

let newS = document.getElementById("newSearch");
newS.addEventListener("click", () => {
  newSearch();
  gamesTable(partidos);
});

function createAlert() {
  alert1.style.display = "block";
}

function createAlert2() {
  alert2.style.display = "block";
}

function createAlert3() {
  alert3.style.display = "block";
}

function quitAlert() {
  alert1.style.display = "none";
  alert2.style.display = "none";
  alert3.style.display = "none";
  alert4.style.display = "none";
}

function finished(games) {
  if (partidos.status === "FINISHED") {
    return true;
  }
}
