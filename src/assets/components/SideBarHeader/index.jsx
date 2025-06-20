import * as S from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
export default function SideBarHeader({onAddChat}) {
  return (
    <>
      <S.HeaderContainer>
        <h1>CHAT BOT</h1>
        <S.BtnsContainer>
          <button onClick={onAddChat}>
            <span>+</span>
            New Chat
          </button>
          <div>
            <S.SearchContainer>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </S.SearchContainer>
          </div>
        </S.BtnsContainer>

        <S.Divider />
      </S.HeaderContainer>
    </>
  );
}
