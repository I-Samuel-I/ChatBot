import { useState } from "react";
import SideBarHeader from "../../components/SideBarHeader";
import SideBarHistoric from "../../components/SideBarHistoric";
import { v4 as uuidv4 } from "uuid";
import * as S from "./style";
import Message from "../../components/Message";

export default function ChatHome() {
  const [chats, setChats] = useState([]);

  const addChat = () => {
    const newID = `${uuidv4()}`;
    const newChat = { id: newID, title: `Chat ${chats.length + 1}` };
    setChats((prev) => [...prev, newChat]);
  };
  const clearAllChats = () => {
    setChats([]);
  };

  const deleteChat = (id) => {
    setChats((prevChats) => prevChats.filter((chat) => chat.id !== id));
  };

  return (
    <S.ChatContainer>
      <S.ChatSideBar>
        <SideBarHeader onAddChat={addChat} />
        <SideBarHistoric
          chats={chats}
          onClearAll={clearAllChats}
          onDeleteChat={deleteChat}
        />
      </S.ChatSideBar>
      <S.Message>
        <Message />
      </S.Message>
    </S.ChatContainer>
  );
}
