
let nombre=prompt("Cual es su nombre")
let cantidad=prompt("Digite la cantidad a llevar")
let huevoUnidad=250
let precioNeto=huevoUnidad*cantidad
let precio_descuento
if (cantidad > 0 && cantidad <=100) {
   console.log (precio_descuento = precioNeto-(precioNeto*(3/100)))
    }    
    else if  (cantidad >=100 && cantidad <=200){
        console.log (precio_descuento= precioNeto-(precioNeto*(5/100)))
    }
     else if(cantidad > 200 && cantidad <= 300){
        console.log (precio_descuento= precioNeto-(precioNeto*(8/100)))
     }
     else{ (cantidad >= 301)
     } console.log(precio_descuento= precioNeto-(precioNeto*(10/100)))

     alert(nombre+" "+"su precio final es: "+precio_descuento)
    
   




