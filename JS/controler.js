const url = 'https://davidrotabor.github.io/Valen/estudiantes.json'
fetch(url)
.then( response => response.json())
.then( data => mostrar(data))
.catch( error  => console.log(error))
let estudiantes = new Array() 
const mostrar = (estudiante) => {
    var id = 0
    estudiante.forEach(estudiante => {
        console.log(id)
        estudiantes.push({id: id, nombre: estudiante.nombre, apellido: estudiante.apellido, inasistencias: estudiante.inasistencias} )
        id += 1 
    })  
}

