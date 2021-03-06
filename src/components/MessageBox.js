import React from 'react';
// import React, {useRef, useEffect} from "react";

import moment from 'moment';

import '../App.css';


class MessageBox extends React.Component {

    componentDidUpdate() {
        this.end.scrollIntoView()
    }
    // const MessageBox = ({ messages }) => {
        
    //     const messagesEndRef = useRef(null);
    //     const scrollToBottom = () => {
    //         messagesEndRef.current.scrollIntoView({behavior: "smooth"})
    //     }
    //     useEffect(scrollToBottom, [messages])
        render() {
            const { messages } = this.props
            return (
                <div id="allMsg">
                    {
                        messages.map(msg =>
                            <div key={msg.timestamp} className="userMsgContainer">
                                <div className="userHeader">
                                    <img className="userMsgPic" src={`https://avatars.dicebear.com/4.4/api/gridy/${msg.username}.svg`} alt="userPic" />
                                    <h6 className="username">{msg.username}</h6>
                                    <p className="timestamp">{moment(msg.timestamp).format('lll')}</p>
                                </div>
                                <p className="userMsg">{msg.message}</p>
                            </div>
                        )
                    }
                    <div 
                    // ref={messagesEndRef}
                    ref={(elem) => {
                        this.end = elem
                    }}
                    />
                </div>
            )
        }
    }
// }

export default MessageBox
