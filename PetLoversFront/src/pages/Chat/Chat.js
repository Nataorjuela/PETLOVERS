import {useEffect, useState} from "react";
import React from 'react';
import Pusher from 'pusher-js';
import avatar from "../../imagenes/avatar.jpg";
import logo from "../../imagenes/logo.png";
import '../Chat/Chat.css';



function Chat() {

    const [username, setUsername] = useState('username');
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState('');
    let allMessages = [];

    useEffect(() => {
        Pusher.logToConsole = true;

        const pusher = new Pusher('6136aa3612d9d2f6aaa0', {
          cluster: 'us2'
        });
        
        const channel = pusher.subscribe('chat');
        channel.bind('message', function (data) {
            allMessages.push(data);
            setMessages(allMessages);
        });
    },[]);

    const submit = async e => {
        e.preventDefault();

        await fetch('http://localhost:8080/api/messages', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                username,
                message
            })
        });

        setMessage('');
    }

    return (
        
        <div className="container">
            <div id="logo">
                <img src={logo}/>
            </div>
            <div id="avatar">
                <img src={avatar}/>
            </div>
            <div className="d-flex flex-column align-items-stretch flex-shrink-0 bg-white">
                <div
                    className="d-flex align-items-center flex-shrink-0 p-3 link-dark text-decoration-none border-bottom">
                    <input className="fs-5 fw-semibold" value={username}
                           onChange={e => setUsername(e.target.value)}/>
                    
                </div>
                <div className="list-group list-group-flush border-bottom scrollarea">
                    {messages.map(message => {
                        return (
                            <div className="list-group-item list-group-item-action py-3 lh-tight">
                                <div className="d-flex w-100 align-items-center justify-content-between">
                                    <strong className="mb-1">{message.username}</strong>
                                </div>
                                <div className="col-10 mb-1 small">{message.message}</div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <form onSubmit={e => submit(e)}>
                <input id="message" className="form-control" placeholder="Write a message" value={message}
                       onChange={e => setMessage(e.target.value)}
                />
            </form>
            
        </div>

    );
}

export default Chat;