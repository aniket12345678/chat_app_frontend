import React, { useEffect } from 'react'
import { socket_client } from '../../socket/socket'
import Chatlist from '../../components/Chatlist';
import ChatMessage from '../../components/ChatMessage';
import { useDispatch } from 'react-redux';
import { UserLists } from '../../slices/auth.slice';

const Home = () => {
    const dispatch = useDispatch();

    function GetAllUsers() {
        dispatch(UserLists())
    }
    useEffect(() => {
        GetAllUsers();
        // socket_client.emit('frontend_message', "how are you?")
    }, []);
    return (
        <div className="chat-container">
            <div className="row no-gutters">
                <Chatlist />
                <ChatMessage />
            </div>
        </div>
    )
}

export default Home
