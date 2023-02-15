// console.log(partidos.matches[0])


// let jornada = partidos.matches[0].matchday
// let equipoLocal = partidos.matches[0].homeTeam.name
// console.log(equipoLocal)
//  let; const

// TIPOS DE DATOS EN JS

// 1. NUMERICO - un tipo de dato que el valor es un numero 23 / 23.23
// 2. STRING - cadena de caracteres o texto - "Hoy 30.01.2023 estamos en la primera clase de Javascript !@"- siempre entre COMILLAS
// 3. ARRAY's - colección de varios datos -  se declara entre [] y puede contener varios datos
// 4. OBJETOS - se declara entre {} y siempre va con estás keys: clave:valor
// 5. Booleanos - true o false

// if(esto pasa ){
//    console.log("hola")
// }else{

// }

// 1. Numerico
// inicialización + nombre variable =(asignación) su valor
// let miEdad = 31;
// console.log(miEdad);

// miEdad = 23;
// console.log(miEdad);

// 1. puedo acceder a la variable desde cualquier sitio
// 2. no se pueden nombrar 2 variables con el mismo nombre

// se les puede reasignar el valor !!!declarando variables con let
// let dia_Espania_Constitucion = "12 octubre"
// let diaespaniaconstitucion

// let miEdad2
// miEdad2 = 23

// const miEdad2 = 23.23;
// console.log(miEdad2);

// miEdad2 = 25.28;
// console.log(miEdad2);

// 2.STRING

// let nombreLocal =
//   "Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual .";
//   console.log(nombreLocal)


// 3. ARRAY 

// let numeros = [2525, 25, 125, 178,225,126,122.22, "Alexandra", [23, 23, 23, "Zaragoza"], "hola", "JavaScript", 2269857];
// console.log(numeros)

// console.log(numeros[2])


// console.log(numeros.length) 
// console.log(numeros[11])

// numero de elemento ( longitud de array )  >  que la posición !!


// 4. OBJETOS 
// clave:valor / propiedad:valor  / keys:values
// let alumna = {
//     edad: 35,
//     ciudad:"Zaragoza",
//     idiomas:["ingles", "frances", "castellano"]
// }

// console.log(alumna.ciudad)
// console.log(alumna.idiomas[2])


// Jornada -  equipo Local - Equipo Visitante - restulado - fecha - tabla de resultado 

// let jornada = 
// posición - nombre equipo - partidos jugados - victorias -empates - derrotas - goles a favor - goles en contra -diferencia de goles - puntos - tabla de clasificación


// let concatenar = "111"+"111"
// let concatenar2 = 111+111
// console.log(concatenar)
// console.log(concatenar2)

// let nombre = "Alexandra"
// console.log(`Hola, ${nombre}, estamos en el workshop de JS`)
// console.log("Hola," +" "+nombre +" "+ "estamos en el workshop de JS")

// "https://crests.football-data.org/" + paridos.matches[0].homeTeam.id + ".svg"  ==>
// https://crests.football-data.org/86.svg


// resultado final partido 


// partidos.matches[0].score.fullTime.homeTeam + "-" + partidos.matches[0].score.fullTime.awayTeam

//                      2                         -                   4

// BUCLE FOR 
// MANEJO/MANIPULACIÓN DOM


// BUCLE FOR - MediaRecorder, itera por la array, por cada elemento



// let numeros =[22,125,23,65,22,56,875,254]

// for (let i = 0; i < numeros.length; i++) {
//      console.log(numeros[i])
    
// }




// FUNCIÓNES 
// - 1 funciónes con parametros y argumentos 
// - 2 funciónes estaticás 

// 2. estatica 
// function suma(){
//     let a = 25
//     let b = 15 
//     console.log(a+b)
// }
// suma()
// suma()
// suma()

// const suma2 =()=>{
//     let a = 12
//     let b = 23
//     console.log(a+b)
// }
// suma2()


// 1- función con parametro

// function resta(a,b){
//     // let a
//     // let b
//     console.log(a-b)
// }
// resta(15,2)
// resta(22,5)


// let a = 12
// let bc = 12
// let c = 22
// let arrayV = [a, bc, c]
// console.log(arrayV)

// let arrayL = ["abc", "b", "c" , "v", "d", "f"]

// function crearTabla(pepito){
//     for(let i =0; i <pepito.length; i++){
//         console.log(pepito[i])
//     }

// }


// crearTabla(arrayL)

let matches = partidos.matches
console.log(matches)


function crearTabla(tomatitos){
   let cuerpo_tabla = document.getElementById("bodyT") 

   for (let i = 0; i < tomatitos.length; i++) {
    let tr = document.createElement("tr")

    let equipoLocal = document.createElement("p")
    //  => <p></p>(equipoLocal)
    equipoLocal.innerHTML = tomatitos[i].homeTeam.name
    //   console.log(tomatitos[i].homeTeam.name)
    console.log(equipoLocal)


    let eqVisit = document.createElement("p")
    eqVisit.innerHTML = tomatitos[i].awayTeam.name
    

    let result = [equipoLocal, eqVisit]
      
        for(let j=0; j<result.length; j++ ){
            const td = document.createElement("td")
             td.append(result[j])
             tr.append(td)
            // append / appendChild 
            // elemento donde quiero añadir + . append(del elemento que quiero añadir)
            //           TD                 + append( result[j]  )
        }

        cuerpo_tabla.append(tr)



    }
}


crearTabla(matches)


