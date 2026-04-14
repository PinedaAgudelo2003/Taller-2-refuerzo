import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark px-4">
      <span className="navbar-brand">🛒 My Shop</span>

      <div>
        <Link className="nav-link d-inline text-warning" to="/">Home</Link>
        <Link className="nav-link d-inline text-white" to="/products">Products</Link>
        <Link className="nav-link d-inline text-white" to="/accessories">Accessories</Link>
      </div>

      <div className="d-flex">
        <input className="form-control me-2" placeholder="Search..." />
        <button className="btn btn-primary">Search</button>
      </div>
    </nav>
  );
}

export default Navbar;