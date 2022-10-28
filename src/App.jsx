import { Footer } from "./Footer";
import { Header } from "./Header";
import { Home } from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About } from "./About";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { ProductsNew } from "./ProductsNew";
import { ProductsIndex } from "./ProductsIndex";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/productsnew" element={<ProductsNew />} />
          <Route path="/productsindex" element={<ProductsIndex />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
