import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { changeToUpperCase } from '../common/method';
import { handleChatObj } from '../redux/reducers';
import { ChatMessageData } from '../slices/chat.slice';

const Chatlist = () => {
    const dispatch = useDispatch();
    const { allUsers } = useSelector((x) => x.authSlice);

    const changeSelectedUser = (data) => {
        dispatch(handleChatObj({ selected_id: data.id, user_name: data.user_name }));
        dispatch(ChatMessageData({ receiver_id: data.id }));
    }

    return (
        <div className="col-md-4 border-right">
            <div className="settings-tray">
                <img className="profile-image" src="https://randomuser.me/api/portraits/men/39.jpg" alt="" />
                <span className="settings-tray--right">
                    {/* <CachedIcon className='custom-icon' />
                        <MessageIcon className='custom-icon' />
                        <MenuIcon className='custom-icon' /> */}
                </span>
            </div>
            <div className="search-box">
                <div className="input-wrapper">
                    {/* <i className="material-icons">search</i> */}
                    {/* <SearchIcon /> */}
                    <input placeholder="Search here" type="text" />
                </div>
            </div>
            {
                allUsers.map((itr, index) => {
                    return (
                        <React.Fragment key={itr.user_name + index}>
                            <div
                                className="friend-drawer friend-drawer--onhover"
                                onClick={() => changeSelectedUser(itr)}
                            >
                                <img
                                    className="profile-image"
                                    src="https://randomuser.me/api/portraits/men/20.jpg"
                                    alt=""
                                />
                                <div className="text">
                                    <h6>{changeToUpperCase(itr.user_name)}</h6>
                                    <p className="text-muted">Hey, you're arrested!</p>
                                </div>
                                <span className="time text-muted small">13:21</span>
                            </div>
                            <hr />
                        </React.Fragment>
                    )
                })
            }
        </div>
    )
}

export default Chatlist
