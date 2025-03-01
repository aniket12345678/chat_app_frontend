import { createSlice } from "@reduxjs/toolkit";
import { AuthSignin, UserLists } from "../slices/auth.slice";
import { ChatMessageData } from "../slices/chat.slice";

export const authSlice = createSlice({
    name: 'authSlice',
    initialState: {
        user: null,
        token: null,
        isLoggedIn: false,
        allUsers: []
    },
    reducers: {
        logout: (state) => {
            state.user = null;
            state.token = null;
            state.isLoggedIn = false;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(AuthSignin.fulfilled, (state, action) => {
            if (action.payload.code === 200) {
                state.user = action.payload.data.user;
                state.token = action.payload.data.token;
                state.isLoggedIn = true;
            }
        })

        builder.addCase(UserLists.fulfilled, (state, action) => {
            if (action.payload.code === 200) {
                state.allUsers = action.payload.data;
            }
        })
    }
});

export const { logout } = authSlice.actions;

export const chatSlice = createSlice({
    name: 'chatSlice',
    initialState: {
        allMessages: [],
        chatObj: {
            selected_id: '',
            user_name: '',
        }
    },
    reducers: {
        resetData: (state) => {
            state.allMessages = [];
        },
        handleChatObj: (state, action) => {
            state.chatObj = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(ChatMessageData.fulfilled, (state, action) => {
            if (action.payload.code === 200) {
                state.allMessages = action.payload.data.data
            }
        })
    }
});

export const { resetData, handleChatObj } = chatSlice.actions;