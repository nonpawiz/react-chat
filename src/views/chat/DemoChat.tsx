import React, { useState, useEffect } from "react";
import NavBar from "../../Layouts/NavBar";
import Conversation from "./Conversation";
import Title from "./Layouts/Title";
import { useParams } from "react-router-dom";
import io from "socket.io-client";

interface Chat {
  msg?: string;
}

function Friends() {
  const start_msg = [
    {
      msg: "",
    },
  ];
  const { to, from } = useParams();
  const me = from;
  const useSocket = io.connect("http://localhost:8000");
  const [mymsg, SetMyMsg] = useState(start_msg);
  const [message, setMessage] = useState("test");
  const [room, setRoom] = useState(to);

  const appendMyMsg = (data: any) => {
    if (data.me == me) {
      const insert_new = [...mymsg, { msg: data.message }];
      SetMyMsg(insert_new);
    }
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
    useSocket.on("receive_message", (data: any) => {
      console.log(data);
      appendMyMsg(data);
      console.log(`myMsg :`);
      console.log(mymsg);
    });
  }, [useSocket]);

  return (
    <>
      <NavBar />
      <Title to={to} />
      <Conversation />
      <div className="d-flex justify-content-between align-items-center">
        <input
          id="textInputExample"
          type="text"
          className="form-control p-1 border-0 py-2 m-1"
          placeholder="พิมพ์"
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
        </div>
      </div>
    </>
  );
}

export default Friends;
