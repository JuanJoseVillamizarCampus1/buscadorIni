console.log(campers);
/*Selectores*/
const nombreCamper=document.querySelector('#nombre')
const edad = document.querySelector('#edad')
const minPromedio=document.querySelector('#minimo')
const maxPromedio=document.querySelector('maximo')
const nivelCampus=document.querySelector('#nivelCampus')
const nivelIngles=document.querySelector('#nivelIngles')
const especialidad=document.querySelector('#especialidad')
const tecnologia=document.querySelector('#expertoTecnologia')
/*Llenando dinamicamente los valores del Select Names*/

campers.forEach((opcionCamper)=>{
    const opcion=document.createElement('optihaissamon')
    opcion.value =opcionCamper.nombre
    opcion.textContent=opcionCamper.nombre
    document.querySelector('#nombre').appendChild(opcion)   
})

/*Llenando dinamicamente los valores del Select edades*/
const max = 46
const min = 15

for(let i = min;i<max;i++){
    
 
 const edad = document.createElement('option')
 edad.value=i
 edad.textContent=i
 document.querySelector('#edad').appendChild(edad)

}
/* Objeto con parametros seleccionados*/
const parametros = {
    nombre :"",
    edad:"",
    minPromedio:"",
    maxPromedio:"",
    nivelCampus:"",
    nivelIngles:"",
    especialidad:"",
    tecnologia:""
}


/*Event listener*/
document.addEventListener('DOMContentLoaded',()=>{
    showCampers(campers)  
})

/*Funcion para inyectar html dinamicamente*/
function showCampers(campers) {
    const containerCards=document.querySelector('#tarjetas')/*SELECCIONANDO PADRE */
    //Construyendo cards por cada camper
    campers.forEach((camper)=>{
        const camperHtml=document.createElement('div')
    //Destructurando
    const {nombre , imagen, detalle , edad , promedio, nivelCampus}=camper
       
        camperHtml.innerHTML=`
 <div class="card" style="width: 18rem;">

            <img src="img/${imagen}" class="card-img-top" alt="img">
            <div class="card-body">
                <h5 class="card-title">${nombre}</h5>
                <p class="card-text">S${detalle}.</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">edad: ${edad}</li>
                <li class="list-group-item">Promedio: ${promedio}</li>
                <li class="list-group-item">Nivel Campus: ${nivelCampus}</li>
            </ul>       
</div>
`;
containerCards.appendChild(camperHtml)
    })
}
