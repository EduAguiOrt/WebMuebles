import Home from "../template/Home"
const Categorias = () => {
  return (
    <>
    <Home/>
      <form>
        <div className="content-wrapper">
          <div className="content">
            <div className="container">
              <div className="row">
                <div className="col-xs-12 col-md-8 col-lg-12">
                  <div className="card card-primary">
                    <div className="card-header">
                      <h3 className="card-title ">
                        <i className="nav-icon fas fa-couch mr-2" />
                        Registrar Nueva Categoría
                      </h3>
                    </div>
                    <div className="card-body">
                      <div className="row">
                        <div className="form-group col-xs-12 col-md-8 col-lg-3">
                          <labe>Código de categoria:</labe>
                          <input
                            type="text"
                            name=""
                            id=""
                            className="form-control"
                            placeholder=""
                            required
                          />
                        </div>
                        <div className="form-group col-xs-12 col-md-8 col-lg-3">
                          <labe>Tipo:</labe>
                          <input
                            type="text"
                            name=""
                            id=""
                            className="form-control"
                            placeholder=""
                            required
                          />
                        </div>
                        <div className="form-group col-xs-12 col-md-8 col-lg-4">
                          <label >Fecha de alta:</label>
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
              {/* DataTable */}
              <section className="content">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-12">
                      <div className="card">
                        <div className="card-header">
                          <h3 className="card-title">Consultas de categorías</h3>
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
                              <tr>
                                <td>Escritorios para escribir</td>
                                <td>Escritorios para computadora</td>
                                <td>Escritorios ejecutivos</td>
                                <td>Escritorios con almacenamiento.</td>
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
          </div>
        </div>
      </form>
    </>
  )
}

export default Categorias