import React from "react";
import ChatBar from "./ChatBar";
import ChatBody from "./ChatBody";
import ChatFooter from "./ChatFooter";
import { useEffect, useState } from "react";

const ChatPage = ({ socket }) => {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    socket.on("messageResponse", (data) => setMessages([...messages, data]));

    console.log("Inside useEffect", messages);
  }, [socket, messages]);

  // useEffect(() => {
  //   const handleNewMessage = (data) => {
  //     setMessages((prevMessages) => [...prevMessages, data]);
  //   };

  //   socket.on("messageResponse", handleNewMessage);

  //   return () => {
  //     // Clean up socket event listener when component unmounts
  //     socket.off("messageResponse", handleNewMessage);
  //   };
  // }, [socket]);

  return (
    <div className="chat">
      <ChatBar />
      <div className="chat__main">
        <ChatBody messages={messages} />
        <ChatFooter socket={socket} />
      </div>
    </div>
  );
};

export default ChatPage;
