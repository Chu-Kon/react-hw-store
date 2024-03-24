import React from 'react'
import './Header.css'
import { Link, useNavigate } from 'react-router-dom'

export default function Header() {
  const navigate = useNavigate()
  const goToAboutPage = () => {
    navigate('/about')
  }
  return (
    <div className='header'>
      Header
      <div>
        {/* <Link to='/'>Главная страница</Link>
        <Link to='/basket'>Корзина</Link> */}
        <button onClick={()=>navigate('/')}>Главная</button>
        <button onClick={goToAboutPage}>О нас</button>
        <button onClick={()=>navigate('/basket')}>Корзина</button>
        <button onClick={()=>navigate(-1)}>Назад</button>
      </div>
    </div>
  )
}
