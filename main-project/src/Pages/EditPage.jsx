import React, { useContext, useEffect } from 'react';
import * as yup from 'yup'
import { Formik } from 'formik';
import { Button, TextField } from '@mui/material';
import { useNavigate, useParams } from 'react-router';
import { adminContext } from '../contexts/AdminContext';
const EditPage = () => {
    const schema = yup.object({
        name: yup.string().min(3).max(30).required('Обязательна для заполнения'),

        description: yup.string().min(10).max(255).required('Обязательна для заполнения'),

        image: yup.string().required('Обязательна для заполнения'),

        description: yup.string().min(3).max(30).required('Обязательна для заполнения'),

        color: yup.string().required('Обязательна для заполнения'),

        brand: yup.string().required('Обязательна для заполнения'),

        color: yup.string().required('Обязательна для заполнения'),

        model: yup.string().min(1, 'Минимальное количество букв 3').max(30, 'Максимальное количество символов 30').required('Поле обязательно для заполнения'),
    })
    const { getPhoneToEdit, phoneToEdit, saveEditedPhone, clearProductEdit } = useContext(adminContext)

    const params = useParams()
    useEffect(() => {
        clearProductEdit()
    }, [])
    useEffect(() => {
        getPhoneToEdit(params.id)
    }, [])
    const navigate = useNavigate()
    return (
        <div className='edit-page' >
            <h2>Редактирование телефона</h2>
            {
                phoneToEdit ? (
                    <Formik
                        validationSchema={schema}
                        onSubmit={(editedPhone) => {
                            saveEditedPhone(editedPhone)
                            navigate('/admin')
                        }}
                        initialValues={phoneToEdit}
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
                                <Button variant='contained' color='primary' type='submit' >Сохранить изменения</Button>
                            </form>
                        )}
                    </Formik>
                ) : (
                    <h2>Loading...</h2>
                )
            }

        </div>
    );
};

export default EditPage;