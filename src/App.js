import './App.css';
import Navbar from './Components/navbar';
import Home from './Components/Home/Home';
import './Components/Home/home.css';
import LeProducts from './Components/Home/leProducts';
import BeProducts from './Components/Home/beproducts';
import AdProducts from'./Components/Home/AdProducts';
import OsProducts from'./Components/Home/OsProducts';
import NsProducts from'./Components/Home/NsProducts';
import Footer from './Components/footer';
import Cart from './Components/Home/cart';
import Products from './Components/Home/products';
import ProductDetails from'./Components/Home/productDetails'; 
import { Routes, Route } from 'react-router-dom';
import Register from './Components/Home/Register';
 import Login from'./Components/Home/Login';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/leproducts' element={<LeProducts/>}></Route>
        <Route path='/beProducts' element={<BeProducts/>}></Route>
        <Route path='/adProducts' element={<AdProducts/>}></Route>
        <Route path='/OsProducts' element={<OsProducts/>}></Route>
        <Route path='/NsProducts' element={<NsProducts/>}></Route>
        <Route path='/' element={<Home />}></Route>
        <Route path='/products' element={<Products />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
        <Route path="/product-details/:productName" element={<ProductDetails/>}></Route>
        <Route path='/Register' element={<Register/>}></Route>
         <Route path='/Login' element={<Login/>}></Route> 
      </Routes>
     <Footer/> 
    </div>
  )
}


export default App;













