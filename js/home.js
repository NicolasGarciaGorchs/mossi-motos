const pintarProductos = (data) => {
    const contenedor = document.getElementById("productoContenedor");

    data.forEach(producto => {
      const div = document.createElement('div');
      div.classList.add('card');
      div.innerHTML += `<div>
                        <img class= "fotoProducto" src=${producto.imagen}>
                        </div>                          
                        <div class="card-image">
                        
                          <span class="card-title">${producto.nombre}</span>
                        </div>
                        
                        <div class="card-content">
                        
                            <p class="textoDesc">${producto.desc}</p>
                            <p class="sizePrecio">$ ${producto.precio}</p>
                        </div>
                        <div>
                        <button type="button" class="btn btn-primary comprar"><i id=${producto.id} class="agregar">Comprar</i></button>
                        </div>
                       `
      contenedor.appendChild(div);
    });
  };