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

let estadisticas = [];
let games 

function staticts (juegos) {
    for (let m = 0; m < juegos.length; m++) {
        if(juegos.status === "FINISHED"){
            return true
            
        }
        
    }
    console.log(partidos)
}
staticts(partidos)