import React, { useState, useEffect } from "react";
import { Container, Button } from "@prismane/core";

export default function Tabata_timer(props) {
  const btnsclass = "my-5 w-[300px] text-white hover:bg-red-500";

  const [currentRound, setCurrentRound] = useState(1);
  const [timeLeft, setTimeLeft] = useState(props.workTime);
  const [isRest, setIsRest] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  
  const handlePauseClick = () => {
    setIsPaused(!isPaused);
  };

  const handleRestartClick = () => {
    setCurrentRound(1);
    setTimeLeft(props.workTime);
    setIsRest(false);
    setIsPaused(false);
    setIsFinished(false);
  };

  useEffect(() => {
    if (!isPaused && !isFinished) {
      const interval = setInterval(() => {
        if (timeLeft === 1) {
          if (isRest) {
            if (currentRound === parseInt(props.rondas, 10)) {
              clearInterval(interval);
              setIsFinished(true);
            } else {
              setCurrentRound(currentRound + 1);
              setIsRest(false);
              setTimeLeft(props.workTime);
            }
          } else {
            setIsRest(true);
            setTimeLeft(props.restTime);
          }
        } else {
          setTimeLeft(timeLeft - 1);
        }
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [currentRound, timeLeft, isRest, isPaused, isFinished, props]);

  const displayMinutes = Math.floor(timeLeft / 60);
  const displaySeconds = timeLeft % 60;

  return (
    <Container>
      <div className="text-4xl font-semibold text-white text-center">
        {isFinished
          ? "Entreno rematado!!"
          : `${isRest ? "Descanso" : "Traballo"} - ${
              displayMinutes < 10 ? `0${displayMinutes}` : displayMinutes
            }:${displaySeconds < 10 ? `0${displaySeconds}` : displaySeconds}`}
        <div className="mt-2 text-lg">
          {isFinished ? null : `${currentRound}/${props.rondas} Ronda(s)`}
        </div>
      </div>
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
