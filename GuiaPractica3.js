// VILLICELA PEREZ MARIA ORFELINA

// BLOQUE 1: Ejercicios individuales (un solo número)

// 1. Serie de Fibonacci
//Descripción:
// Generar los primeros n términos de la serie de Fibonacci, donde cada término se obtiene
// sumando los dos anteriores.

function SerieFibonacci() {
    let n = parseFloat(prompt("Ingrese las veces : "));
    let a = 0; let b = 1; let c = 0;

    console.log (a)
    console.log(b)

    // le puse i de 3 ya que tengo dos valores ya fuera presentado 
    for (let i=3; i<=n; i++){
        c = a + b;
        console.log(c);
        
        a = b;
        b = c;
    }
    console.log
}
SerieFibonacci();


// 2. Divisores de un número
//Descripción:
// Mostrar todos los números que dividen exactamente al número ingresado.

function Divisor(){
    let n = parseFloat(prompt("Ingrese las veces : "));
    let acu = 0

 for (let i = 0; i<=n; i++){
        if(n % i == 0){
            acu = acu + i + ",";
        }
    }
    console.log(acu)
}
Divisor();


// 3. Suma de los divisores de un número
//Descripción:
// Calcular la suma total de los divisores positivos de un número.

function SumaDivisor(){
    let n = parseFloat(prompt("Ingrese las veces : "));
    let acu = 0

    for (let i = 0; i<=n; i++){
        if(n%i == 0){
            acu = acu + i
        }
    }
    console.log(acu)
}
SumaDivisorDivisor();


// 4. Verificar si un número es perfecto
//Descripción:
// Un número es perfecto si la suma de sus divisores (sin incluir él mismo) es igual al número.

function NumeroPerfecto(){
    let n = parseFloat(prompt("Ingrese las veces : "));
    let suma = 0

 for (i=0; i<n; i++){
        if(n % i == 0){
            suma = suma + i;
        }
    }
    if (suma === n){
        console.log(`${n} es perfecto`)
    }else{
        console.log(`${n} no es perfecto`)
    }
}    
NumeroPerfecto();


// 5. Verificar si un número es primo
//Descripción:
// Un número primo solo tiene dos divisores: 1 y él mismo.

function NumeroPrimo(){
    let n = parseFloat(prompt("Ingrese las veces : "));
    let con = 0

    for (i=0; i<=n; i++){
        if(n % i == 0){
          con = con +1;  
        }
    }
    if (con === 2 ){
        console.log(`${n} es un numero primo`)
    }else{
        console.log(`${n} no es un numero primo`)
    }
}    
NumeroPrimo();


// 6. Invertir los dígitos de un número
//Descripción:
// Mostrar el número al revés.

function InvertirDigito() {
   let n = parseFloat(prompt("Ingrese las veces : "));
   let invertido = 0;

 while (n > 0) {
   let digito = n % 10;           
   invertido = invertido * 10 + digito; 
   n = Math.floor(n / 10);        
}

 console.log(invertido);

}
InvertirDigito();

function InvertirDigito () {
  let n = 1234;
  n= n.toString();    // o tambien podria ser n = n + "" 
  let invertido = "";     

 for (let i = n.length-1; i >= 0; i--) {
   invertido = invertido + n[i];    
}

console.log(parseInt(invertido)); 

}
InvertirDigito();


// 7. Contar dígitos de un número
//Descripción:
// Determinar cuántos dígitos tiene un número entero.

function ContadorDigito() {
    let n = 9876
    let lon =0;
    let Contar = 0;

    while(n>0){
        n = Math.floor(n /10) // quita los decimales y deja solo la parte entera.
        Contar = Contar+1
    }
    console.log(`Cantidad de digitos : ${Contar}`)
}
ContadorDigito();

function ContadorDigito() {
    let n = 9876
    let lon = n.toString().length // Pase el numero a texto porque para contar con length solo se puede en texto y arreglo
    let Contar = 0

    for (i=0; i<lon; i++){
        Contar = Contar + 1
    }
    console.log(Contar)
}
ContadorDigito();


// 8. Factorial de un número
//Descripción:
// Calcular el producto de todos los enteros desde 1 hasta n.

function Factorial() {
    let n = parseFloat(prompt("Ingrese el numero : "));
    let factorial = 1 

    for(i=1; i<=n; i++){
        factorial = factorial * i
    }
    console.log(`${n}! = ${factorial}`)
}
Factorial();


// 9. Sumas sucesivas
//Descripción:
// Realizar sumas sucesivas de un número.

function SumaSucesiva() {
    let n = parseFloat(prompt("Ingrese las veces : "));
    let num = parseFloat(prompt("Ingrese el numero : "));
    let suma = 0;

    for (i=0; i<n; i++){
        suma = suma + num
    }
    console.log(`Resultado = ${suma}`)
}
SumaSucesiva();


// 10. Restas sucesivas
//Descripción:
// Restar un número de manera repetitiva hasta llegar a 0 o menor.

function RestaSucesiva() {
    let n = parseFloat(prompt("Ingrese las veces : "));
    let num = parseFloat(prompt("Ingrese el numero : "));
    let contador = 0;

    
    while(num-n >0){  // solo resto si no me voy a pasar
        num = num - n;  // aquí sí se hace la resta (el proceso)
        contador = contador + 1
    }
    
    console.log(`Resultado = ${contador}`)
}
RestaSucesiva();


// BLOQUE 2: Versión con arreglos (listas)
// Aplicar los mismos algoritmos del bloque anterior, pero a una lista de números, procesando
// cada elemento con ciclos.

// 1. Serie de Fibonacci para varios términos

function Fibonacci() {
   let valores = [5, 8, 10]; // cantidad de términos que queremos
   let valor = 0;

for (let c = 0; c < valores.length; c++) {
  valor = valores[c];
  let a = 0;   // primer número
  let b = 1;   // segundo número
  let serie = a + ", " + b; // empezamos la serie con 0 y 1

  for (let i = 3; i <= valor; i++) {
    let c = a + b;   // el siguiente número es la suma de los dos anteriores
    serie = serie + ", " + c;
    a = b;           // movemos los valores
    b = c;
  }
  console.log(`Fibonacci(${valor}): ${serie} `);
}
}
Fibonaccia();


// 2. Divisores de varios números

function Divisor() {
   let numeros = [6, 10, 15];
   let num = 0;
   
    for (let c = 0; c < numeros.length; c++) {
         num = numeros[c];
         let divisor = 0;

      for(let i = 0; i<=num; i++){
        if(num % i == 0){
            divisor = divisor + i + ","
        }
      }
       console.log(`El divisor ${num} → ${divisor}`)
   }
}
Divisor();


// 3. Suma de divisores de varios números

function SumaDivisor() {
    let numeros = [6, 12, 28];
    let num = 0;
    for (let c = 0; c < numeros.length; c++) {
         num = numeros[c];
         let SumaDivisor = 0;

      for(let i = 0; i<=num; i++){
        if(num % i == 0){
            SumaDivisor = SumaDivisor + i ;
        }
      }
       console.log(`El divisor ${num} → ${SumaDivisor}`)
   }
}
SumaDivisor();


// 4. Números perfectos en una lista

function Perfecto() {
    let numeros = [6, 10, 28, 30];
    let num = 0;
    let perfecto = 0;
    
    for (let c = 0; c < numeros.length; c++) {
         num = numeros[c];
         let SumaDivisor = 0;

      for (let i = 0; i<num; i++){
          if (num % i == 0){
             SumaDivisor = SumaDivisor + i ;
          }
        }
      if (num == SumaDivisor){
         perfecto = perfecto + num + ","
        }
    }
    console.log(perfecto)
}
Perfecto();


// 5. Números primos en una lista

function Primo() {
    let numeros = [5, 6, 7, 8, 11];
    let num = 0;
    let primo = 0;
    
    for (let c = 0; c < numeros.length; c++) {
        num = numeros[c];
        let ContarDivisor = 0;

      for(let i = 0; i<=num; i++){
          if (num % i == 0){
             ContarDivisor = ContarDivisor + 1 ;
            }
        }
      if (ContarDivisor == 2){
         primo = primo + num + ","
        }
   }
    console.log(primo)
}
Primo();


// 6. Invertir varios números

function Invertir() {
    let numeros = [123, 456, 780]
    let num = 0;
    
    for (let c = 0; c < numeros.length; c++) {
         num = numeros[c];
         let lon = num.toString().length
         let inv = 0;

      for(let i = 0; i<lon; i++){
         let digito = num % 10;
         inv = inv * 10 + digito;
         num = Math.floor(num/10);
        }
        console.log(`${numeros[c]} → ${inv}`)
     }
}
Invertir();


// 7. Contar dígitos de varios números

function ContarDig() {
    let numeros = [45, 678, 12345];
    let num = 0;
    
    for (let c = 0; c < numeros.length; c++) {
         num = numeros[c];
         let con = 0;

         while (num > 0){
              num = Math.floor(num / 10)
              con = con + 1;
            }
        console.log(`${numeros[c]} → ${con} digitos`)
     }
}
ContarDig();


// 8. Factorial de varios números

function ArrayFactorial() {
    let numeros = [3, 4, 5];
    let num = 0;
    
    for (let c = 0; c < numeros.length; c++) {
         num = numeros[c];
         let factorial = 1;

         for (let i = 1; i <= num; i++){
             factorial = factorial * i;
            }
        console.log(`${num}! = ${factorial}`)
    }
}
ArrayFactorial();


// 9. Sumas sucesivas en una lista

function ArraySumaSecuencial() {
    let numeros = [2, 3, 4];
    let num = 0;
    let n = parseFloat(prompt("Ingrese las veces : "));
    
    for (let c = 0; c < numeros.length; c++) {
         num = numeros[c];
         let suma = 0;

         for (let i = 1; i <=n; i++){
             suma = suma + num;
            }
        console.log(`${num} x ${n} = ${suma}`)
    }
}
ArraySumaSecuencial();


// 10. Restas sucesivas en una lista

function ArrayRestaSecuencial() {
    let numeros =  [15, 22, 30];
    let num = 0;
    let valor_restado = parseFloat(prompt("Ingrese el valor : "));
    
    for (let c = 0; c < numeros.length; c++) {
         num = numeros[c];
         let resta = 0;
         let con = 0;

         while (num  >=valor_restado ){
             num = num - valor_restado;
             con = con + 1;
            }
        console.log(`${numeros[c]} → ${num}`);
        console.log(`contador ${numeros[c]} = ${con}`)
    }
}
ArrayRestaSecuencial();