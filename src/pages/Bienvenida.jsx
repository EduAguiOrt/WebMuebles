import Home from "../template/Home"
function Bienvenida() {
  return (
    <>
      <Home />
      <div>
        <div className="content-wrapper">
          {/* Content Header (Page header) */}
          <section className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-6">
                  <h1>Bienvenido Username</h1>
                </div>

              </div>
            </div>{/* /.container-fluid */}
          </section>
          {/* Main content */}
          <section className="content">
            {/* Default box */}
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Misión</h3>
                <div className="card-tools">
                  <button type="button" className="btn btn-tool" data-card-widget="collapse" title="Collapse">
                    <i className="fas fa-minus" />
                  </button>
                  <button type="button" className="btn btn-tool" data-card-widget="remove" title="Remove">
                    <i className="fas fa-times" />
                  </button>
                </div>
              </div>
              <div className="card-body">
                Nuestra misión es proporcionar soluciones ergonómicas y funcionales para espacios de trabajo, ofreciendo muebles de escritorio de alta calidad que promuevan la comodidad, la productividad y el bienestar de nuestros clientes.
              </div>
              {/* /.card-body */}
              <div className="card-footer">
                A través de nuestra amplia gama de productos, buscamos crear ambientes de trabajo inspiradores y eficientes que impulsen el éxito de las empresas y el desarrollo profesional de las personas.
              </div>
              {/* /.card-footer*/}
            </div>
            {/* /.card */}
          </section>
          {/* /.content */}
        </div>

      </div>
    </>
  )
}

export default Bienvenida