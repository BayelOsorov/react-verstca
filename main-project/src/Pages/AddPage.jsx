import { Button, TextField } from '@mui/material';
import React, { useContext } from 'react';
import * as yup from 'yup'
import { Formik } from 'formik';
import { adminContext } from '../contexts/AdminContext';
import { useNavigate } from 'react-router';

const AddPage = () => {
    const schema = yup.object({
        name: yup.string().min(3, 'Минимальное количество букв 3').max(30, 'Максимальное количество символов 30').required('Поле обязательно для заполнения'),
        description: yup.string().min(10, 'Минимальное количество букв 3').max(255, 'Максимальное количество символов 30').required('Поле обязательно для заполнения'),
        image: yup.string().required('Поле обязательно для заполнения'),
        price: yup.number().min(3, 'Минимальное количество букв 3').required('Поле обязательно для заполнения'),
        color: yup.string().required('Поле обязательно для заполнения'),
        brand: yup.string().required('Поле обязательно для заполнения'),
        model: yup.string().min(1, 'Минимальное количество букв 3').max(30, 'Максимальное количество символов 30').required('Поле обязательно для заполнения'),
    })
    const { addPhone } = useContext(adminContext)
    const navigate = useNavigate()

    const handleSubmit = (phone) => {
        addPhone(phone)
        navigate('/admin')
    }
    return (
        <div className='add-page' >
            <h2>Добавить телефон</h2>
            <Formik
                validationSchema={schema}
                onSubmit={handleSubmit}
                initialValues={{
                    name: '',
                    description: '',
                    price: '',
                    color: '',
                    image: '',
                    brand: '',
                    model: ''
                }}
            >
                {({ handleChange, handleSubmit, values, touched, errors }) => (
                    <form onSubmit={handleSubmit} >
                        <TextField
                            label='Название телефона'
                            type='text'
                            variant='standard'
                            name='name'
                            value={values.name}
                            error={!!errors.name && touched.name}
                            helperText={touched.name ? errors.name : ''}
                            onChange={handleChange}
                        />
                        <TextField
                            label='Описание телефона'
                            type='text'
                            variant='standard'
                            name='description'
                            value={values.description}
                            error={!!errors.description && touched.description}
                            helperText={touched.description ? errors.description : ''}
                            onChange={handleChange}
                        />
                        <TextField
                            label='Цена телефона'
                            type='number'
                            variant='standard'
                            name='price'
                            value={values.price}
                            error={!!errors.price && touched.price}
                            helperText={touched.price ? errors.price : ''}
                            onChange={handleChange}
                        />
                        <TextField
                            label='Фото телефона'
                            type='text'
                            variant='standard'
                            name='image'
                            value={values.image}
                            error={!!errors.image && touched.image}
                            helperText={touched.image ? errors.image : ''}
                            onChange={handleChange}
                        />
                        <TextField
                            label='Брэнд телефона'
                            type='text'
                            variant='standard'
                            name='brand'
                            value={values.brand}
                            error={!!errors.brand && touched.brand}
                            helperText={touched.brand ? errors.brand : ''}
                            onChange={handleChange}
                        />
                        <TextField
                            label='Модель телефона'
                            type='text'
                            variant='standard'
                            name='model'
                            value={values.model}
                            error={!!errors.model && touched.model}
                            helperText={touched.model ? errors.model : ''}
                            onChange={handleChange}
                        />
                        <TextField
                            label='Цвет телефона'
                            type='text'
                            variant='standard'
                            name='color'
                            value={values.color}
                            error={!!errors.color && touched.color}
                            helperText={touched.color ? errors.color : ''}
                            onChange={handleChange}
                        />
                        <Button variant='contained' color='primary' type='submit' >Добавить телефон</Button>
                    </form>
                )}
            </Formik>

        </div>
    );
};

export default AddPage;