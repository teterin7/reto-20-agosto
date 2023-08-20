
conteoPersonasConhijos=0
conteopersonasSinhijos=0
todoslosHijos=0

let grupo=Number(prompt("ingrese la cantidad del grupo"))
let Numeroperso=1;

while (Numeroperso<=grupo) {
let Numhijos=Number(prompt("cuantos hijos tiene?"))
    
todoslosHijos=todoslosHijos+Numhijos

 if(Numhijos>0){
    conteoPersonasConhijos=conteoPersonasConhijos+1
 } else{
    conteopersonasSinhijos=conteopersonasSinhijos+1
 } Numeroperso=Numeroperso+1;
 
    }
promediohijos=todoslosHijos/grupo

console.log("personas con hijos" + conteoPersonasConhijos);
console.log("personas sin hijos" +conteopersonasSinhijos);
console.log(" promedio hijos del grupo"+promediohijos)
