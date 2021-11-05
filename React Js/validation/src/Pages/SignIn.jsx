import { Form, Button } from 'react-bootstrap';
import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup'
import { useHistory, useParams } from 'react-router';


const SignIn = () => {
    const schema = yup.object().shape({
        email: yup.string().email().min(3).max(255).required('Required'),
        password: yup.string().matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
        ).min(8).max(24).required('Required')
    })
    const history = useHistory()
    const params = useParams()
    console.log(params);
    return (
        <div className='sign-up'>
            <Formik
                validationSchema={schema}
                onSubmit={(data) => console.log(data)}
                initialValues={{
                    email: '',
                    password: ''
                }}
            >
                {({ handleChange, handleSubmit, values, touched, errors }) => (
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                value={values.email}
                                isValid={!errors.email && touched.email}
                                isInvalid={!!errors.email}
                                onChange={handleChange}
                                name='email'
                                type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                            <Form.Control.Feedback type='invalid' >
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

                            <Form.Control.Feedback type='invalid' >
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

export default SignIn;