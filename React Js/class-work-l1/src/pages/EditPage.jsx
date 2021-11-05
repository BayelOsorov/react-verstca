import React, { useContext, useEffect, useState } from 'react';
import { mainContext } from '../contexts/MainContex';

const EditPage = () => {
    const { editProduct, getProduct, product } = useContext(mainContext)
    // const [productToEdit, setproductToEdit] = useState(product)
    const [art, setArt] = useState(product.art)
    useEffect(() => {
        setArt(product.art)
    }, [art])


    // useEffect(() => {
    //     setproductToEdit(product)
    // }, [product])
    const handleChange = (e) => {
        // let product = {
        //     ...productToEdit,
        //     [e.target.name]: e.target.value
        // }
        //     let product = {

        //         [e.target.name]: e.target.value
        //     }
        //     setArt(product)
        //     console.log(product);
    }
    // создаем копию обьекта и перезаписываем значение обьекта
    // setproductToEdit(product)

    const hanleClick = () => {

    }
    return (
        <div>
            Edit page
            <div>
                <input
                    value={art}
                    type="text" placeholder="Enter art. number" name="art"
                    onChange={handleChange} />
                <input
                    // value={productToEdit.price}
                    type="number" placeholder="Enter price" name="price" onChange={handleChange} />

                <select
                    // value={productToEdit.size}
                    onChange={handleChange} name="size">
                    <option value="">size</option>
                    <option value="s">S</option>
                    <option value="m">M</option>
                    <option value="l">L</option>
                    <option value="xl">XL</option>
                    <option value="xxl">XXL</option>
                </select>

                <select
                    // value={productToEdit.color}
                    onChange={handleChange} name="color">
                    <option value="">color</option>
                    <option value="black">black</option>
                    <option value="red">red</option>
                    <option value="white">white</option>
                    <option value="pink">pink</option>
                </select>

                <select
                    // value={productToEdit.type}
                    onChange={handleChange} name="type">
                    <option value="">Выберите вариант</option>
                    <option value="evening">Вечернее</option>
                    <option value="wedding">Свадебное</option>
                    <option value="casual">Повседневное</option>
                </select>

                <button onClick={hanleClick}>Save</button>
            </div>
        </div>
    );
};

export default EditPage;