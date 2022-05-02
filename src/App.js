import "./App.css";
import Header from "./componets/Header";
import Footer from "./componets/Footer";

import ProductList from "./componets/ProductList";

function App() {
  return (
    <div className="container-fluid">
      <Header/>
      <ProductList />
      <Footer />
    </div>
  );
}

export default App;
