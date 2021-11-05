import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { mainContext } from '../contexts/MainContex';

const CreatePage = () => {
    const { createProduct } = useContext(mainContext)
    // useContext  возвращает обьект хранилища , принимает то хранилище откуда нужно взять
    // useHistory это зук который возвращает обьект с различными методами (push, goBack)
    const history = useHistory()
    const [product, setProduct] = useState({
        art: '',
        price: 0,
        size: '',
        color: '',
        type: ''
    })

    const handleChange = (e) => {

        let obj = {
            ...product,
            [e.target.name]: e.target.value
        }
        setProduct(obj)
    }
    const hanleClick = () => {
        createProduct(product)
        history.push('/')
    }
    return (
        <div>
            Create page
            <div>
                <input type="text" placeholder="Enter art. number" name="art" onChange={handleChange} />
                <input type="number" placeholder="Enter price" name="price" onChange={handleChange} />

                <select onChange={handleChange} name="size">
                    <option value="">size</option>
                    <option value="s">S</option>
                    <option value="m">M</option>
                    <option value="l">L</option>
                    <option value="xl">XL</option>
                    <option value="xxl">XXL</option>
                </select>

                <select onChange={handleChange} name="color">
                    <option value="">color</option>
                    <option value="black">black</option>
                    <option value="red">red</option>
                    <option value="white">white</option>
                    <option value="pink">pink</option>
                </select>

                <select onChange={handleChange} name="type">
                    <option value="">Выберите вариант</option>
                    <option value="evening">Вечернее</option>
                    <option value="wedding">Свадебное</option>
                    <option value="casual">Повседневное</option>
                </select>

                <button onClick={hanleClick}>Create</button>
            </div>
        </div>
    );
};

export default CreatePage;