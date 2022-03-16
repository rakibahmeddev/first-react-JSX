import logo from "./logo.svg";
import "./App.css";

function App() {
  const products = [
    { name: "Mackbook M1 Cheap", price: 120000 },
    { name: "USB HUB", price: 1000 },
    { name: "Mouse", price: 5000 },
    { name: "Headphone", price: 2000 },
  ];

  return (
    <div className="App">
      {products.map((product) => (
        <Product name={product.name} price={product.price}></Product>
      ))}
    </div>
  );
}

function Product(props) {
  return (
    <div className="product">
      <h1>{props.name}</h1>
      <h4>
        Price: <span className="price">{props.price}</span>
      </h4>
    </div>
  );
}

export default App;
