import { createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../config/api";
import { AuthToken, toastMessage } from "../common/method";

export const AuthSignup = createAsyncThunk('/user/signup',
    async (data) => {
        try {
            const response = await API.post('/user/signup', data);
            toastMessage(response.data.code === 200 ? 'success' : 'error', response.data.message);
            return response.data;
        } catch (error) {
            toastMessage('error', 'Something went wrong');
        }
    }
);

export const AuthSignin = createAsyncThunk('/user/signin',
    async (data) => {
        try {
            const response = await API.post('/user/signin', data);
            toastMessage(response.data.code === 200 ? 'success' : 'error', response.data.message);
            return response.data;
        } catch (error) {
            toastMessage('error', 'Something went wrong');
        }
    }
);


export const UserLists = createAsyncThunk('/user/user-list',
    async (data, { getState }) => {
        try {
            const response = await API.post('/user/user-list', data, AuthToken(getState().authSlice.token));
            return response.data;
        } catch (error) {
            toastMessage('error', 'Something went wrong');
        }
    }
);