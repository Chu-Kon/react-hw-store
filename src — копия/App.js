import './App.css'
import React, { useState } from 'react'
import { ThemeProvider } from './components/ThemeContext' 
import Header from './components/Header/Header'
import MainPage from './components/MainPage/MainPage'
import Basket from './components/Basket/Basket'
import ProductDetails from './components/ProductDetails'
import About from './components/About'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  const [products, setProducts] = useState([])
  return (
    <div className="App">
    <BrowserRouter>
      <Header></Header>
        <Routes>
          <Route path='/' element={<MainPage setProducts={setProducts}></MainPage>}></Route>
          <Route path='/basket' element={<Basket></Basket>}></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='/product/:id' element={<ProductDetails products={products}></ProductDetails>}></Route>
        </Routes>
    </BrowserRouter>
  </div>
  )
}

function AppWithTheme() {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  )
}

// export default App
export default AppWithTheme