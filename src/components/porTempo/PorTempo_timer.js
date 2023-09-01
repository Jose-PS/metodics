import React, { useState, useEffect } from "react";
import { Container, Button } from "@prismane/core";
import { longBeep, shortBeep } from "@/app/utils/sounds";

export default function PorTempo_timer(props) {
  const btnsclass = "my-5 w-[300px] text-white hover:bg-red-500";

  const totalSeconds = props.minutos * 60; // Convertir minutos a segundos

  const [secondsElapsed, setSecondsElapsed] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  const handlePauseClick = () => {
    setIsPaused(!isPaused);
  };

  const handleRestartClick = () => {
    setSecondsElapsed(0);
    setIsPaused(false);
    setIsFinished(false);
  };

  useEffect(() => {
    if (!isPaused && !isFinished && secondsElapsed < totalSeconds) {
      const interval = setInterval(() => {
        if (secondsElapsed + 1 === totalSeconds) {
          clearInterval(interval);
          setIsFinished(true);
        }
        setSecondsElapsed(secondsElapsed + 1);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [secondsElapsed, isPaused, isFinished, totalSeconds]);

  const displayMinutes = Math.floor(secondsElapsed / 60);
  const displaySeconds = secondsElapsed % 60;

  return (
    <Container>
      <div className="text-4xl font-semibold text-white text-center">
        {isFinished
          ? "Rematou o tempo!!"
          : `${displayMinutes < 10 ? `0${displayMinutes}` : displayMinutes}:${
              displaySeconds < 10 ? `0${displaySeconds}` : displaySeconds
            }`}
      </div>
      {displayMinutes===0 && (displaySeconds===totalSeconds-3 || displaySeconds===totalSeconds-2 || displaySeconds===totalSeconds-1)? shortBeep():displayMinutes===0 && (displaySeconds===totalSeconds)?longBeep():null}
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




