import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './components/HomePage'
import Navbar from './components/Navbar'
import WishList from './components/WishList';
import Cart from './components/Cart';
import SingleProduct from './components/SingleProduct';

function App() {
  const [ProductData, setProductData] = useState([])
  useEffect(()=>{
    fetch('https://fakestoreapi.com/products/')
    .then(res=> res.json())
    .then(data=>setProductData(data)
    )
   
},[])
  return (
    <>
<BrowserRouter>
<Navbar/>
<Routes>
  <Route path='/' element={<HomePage Products={ProductData}/>  }  />
  <Route path='/cart' element={<Cart/>} />
  <Route path='/wishList' element={<WishList/>} />
  <Route path='/singleproduct/:id' element={<SingleProduct/>} />
</Routes>
</BrowserRouter>
    </>
  )
}

export default App
