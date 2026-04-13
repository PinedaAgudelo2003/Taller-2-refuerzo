import Navbar from "../components/navbar";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <>
      <Navbar />

      <div className="container mt-4">
        <Outlet />
      </div>

      <footer className="text-center mt-5">
        © 2026 Tienda-carrito
      </footer>
    </>
  );
}

export default MainLayout;