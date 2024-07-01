const mostrarProductos = async () => {
    try {
        const res = await fetch("https://facumax.pythonanywhere.com/productos");
        const productos = await res.json();

        let productosHTML = "";
        productos.forEach(producto => {
            productosHTML += `
                <div class="receta">
                    <div class="poster-wrapper">
                        <img class="poster" src="${producto.imagen}" alt="${producto.nombre}">
                    </div>
                    <h3 class="titulo">${producto.nombre}</h3>
                    <p class="precio">$${producto.precio}</p>
                    <p class="stock">Stock: ${producto.stock} unidades</p>
                    <p class="tipo">${producto.tipoproducto}</p>
                </div>
            `;
        });

        document.getElementById("container").innerHTML = productosHTML;
    } catch (error) {
        console.log(error);
    }
};

// Llama a la función para mostrar los productos
mostrarProductos();




