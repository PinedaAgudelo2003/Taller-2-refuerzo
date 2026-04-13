function Card({ producto, nombre, imagen, onEliminar }) {
  return (
    <div className="card" style={{ width: "18rem" }}>
      
      <img
        src={producto?.imagen || imagen}
        className="card-img-top"
        alt=""
      />

      <div className="card-body">
        <h6>{producto?.nombre || nombre}</h6>

        {producto?.precio && (
          <p className="text-success">${producto.precio}</p>
        )}

        {producto && onEliminar && (
          <button
            className="btn btn-sm btn-danger"
            onClick={() => onEliminar(producto.id)}
          >
            Eliminar
          </button>
        )}
      </div>
    </div>
  );
}

export default Card;