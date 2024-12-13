"use client";
import { useState } from "react";
import { Button } from "./ui/button";

const jokes: string[] = [
  "Ek murgha sadak kyun paar karta hai? 🐔 Doosri taraf aik murghi thi! 😂",
  "Teacher: Tum late kyun aaye? 🧑‍🏫 Student: Sir rasta yaad kar raha tha... woh bhi mujhe bhool gaya! 🤦‍♂️",
  "Aloo ne tamatar se kaha: Tum kitne laal ho! 🍅 Tamatar bola: Tum kyun bharta ho? 😂🥔",
  "Ek programmer so raha tha. 😴 Uska dost bola: Kya kar raha hai? Programmer: Code mein bugs fix kar raha hoon... sapne mein! 🐞💻",
  "Ek chay ka cup ne bola: Mujhe peelo warna thanda hojaunga. ☕ Dost bola: Tum bhi sadak par khade ho! 😂",
  "Biwi: Mujhe birthday gift mein car chahiye. 🚗 Shauhar: Car ka picture chalay ga? Biwi: Talak ka bhi picture chalay ga. 🤣💔",
  "Ek naukar se malik ne kaha: Tum aaj subah kyun nahi aaye? Naukar: Aap ne kaha tha ghar samajh ke kaam karo. Mai so raha tha. 🏠😆",
  "Ek larka exam ke paper mein likh raha tha. 📄 Teacher: Kya likh rahe ho? Larka: Sir, Allah se dua kar raha hoon ke paper pass ho jaye. 🙏😂",
  "Doctor: Tumhari umr kaise barh gayi? 🤷‍♂️ Patient: Doctor sahab, kehte hain waqt sab ko barha deta hai! ⏳🤣",
  "Ek bheega hua billi bola: Mujhe swimming nahi aati. 🐱 Pani bola: Teri himmat ka waqa nahi! 😂💦",
  "Pathan ke mobile par message aaya: Aap jeet gaye hain! 🎉 Pathan bola: Wohi old story, mehnat karne wale hamesha jeet jaate hain! 😆",
  "Ek pencil dosti tod ke boli: Ab teri zindagi blank hai. ✏️ Eraser bola: Tension na lo, main sab mita dunga! 😂🧽",
  "Larki: Mujhe surprise chahiye! 🎁 Larka: Main kal shaadi kar raha hoon! Larki: Tumhari? 😳 Larka: Nahi, tumhari behn ki! 😂💍",
];


export default function StaticJokesApp() {
  const [joke, setJoke] = useState<string>(jokes[0]); 

 
  const fetchRandomJoke = () => {
    const randomIndex = Math.floor(Math.random() * jokes.length);
    setJoke(jokes[randomIndex]);
  };

  return (
    <div className="flex flex-col items-center h-screen justify-center bg-gradient-to-br from-[#FFDEE9] via-[#B5FFFC] to-[#FFB3FD] p-4">
      <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-md text-center transition-transform transform hover:scale-105">
        <h1 className="text-4xl font-extrabold text-[#FF6B6B] mb-4 animate-bounce">😆 Mazahiya Jokes 😆</h1>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">{joke}</p>
        <Button
          onClick={fetchRandomJoke}
          className="bg-gradient-to-r from-[#FF6B6B] to-[#FFA07A] text-white px-6 py-3 rounded-full text-lg font-semibold hover:scale-110 transition-transform duration-300"
        >
          New Joke Dekhain 😄
        </Button>
      </div>
    </div>
  );
}
