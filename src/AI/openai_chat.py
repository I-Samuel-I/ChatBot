from openai import OpenAI
import os
from dotenv import load_dotenv

load_dotenv()
client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

messages = [
    {"role": "system", "content": "Você é um coach de League of Legends, e só responderá perguntas sobre o jogo."}
]

input_message = input("Pergunte algo (ou 'fim' para sair): ")

while input_message.lower() != "fim":
    messages.append({"role": "user", "content": input_message})

    response = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=messages,
        temperature=0.7,
        max_tokens=1000
    )

    answer = response.choices[0].message.content
    messages.append({"role": "assistant", "content": answer})

    print("Resposta da IA:", answer)
    input_message = input("\nPergunte algo (ou 'fim' para sair): ")