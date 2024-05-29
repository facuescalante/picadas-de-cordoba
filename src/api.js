const mostrarRecetas = async () => {
    try {
        const res = await fetch("https://api.sampleapis.com/recipes/recipes");
        const datos = await res.json();

        // Filtrar las recetas con URL de imagen no vacía
        const recetasConImagen = datos.filter(receta => receta.photoUrl);

        let recetasHTML = "";
        recetasConImagen.forEach(receta => {
            recetasHTML += `
                <div class="receta">
                    <img class="poster" src="${receta.photoUrl}" alt="${receta.title}">
                    <h3 class="titulo">${receta.title}</h3>
                </div>
            `;
        });

        document.getElementById("container").innerHTML = recetasHTML;
    } catch (error) {
        console.log(error);
    }
};

// Llama a la función para mostrar las recetas
mostrarRecetas();



