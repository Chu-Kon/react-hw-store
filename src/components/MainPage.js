import React, { useEffect, useState } from 'react'
import Product from './Product'
import Form from './Form'
import { useTheme } from './ThemeContext'
import ItalicText from './ItalicText'
import { Link } from 'react-router-dom'
import axios from 'axios'
const url = 'https://dummyjson.com/products?limit=5'

export default function MainPage() {
    const [products, setProducts] = useState([])
    const [showModal, setShowModal] = useState(false)
    const [basket, setBasket] = useState([])
    const { isDarkMode, toggleTheme, isItalic, toggleItalic } = useTheme() 
  
    const getData = async () => {
      const resp = await axios.get(url)
      setProducts(resp.data.products)
    }
  
    const addProduct = (obj) => {
      const newArr = [...products]
      newArr.push(obj)
      setProducts(newArr)
    }
  
    const buyProduct = (obj) => {
      const newArr = [...basket]
      newArr.push(obj)
      setBasket(newArr)
    }
  
    const filterProducts = (filter) => {
      let newArr = [...products]
      switch (filter) {
        case 'cheap':
          newArr = newArr.sort((a, b) => a.price - b.price)
          break
        case 'expensive':
          newArr = newArr.sort((a, b) => b.price - a.price)
          break
        default:
          break
      }
      setProducts(newArr)
    }
  
    useEffect(() => {
      getData()
    }, [])

  return (
    <div className={isDarkMode ? 'dark' : 'light'}>
    <button onClick={toggleTheme}>Переключить тему</button>
    <button onClick={toggleItalic}>Переключить шрифт</button>
    <p>Сумма: {basket.reduce((accum, item) => accum += item.price, 0)}$</p>
    <button onClick={() => setShowModal(!showModal)} style={{ display: 'block' }}>{showModal ? 'Закрыть' : 'Добавить'}</button>
    <button onClick={() => filterProducts('cheap')}>Сначала дешевле &#8595;</button>
    <button onClick={() => filterProducts('expensive')}>Сначала дороже &#8593;</button>
    {showModal && <Form addProduct={addProduct}></Form>}
    <div style={{ display: 'block' }}>
      <ItalicText>
        {products.map(product => 
            <div key={product.id}>
                <Product product={product} buyProduct={buyProduct} key={product.id}></Product>
                {/* <Link to={`/product/${product.id}`}>Подробнее</Link> */}
            </div>
        )}
      </ItalicText>
    </div>
  </div>
  )
}
