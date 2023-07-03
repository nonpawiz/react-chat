import React, { useState, useEffect } from "react";
import NavBar from "../../Layouts/NavBar";
import Conversation from "./Conversation";
import Title from "./Layouts/Title";
import { useParams } from "react-router-dom";
import io from "socket.io-client";

interface Chat {
  id?: number | null | undefined,
  me?: number | null | undefined,
  message?: string | null | undefined,
  room?: string | null | undefined,
}

function Friends() {

  const { to, from } = useParams();
  const me = from;
  const useSocket = io.connect("http://localhost:8000");
  const [mymsg, SetMyMsg] = useState<Chat[]>([]);
  const [tomsg, SetToMsg] = useState<Chat[]>([]);
  const [chat, SetChat] = useState<Chat[]>([]);
  const [message, setMessage] = useState("");
  const [room, setRoom] = useState(to);

  const appendMyMsg = (data: Chat) => {
    if (data.me == me && data.message != '') {
      SetChat((chat) => [...chat, { id: chat.length + 1, message: data.message, me: 1 }]);
    } else {
      if (data.message != '') {
        SetChat((chat) => [...chat, { id: chat.length + 1, message: data.message, me: 0 }]);
      }
    }
    setMessage("");
  };

  const sendMessage = () => {
    useSocket.emit("send_message", { me, message, room });
  };

  useEffect(() => {
    useSocket.emit("join_room", room);
    useSocket.emit("join_user", me);
    useSocket.emit("send_message", { me, message, room });
  }, []);

  useEffect(() => {
    useSocket.on("receive_message", (data: Chat) => {
      console.log(data);
      appendMyMsg(data);
      console.log(`new :`);
    });
  }, [useSocket]);

  return (
    <>
      <NavBar />
      <Title to={to} />
      <Conversation chat={chat} />
      <div className="d-flex justify-content-between align-items-center">
        <input
          id="textInputExample"
          type="text"
          className="form-control p-1 border-0 py-2 m-1"
          placeholder="พิมพ์"
          value={message}
          onChange={(event) => {
            setMessage(event.target.value);
          }}
        />
        <div className="mx-1">
          <button
            className="btn bg-btn-ok text-light border-0 p-1 px-2 w-100"
            onClick={sendMessage}
          >
            <i className="uil uil-navigator"></i>
          </button>
          {/* <button
            className="btn bg-btn-ok text-light border-0 p-1 px-2 w-100"
            onClick={() => console.log(mymsg)}
          >
            ดู
          </button> */}
        </div>
      </div>
    </>
  );
}

export default Friends;
