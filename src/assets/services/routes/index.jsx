import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "../../pages/register";
import Login from "../../pages/login";
import ChatHome from "../../pages/chat";
import Chat from "../../pages/chat/chatID";
import Landing from "../../pages/landing";
import Error from "../../pages/error";
export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/chat" element={<ChatHome />} />
        <Route path="/chat/:id" element={<Chat />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="" element={<Landing />} />
        <Route path="*" element={<Error/>}/>
      </Routes>
    </Router>
  );
}
