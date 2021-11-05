import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { mainContext } from '../contexts/MainContex';
import EditPage from './EditPage';


const HomePage = () => {
    const { getProducts, products, deleteProduct, editProduct, getProduct } = useContext(mainContext)
    useEffect(() => {
        getProducts()
    }, [])


    return (
        <div>
            <Link to='/create' >
                Create product
            </Link>
            {products ? (products.length ? (
                <table>
                    <thead>
                        <tr>
                            <th>Атрикул</th>
                            <th>Цена</th>
                            <th>Размер</th>
                            <th>Тип</th>
                            <th>Цвет</th>
                            <th>#</th>
                            <th>#</th>

                        </tr>
                    </thead>
                    <tbody>
                        {products.map((item) => (
                            <tr>
                                <td>{item.id}</td>
                                <td>{item.art}</td>
                                <td>{item.price}</td>
                                <td>{item.type}</td>
                                <td>{item.color}</td>
                                <td>
                                    <button onClick={() => deleteProduct(item.id)}>DELETE</button>
                                </td>
                                <td>
                                    <Link to='/edit' >
                                        <button onClick={() => getProduct(item.id)} >Edit</button>
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <h2>Товаров нет</h2>
            )

            ) :
                <h1>Загрузка</h1>
            }
        </div>
    );
};

export default HomePage;