import ProductContext from "./context/ProductContext";
import MyRoute from "./route/MyRoute";

function App() {
  return (
    <div className="App">
      <ProductContext>
        <MyRoute />
      </ProductContext>
    </div>
  );
}

export default App;
