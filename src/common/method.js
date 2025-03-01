import { toast } from 'react-toastify';

function toastMessage(type, message) {
    return toast[type](message, {
        position: "top-right",
        autoClose: 3000,
    });
}

function AuthToken(token) {
    return {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
}

function changeToUpperCase(data) {
    return data.substring(0, 1).toUpperCase() + data.substring(1, data.length);
}

export { toastMessage, AuthToken, changeToUpperCase }