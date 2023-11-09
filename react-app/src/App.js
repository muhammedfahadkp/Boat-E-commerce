import NavBar from "./Components/Navbar/NavBar";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Shop from "./Pages/Shop"
import ShopCategory from "./Pages/ShopCategory"
import Product from "./Pages/Product"
import Cart from "./Pages/Cart"
import LoginSignup from "./Pages/LoginSignup"


function App() {
  return (
    <div>
      <BrowserRouter>

      <NavBar/>

      <Routes>

        <Route path="/" element={<Shop/>}/>
        <Route path="/HeadDrops" element={<ShopCategory category="HeadDrops"/>}/>
        <Route path="/OnEar" element={<ShopCategory category="OnEar"/>}/>
        <Route path="/BarSound" element={<ShopCategory category="BarSound"/>}/>

        <Route path="/Product" element= {<Product/>}>
          <Route path=":productId"  element={<Product/>}/>
        </Route>

        <Route path="/Cart" element={<Cart/>}/>

        <Route path="/Login" element={<LoginSignup/>}/>

      </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
