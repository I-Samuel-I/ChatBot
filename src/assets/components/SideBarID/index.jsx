// import { useState } from "react";
// import { useNavigate } from "react-router";
// import { v4 as uuidv4 } from "uuid";
// import SideBarHeader from "../SideBarHeader";
// import SideBarHistoric from "../SideBarHistoric";

// export default function SideBarID() {
//   const [chats, setChats] = useState([]);
//   const navigate = useNavigate();

//   const addChat = () => {
//     const newID = `${uuidv4()}`;
//     const newChat = { id: newID, title: `Chat ${chats.length + 1}` };

//     setChats((prev) => [...prev, newChat]);
//     navigate(`/chat/${newID}`);
//   };
//   const clearAllChats = () => {
//     setChats([]);
//   };
//   return (
//     <>
//       <SideBarHeader onAddChat={addChat} />
//       <SideBarHistoric chats={chats} onClearAll={clearAllChats} />
//     </>
//   );
// }
