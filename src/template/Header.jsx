import { NavLink } from "react-router-dom"

function Header() {
  return (
    <>
      {/* Navbar */}
      <nav className="main-header navbar navbar-expand navbar-white navbar-light">
        {/* Left navbar links */}
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" data-widget="pushmenu" href="#" role="button"><i className="fas fa-bars" /></a>
          </li>
          <li className="nav-item d-none d-sm-inline-block">
            <NavLink to="/Bienvenida" className="nav-link">Inicio</NavLink>
          </li>
          <li className="nav-item d-none d-sm-inline-block">
            <NavLink to="/Productos" className="nav-link">Productos</NavLink>
          </li>
          <li className="nav-item d-none d-sm-inline-block">
            <NavLink to="/Categorias" className="nav-link">Categorías</NavLink>
          </li>
          <li className="nav-item d-none d-sm-inline-block">
            <NavLink to="/Esalidas" className="nav-link">Entradas/Salidas</NavLink>
          </li>
          <li className="nav-item d-none d-sm-inline-block">
            <NavLink to="/Usuarios" className="nav-link">Usuarios</NavLink>
          </li>
        </ul>
        {/* Right navbar links */}
        <ul className="navbar-nav ml-auto">
          {/* Navbar Search */}
          <li className="nav-item">
            <a className="nav-link" data-widget="navbar-search" href="#" role="button">
              <i className="fas fa-search" />
            </a>
            <div className="navbar-search-block">
              <form className="form-inline">
                <div className="input-group input-group-sm">
                  <input className="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search" />
                  <div className="input-group-append">
                    <button className="btn btn-navbar" type="submit">
                      <i className="fas fa-search" />
                    </button>
                    <button className="btn btn-navbar" type="button" data-widget="navbar-search">
                      <i className="fas fa-times" />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </li>
        </ul>
      </nav>
      {/* /.navbar */}
    </>
  );
}
export default Header;