import { createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../config/api";
import { AuthToken, toastMessage } from "../common/method";

export const ChatAdd = createAsyncThunk('/chat/add',
    async (data, { getState }) => {
        try {
            const response = await API.post('/chat/add', data, AuthToken(getState().authSlice.token));
            return response.data;
        } catch (error) {
            toastMessage('error', 'Something went wrong');
        }
    }
);

export const ChatMessageData = createAsyncThunk('/chat/listing',
    async (data, { getState }) => {
        try {
            const response = await API.post('/chat/listing', data, AuthToken(getState().authSlice.token));
            return response.data;
        } catch (error) {
            toastMessage('error', 'Something went wrong');
        }
    }
);