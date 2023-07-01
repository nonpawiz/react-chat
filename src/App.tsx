import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import NoPage from "./views/NoPage";
import { useSelector } from 'react-redux';
import { selectUser } from './redux/userSlice';
import Login from "./views/auth/Login";
import Feeds from "./views/feeds/Feeds";
import Chat from "./views/chat/Chat";

function App() {
  const user: any = useSelector(selectUser)
  return (
    user ?
      <HashRouter>
        <Routes>
          <Route path="/" element={<Feeds />} />
          <Route path="/home" element={<Feeds />} />
          <Route path="/chat" element={<Chat />} />
          {/* <Route path="/userslist" element={<UsersList />} /> */}
          <Route path="*" element={<NoPage />} />
          {/* <Route path="/auth" element={<Auth />} /> */}
        </Routes>
      </HashRouter>
      : <HashRouter><Routes><Route path="/*" element={<Login />} /></Routes></HashRouter>
  );
}

export default App;
