

subtotal=0

for  
 (let i = 1; i <=5; i++) {
    let nombre=parseInt(prompt("ingrese el nombre del producto"+i))
    let precio=Number(prompt("ingrese el precio del producto"+i))
    
    subtotal=subtotal+precio
}

    
    const iva=0.19*subtotal;
    
    const total=subtotal+iva;


 console.log("el subtotal es: " +subtotal)
 console.log("el iva que debes pagar es:"+iva)
 console.log(" el total a pagar es: "+(subtotal+iva))



