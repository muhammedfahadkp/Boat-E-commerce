import NavBar from "./Components/Navbar/NavBar";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Shop from "./Pages/Shop"
import ShopCategory from "./Pages/ShopCategory"
import Product from "./Pages/Product"
import Cart from "./Pages/Cart"
import LoginSignup from "./Pages/LoginSignup"
import Footer from "./Components/Footer/Footer";
import HeadDrop_Banner from './Components/Assets/HeadDropBanner.png'
import OnEar_Banner from './Components/Assets/OnEarBanner.png'
import BarSound_Banner from './Components/Assets/BarSoundBanner.png'


function App() {
  return (
    <div>
      <BrowserRouter>

      <NavBar/>

      <Routes>

        <Route path="/" element={<Shop/>}/>
        <Route path="/HeadDrop" element={<ShopCategory banner={HeadDrop_Banner} category="HeadDrop"/>}/>
        <Route path="/OnEar" element={<ShopCategory banner={OnEar_Banner} category="OnEar"/>}/>
        <Route path="/BarSound" element={<ShopCategory banner={BarSound_Banner} category="BarSound"/>}/>

        <Route path="/Product" element= {<Product/>}>
          <Route path=":productId"  element={<Product/>}/>
        </Route>

        <Route path="/Cart" element={<Cart/>}/>

        <Route path="/LoginSignup" element={<LoginSignup/>}/>

      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
