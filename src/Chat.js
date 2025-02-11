import React, { useState, useEffect } from "react";
import io from "socket.io-client";
const socket = io("http://localhost:5000");
const Chat = ({ from, to }) => {
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);
    useEffect(() => {
        socket.on("receiveMessage", (data) => {
            if ((data.from === from && data.to === to) || (data.from === to && data.to === from)) {
                setMessages((prevMessages) => [...prevMessages, data]);
            }
        });
        return () => socket.off("receiveMessage");
    }, [from, to]);
    const sendMessage = () => {
        socket.emit("sendMessage", { from, to, message });
        setMessages((prevMessages) => [...prevMessages, { from, message }]);
        setMessage("");
    };
    return (
        <div className="chat-container">
            <div className="messages">
                {messages.map((msg, index) => (
                    <p key={index}>
                        <strong>{msg.from}:</strong> {msg.message}
                    </p>
                ))}
            </div>
            <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Entrez votre message" />
            <button onClick={sendMessage}>Envoyer</button>
        </div>
    );
};
export default Chat;
