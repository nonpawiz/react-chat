import { useEffect, useRef, useState } from "react";
import io from "socket.io-client";

function App() {
  const useSocket = io.connect("http://localhost:8000");
  const [active, setActive] = useState(true);

  const [user, setUser] = useState("");
  const [message, setMessage] = useState("hellowwwww");
  const [messageReceived, setMessageReceived] = useState("");
  const [room, setRoom] = useState("abc");

  const sendMessage = () => {
    useSocket.emit("send_message", { user, message, room });
  };

  const joinRoom = () => {
    if (room != "") {
      useSocket.emit("join_room", room);
      setActive(!active);
    }
  };

  useEffect(() => {
    useSocket.on("receive_message", (data: any) => {
      console.log(data);

      setMessageReceived(data.message);
    });
  }, [useSocket]);

  return (
    <>
      <button type="button" onClick={joinRoom}>
        joinRoom
      </button>

      <input
        placeholder="userid"
        onChange={(event) => {
          setUser(event.target.value);
        }}
      />

      <button type="button" onClick={sendMessage}>
        UserID
      </button>
      <input
        placeholder="Message..."
        onChange={(event) => {
          setMessage(event.target.value);
        }}
      />

      <button type="button" onClick={sendMessage}>
        sendMessage
      </button>

      <h1> Message:</h1>
      {messageReceived}
    </>
  );
}

export default App;
