import React from 'react';
import { Form, Button, FormGroup, FormLabel } from 'react-bootstrap';
import * as yup from 'yup'
import { Formik } from 'formik';
import { Link } from 'react-router-dom';
const SignUp = () => {
    const schema = yup.object().shape({
        name: yup.string().min(2).max(30).required('Required'),
        lastName: yup.string().min(2).max(30).required('Required'),
        phoneNumber: yup.string().min(6).max(30).required('Required'),
        gender: yup.string().min(4).max(6).required('Required'),
        email: yup.string().email().min(3).max(255).required('Required'),
        password: yup.string().matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
        ).min(8).max(24).required('Required'),
    })
    return (
        <div className='sign-up'>
            <Link to='/' >to main page</Link>
            <Formik
                validationSchema={schema}
                onSubmit={(data) => { console.log(data) }}
                initialValues={{
                    name: '',
                    lastName: "",
                    phoneNumber: '',
                    gender: '',
                    email: '',
                    password: ''
                }}
            >
                {({ handleSubmit, handleChange, values, touched, errors }) => (
                    <Form onSubmit={handleSubmit} >

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Your name</Form.Label>
                            <Form.Control
                                name='name'
                                value={values.name}
                                isValid={!errors.name && touched.name}
                                onChange={handleChange}
                                isInvalid={!!errors.name}
                                type="text" placeholder="Enter name" />
                            <Form.Control.Feedback type='invalid' >
                                {errors.name}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Your last name</Form.Label>
                            <Form.Control
                                value={values.lastName}
                                name='lastName'
                                onChange={handleChange}
                                isValid={!errors.lastName && touched.lastName}
                                isInvalid={!!errors.lastName} type="text" placeholder="Enter last name" />
                            <Form.Control.Feedback type='invalid'>
                                {errors.lastName}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Your phone number</Form.Label>
                            <Form.Control
                                value={values.phoneNumber}
                                isValid={!errors.phoneNumber && touched.phoneNumber}
                                isInvalid={!!errors.phoneNumber}
                                name='phoneNumber'
                                onChange={handleChange} type="text" placeholder="Enter phone number" />
                            <Form.Control.Feedback type='invalid'>
                                {errors.phoneNumber}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <FormGroup className='mb-3'>
                            <FormLabel>Gender</FormLabel>
                            <Form.Select
                                value={values.gender}
                                isValid={!errors.gender && touched.gender}
                                isInvalid={!!errors.gender}
                                onChange={handleChange}
                                name='gender'
                                aria-label="Default select example">
                                <option>Select your gender</option>
                                <option value="female">Female</option>
                                <option value="male">Male</option>
                            </Form.Select>
                            <Form.Control.Feedback type='invalid'>
                                {errors.gender}
                            </Form.Control.Feedback>
                        </FormGroup>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                value={values.email}
                                isValid={!errors.email && touched.email}
                                isInvalid={!!errors.email}
                                onChange={handleChange}
                                name='email'
                                type="email" placeholder="Enter email" />
                            <Form.Control.Feedback type='invalid'>
                                {errors.email}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                value={values.password}
                                isValid={!errors.password && touched.password}
                                isInvalid={!!errors.password}
                                onChange={handleChange}
                                name='password'
                                type="password" placeholder="Password" />
                            <Form.Control.Feedback type='invalid'>
                                {errors.password}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                )}

            </Formik>
        </div>
    );
};


export default SignUp;