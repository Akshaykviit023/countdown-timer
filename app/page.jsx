"use client"

import { useState, useEffect } from 'react'

import Navbar from '@/components/Navbar';

export default function Home() {
  const initialTime = 25 * 60;
  const [timeLeft, setTimeLeft] = useState(initialTime);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let timer;
    if(isActive && timeLeft > 0){
      timer = setInterval(() => {
        setTimeLeft(prevTime => prevTime - 1);
      }, 1000);
    }
    else if(timeLeft === 0){
      setIsActive(false);
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [isActive, timeLeft]);

  const startTimer = () => setIsActive(true);
  const pauseTimer = () => setIsActive(false);
  const resetTimer = () => {
    setIsActive(false);
    setTimeLeft(initialTime);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
  };


  return (
    <>
    <Navbar />
     <h1 className="text-center text-[15rem] font-bold bg-gradient-to-r from-[#cde18b]  to-[#245021] text-transparent bg-clip-text">{formatTime(timeLeft)}</h1>

     <div className="flex justify-center gap-12 text-white text-xl">
      <button className="bg-[#4d31f9] rounded-full py-2 px-7" onClick={startTimer} disabled={isActive}>Start</button>
      <button className="bg-[#4d31f9] rounded-full py-2 px-6" onClick={pauseTimer} disabled={!isActive}>Pause</button>
      <button className="bg-[#4d31f9] rounded-full py-2 px-6" onClick={resetTimer}>Reset</button>
      </div>
    </>
  );
}
