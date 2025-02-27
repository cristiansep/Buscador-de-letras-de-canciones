import React, {useState} from 'react';


function Formulario (props) {

    const [busqueda,agregarBusqueda] = useState({
        artista: '',
        cancio: ''
    });

    //Funcion para actualizar state 
    const actualizarState = e =>{
        agregarBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        });
    }

    //cuando se hace submit al formulario
    const enviarInformacion = e =>{
        e.preventDefault();

        props.consultarAPILetra(busqueda);
    }

    return (
        <div className="bg-primary">
        <div className="container">
            <div className="row">
                <form onSubmit={enviarInformacion}
                  className="col card text-white bg-transparent  mb-5 pt-5 pb-2">
                    <fieldset>
                        <legend className="text-center">Buscador Letras Canciones</legend>
                        <div className="row">
                            <div className="col-md-6">
                              <div className="form-group">
                                  <label>Artista</label>
                                  <input 
                                      type="text" 
                                      className="form-control" 
                                      name="artista" 
                                      placeholder="Nombre Artista" 
                                      onChange={actualizarState}
                                      required
                                  />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                  <label>Canción</label>
                                  <input 
                                      type="text" 
                                      className="form-control" 
                                      name="cancion" 
                                      placeholder="Nombre Canción" 
                                      onChange={actualizarState}
                                      required
                                  />
                              </div>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-outline-danger float-right">Buscar</button>
                    </fieldset>
                </form>
            </div>
        </div>
    </div>
    );
};

export default Formulario;



