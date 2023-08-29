import { Container, Button, Field } from "@prismane/core";
import PorTempo_timer from "./PorTempo_timer";
import { useState } from "react";
export default function PorTempo(props) {
  const [timer, setTimer] = useState(false);
  const [mins, setMins] = useState(0);
  const btnsclass = 'my-5 w-[300px] text-white hover:bg-red-500';
  const contclass = 'my-[15px] flex flex-col md:flex-row text-center';
  const h3leftcls = 'w-100 md:w-[150px] text-xl my-5 font-bold md:mr-[15px]';
  const h3rightcl = 'w-100 md:w-[150px] md:ml-[15px] my-5 text-xl font-bold';

  const renderTimer = () =>{
    setTimer(!timer);
  }

  const handleMinsChange = (event) =>{
    setMins(event.target.value);
  }

  return (
    <Container>
    {
      timer?
      <PorTempo_timer
      volve={renderTimer}
      minutos={mins}
      />
      :
      <Container className="text-white">
      <h1 className="text-5xl uppercase mb-[25px] text-center">Por Tempo</h1>
      <div className={contclass}>
        <h3 className={h3leftcls}>POR</h3>
        <Field
          variant="outlined"
          size="lg"
          type="number"
          onChange={handleMinsChange}
          className="w-[300px]"
          value={mins}
        />
        <h3 className={h3rightcl}>MINUTOS</h3>
      </div>

      <Container>
      <Button
          className={btnsclass}
          variant="tertiary"
          color="white"
          size="lg"
          onClick={renderTimer}
        >
          Empezar
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
    </Container>
    }
    </Container>
  );
}
