import { useParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
export default function Chat() {
  const { id } = useParams();

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
  return (
    <div>
      <h1>Chat ID: {id}</h1>
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
      <input
          type="text"
          placeholder=" What's in your mind?..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="button" onClick={handleAnsewr}>TESTE</button>
      {/* renderiza a conversa baseada no ID */}
    </div>
  );
}