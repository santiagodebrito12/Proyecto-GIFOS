
// Funcion Inicial, muestras los trending gifos de la semana
//Evento
window.addEventListener('DOMContentLoaded',()=>{
    consultarAPI();
})


//funciones
async function consultarAPI() {
    const apiKey = '8ixnNbXdQIg78VyWbNUbJIcDb7L2gkkw';
    // const url=`https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=${arguments[0]}`;
    const url=`https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=6`;
    //consultarAPI
    
    try {
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        obtenerGifos(resultado.data);
    } catch (error) {
        console.log(error);
    }
    
}




function obtenerGifos(resultado) {
    resultado.forEach((gifo)=>{
        const{embed_url}=gifo;

        //crear iframe
        const gifoHtml = document.createElement('iframe');
        gifoHtml.src=embed_url;
        gifoHtml.classList.add('iframe');
        gifoHtml.setAttribute('frameborder', '0');
        gifoHtml.setAttribute('allowFullScreen', true);

        //insertar gifo
        const contenedorGifos = document.querySelector('.contenedor-gifos');
        contenedorGifos.appendChild(gifoHtml);  
    })
    
}


//Funcion modo Nocturno cambio modo nocturno
const btnDark = document.querySelector('.btn-nocturno');
const hojaEstilo = document.querySelector('.hoja-estilo');


//Evento
btnDark.addEventListener('click', (e)=>{
    e.preventDefault();
    if(e.target.classList.contains('dark')){
        console.log('contiene dark...');
        btnDark.classList.remove('dark');
        hojaEstilo.href='assets/css/estilos.css';
    }else{
        btnDark.classList.add('dark');
        hojaEstilo.href='assets/css/estilodark.css';
    }
    
})

// Funcion de busqueda

const btnBuscar = document.querySelector('.btn-buscar'); 
const inputBusqueda = document.querySelector('.buscador');



//evento

btnBuscar.addEventListener('click', (e)=>{
    const terminoBusqueda = inputBusqueda.value.toUpperCase();
  
    busqueda(terminoBusqueda);
})

async function busqueda(terminoBusqueda) {
    const apiKey = '8ixnNbXdQIg78VyWbNUbJIcDb7L2gkkw';
    const url = `https://api.giphy.com/v1/gifs/search?q=${terminoBusqueda}&api_key=${apiKey}&limit=9`;

    try {
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        mostrarBusqueda(resultado.data,terminoBusqueda);

    } catch (error) {
        console.log(error)
    }
}



function mostrarBusqueda(resultado,terminoBusqueda) {
    console.log(terminoBusqueda);
    resultado.forEach((gifo)=>{
        const{embed_url}=gifo;
        //crear iframe
        const gifoHtml = document.createElement('iframe');
        gifoHtml.src=embed_url;
        gifoHtml.classList.add('iframe');
        gifoHtml.setAttribute('frameborder', '0');
        gifoHtml.setAttribute('allowFullScreen', true);

        console.log(gifoHtml);

    //crear seccion de busqueda
    const seccionBusqueda = document.querySelector('.seccion-busqueda');
    if(seccionBusqueda.classList.contains('open')){
        seccionBusqueda.classList.remove('open');
    }else{
        seccionBusqueda.classList.add('open');

        //span

        const border = document.querySelector('.span-border');
        border.classList.add('border');
        //titulo
        const titulo = document.querySelector('.titulo-busqueda');
        titulo.textContent=terminoBusqueda;
    }

    
    //insertar en gifos en html
    const contenedorBusqueda = document.querySelector('.contenedor-busqueda');
    contenedorBusqueda.classList.add('contenedor-gifos');
    contenedorBusqueda.appendChild(gifoHtml);
  
    })
}


// BURGUER MENU -MOBILE

const burgerMenu = document.querySelector('.burger-menu');
const nav        = document.querySelector('.nav');
burgerMenu.addEventListener('click',() =>{
    if(nav.classList.contains('open')){
        nav.classList.remove('open');
    }else{
        nav.classList.add('open');
    }
})


