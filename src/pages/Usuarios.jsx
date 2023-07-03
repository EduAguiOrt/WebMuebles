import Footer from "../template/footer"
import Header from "../template/header"
import Navbar from "../template/navbar"

const Usuarios = () => {
    return (
        <>
            <Header />
            <Navbar />
            <form>
                <div className="content-wrapper">
                    <div className="content">
                        <div className="container">
                            <div className="row">
                                <div className="col-xs-12 col-md-8 col-lg-12">
                                    <div className="card card-primary">
                                        <div className="card-header">
                                            <h3 className="card-title ">
                                                <i className="fas fa-user mr-2"></i>
                                                Registro de Usuarios
                                            </h3>
                                        </div>
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="form-group col-xs-12 col-md-8 col-lg-6">
                                                    <labe>Clave de empleado:</labe>
                                                    <input
                                                        type="text"
                                                        name=""
                                                        id=""
                                                        className="form-control"
                                                        placeholder="0"
                                                        required
                                                    />
                                                </div>
                                                <div className="form-group col-xs-12 col-md-8 col-lg-6">
                                                    <labe>Nombre:</labe>
                                                    <input
                                                        type="text"
                                                        step="0.5"
                                                        max="10"
                                                        name=""
                                                        id=""
                                                        className="form-control"
                                                        placeholder="Usuario"
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="form-group col-xs-12 col-md-8 col-lg-6">
                                                    <labe>Puesto:</labe>
                                                    <input
                                                        type="text"
                                                        name=""
                                                        id=""
                                                        className="form-control"
                                                        placeholder="Puesto que desempeña"
                                                        required
                                                    />
                                                </div>
                                                <div className="form-group col-xs-12 col-md-8 col-lg-6">
                                                    <labe>Fotografía:</labe>
                                                    <input type="file" className="form-control-file" id="exampleFormControlFile1" required />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="form-group col-xs-12 col-md-8 col-lg-6">
                                                    <labe>Usuario:</labe>
                                                    <input
                                                        type="text"
                                                        name=""
                                                        id=""
                                                        className="form-control"
                                                        placeholder="Username"
                                                        required
                                                    />
                                                </div>
                                                <div className="form-group col-xs-12 col-md-8 col-lg-6">
                                                    <labe>Contraseña:</labe>
                                                    <input
                                                        type="password"
                                                        name=""
                                                        id=""
                                                        className="form-control"
                                                        placeholder="Password"
                                                    />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="form-group col-xs-12 col-md-8 col-lg-6">
                                                    <label >Fecha de registro:</label>
                                                    <input
                                                        id="startDate"
                                                        name=""
                                                        className="form-control"
                                                        type="date"
                                                    />
                                                </div>
                                            </div>

                                        </div>
                                        <div className="card-footer">
                                            <div className="row">
                                                <div className="col">
                                                    <button className="btn btn-primary" type="button">
                                                        <i className="fas fa-folder-plus fa-lg mr-2" />Agregar</button>
                                                </div>
                                                <div className="col">
                                                    <button className="btn btn-default" type="button">
                                                        <i className="fas fa-times-circle fa-lg mr-2" />Cancelar</button>
                                                </div>
                                            </div>
                                        </div>
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
                                            <h3 className="card-title">Consultas de Usuarios</h3>
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
                                                    <tr>
                                                        <td>1</td>
                                                        <td>2</td>
                                                        <td>3</td>
                                                        <td>4</td>
                                                        <td>5</td>
                                                        <td>6</td>
                                                        <td>7</td>
                                                        <td>
                                                            <div className="row align-items-center">
                                                                <div className="col-auto">
                                                                    <button className="btn btn-primary" type="button">Seleccionar</button>
                                                                </div>
                                                                <div className="col-auto">
                                                                    <button className="btn btn-danger" type="button">Eliminar</button>

                                                                </div>
                                                            </div>

                                                        </td>
                                                    </tr>
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
            </form>
            <Footer />
        </>
    )
}

export default Usuarios