class model
{

    #nombre;
    #apellido;
    #inasistencias;

    constructor(nombre, apellido, inasistencias)
    {
        this.#nombre = nombre
        this.#apellido = apellido
        this.#inasistencias = inasistencias
        
    }

    get nombre() {
        return this.#nombre;
    }
    get apellido() {
        return this.#apellido;
    }
    get inasistencias() {
        return this.#inasistencias;
    }

    set nombre(nombre) {
        this.#nombre = nombre;
    }
    set apellido(apellido) {
        this.#nombre = apellido;
    }
    set inasistencias(inasistencias) {
        this.#nombre = inasistencias;
    }

}