import React, { useState, useEffect } from "react";
import { Container, Button } from "@prismane/core";

export default function Hora(props) {
  const [time, setTime] = useState(new Date());

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
    <div>
      <h1>Hora actual</h1>
      <div className="text-4xl font-semibold">
        {hours}:{minutes}:{seconds}
      </div>
      <Button
        className="my-5 w-[300px]"
        variant="tertiary"
        color="red"
        size="lg"
        fillOnHover
        onClick={props.volve}
      >
        Voltar
      </Button>
    </div>
  );
}
