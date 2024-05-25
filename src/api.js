
const mostrarRecetas = async () => {
    try {
        const res = await fetch("https://api.sampleapis.com/recipes/recipes");
        // console.log(res);
        const datos = await res.json();
        console.log(datos);
        let recetas = "";
        datos.forEach(receta => {
            recetas += `
             <div class="receta">
                <img class="poster" src=${receta.photoUrl}"
                <h3 class="titulo">${receta.title}</h3>
             </div>
            
            `;
        });
        document.getElementById("container").innerHTML = recetas;

    } catch (error) {
        console.log(error);
    }



}
mostrarRecetas();