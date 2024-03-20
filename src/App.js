import './App.css';
import React, { useEffect, useRef, useState } from 'react';
import Product from './components/Product'
import Form from './components/Form';
const url = 'https://dummyjson.com/products?limit=5'

function App() {
  const [products, setProducts] = useState([])
  let [showModal, setShowModal] = useState(false)
    const getData = async ()=> {
    const resp = await fetch(url)
    const data = await resp.json()
    setProducts(data.products)
  }

  const addProduct = (obj) => {
    const newArr = [...products]
    newArr.push(obj)
    setProducts(newArr)
  }

  useEffect(() =>{
    getData()
  },[])

  return (
    <div >
      <button onClick={()=>setShowModal(showModal = !showModal)}>{showModal ? 'Закрыть' : 'Добавить'}</button>
      {showModal && <Form addProduct={addProduct}></Form>}
      <div style={{display: 'block'}}>
      {products.map(product=><Product product={product} key={product.id}></Product>)}
      </div>
    </div>
  );
}

export default App;