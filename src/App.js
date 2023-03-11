import "./App.css";
import Header from "./components/Header";
import ProductsCard from "./components/ProductsCard";
import { Route, Routes } from "react-router-dom";
import ProductDetails from "./components/ProductDetails";
import Slider from "./components/Slider";


function App() {

  return (
    <div className="App d-flex flex-column align-items-center justify-content-center text-center overflow-hidden">

      <Routes>

        <Route path="/Simple-Store" element={<>
          <Header />
          <Slider />
          <ProductsCard />
        </>} />
        <Route path="product/:productId" element={<>
          <Header />
          <ProductDetails />
        </>
        } />

        <Route path="/*" element={
          <>
            <Header />
            <h3>
              <a href="/Simple-Store">
                Error This Page is Not Defined <br />
                Come Back To Home Page
              </a>
            </h3>
          </>
        } />
      </Routes>

    </div>
  );
}
export default App;
