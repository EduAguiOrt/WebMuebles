import { BrowserRouter as Router, Route, Routes, } from "react-router-dom";

import NotFoundPage from "./pages/notFoundPage";

import Login from "./pages/login"
import Productos from "./pages/productos"
import Categorias from "./pages/categorias";
import Esalida from "./pages/esalida"
import Usuarios from "./pages/usuarios"
import Bienvenida from "./pages/bienvenida"

function App() {
  return (
      <Router>
        <Routes>
          {/* <Route path="/" element={<Navigate replace to="/Login" />} /> */}
          <Route path="/" element={<Login />} />
          <Route path="/bienvenida" element={<Bienvenida />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/categorias" element={<Categorias />} />
          <Route path="/esalidas" element={<Esalida />} />
          <Route path="/usuarios" element={<Usuarios />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
  );
}
export default App;
