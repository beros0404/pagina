const contenedor = document.querySelector('tbody')
let idForm = 0
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
  opcion = 'crear'
  modalEstudiante.show()
})

setTimeout(() => {
    resultados = ""
    id = 0
    estudiantes.forEach(estudiantes => {
      resultados += `<tr>
                          <td>${id}</td>
                          <td>${estudiantes.nombre}</td>
                          <td>${estudiantes.apellido}</td>
                          <td>${estudiantes.inasistencias}</td>
                          <td class="text-center"><a class="btnEditar btn btn-primary">Editar</a><a class="btnBorrar btn btn-danger">Borrar</a></td>
                     </tr>
                  `   
                  id += 1 
  })
  contenedor.innerHTML = resultados 

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
      if (estudiantes.length == 1) {
        estudiantes = new Array()
        contenedor.innerHTML = ""
      }
      else {
        estudiantes.splice(id, 1)
        for (i = id; i < estudiantes.length; i++) {
          estudiantes[i].id -= 1
        }
        escribir()
      }   
	}
})


on(document, 'click', '.btnEditar', e => {
  const fila = e.target.parentNode.parentNode
  idForm = fila.children[0].innerHTML
  const nombreForm = fila.children[1].innerHTML
  const apellidoForm = fila.children[2].innerHTML
  const inasistenciasForm = fila.children[3].innerHTML
  nombre.value = nombreForm
  apellido.value = apellidoForm
  inasistencias.value = inasistenciasForm
  opcion = "editar"
  modalEstudiante.show()
})

  }, 100);

formEstudiante.addEventListener('submit', (e) => {
  e.preventDefault()
  if(opcion=="crear") {
    estudiantes.push({id: estudiantes.length, nombre: nombre.value, apellido: apellido.value, inasistencias: inasistencias.value})
  }
  if(opcion == "editar") {
    estudiantes[idForm] = {id: idForm, nombre: nombre.value, apellido: apellido.value, inasistencias: inasistencias.value}  
  }
  escribir()
  modalEstudiante.hide()
})

function escribir() {
  resultados = ""
  estudiantes.forEach(estudiantes => {
      resultados += `<tr>
                          <td>${estudiantes.id}</td>
                          <td>${estudiantes.nombre}</td>
                          <td>${estudiantes.apellido}</td>
                          <td>${estudiantes.inasistencias}</td>
                          <td class="text-center"><a class="btnEditar btn btn-primary">Editar</a><a class="btnBorrar btn btn-danger">Borrar</a></td>
                     </tr>
                  `   
                  contenedor.innerHTML = resultados  
  })
}



