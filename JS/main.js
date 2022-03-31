/*const url = 'https://davidrotabor.github.io/Valen/estudiantes.json'

const contenedor = document.querySelector('tbody')
let resultados = ''

const modalEstudiante = new bootstrap.Modal(document.getElementById('modalEstudiante'))
const formEstudiante = document.querySelector('form')
const nombre = document.getElementById('nombre')
const apellido = document.getElementById('apellido')
const inasistencias = document.getElementById('inasistencias')
var opcion = ''

btnCrear.addEventListener('click', ()=>{
    nombre.value = ''
    apellido.value = ''
    inasistencias.value = ''
    modalEstudiante.show()
    opcion = 'crear'
})

const mostrar = (estudiante) => {
    var id = 0
    estudiante.push({nombre: "David", apellido: "hola", inasistencias: 20} )
    estudiante.forEach(estudiante => {
        resultados += `<tr>
                            <td>${id}</td>
                            <td>${estudiante.nombre}</td>
                            <td>${estudiante.apellido}</td>
                            <td>${estudiante.inasistencias}</td>
                            <td class="text-center"><a class="btnEditar btn btn-primary">Editar</a><a class="btnBorrar btn btn-danger">Borrar</a></td>
                       </tr>
                    `   
                    id += 1 
    })
    contenedor.innerHTML = resultados   
}
var estudiantes2 =[]
fetch(url)
.then( response => response.json())
.then( data => mostrar(data))
.then( data => estudiantes2 = data)
.then( data => console.log(data))
.catch( error  => console.log(error))

const on = (element, event, selector, handler) => {
    element.addEventListener(event, e => {
        if (e.target.closest(selector)) {
            handler(e)
        }
    })
}

on(document, 'click', '.btnBorrar', e => {
    const fila = e.target.parentNode.parentNode
    const id = fila.firstElementChild.innerHTML
    var opcion = confirm("¿Estás seguro de querer borrar el item: " , id);
    if (opcion == true) {
        const mostrar = (estudiante) => {
            var id = 0
            estudiante.splice(id, id+1)
            console.log(estudiantes2)
            estudiante.forEach(estudiante => {
                resultados += `<tr>
                                    <td>${id}</td>
                                    <td>${estudiante.nombre}</td>
                                    <td>${estudiante.apellido}</td>
                                    <td>${estudiante.inasistencias}</td>
                                    <td class="text-center"><a class="btnEditar btn btn-primary">Editar</a><a class="btnBorrar btn btn-danger">Borrar</a></td>
                               </tr>
                            `   
                            id += 1 
            })
            contenedor.innerHTML = ""   
        }
	}
	
})*/