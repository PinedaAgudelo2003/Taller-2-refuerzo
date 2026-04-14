import { useState } from "react";

function Form({ onAdd }) {
  const [form, setForm] = useState({
    name: "",
    price: "",
    stock: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(form);

    setForm({
      name: "",
      price: "",
      stock: ""
    });
  };

  return (
    <div className="card p-3">
      <h5 className="bg-primary text-white p-2">Add Product</h5>

      <input
        name="name"
        value={form.name}
        placeholder="Name"
        className="form-control my-2"
        onChange={handleChange}
      />

      <input
        name="price"
        value={form.price}
        placeholder="Price"
        className="form-control my-2"
        onChange={handleChange}
      />

      <input
        name="stock"
        value={form.stock}
        placeholder="Stock"
        className="form-control my-2"
        onChange={handleChange}
      />

      <button className="btn btn-success" onClick={handleSubmit}>
        Add
      </button>
    </div>
  );
}

export default Form;