import React, { useState, useEffect } from "react";
import { Container, Button } from "@prismane/core";

export default function Hora(props) {
  const [time, setTime] = useState(new Date());

  const btnsclass = 'my-5 w-[300px] text-white hover:bg-red-500';

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const hours = time.getHours().toString().padStart(2, "0");
  const minutes = time.getMinutes().toString().padStart(2, "0");
  const seconds = time.getSeconds().toString().padStart(2, "0");

  return (
    <Container>
      <h1 className="text-4xl my-5 text-white">Hora actual</h1>
      <div className="text-4xl font-semibold text-white">
        {hours}:{minutes}:{seconds}
      </div>
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
