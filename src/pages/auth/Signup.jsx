import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import AuthLayout from '../../components/AuthLayout'
import { useFormik } from 'formik'
import { initialObj } from '../../formvalidation/initialValues'
import { FormComponent } from '../../components/FormComponent'
import { validationObj } from '../../formvalidation/yupValidation'
import { useDispatch } from 'react-redux'
import { AuthSignup } from '../../slices/auth.slice'

const Signup = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { values, errors, handleChange, handleSubmit } = useFormik({
        initialValues: initialObj.signup,
        validationSchema: validationObj.signup,
        onSubmit: async (values) => {
            const response = await dispatch(AuthSignup(values)).unwrap();
            if (response.code === 200) {
                setTimeout(() => {
                    navigate('/');
                }, 2000);
            }
        }
    })
    return (
        <div className="card-body p-5">
            <h2 className="text-uppercase text-center mb-5">Sign up</h2>
            <Form onSubmit={handleSubmit}>
                <FormComponent
                    type="text"
                    placeholder='Name'
                    name='user_name'
                    values={values}
                    handleChange={handleChange}
                    errors={errors}
                />
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
                    <Button variant='success' type='submit'>Register</Button>
                </div>
                <p className="text-center text-muted mt-5 mb-0">Already have an account?
                    <Link to={'/'}>Login here</Link>
                </p>
            </Form>
        </div>
    )
}

export default AuthLayout(Signup)