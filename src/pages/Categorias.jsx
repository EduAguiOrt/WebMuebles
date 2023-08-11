import Footer from "../template/footer"
import Header from "../template/header"
import Navbar from "../template/navbar"


import React, { useEffect, useState } from "react";
import { show_alert } from "../SweetAlert/Swal";
import axios from 'axios';


const Categorias = () => {


  const apiUrl = 'http://localhost/Ci_v3Muebles/index.php/api/';
  //
  const [title, setTitle] = useState('');
  //
  const [categorias, setCategorias] = useState([]);
  //
  const [Operation, setOperation] = useState(1);
  //
  const [id, setId] = useState('');
  const [tipo, setTipo] = useState('');
  const [fecha_alta, setFecha_alta] = useState('');
  //************************************************
  useEffect(() => {
    getCategorias();
  }, []);
  //************************************************
  //*********Funciones GET************** */
  const getCategorias = async () => {
    try {
      const response = await fetch(`${apiUrl}Categorias`);
      const data = await response.json();
      setCategorias(data);
    } catch (error) {
      console.error('Error al obtener los datos:', error);
    }
  };

  const openModal = (opcion, id, tipo, fecha) => {
    setOperation(opcion);
    setId('');
    setTipo('');
    setFecha_alta('');
    if (opcion === 1) {
      setTitle('Registrar Categoría');
    } else {
      if (opcion === 2) {
        setTitle('Actualizar Categoría');
        setId(id);
        setTipo(tipo);
        setFecha_alta(fecha);
      }
      window.setTimeout(() => {
        document.getElementById('nombre').focus();
      }, 500)
    };
  }
  const validar = () => {
    var parametros;
    var metodo;
    if (tipo.trim() === '') {
      show_alert('tipo no puede estar vacío.')
    } else {
      if (fecha_alta.trim() === '') {
        show_alert('fecha no puede estar vacío.');
      }
    }
    if (Operation === 1) {
      parametros = {
        tipo: tipo.trim(),
        fecha_alta: fecha_alta.trim(),
      };
    } else {
      parametros = {
        id: id.trim(),
        tipo: tipo.trim(),
        fecha_alta: fecha_alta.trim(),
      };
      metodo = 'PUT';
    }
    handlePost(parametros);
    // console.log(parametros, metodo);
    // enviarSolicitud(metodo, parametros);
  }

  const handlePost = (parametros) => {

    // const formData = new FormData();

    // // Agrega los datos que deseas enviar en el formulario
    // formData.append('tipo', tipo);
    // formData.append('fech_alta', fecha_alta);

    fetch(`${apiUrl}Usuarios/`, {
      method: 'POST',
      body: parametros,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error en la solicitud POST->');
        }
        return response.json();
      })
      .then((responseData) => {
        console.log(responseData); // Aquí puedes hacer algo con la respuesta del servidor
      })
      .catch((error) => {
        console.error(error);
      });
  };



  return (
    <>
      <Header />
      <Navbar />
      <div className="content-wrapper">
        <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h3 className="card-title ">
                  <i className="nav-icon fas fa-couch mr-2" />
                  {title}
                </h3>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="form-group col-xs-12 col-md-8 col-lg-3">
                    <label>Código de categoria:</label>
                    <input
                      disabled
                      type="text"
                      name=""
                      id=""
                      className="form-control"
                      placeholder=""
                      required
                      value={id}
                      onChange={(e) => setId(e.target.value)}
                    />
                  </div>
                  <div className="form-group col-xs-12 col-md-8 col-lg-3">
                    <label>Tipo:</label>
                    <input
                      type="text"
                      name=""
                      id=""
                      className="form-control"
                      placeholder=""
                      required
                      value={tipo}
                      onChange={(e) => setTipo(e.target.value)}
                    />
                  </div>
                  <div className="form-group col-xs-12 col-md-8 col-lg-4">
                    <label>Fecha de registro(A/M/D)</label>
                    <input
                      id="startDate"
                      name=""
                      className="form-control"
                      type="text"
                      value={fecha_alta}
                      onChange={(e) => setFecha_alta(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" id='btnCerrar' className="btn btn-danger" data-dismiss="modal">Cerrar</button>
                <button onClick={() => validar()} className="btn btn-success">Guardar</button>
              </div>
            </div>
          </div>
        </div>
        {/* DataTable */}
        <section className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="card-header">
                    <h3 className="card-title float-left">Consultas de Usuarios</h3>
                    <button onClick={() => openModal(1)} type="button" className="btn btn-primary float-right" data-toggle="modal" data-target="#exampleModal">
                      <i className="fas fa-plus fa-lg mr-2" />
                      Agregar
                    </button>
                  </div>
                  <div className="card-body">
                    <table id="example1" className="table table-bordered table-striped">
                      <thead>
                        <tr>
                          <th>ID</th>
                          <th>Tipo</th>
                          <th>Fecha alta</th>
                          <th>Acciones</th>

                        </tr>
                      </thead>
                      <tbody>
                        {categorias.map((cat) => (
                          <tr key={cat.id}>
                            <td>{cat.id}</td>
                            <td>{cat.tipo}</td>
                            <td>{cat.fecha_alta}</td>
                            <td>
                              <div className="row align-items-center">
                                <div className="col-auto">
                                  <button
                                    onClick={() => openModal(2, cat.id, cat.tipo, cat.fecha_alta)}
                                    type="button"
                                    className="btn btn-primary float-right"
                                    data-toggle="modal"
                                    data-target="#exampleModal">
                                    <i className="fas fa-edit" />
                                    {/* Editar */}
                                  </button>
                                </div>
                                <div className="col-auto">
                                  <button className="btn btn-danger" type="button">
                                    <i className="fas fa-trash-alt" />
                                    {/* Borrar */}
                                  </button>
                                </div>
                              </div>

                            </td>
                          </tr>
                        ))}
                      </tbody>
                      <tfoot>
                        <tr>
                          <th>ID</th>
                          <th>Tipo</th>
                          <th>Fecha alta</th>
                          <th>Acciones</th>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}
export default Categorias