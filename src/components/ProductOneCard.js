import { Link } from "react-router-dom";

function ProductOneCard(props) {
  const { product, showButton } = props;
  return (
    <>
      <div className="card">
        <img src={product.image} className="img rounded-3 card-img-top" alt={product.title} />
        <div className="card-body">
          <h5 className="title fw-bold overflow-hidden card-title">{product.title}</h5>
          <p className="desc card-text">{product.description}</p>
          <p>Price: {product.price}$</p>
          {showButton && <Link to={`/product/${product.id}`} className="btn btn-primary w-100 rounded-3 p-2">Details</Link>}

        </div>
      </div>
    </>
  )
}

export default ProductOneCard