import { useState } from "react";

function Formulario({ onAgregar }) {
  const [form, setForm] = useState({
    nombre: "",
    precio: "",
    existencias: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAgregar(form);

    setForm({
      nombre: "",
      precio: "",
      existencias: ""
    });
  };

  return (
    <div className="card p-3">
      <h5 className="bg-primary text-white p-2">Agregar Producto</h5>

      <input
        name="nombre"
        value={form.nombre}
        placeholder="Nombre"
        className="form-control my-2"
        onChange={handleChange}
      />

      <input
        name="precio"
        value={form.precio}
        placeholder="Precio"
        className="form-control my-2"
        onChange={handleChange}
      />

      <input
        name="existencias"
        value={form.existencias}
        placeholder="Existencias"
        className="form-control my-2"
        onChange={handleChange}
      />

      <button className="btn btn-success" onClick={handleSubmit}>
        Agregar
      </button>
    </div>
  );
}

export default Formulario;