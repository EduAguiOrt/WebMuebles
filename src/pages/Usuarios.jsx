import Footer from "../template/footer"
import Header from "../template/header"
import Navbar from "../template/navbar"

import React, { useEffect, useState } from "react";
import { show_alert } from "../SweetAlert/Swal";
import axios from 'axios';

const apiUrl = 'http://localhost/Ci_v3Muebles/index.php/api/';
const Usuarios = () => {

    //
    const [dataListTipo, setDataListTipo] = useState([]);
    const [selectedItem, setSelectedItem] = useState('');
    //
    const [showPassword, setShowPassword] = useState(false);
    //
    const [title, setTitle] = useState('');
    //
    const [usuarios, setUsuarios] = useState([]);
    //
    const [Operation, setOperation] = useState(1);
    //
    const [id, setId] = useState('');
    const [nombre, setNombre] = useState('');
    const [tipo_usr, setTipo_usr] = useState('');
    const [fotografia, setFotografia] = useState('');
    const [username, setUsername] = useState('');
    const [contrasenia, setContrasenia] = useState('');
    const [fecha_registro, setFecha_registro] = useState('');
    //************************************************
    useEffect(() => {
        getUsuarios(); // Llamar a la función para obtener los datos de la API
        getTipoUsr();
    }, []);
    //************************************************
    //*********Funciones GET************** */
    const getUsuarios = async () => {
        try {
            const response = await fetch(`${apiUrl}Usuarios`);
            const data = await response.json();
            setUsuarios(data);
        } catch (error) {
            console.error('Error al obtener los datos:', error);
        }
    };

    const getTipoUsr = async () => {
        try {
            const response = await fetch(`${apiUrl}TipoUsr`);
            const data = await response.json();
            setDataListTipo(data);
        } catch (error) {
            console.error("Error al obtener los elementos:", error);
        }
    };
    //*************************************************
    //
    const handleSelectionChange = (e) => {
        setSelectedItem(e.target.value);
    };
    //mostrar/ocultar password
    const togglePasswordVisibility = () => {
        setShowPassword((prevState) => !prevState);
    };
    const openModal = (opcion, id, nombre, puesto, foto, username, contrasenia, fecha) => {
        setOperation(opcion);
        setId('');
        setNombre('');
        setTipo_usr('');
        setFotografia('');
        setUsername('');
        setContrasenia('');
        setFecha_registro('');

        if (opcion === 1) {
            setSelectedItem('');
            setTitle('Registrar Usuario');
        } else {
            if (opcion === 2) {
                setTitle('Editar Usuario');
                dataListTipo.forEach((item) => {
                    if (item.tipo === puesto) {
                        setSelectedItem(item.id);
                    }
                });
                setId(id);
                setNombre(nombre);
                setTipo_usr(selectedItem);
                setFotografia(foto);
                setUsername(username);
                setContrasenia(contrasenia);
                setFecha_registro(fecha);
            }
            window.setTimeout(() => {
                document.getElementById('nombre').focus();
            }, 500)
        };
    };
    const validar = () => {
        var parametros;
        var requestOptions;
        var metodo;
        if (nombre.trim() === '') {
            show_alert('Nombre no puede estar vacío.')
        }
        if (selectedItem.trim() === '') {
            show_alert('Puesto no puede estar vacío.');
        }
        if (username.trim() === '') {
            show_alert('Username no puede estar vacío.');
        }
        if (contrasenia.trim() === '') {
            show_alert('Contraseña no puede estar vacía.');
        }
        if (fecha_registro.trim() === '') {
            show_alert('Fecha de registro no puede estar vacía.');
        }
        if (Operation === 1) {
            parametros = {
                nombre: nombre.trim(),
                tipo_usr: selectedItem.trim(),
                username: username.trim(),
                contrasenia: contrasenia.trim(),
                fecha_registro: fecha_registro.trim(),
            };

        } else {
            parametros = {
                id: id.trim(),
                nombre: nombre.trim(),
                tipo_usr: tipo_usr.trim(),
                username: username.trim(),
                contrasenia: contrasenia.trim(),
                fecha_registro: fecha_registro.trim(),
            };
            metodo = 'PUT';
        }
        console.log(parametros);
        enviarSolicitud(parametros);
    };



    const handlePost = () => {
        var parametros;
        var metodo;
        if (nombre.trim() === '') {
            show_alert('Nombre no puede estar vacío.')
        }
        if (selectedItem.trim() === '') {
            show_alert('Puesto no puede estar vacío.');
        }
        if (username.trim() === '') {
            show_alert('Username no puede estar vacío.');
        }
        if (contrasenia.trim() === '') {
            show_alert('Contraseña no puede estar vacía.');
        }
        if (fecha_registro.trim() === '') {
            show_alert('Fecha de registro no puede estar vacía.');
        }
        if (Operation === 1) {
            parametros = {
                nombre: nombre.trim(),
                tipo_usr: selectedItem.trim(),
                username: username.trim(),
                contrasenia: contrasenia.trim(),
                fecha_registro: fecha_registro.trim(),
            };
            metodo = 'POST';
        } else {
            parametros = {
                id: id.trim(),
                nombre: nombre.trim(),
                tipo_usr: tipo_usr.trim(),
                username: username.trim(),
                contrasenia: contrasenia.trim(),
                fecha_registro: fecha_registro.trim(),
            };
            metodo = 'PUT';
        }
        // console.log(metodo, parametros);
        enviarSolicitud(metodo, parametros);
    };
    const enviarSolicitud = (metodo, parametros) => {
        fetch('http://localhost/Ci_v3Muebles/index.php/api/Usuarios', {
            method: metodo, // or 'PUT'
            body: JSON.stringify(parametros), // data can be `string` or {object}!
            headers: {
                "Content-Type": "application/json",
            },
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
        // .then((res) => res.json())
        // .then((response) => console.log("Success:", response))
        // .catch((error) => console.log("Error:", error));
    };









    const handleDelete = async (id) => {
        try {
            const response = await fetch(`${apiUrl}Usuarios/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    // You might need to include authentication headers or other necessary headers
                },
            });

            if (!response.ok) {
                throw new Error('Failed to delete record');
            }
        } catch (err) {
            console.log(err.message);
        } finally {
            getUsuarios();
            console.log('Borrado');
        }
    };




    return (
        <>
            <Header />
            <Navbar />
            {/* <form> */}
            <div className="content-wrapper">
                {/* Button trigger modal */}
                <div>
                    {/* Modal */}
                    <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-lg" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">
                                        <i className="fas fa-user mr-2"></i>
                                        {title}
                                    </h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true"></span>
                                    </button>
                                </div>
                                <div className="modal-body bd-example-modal-lg">
                                    <div className="row">
                                        <div className="form-group col-xs-12 col-md-8 col-lg-6">
                                            <label>Nombre:</label>
                                            <input
                                                type="text"
                                                step="0.5"
                                                max="10"
                                                name="nombre"
                                                id="nombre"
                                                className="form-control"
                                                placeholder="Usuario"
                                                required
                                                value={nombre}
                                                onChange={(e) => setNombre(e.target.value)}
                                            />
                                        </div>
                                        <div className="form-group col-xs-12 col-md-8 col-lg-6">
                                            <label>Puesto:</label>
                                            <select value={selectedItem} onChange={handleSelectionChange}
                                                className="custom-select" id="inputGroupSelect04">
                                                <option value="">Seleccionar una opción</option>
                                                {dataListTipo.map((item, index) => (
                                                    <option key={item.id} value={item.id}>
                                                        {item.tipo}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="form-group col-xs-12 col-md-8 col-lg-6">
                                            <label>Fotografía:</label>
                                            <input type="file" className="form-control-file" id="foto"
                                                name='fotografia'
                                                value={fotografia}
                                                onChange={(e) => setFotografia(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="form-group col-xs-12 col-md-8 col-lg-6">
                                            <label>Usuario:</label>
                                            <input
                                                type="text"
                                                name="username"
                                                className="form-control"
                                                placeholder="Username"
                                                required
                                                value={username}
                                                onChange={(e) => setUsername(e.target.value)}
                                            />
                                        </div>
                                        <div className="form-group col-xs-12 col-md-8 col-lg-6">
                                            <label>Contraseña:</label>
                                            <input
                                                id="password"
                                                type={showPassword ? 'text' : 'password'}
                                                className="form-control"
                                                name="contrasenia"
                                                placeholder="Password"
                                                value={contrasenia}
                                                onChange={(e) => setContrasenia(e.target.value)}
                                            />
                                            <button onClick={togglePasswordVisibility} type="button" className="btn btn-info">
                                                {showPassword ? 'Ocultar' : 'Mostrar'}
                                            </button>

                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="form-group col-xs-12 col-md-8 col-lg-6">
                                            <label>Fecha de registro(A/M/D)</label>
                                            <input
                                                id="startDate"
                                                name="fecha_registro"
                                                className="form-control"
                                                type=""
                                                value={fecha_registro}
                                                onChange={(e) => setFecha_registro(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" id='btnCerrar' className="btn btn-danger" data-dismiss="modal">Cerrar</button>
                                    <button onClick={() => handlePost()} className="btn btn-success">Guardar</button>
                                </div>
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
                                                    <th>ID Empleado</th>
                                                    <th>Nombre</th>
                                                    <th>Puesto</th>
                                                    <th>Fotografía</th>
                                                    <th>Username</th>
                                                    <th>Contraseña</th>
                                                    <th>Fecha de registro</th>
                                                    <th>Acciones</th>

                                                </tr>
                                            </thead>
                                            <tbody>
                                                {usuarios.map((user) => (
                                                    <tr key={user.id}>
                                                        <td>{user.id}</td>
                                                        <td>{user.nombre}</td>
                                                        <td>{user.tipo}</td>
                                                        <td>{user.fotografia}</td>
                                                        <td>{user.username}</td>
                                                        <td>{user.contrasenia}</td>
                                                        <td>{user.fecha_registro}</td>
                                                        <td>
                                                            <div className="row align-items-center">
                                                                <div className="col-auto">
                                                                    <button
                                                                        onClick={() => openModal(2, user.id, user.nombre, user.tipo, user.fotografia, user.username, user.contrasenia, user.fecha_registro)}
                                                                        type="button"
                                                                        className="btn btn-primary float-right"
                                                                        data-toggle="modal"
                                                                        data-target="#exampleModal">
                                                                        <i className="fas fa-edit" />
                                                                        {/* Editar */}
                                                                    </button>
                                                                </div>
                                                                <div className="col-auto">
                                                                    <button onClick={() => handleDelete(user.id)} className="btn btn-danger" type="button">
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
                                                    <th>ID Empleado</th>
                                                    <th>Nombre</th>
                                                    <th>Puesto</th>
                                                    <th>Fotografía</th>
                                                    <th>Username</th>
                                                    <th>Contraseña</th>
                                                    <th>Fecha de registro</th>
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
            {/* </form> */}
            <Footer />
        </>
    )
}
export default Usuarios