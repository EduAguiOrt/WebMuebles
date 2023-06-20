import { BrowserRouter as Router, Route, Routes, } from "react-router-dom";

import Home from "./template/Home"
import NotFoundPage from "./pages/NotFoundPage";

import Login from "./pages/Login"
import Productos from "./pages/Productos"
import Categorias from "./pages/Categorias";
import Esalida from "./pages/Esalida"
import Usuarios from "./pages/Usuarios"
import Bienvenida from "./pages/Bienvenida"

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* <Route path="/" element={<Navigate replace to="/Login" />} /> */}
          <Route path="/" element={<Login />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/bienvenida" element={<Bienvenida />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/categorias" element={<Categorias />} />
          <Route path="/esalida" element={<Esalida />} />
          <Route path="/usuarios" element={<Usuarios />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </>
  );
}
export default App;
