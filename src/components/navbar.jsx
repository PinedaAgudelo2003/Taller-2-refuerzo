import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark px-4">
      <span className="navbar-brand">🛒 Mi Tienda</span>

      <div>
        <Link className="nav-link d-inline text-warning" to="/">Inicio</Link>
        <Link className="nav-link d-inline text-white" to="/articulos">Artículos</Link>
        <Link className="nav-link d-inline text-white" to="/accesorios">Accesorios</Link>
      </div>

      <div className="d-flex">
        <input className="form-control me-2" placeholder="Buscar..." />
        <button className="btn btn-primary">Buscar</button>
      </div>
    </nav>
  );
}

export default Navbar;