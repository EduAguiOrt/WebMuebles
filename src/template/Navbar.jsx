function Navbar() {
    return (
      <>
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
          <a href="#" className="brand-link">
            <img src="../imgs/logoM.png" alt="Muebles logo" className="brand-image img-circle elevation-3" style={{ opacity: '.8' }} />
            <span className="brand-text font-weight-light">Muebles SA de CV</span>
          </a>
          <div className="sidebar">
            {/* Sidebar user (optional) */}
            <div className="user-panel mt-3 pb-3 mb-3 d-flex">
              <div className="image">
                <img src="./public/dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" />
              </div>
              <div className="info">
                <a href="#" className="d-block">Eduardo Aguilar</a>
              </div>
            </div>
            <nav className="mt-2">
              <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                {/* Productos */}
                <li className="nav-header">Perfil</li>
                <li className="nav-item">
                  <a href="../calendar.html" className="nav-link">
                    <i className="nav-icon fas fa-user-tie" />
                    <p>
                      Eduardo Aguilar
                      <span className="badge badge-info right"></span>
                    </p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="../calendar.html" className="nav-link">
                    <i className="nav-icon fas fa-user-cog" />
                    <p>
                      Administrador
                      <span className="badge badge-info right"></span>
                    </p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="../calendar.html" className="nav-link">
                    <i className="nav-icon fas fa-user-astronaut" />
  
                    <p>
                      Lanixsi01
                      <span className="badge badge-info right"></span>
                    </p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="../calendar.html" className="nav-link">
                    <i className="fab fa-openid nav-icon" />
                    <p>
                      No.Ingresos
                      <span className="badge badge-info right">3</span>
                    </p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="../calendar.html" className="nav-link">
                    <i className="nav-icon fas fa-door-open" />
                    <p>
                      Salir
                      <span className="badge badge-info right"></span>
                    </p>
                  </a>
                </li>
              </ul>
            </nav>
            {/* /.sidebar-menu */}
          </div>
        </aside>
  
      </>
    );
  }
  
  export default Navbar;
  