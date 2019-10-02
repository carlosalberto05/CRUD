import React, { Component } from 'react';

class Formulario extends Component {

    //crear los refs

    crearPost = () => {
    //leer los refs

    //enviar por props
    }

    render() {
        return (
               <form onSubmit={this.crearPost} className="col-8">
                   <legend className="text-center">Crear Nuevo Post</legend>
                   <div className="form-group">
                       <label>Título del Post:</label>
                       <input type="text" ref={this.tituloRef} className="form-control"
                       placeholder="Título del Post"/>
                   </div>
                   <div className="form-group">
                       <label>Contenido: </label>
                       <textarea className="form-control" placeholder="Contenido..."></textarea>
                   </div>
                   <button type="submit" className="btn btn-primary">Crear</button>
               </form>
        );
    }
}

export default Formulario;