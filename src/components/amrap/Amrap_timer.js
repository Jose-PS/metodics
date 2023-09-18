import React, { useState, useEffect } from "react";
import { Container, Button } from "@prismane/core";
import { longBeep, shortBeep } from "@/app/utils/sounds";

export default function Amrap_timer(props) {
  const btnsclass = "my-5 w-[300px] text-white hover:bg-red-500";

  const totalSeconds = props.minutos * 60;

  const [secondsLeft, setSecondsLeft] = useState(totalSeconds);
  const [isPaused, setIsPaused] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  const handlePauseClick = () => {
    setIsPaused(!isPaused);
  };

  const handleRestartClick = () => {
    setSecondsLeft(totalSeconds);
    setIsPaused(false);
    setIsFinished(false);
  };

  useEffect(() => {
    if (!isPaused && !isFinished && secondsLeft > 0) {
      const interval = setInterval(() => {
        if (secondsLeft - 1 === 0) {
          clearInterval(interval);
          setIsFinished(true);
        }
        setSecondsLeft(secondsLeft - 1);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [secondsLeft, isPaused, isFinished]);

  const displayMinutes = Math.floor(secondsLeft / 60);
  const displaySeconds = secondsLeft % 60;

  return (
    <Container>
      <div className="text-4xl md:text-[150px] md:leading-[150px] font-semibold text-white text-center">
        {isFinished
          ? "Rematou o tempo!!"
          : `${displayMinutes < 10 ? `0${displayMinutes}` : displayMinutes}:${
              displaySeconds < 10 ? `0${displaySeconds}`  : displaySeconds
            }`}
      </div>
      {displayMinutes===0 && (displaySeconds===3 || displaySeconds===2 || displaySeconds===1)? shortBeep():displayMinutes===0 && (displaySeconds===0)?longBeep():null}
      <Button
        className={btnsclass}
        variant="tertiary"
        color="white"
        size="lg"
        onClick={isFinished ? handleRestartClick : handlePauseClick}
      >
        {isFinished ? "Reiniciar" : isPaused ? "Continuar" : "Pausar"}
      </Button>
      <Button
        className={btnsclass}
        variant="tertiary"
        color="white"
        size="lg"
        onClick={props.volve}
      >
        Voltar
      </Button>
    </Container>
  );
}
