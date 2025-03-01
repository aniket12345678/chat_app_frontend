import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { changeToUpperCase } from '../common/method';
import { useDispatch, useSelector } from 'react-redux';
import { ChatAdd, ChatMessageData } from '../slices/chat.slice';
import { socket_client } from '../socket/socket';

const ChatMessage = () => {
    const dispatch = useDispatch();
    const { chatObj, allMessages } = useSelector((x) => x.chatSlice);
    const { user } = useSelector((x) => x.authSlice);

    const [inputVal, setInputVal] = useState('');

    const sendMessage = () => {
        dispatch(ChatAdd({ message: inputVal, receiver_id: chatObj }))
            .unwrap()
            .then(() => {
                socket_client.emit("send_message", { sender_id: user.id, receiver_id: chatObj.selected_id });
                setInputVal("");
                dispatch(ChatMessageData({ receiver_id: chatObj.selected_id }));
            });
    }
    useEffect(() => {
        socket_client.on('fetch_user_messages', (message) => {
            if (message.sender_id === chatObj.selected_id && message.receiver_id === user.id) {
                dispatch(ChatMessageData({ receiver_id: chatObj.selected_id }));
            }
        })
        return () => socket_client.off('fetch_user_messages');
    }, [chatObj.selected_id]);

    return (
        <div className="col-md-8">
            <div className="settings-tray">
                <div className="friend-drawer no-gutters friend-drawer--grey">
                    <img className="profile-image" src="https://randomuser.me/api/portraits/men/30.jpg" alt="" />
                    <div className="text">
                        <h6>{changeToUpperCase(chatObj.user_name)}</h6>
                        <p className="text-muted">Layin' down the law since like before Christ...</p>
                    </div>
                </div>
            </div>
            <div className="chat-panel">
                {
                    allMessages.map((itr, i) => {
                        let direction = itr.sender_id === user.id ? 'right' : 'left';
                        let offset = itr.sender_id === user.id ? 'offset-md-9' : '';
                        return (
                            <div className="row no-gutters" key={i}>
                                <div className={`col-md-3 ${offset}`}>
                                    <div className={`chat-bubble chat-bubble--${direction}`}>
                                        {itr.message}
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
                <div className="row">
                    <div className="col-12">
                        <div className="chat-box-tray">
                            <input
                                type="text"
                                value={inputVal}
                                placeholder="Type your message here..."
                                onChange={(e) => setInputVal(e.target.value)}
                            />
                            <Button onClick={sendMessage}>
                                send
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChatMessage
