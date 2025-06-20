import google.generativeai as genai 
import os
from dotenv import load_dotenv

load_dotenv()

genai.configure(api_key=os.getenv("GEMINI_API_KEY"))

model = genai.GenerativeModel("gemini-2.0-flash-lite")

chat = model.start_chat(history=[])
prompt = input("Pergunte algo (ou 'fim' para sair): ")

while prompt.lower() != "fim":
    response = chat.send_message(prompt, generation_config={"temperature": 0.9, "max_output_tokens": 200})
    print("Resposta da IA:", response.text)
    prompt = input("Pergunte algo (ou 'fim' para sair): ")