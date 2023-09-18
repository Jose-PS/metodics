import React, { useState, useEffect } from "react";
import { Container, Button } from "@prismane/core";
import { longBeep, shortBeep } from "@/app/utils/sounds";

export default function Emom_timer(props) {
  const btnsclass = "my-5 w-[300px] text-white hover:bg-red-500";

  const totalRounds = parseInt(props.rondas, 10);
  const totalSecondsWork = isNaN(props.mins)? 0 :parseInt(props.mins,10) * 60 + parseInt(props.secs, 10);
  const totalSecondsRest = parseInt(props.rest, 10);

  const [currentRound, setCurrentRound] = useState(1);
  const [timeLeft, setTimeLeft] = useState(totalSecondsWork);
  const [isRest, setIsRest] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  const handlePauseClick = () => {
    setIsPaused(!isPaused);
  };

  const handleRestartClick = () => {
    setCurrentRound(1);
    setTimeLeft(totalSecondsWork);
    setIsRest(false);
    setIsPaused(false);
    setIsFinished(false);
  };

  useEffect(() => {
    if (!isPaused && !isFinished) {
      const interval = setInterval(() => {
        if (timeLeft === 0) {
          if (isRest) {
            if (currentRound === totalRounds) {
              clearInterval(interval);
              setIsFinished(true);
            } else {
              setCurrentRound(currentRound + 1);
              setIsRest(false);
              setTimeLeft(totalSecondsWork);
            }
          } else {
            setIsRest(true);
            setTimeLeft(totalSecondsRest);
          }
        } else {
          setTimeLeft(timeLeft - 1);
        }
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [currentRound, timeLeft, isRest, isPaused, isFinished, totalSecondsWork, totalSecondsRest, totalRounds]);

  const displayMinutes = Math.floor(timeLeft / 60);
  const displaySeconds = timeLeft % 60;

  return (
    <Container>
      <div className="text-4xl md:text-[150px] md:leading-[150px] font-semibold text-white text-center">
        {isFinished
          ? "EMOM completado!!"
          : `${isRest ? "Descanso" : "Traballo"} \n ${
              displayMinutes < 10 ? `0${displayMinutes}` : displayMinutes
            }:${displaySeconds < 10 ? `0${displaySeconds}` : displaySeconds}`}
        <div className="mt-2 text-lg md:text-[150px] md:leading-[150px]">
          {isFinished ? null : `Ronda ${currentRound} de ${totalRounds}`}
        </div>
        {displayMinutes===0 && (displaySeconds===3 || displaySeconds===2 || displaySeconds===1)? shortBeep():displayMinutes===0 && (displaySeconds===0)?longBeep():null}
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



