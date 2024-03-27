import './App.css'
import React from 'react'
import { ThemeProvider } from './components/ThemeContext' 
import ProductPage from './components/ProductPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainPage from './components/MainPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage></MainPage>}></Route>
        <Route path='/product/:id' element={<ProductPage></ProductPage>}></Route>
        <Route path='*' element={<MainPage></MainPage>}></Route>
      </Routes>
    </BrowserRouter>
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