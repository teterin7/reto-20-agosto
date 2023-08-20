
let mayorEdad=0
let menorEdad=0

for (let i=1;i<=10;i++){
  let Edad=parseInt(prompt("input your age"+i));
 
 if (Edad>=18){
    
    mayorEdad++ ;
    } else {
    menorEdad++ ;
    }       
    }



alert("la cantidad de mayores de edad es"+ mayorEdad)
    alert( "la cantidad de menores es"+ menorEdad)




