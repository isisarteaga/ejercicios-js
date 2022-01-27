const ejercicio1 = [
  3, 100, 85, 64, 46, 39, 40, 30, 20, 24, 25, 6, 10, 54, 82, 71, 67, 77, 17, 29,
  19, 88, 456, 13, 23, 24,
];
/*
function es_primo(num){
  for(let i =2; i<num; i++){
    if(num % i==0){
      return false;
    } 
  }
  return true;
}

¿ejercicio1.forEach(function(num){
  console.log("El numero: %d, ¿es primo? : %s", num, es_primo(num));
});*/

const ejercicio2 = [
  {
    nombre: "Gabriel",
    edad: 22,
    esFamiliar: false,
  },
  {
    nombre: "Jaime",
    edad: 15,
    esFamiliar: true,
  },
  {
    nombre: "María",
    edad: 18,
    esFamiliar: true,
  },
  {
    nombre: "Angel",
    edad: 19,
    esFamiliar: true,
  },
  {
    nombre: "Fer",
    edad: 18,
    esFamiliar: true,
  },
  {
    nombre: "Rachel",
    edad: 30,
    esFamiliar: true,
  },
];

/*const aceptados=ejercicio2.filter(ejercicio2=> ejercicio2.edad>=18 && ejercicio2.esFamiliar==true);
console.log(aceptados)*/

let fibo=[0,1];
function fibonacci(n){
  for(let i=2; i<= n; i++){
    fibo[i]= fibo[i-2]+ fibo[i-1]
  }
  print("\n");
  return fibo
}

console.log(fibonacci(50), "\n")
