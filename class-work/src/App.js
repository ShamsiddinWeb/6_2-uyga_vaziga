import "./App.css";
import Category from "./components/category/Category";
import Header from "./components/header/Header";
import Hero from "./components/Hero/Hero";
import Experience from "./components/Experience/Experience";
import Featured from "./components/featured/Featured";
import Service from "./components/service/Service";
import Footer from "./components/footer/Footer";
import Products from "./components/Products/Products";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Category />
      <Products />
      <Experience />
      <Featured />
      <Service />
      <Footer />
    </div>
  );
}

export default App;
