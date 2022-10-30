const boton = document.getElementById('btn')

boton.addEventListener('click', function(){
    
    const cantidad = document.getElementById('cantidad').value

    
    const color = document.getElementById('color').value

   
    const precioTotal = document.getElementById('precioTotal')
   
    precioTotal.innerHTML = (cantidad * 25000).toLocaleString()

    const cantidadTotal = document.getElementById('cantidadTotal')
    cantidadTotal.innerHTML = cantidad

    const colorCircle = document.getElementById('colorCircle')
    colorCircle.style.backgroundColor = color
    

    


})
 