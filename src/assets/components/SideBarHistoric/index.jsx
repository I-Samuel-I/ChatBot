import * as S from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGear,
  faUser,
  faMessage,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function SideBarHistoric({ chats, onClearAll, onDeleteChat }) {
  const handleClick = () => {
    alert("Teste");
  };

  return (
    <S.HistoricContainer>
      <nav>
        <S.HistoricWrapper>
          <p>Your Conversations</p>
          <button onClick={onClearAll}>Clear All</button>
        </S.HistoricWrapper>
        <S.HistoricList>
          {chats.map((chat) => (
            <S.ChatItem key={chat.id}>
              <Link to={`/chat/${chat.id}`}>
                <span>
                  <FontAwesomeIcon icon={faMessage} />
                </span>
                {chat.title}
              </Link>
              <button>
                <FontAwesomeIcon icon={faTrash} />   
              </button> 
             
            </S.ChatItem>
          ))}
        </S.HistoricList>
      </nav>
      <S.Info>
        <button onClick={handleClick}>
          <label>
            <FontAwesomeIcon icon={faGear} />
          </label>
          Settings
        </button>
        <button onClick={handleClick}>
          <label>
            <FontAwesomeIcon icon={faUser} />
          </label>
          Name User
        </button>
      </S.Info>
    </S.HistoricContainer>
  );
}
