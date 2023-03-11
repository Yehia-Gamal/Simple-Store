import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom"
import ProductOneCard from "./ProductOneCard";
import "./ProductDetails.css"

function ProductDetails() {
  const api_url = "https://fakestoreapi.com/products";
  const [product, setProduct] = useState({})
  const params = useParams()

  useEffect(() => {
    fetch(`${api_url}/${params.productId}`)
      .then((res) => res.json())
      .then((product) => setProduct(product))
  }, [])

  return (
    <div className="product-details">
      <h1><Link to="/Simple-Store">Back Page</Link></h1>
      <h1>
        - Product Details - <br /> {product.title} {params.productId}
      </h1>
      <br />
      <ProductOneCard product={product} showButton={false} />
    </div>
  )
}

export default ProductDetails