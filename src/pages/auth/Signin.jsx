import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import AuthLayout from '../../components/AuthLayout'
import { useFormik } from 'formik'
import { initialObj } from '../../formvalidation/initialValues'
import { FormComponent } from '../../components/FormComponent'
import { validationObj } from '../../formvalidation/yupValidation'
import { AuthSignin } from '../../slices/auth.slice'
import { useDispatch } from 'react-redux'

const Signin = () => {
    const dispatch = useDispatch();

    const { values, errors, handleChange, handleSubmit } = useFormik({
        initialValues: initialObj.signin,
        validationSchema: validationObj.signin,
        onSubmit: async (values) => {
            await dispatch(AuthSignin(values)).unwrap();
        }
    })
    return (
        <div className="card-body p-5">
            <h2 className="text-uppercase text-center mb-5">Sign in</h2>
            <Form onSubmit={handleSubmit}>
                <FormComponent
                    type="email"
                    placeholder='Email'
                    name='email'
                    values={values}
                    handleChange={handleChange}
                    errors={errors}
                />
                <FormComponent
                    type="password"
                    placeholder='Password'
                    name='password'
                    values={values}
                    handleChange={handleChange}
                    errors={errors}
                />
                <div className="d-flex justify-content-center">
                    <Button variant='success' type='submit'>Login</Button>
                </div>
                <p className="text-center text-muted mt-5 mb-0">Don't have an account?
                    <Link to={'/signup'}>Sign up</Link>
                </p>
            </Form>
        </div>
    )
}

export default AuthLayout(Signin)