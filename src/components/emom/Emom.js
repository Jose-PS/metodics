import { Container, Button, Field } from "@prismane/core";
import { useState } from "react";
import Emom_timer from "./Emom_timer";
export default function Emom(props) {
  const btnsclass = 'my-5 w-[300px] text-white hover:bg-red-500';
  const contclass = 'my-[15px] flex flex-col md:flex-row text-center';
  const h3leftcls = 'w-100 md:w-[150px] text-xl my-5 font-bold md:mr-[15px]';
  const h3rightcl = 'w-100 md:w-[150px] md:ml-[15px] my-5 text-xl font-bold';
  const [timer, setTimer] = useState(false);
  const [mins, setMins] = useState(0);
  const [secs, setSecs] = useState(0);
  const [rounds, setRounds] = useState(0);
  const [rest, setRest] = useState(0);

  const renderTimer = () =>{
    setTimer(!timer);
  }

  const handleMinsChange = (event) =>{
    setMins(event.target.value);
  }

  const handleSecsChange = (event) =>{
    setSecs(event.target.value);
  }

  const handleRoundsChange = (event) =>{
    setRounds(event.target.value);
  }

  const handleRestChange = (event) =>{
    setRest(event.target.value);
  }
  return (
    <Container>
      {
        timer?
        <Emom_timer
        mins={mins}
        secs={secs}
        rondas={rounds}
        rest={rest}
        volve={renderTimer}
        />
        :
        <Container className="text-white">
      <h1 className="text-5xl uppercase mb-[25px]">emom</h1>
      <div className={contclass}>
        <h3 className={h3leftcls}>CADA</h3>
        <Field
          variant="outlined"
          size="lg"
          type="number"
          className="w-[300px]"
          onChange={handleMinsChange}
        />
        <h3 className={h3rightcl}>MINUTOS</h3>
      </div>
      <div className={contclass}>
        <h3 className={h3leftcls}>E</h3>
        <Field
          variant="outlined"
          size="lg"
          type="number"
          className="w-[300px]"
          onChange={handleSecsChange}
        />
        <h3 className={h3rightcl}>SEGUNDOS</h3>
      </div>
      <div className={contclass}>
        <h3 className={h3leftcls}>POR</h3>
        <Field
          variant="outlined"
          size="lg"
          type="number"
          className="w-[300px]"
          onChange={handleRoundsChange}
        />
        <h3 className={h3rightcl}>RONDAS</h3>
      </div>
      <div className={contclass}>
        <h3 className={h3leftcls}>DESCANSO</h3>
        <Field
          variant="outlined"
          size="lg"
          type="number"
          className="w-[300px]"
          onChange={handleRestChange}
        />
        <h3 className={h3rightcl}>SEGUNDOS</h3>
      </div>

      <Container>
        <Button
          className={btnsclass}
          variant="tertiary"
          color="white"
          size="lg"
          onClick={props.volve}
        >
          Voltar
        </Button>
        <Button
          className={btnsclass}
          variant="tertiary"
          color="white"
          size="lg"
          onClick={setTimer}
        >
          Empezar
        </Button>
      </Container>
    </Container>
      }
    </Container>
  );
}
