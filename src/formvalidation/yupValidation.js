import * as Yup from 'yup'

const signin = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Enter email'),
    password: Yup.string().required('Enter password'),
});

const signup = Yup.object().shape({
    user_name: Yup.string().required('Enter name'),
    email: Yup.string().email('Invalid email').required('Enter email'),
    password: Yup.string().required('Enter password'),
});

export const validationObj = {
    signin,
    signup
}