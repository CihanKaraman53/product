import { BrowserRouter as Rounter, Route, Switch } from "react-router-dom";
import ProductListTemplate from "./components/templates/ProductListTemplate";
import CartDetails from "./components/organisms/cart-details/CartDetails";

function App() {
  return (
    <Rounter>
      <Switch>
        <Route path="/" exact component={ProductListTemplate}></Route>
        <Route path="/cartDetails" exact component={CartDetails}></Route>
      </Switch>
    </Rounter>
  );
}

export default App;
