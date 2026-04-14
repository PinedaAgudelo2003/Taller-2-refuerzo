function Card({ product, name, image, onDelete }) {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img
        src={product?.image || image}
        className="card-img-top"
        alt=""
      />

      <div className="card-body">
        <h6>{product?.name || name}</h6>

        {product?.price && (
          <p className="text-success">${product.price}</p>
        )}

        {product && onDelete && (
          <button
            className="btn btn-sm btn-danger"
            onClick={() => onDelete(product.id)}
          >
            Delete
          </button>
        )}
      </div>
    </div>
  );
}

export default Card;