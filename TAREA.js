// VILLICELA PEREZ MARIA ORFELINA

//Bloque 1: Ejercicios con Cadenas

// 1 Contar caracteres de una frase publicitaria
// Entrada: "La tecnología avanza"
// Salida: "La frase tiene 19 caracteres."

function ContarCaracter() {
   let frase = prompt("Ingrese la frase : ");
   let contar = frase.length-1
    console.log(`La frase tiene ${contar} caracteres.`)

}
ContarCaracter();


// 2 Contar apariciones de una vocal en un título
// Entrada: "Programación avanzada"
// Salida: "La vocal 'a' aparece 5 veces."

function ContarVocal() {
   let titulo = prompt("Ingrese el titulo : ");
   let contador = 0
   let vocal = prompt("Ingrese la vocal que quiere contar : ")
 
  for(c=0; c<titulo.length-1; c++){
        if( titulo[c] === vocal ){
         contador = contador + 1;
        }
    }
         console.log(`La vocal ${vocal} aparece ${contador} veces. `)
}
ContarVocal();


// 3 Invertir un nombre de producto
// Entrada: "Laptop"
// Salida: "potpaL"

function Invertir() {
   let palabra = "Laptop";
   let inv = "";

  for (c=palabra.length-1; c>=0; c--){
        inv = inv + palabra[c];
    }
        palabra = inv   
        console.log(palabra)
}
Invertir();


// 4 Comparar nombres de ciudades por longitud
// Entrada: "Milagro" y "Guayaquil"
// Salida: "La palabra 'Guayaquil' tiene más letras."

function Comparar() {
    let palabra1 = "Milagro";
    let palabra2 = "Guayaquil";
    
  if ( palabra1.length > palabra2.length ){
     console.log(`La palabra ${palabra1} tiene más letras.`)
    }  else {
     console.log(`La palabra ${palabra2} tiene más letras.`)
    }
}
Comparar();


// 5 Obtener iniciales de un cargo profesional
// Entrada: "Director General Académico"
// Salida: "D.G.A."

function ObtenerInicial() {
    let frase = "Director General Academico"
    let inicial = "";

  for (c=0; c<frase.length; c++){
     if ( c===0 || frase [c-1] === " " ){
        inicial = inicial + frase[c] + ".";
     }
  }  
        console.log(inicial)
}
ObtenerInicial();


// Bloque 2 (versión con Arreglos del bloque1)

// 1 Contar caracteres de varias frases publicitarias
// Dado un arreglo con frases publicitarias, contar cuántos caracteres tiene cada una.
//Entrada:
// ["La tecnología avanza", "Innovar para crecer", "Calidad garantizada"]
//Salida:
// "La tecnología avanza" → 19 caracteres  
// "Innovar para crecer" → 20 caracteres  
// "Calidad garantizada" → 21 caracteres

function Arreglosfrases() {
    let arreglo = ["La tecnología avanza", "Innovar para crecer", "Calidad garantizada"];
    let frase = "";
    let contador = "";
    
  for ( c=0; c<arreglo.length-1; c++) {
    frase = arreglo[c]
    contador = frase.length 
      
 console.log(`${frase} → ${contador}`)
  }
}
Arreglosfrases();


// 2 Contar apariciones de una vocal en cada título
// Dado un arreglo de títulos y una vocal específica, contar cuántas veces aparece esa vocal en cada título.
//Entrada:
// ["Programación avanzada", "Desarrollo web", "Análisis de datos"]
// vocal = 'a'
//Salida:
// "Programación avanzada" → 5 veces la 'a'  
// "Desarrollo web" → 1 vez la 'a'  
// "Análisis de datos" → 4 veces la 'a'

function ContarVocal() {
     let arreglo = ["Programación avanzada", "Desarrollo web", "Análisis de datos"];
     let titulo = ""
     let vocal = "a";
    
  for ( c=0; c<arreglo.length; c++) {
    titulo = arreglo[c]
    let contador =0;  // se reinicia para cada titulo 

    for ( j=0; j<titulo.length; j++) {
     if ( titulo[j] === vocal || titulo[j] === "A"|| titulo[j] === "á" ){
        contador = contador + 1
      }
      
    }
    // contador === 1 → es la condición que se evalúa (¿hay solo una ‘a’?) ? "vez" → esto se usa si la condición es verdadera : "veces" → esto se usa si la condición es falsa
   console.log(`${titulo} → ${contador} ${contador === 1 ? "vez" : "veces"} la '${vocal}'`);  
  }
}
ContarVocal();


// 3 Invertir los nombres de varios productos
// Dado un arreglo con nombres de productos, mostrar cada uno invertido.
//Entrada:
// ["Laptop", "Celular", "Tablet"]
//Salida:
// "Laptop" → "potpaL"  
// "Celular" → "raluleC"  
// "Tablet" → "telbaT"

function ArregloInvertir() {
    let arreglo = ["Laptop", "Celular", "Tablet"];
    let palabra = "";
    let invertir = "";

  for (c=0;  c<arreglo.length; c++) {
    palabra = arreglo[c]
    let invertir = ""; // se reinicia para cada palabra 
   
    for (j=palabra.length-1; j>=0; j--){ 
      invertir = invertir + palabra[j]
    }
   console.log(`${palabra} → ${invertir}`)
  }
}
ArregloInvertir();


function CompararLongitud() {
    let arreglo = ["Milagro","Guayaquil", "Quito", "Cuenca"];
    let mayor = arreglo[0];
    let ciudad = "";
    let grande = "";
    
  for (c=0; c<arreglo.length; c++){
      ciudad = arreglo[c]
     if (ciudad.length >= mayor.length){
        grande = ciudad 
      }
  }
   console.log(`La ciudad con más letras es ${grande} (${grande.length} letras)`)        
}
CompararLongitud();


// 5 Obtener iniciales de varios cargos profesionales
// Dado un arreglo con nombres de cargos profesionales, obtener las iniciales de cada uno.
//Entrada:
// ["Director General Académico", "Jefe de Laboratorio", "Asistente Administrativo"]
//Salida:
// "Director General Académico" → D.G.A.  
// "Jefe de Laboratorio" → J.D.L.  
// "Asistente Administrativo" → A.A.

function ArregloIniciales() {
    let arreglo = ["Director General Académico", "Jefe De Laboratorio", "Asistente Administrativo"];
    let cargos = "";

 for (c=0; c<arreglo.length; c++){
    cargos = arreglo[c];
    let iniciales = "";

    for ( j=0; j<cargos.length; j++ ){
         if (j===0 || cargos[j-1]===" "){
            iniciales = iniciales + cargos[j] + ".";
          }
      }
   console.log(`${cargos} → ${iniciales}`)
  }
}
ArregloIniciales();


// Bloque 3: Ejercicios Individuales con Ciclos

// 1 Promedio de calificaciones mayores a 70
//Descripción:
// Dadas n calificaciones de estudiantes, calcular el promedio solo de aquellas que sean mayores o iguales a 70.
//Entrada / Proceso:
// Ingresar la cantidad de calificaciones n.
// Leer n notas dentro de un ciclo for.
// Acumular y contar solo las notas ≥ 70.
// Calcular el promedio correspondiente.
//Salida esperada:
// Ingrese número de calificaciones: 5  
// Notas: 65, 80, 90, 50, 75  
// Promedio de notas ≥ 70: 81.67

function PromedioMayoresA70() {
   let n = parseInt(prompt("Ingrese número de calificaciones:"));
   let suma = 0;
   let contador = 0;

 for (let c = 1; c <= n; c++) {
    let nota = parseFloat(prompt(`Ingrese la nota ${c}:`));

    if (nota >= 70) {
      suma = suma + nota;
      contador = contador + 1;
    }
  }

  if (contador > 0) {
    let promedio = suma / contador;
    console.log(`Promedio de notas ≥ 70: ${promedio.toFixed(2)}`);
  } else {
    console.log("No hay notas mayores o iguales a 70.");
  }
}
PromedioMayoresA70();


// 3 Promedio de edades: mayores vs menores de edad
//Descripción:
// Dadas las edades de un grupo de personas, obtener el promedio de los mayores de edad (≥ 18 años) y de los menores de edad (< 18 años).
//Entrada / Proceso:
// Ingresar el número de personas n.
// Leer las edades una por una con un ciclo.
// Mantener contadores y acumuladores separados para mayores y menores.
// Calcular los promedios respectivos.
//Salida esperada:
// Ingrese número de personas: 5  
// Edades: 17, 20, 35, 15, 18  
// Promedio de mayores de edad: 24.33  
// Promedio de menores de edad: 16.00

function MayoresYMenoresEdad() {
    let n = parseFloat(prompt("Ingresar el número de personas : "));
    let sumaMayor = 0; 
    let contadorMayor = 0;
    let contadorMenor = 0;
     let sumaMenor= 0;

 for (c=1; c<=n; c++) {
    let edades = parseFloat(prompt(`Ingrese las edades ${c} : `));

    if  (edades >= 18){
        sumaMayor = sumaMayor + edades;
        contadorMayor = contadorMayor + 1;
    }else { 
        sumaMenor = sumaMenor+ edades;
        contadorMenor= contadorMenor + 1;
    }
  }

  if (contadorMayor > 0){
    let promedio = sumaMayor/contadorMayor;
    console.log(`Promedio de mayores de edad : ${promedio.toFixed(2)}`)
  }
  if (contadorMenor > 0 ){
    let promedio = sumaMenor/contadorMenor;
    console.log(`Promedio de mayores de edad : ${promedio}`)
  }
}
MayoresYMenoresEdad();


// 4 Mostrar la tabla de multiplicar de un número
//Descripción:
// Dado un solo número, mostrar su tabla de multiplicar del 1 al 10.
//Entrada / Proceso:
// Ingresar el número.
// Usar un ciclo for desde 1 hasta 10.
// Mostrar el producto en cada iteración.
//Salida esperada:
// Ingrese un número: 4  
// Tabla del 4:
// 4 × 1 = 4  
// 4 × 2 = 8  
// 4 × 3 = 12  
// …  
// 4 × 10 = 40

function TablaMultiplicar() {
    let num = parseFloat(prompt("Ingrese un numero : "));
    let tabla = 0;

 for(c=1; c<=10; c++){
    tabla = num * c ;
    console.log(`${num} x ${c} = ${tabla}`)
 }   
}
TablaMultiplicar();


// 5 Promedio de números pares e impares
//Descripción:
// Ingresar n números y calcular el promedio de los números pares y de los números impares por separado.
//Entrada / Proceso:
// Ingresar n.
// Leer cada número dentro de un ciclo for.
// Acumular por separado los pares (n % 2 == 0) y los impares (n % 2 != 0).
// Calcular los promedios respectivos.
//Salida esperada:
// Ingrese cantidad de números: 6  
// Valores: 2, 5, 8, 9, 4, 7  
// Promedio de pares: 4.67  
// Promedio de impares: 7.00

function PromedioParImpar() {
    let n = parseFloat(prompt("Ingresar la cnatidad de numeros : "));
    let sumaPar = 0; 
    let contadorPar = 0;
    let contadorImpar = 0;
     let sumaImpar= 0;

 for (c=1; c<=n; c++) {
    let numero = parseFloat(prompt(`Ingrese los numeros ${c} : `));

    if  (numero % 2 === 0){
        sumaPar = sumaPar + numero;
        contadorPar = contadorPar + 1;
    }else if (numero % 2 !== 0) {
        sumaImpar = sumaImpar + numero;
        contadorImpar= contadorImpar + 1;
    }
  }

    let promedioPar = sumaPar/contadorPar;
    console.log(`Promedio de mayores de edad : ${promedioPar.toFixed(2)}`)

    let promedioImpar = sumaImpar/contadorImpar;
    console.log(`Promedio de mayores de edad : ${promedioImpar}`)
  
}
PromedioParImpar();


//Bloque 4: Versión con Arreglos (versión con arreglos del bloque 3)

// 1 Promedio de calificaciones mayores a 70
//Descripción:
// Dada una lista de calificaciones, calcular el promedio solo de aquellas que sean mayores o iguales a 70.
//Entrada:
// calificaciones = [65, 80, 90, 50, 75]
//Proceso:
// Recorrer la lista con un ciclo for.
// Sumar y contar solo las calificaciones ≥ 70.
// Calcular el promedio correspondiente.
//Salida esperada:
// Promedio de calificaciones ≥ 70: 81.67
 
function PromedioArreglo() {
    let calificaciones = [65, 80, 90, 50, 75];
    let suma = 0;
    let contar = 0;

 for (c=0; c<calificaciones.length; c++){

      if (calificaciones[c]>=70){
        suma = suma + calificaciones[c]
        contar = contar + 1
      }
  }
 let promedio = (suma/contar).toFixed(2);
 console.log(`Promedio de calificaciones ≥ 70 ${promedio}`)
}
PromedioArreglo();


// 2 Contar números negativos en una lista
//Descripción:
// Dada una lista de números, contar cuántos son negativos.
//Entrada:
// numeros = [3, -5, 0, 7, -1, -8]
//Proceso:
// Usar un ciclo for para recorrer la lista.
// Contar los valores menores a 0.
//Salida esperada:
// Cantidad de números negativos: 3

function NumerosNegativos() {
    let numeros = [3, -5, 0, 7, -1, -8];
    let contar  = 0;

 for (c=0;  c<numeros.length; c++) {
   
    if (numeros[c]<0){
        contar = contar + 1;
    }
  }  
 console.log(`Cantidad de numeros negativos : ${contar}`)
}
NumerosNegativos();


// 3 Promedio de edades: mayores vs menores de edad
//Descripción:
// Dada una lista con edades de personas, obtener el promedio de los mayores de edad (≥ 18) y de los menores de edad (< 18).
//Entrada:
// edades = [17, 20, 35, 15, 18]
//Proceso:
// Recorrer la lista con un ciclo for.
// Separar acumuladores y contadores para mayores y menores.
// Calcular los promedios correspondientes.
//Salida esperada:
// Promedio de mayores de edad: 24.33  
// Promedio de menores de edad: 16.00

function MayoresVSMenoresEdad() {
    let edades = [17, 20, 35, 15, 18];
    let sumaMayor = 0; 
    let contadorMayor = 0;
    let contadorMenor = 0;
     let sumaMenor= 0;

 for (c=0; c<edades.length; c++) {

    if  (edades[c] >= 18){
        sumaMayor = sumaMayor + edades[c];
        contadorMayor = contadorMayor + 1;
    }else { 
        sumaMenor = sumaMenor+ edades[c];
        contadorMenor= contadorMenor + 1;
    }
  }

    let PromedioMayor = sumaMayor/contadorMayor;
    console.log(`Promedio de mayores de edad : ${PromedioMayor.toFixed(2)}`)

    let PromedioMenor = sumaMenor/contadorMenor;
    console.log(`Promedio de mayores de edad : ${PromedioMenor.toFixed(2)}`)
  
}
MayoresVSMenoresEdad();


// 4 Mostrar tablas de multiplicar de varios números
//Descripción:
// Dada una lista de números, mostrar la tabla de multiplicar del 1 al 10 para cada uno.
//Entrada:
// numeros = [3, 5]
//Proceso:
// Ciclo externo: recorrer cada número.
// Ciclo interno: multiplicar del 1 al 10.
//Salida esperada:
// Tabla del 3:
// 3, 6, 9, 12, 15, 18, 21, 24, 27, 30
// Tabla del 5:
// 5, 10, 15, 20, 25, 30, 35, 40, 45, 50

function TablaDeMultiplicar() {
    let numeros = [3, 5];
    let num = [];
    let tabla = 0;

 for (c=0; c<numeros.length; c++){
    num  = numeros[c]
    let acu = 0;
 
    for (i=1; i<=10; i++){
        tabla = i * num
        acu = acu + tabla +",";

    }
    console.log(`Tabla del ${num} : ${acu} `)
  }
}
TablaDeMultiplicar();


// 5 Promedio de números pares e impares
//Descripción:
// Dada una lista de números, calcular el promedio de los pares y de los impares.
//Entrada:
// numeros = [2, 5, 8, 9, 4, 7]
//Proceso:
// Recorrer el arreglo con un ciclo for.
// Sumar y contar pares e impares por separado.
// Calcular los promedios respectivos.
//Salida esperada:
// Promedio de pares: 4.67  
// Promedio de impares: 7.00

function PromedioNumParEImpar() {
    let numeros = [2, 5, 8, 9, 4, 7];
    let num = 0;
    let sumaPar = 0;
    let contarPar = 0;
    let sumaImpar = 0;
    let contarImpar = 0;

 for (c=0; c<numeros.length; c++){
    num = numeros[c];
     
    if(num%2 === 0){
        sumaPar = sumaPar + num ; 
        contarPar = contarPar + 1;
    }else{
        sumaImpar = sumaImpar + num;
        contarImpar = contarImpar + 1
    }
  }   
 let promedioPar = (sumaPar/contarPar).toFixed(2);
 console.log(`Promedio de pares : ${promedioPar}`);
 let promedioImpar = (sumaImpar/contarImpar).toFixed(2);
 console.log(`Promedio de pares : ${promedioImpar}`);
}
PromedioNumParEImpar();