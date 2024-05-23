const getAllFilmsTITLE = async (TITLE)=>{
    let res = await fetch(`https://search.imdbot.workers.dev/${TITLE}`)
    let data = await res.json();
    return data;
}

const getFilmsTITLE = async(e)=>{
    e.preventDefault();
    let a = e.target.parentElement.children;
    for(let val of a){
        val.classList.remove('activo');
    }
    e.target.classList.add('activo');
    
    let titulo = document.querySelector("#titulo-pelicula");
    information__2.innerHTML = "";
    let año = document.querySelector("#info-pelicula");
    information__2.innerHTML = "";

    let pelicula = await getAllFilmsTITLE(e.target.TITLE);

    await clear();
    
}
 const busquedaPelicula = async()=>{
     let rockets = await getAllFilmsTITLE();
     let div = document.createElement("div");
     div.classList.add("boton-buscar")
  
     rockets.forEach((val,TITLE) => {
         let a = document.createElement("a");
         a.setAttribute("href","#");
         a.TITLE = val.TITLE;
         a.textContent = TITLE+1;
         a.addEventListener("click", getFilmsTITLE)
         div.appendChild(a);
     });
    
     return div;
 };

