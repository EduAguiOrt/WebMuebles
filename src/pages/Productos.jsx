const Productos = () => {
  return (
    <>
      <div className="content-wrapper">
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Productos</h1>
              </div>
            </div>
          </div>
          {/* /.container-fluid */}
        </section>
        {/* Main content */}
        <section className="content">
          {/* Default box */}
          <div className="card card-solid">
            <div className="card-body">
              <div className="row">
                <div className="col-12 col-sm-6">
                  <h3 className="d-inline-block d-sm-none">
                    Registros de Productos
                  </h3>
                  <div className="col-12">
                    <img
                      src="../../dist/img/prod-1.jpg"
                      className="product-image"
                      alt="Product Image"
                    />
                  </div>
                  <div className="col-12 product-image-thumbs">
                    <div className="product-image-thumb active">
                      <img src="../imgs/1.jpg" alt="Product Image" />
                    </div>
                    <div className="product-image-thumb">
                      <img src="../imgs/2.jpg" alt="Product Image" />
                    </div>
                    <div className="product-image-thumb">
                      <img src="../imgs/3.jpg" alt="Product Image" />
                    </div>
                    <div className="product-image-thumb">
                      <img src="../imgs/4.jpg" alt="Product Image" />
                    </div>
                    <div className="product-image-thumb">
                      <img src="../imgs/5.jpg" alt="Product Image" />
                    </div>
                  </div>
                </div>
                {/* Fornulario */}
                <div className="col-12 col-sm-6">
                  <div className="row">
                    <div className="col-xs-12 col-md-8 col-lg-12">
                      <div className="card card-primary">
                        <div className="card-header">
                          <h3 className="card-title ">
                            <i className="nav-icon fas fa-couch mr-2" />
                            Registro-Productos
                          </h3>
                        </div>
                        <div className="card-body">
                          <div className="row">
                            <div className="form-group col-xs-12 col-md-8 col-lg-6">
                              <labe>Código de producto:</labe>
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
                              <labe>Categoría:</labe>
                              <input
                                type="text"
                                step="0.5"
                                max="10"
                                name=""
                                id=""
                                className="form-control"
                                placeholder=""
                                required
                              />
                            </div>
                          </div>
                          <div className="row">
                            <div className="form-group col-xs-12 col-md-8 col-lg-6">
                              <labe>Marca:</labe>
                              <input
                                type="text"
                                name=""
                                id=""
                                className="form-control"
                                placeholder=""
                                required
                              />
                            </div>
                            <div className="form-group col-xs-12 col-md-8 col-lg-6">
                              <labe>Nombre del producto:</labe>
                              <input
                                type="text"
                                name=""
                                id=""
                                className="form-control"
                                placeholder=""
                              />
                            </div>
                          </div>
                          <div className="row">
                            <div className="form-group col-xs-12 col-md-8 col-lg-6">
                              <labe>Piezas</labe>
                              <input
                                type="number"
                                name=""
                                id=""
                                className="form-control"
                                placeholder="0"
                                required
                              />
                            </div>
                            <div className="form-group col-xs-12 col-md-8 col-lg-6">
                              <labe>Color:</labe>
                              <input
                                type="text"
                                name=""
                                id=""
                                className="form-control"
                                placeholder=""
                              />
                            </div>
                          </div>
                          <div className="row">
                            <div className="form-group col-xs-12 col-md-8 col-lg-6">
                              <labe>Material:</labe>
                              <input
                                type="text"
                                name=""
                                id=""
                                className="form-control"
                                placeholder=""
                                required
                              />
                            </div>
                            <div className="form-group col-xs-12 col-md-8 col-lg-6">
                              <labe>Unidades:</labe>
                              <input
                                type="number"
                                name=""
                                id=""
                                className="form-control"
                                placeholder="0"
                              />
                            </div>
                          </div>
                          <div className="row">
                            <div className="form-group col-xs-12 col-md-8 col-lg-4">
                              <labe>Dimensiones:</labe>
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
                              <labe>Precio:</labe>
                              <input
                                type="number"
                                name=""
                                id=""
                                className="form-control"
                                placeholder="0.0"
                              />
                            </div>
                            <div className="form-group col-xs-12 col-md-8 col-lg-4">
                              <labe>Descripción:</labe>
                              <input
                                type="text"
                                name=""
                                id=""
                                className="form-control"
                                placeholder="Describa el producto"
                              />
                            </div>
                          </div>
                          <div className="row">
                            <div className="form-group col-xs-12 col-md-8 col-lg-6">
                              <label>Fecha de alta:</label>
                              <input
                                id="startDate"
                                name=""
                                className="form-control"
                                type="date"
                              />
                            </div>
                            <div className="form-group col-xs-12 col-md-8 col-lg-6">
                              <labe>Fotografía:</labe>
                              <input
                                type="file"
                                className="form-control-file"
                                id="exampleFormControlFile1"
                                required
                              />
                            </div>
                          </div>
                        </div>
                        <div className="card-footer">
                          <div className="row">
                            <div className="col">
                              <button className="btn btn-primary" type="button">
                                <i className="fas fa-folder-plus fa-lg mr-2" />
                                Agregar
                              </button>
                            </div>
                            <div className="col">
                              <button className="btn btn-default" type="button">
                                <i className="fas fa-times-circle fa-lg mr-2" />
                                Cancelar
                              </button>
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
                          <h3 className="card-title">Consultas</h3>
                        </div>
                        <div className="card-body">
                          <table
                            id="example1"
                            className="table table-bordered table-striped"
                          >
                            <thead>
                              <tr>
                                <th>ID</th>
                                <th>Marca</th>
                                <th>Nombre</th>
                                <th>Piezas</th>
                                <th>Color</th>
                                <th>Material</th>
                                <th>Unidades</th>
                                <th>Dimensiones</th>
                                <th>Precio</th>
                                <th>Descripción</th>
                                <th>Fecha alta</th>
                                <th>Fotografías</th>
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
                                <td>8</td>
                                <td>9</td>
                                <td>10</td>
                                <td>11</td>
                                <td>12</td>
                                <td>
                                  <div className="row align-items-center">
                                    <div className="col-auto">
                                      <button
                                        className="btn btn-primary"
                                        type="button"
                                      >
                                        Seleccionar
                                      </button>
                                    </div>
                                    <div className="col-auto">
                                      <button
                                        className="btn btn-danger"
                                        type="button"
                                      >
                                        Eliminar
                                      </button>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                            <tfoot>
                              <tr>
                                <th>ID</th>
                                <th>Marca</th>
                                <th>Nombre</th>
                                <th>Piezas</th>
                                <th>Color</th>
                                <th>Material</th>
                                <th>Unidades</th>
                                <th>Dimensiones</th>
                                <th>Precio</th>
                                <th>Descripción</th>
                                <th>Fecha alta</th>
                                <th>Fotografías</th>
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
        </section>
      </div>
    </>
  );
};

export default Productos;
