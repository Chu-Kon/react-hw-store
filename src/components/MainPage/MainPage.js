import React, { useEffect, useState }  from 'react';
import Product from '../Product';
import Form from '../Form';
import ItalicText from '../ItalicText';
import { useTheme } from '../ThemeContext';
const url = 'https://dummyjson.com/products?limit=5';


export default function MainPage({ setProducts: setGlobalProducts }) {
  const [localProducts, setLocalProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [basket, setBasket] = useState([]);
  const { isDarkMode, toggleTheme, isItalic, toggleItalic } = useTheme();

  const getData = async () => {
      const resp = await fetch(url);
      const data = await resp.json();
      setLocalProducts(data.products);
      setGlobalProducts(data.products);
  };

  const addProduct = (obj) => {
    const newArr = [...localProducts];
    newArr.push(obj);
    setLocalProducts(newArr);
    setGlobalProducts(newArr);
  };

  const buyProduct = (obj) => {
    const newArr = [...basket];
    newArr.push(obj);
    setBasket(newArr);
  };

  const filterProducts = (filter) => {
    let newArr = [...localProducts];
    switch (filter) {
      case 'cheap':
        newArr = newArr.sort((a, b) => a.price - b.price);
        break;
      case 'expensive':
        newArr = newArr.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }
    setLocalProducts(newArr);
    setGlobalProducts(newArr);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
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
            {localProducts.map(product => <Product product={product} buyProduct={buyProduct} key={product.id}></Product>)}
          </ItalicText>
        </div>
      </div>
    </div>
  );
}
