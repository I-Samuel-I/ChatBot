from fastapi import FastAPI
from starlette.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import google.generativeai as genai
import os
from dotenv import load_dotenv
import re

load_dotenv()

genai.configure(api_key=os.getenv("GEMINI_API_KEY"))
model = genai.GenerativeModel("gemini-2.0-flash-lite")
chat = model.start_chat(history=[])

app = FastAPI()
class Pergunta(BaseModel):
    pergunta: str


app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"], 
    allow_methods=["*"],  
    allow_headers=["*"],  
)


@app.post("/chat/responder")
async def responder_ia(dados: Pergunta):
    response = chat.send_message(dados.pergunta, generation_config={"temperature": 0.9, "max_output_tokens": 200})
    return {"resposta": response.text}
