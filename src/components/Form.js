import React, { useRef, useState } from 'react'

export default function Form({ addProduct }) {
    const refForm = useRef(null)
    const [imageSrc, setImageSrc] = useState(null)
    const sendForm = (event)=>{
        event.preventDefault()
        const form = refForm.current
        const obj = {
            id: Date.now(),
            title: form.title.value,
            brand: form.brand.value,
            image: imageSrc,
            price: parseInt(form.price.value),
            discountPercentage: form.discountPercentage.value,
            description: form.description.value,
            category: form.category.value
        }
    addProduct(obj)
    form.reset()
    setImageSrc(null)
    }

    const handleImageUpload = (event) => {
      const file = event.target.files[0]
      const imageUrl = URL.createObjectURL(file)
      setImageSrc(imageUrl)
    }

  return (
    <div>
        <form onSubmit={(event)=>sendForm(event)} ref={refForm} style={{ display: 'flex', flexDirection: 'column', width: '400px', gap: '5px' }}>
            <input placeholder='title' name='title' required></input>
            <input placeholder='brand' name='brand'></input>
            <input name='image' type='file' onChange={handleImageUpload}></input>
            {imageSrc && <img src={imageSrc} alt="Uploaded" style={{ maxWidth: '100px', maxHeight: '100px' }}></img>}
            <input placeholder='price' name='price' required></input>
            <input placeholder='discount' name='discountPercentage'></input>
            <input placeholder='description' name='description'></input>
            <input placeholder='category' name='category'></input>
            <button type='submit'>Добавить товар</button>
        </form>
    </div>
  )
}
