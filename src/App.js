import "./App.css";
import NavBar from "./components/navbar/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ItemsListContainer } from "./components/ItemContainer/ItemsListContainer";
import { ViewItemDetail } from "./views/ViewItemDetail/ViewItemDetail";
import { CartProvider } from "./components/context/CartContext";
import { Cart } from "./components/cart/Cart";
import { Checkout } from "./components/Checkout/Checkout"
import { CheckoutResponse } from "./components/Checkout/CheckoutResponse"
import { MonitorListContainer } from "./Categories/Monitores/MonitorListContainer"
import { MouseListContainer } from "./Categories/Mouses/MouseListContainer"

function App() {
    return (
        <CartProvider>
            
                <Router>
                    <div className="App">
                        <NavBar />
                        <Switch>
                            <Route path="/" exact component={ItemsListContainer} />
                            <Route path="/mouses" exact component={MouseListContainer} />
                            <Route path="/monitores" exact component={MonitorListContainer}  />
                            <Route path="/detail/:number" component={ViewItemDetail} />
                            <Route path="/cart" component={Cart} />
                            <Route path="/checkout" exact component={ Checkout } />
                            <Route path="/checkout/result/:orderNumber" exact component={CheckoutResponse} />
                            <Route path="*"><h1>404</h1> <h2>Not Found</h2></Route>
                        </Switch>
                    </div>
                </Router>
                
        </CartProvider>
    );
}

export default App;
