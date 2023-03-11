import { useEffect, useState } from "react";
import ProductOneCard from "./ProductOneCard"

function ProductsCard() {
  const api_url = "https://fakestoreapi.com/products";
  const [proudcts, setProudcts] = useState([]);
  const [categories, setCategories] = useState([]);

  const getProducts = () => {
    fetch(api_url)
      .then((res) => res.json())
      .then((data) => setProudcts(data))
  }
  const getCategories = () => {
    fetch(`${api_url}/categories`)
      .then((res) => res.json())
      .then((data) => setCategories(data))
  }

  const getProduCtIncategory = (categorieName) => {
    fetch(`${api_url}/category/${categorieName}`)
      .then((res) => res.json())
      .then((data) => setProudcts(data))
  }

  useEffect(() => {
    getProducts()
    getCategories()
  }, [])

  return (
    <>
      <div className="container">
        <h2 className="text-center p-3">Our Products</h2>
        <button
          onClick={() => {
            getProducts()
          }}
          className="btn btn-primary m-2">All
        </button>
        {
          categories.map((category) => {
            return (
              <button
                key={category}
                onClick={() => {
                  getProduCtIncategory(category)
                }}
                className="btn btn-primary m-2"> 
                {category}
              </button>
            )
          })
        }

        <div className="row justify-content-center">
          {proudcts.map((product) => {
            return (
              <div key={product.id} className="col-sm-12 col-md-4 col-lg-3 rounded-3 m-3 p-0">
                <ProductOneCard product={product} showButton={true} />
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default ProductsCard