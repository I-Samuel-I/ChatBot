import * as S from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import axios from "axios";
import { useState } from "react";

export default function Message() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [responseIA, setResponseIA] = useState("");

  const handleAnsewr = async () => {
    axios({
      method: "POST",
      url: "http://localhost:8000/chat/responder",
      data: {
        pergunta: message,
      },
    })
      .then((res) => {
        setResponseIA(res.data.resposta);
        setMessages((prev) => [
          ...prev,
          `Você: ${message}`,
          `IA: ${res.data.resposta}`,
        ]);
        setMessage("");
      })
      .catch((error) => {
        console.error("Erro ao fazer a requisição:", error);
      });
  };

  // const handlePergunta = async () => {
  //   if (!message.trim()) return;

  //   try {
  //     const respostas = await fetch("http://localhost:8000/chat/responder", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ pergunta: message }),
  //     });

  //     if (respostas.ok) {
  //       const data = await respostas.json();
  //       setMessages((prev) => [
  //         ...prev,
  //         `Você: ${message}`,
  //         `IA: ${data.resposta}`,
  //       ]);
  //       setMessage("");
  //       setResponseIA(data.resposta);
  //     } else {
  //       console.error("Erro na resposta da IA:", respostas.statusText);
  //     }
  //   } catch (error) {
  //     console.error("Erro ao fazer a requisição:", error);
  //   }
  // };

  return (
    <>
      <div>
        {messages.map((msg, i) => (
          <p key={i}>{msg}</p>
        ))}
        {responseIA && (
          <p>
            <strong>Resposta da IA:</strong> {responseIA}
          </p>
        )}
      </div>
      <S.MessageContainer>
        <input
          type="text"
          placeholder=" What's in your mind?..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="button" onClick={handleAnsewr}>
          <S.MessageIcon>
            <FontAwesomeIcon icon={faPaperPlane} />
          </S.MessageIcon>
        </button>
      </S.MessageContainer>
    </>
  );
}
