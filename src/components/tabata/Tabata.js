import { Container, Button, Field, Flex } from "@prismane/core";
import Tabata_timer from "./Tabata_timer";
import { useState } from "react";
export default function Tabata(props) {
  const btnsclass = "my-5 w-[300px] text-white hover:bg-red-500";
  const contclass = "my-[15px] flex flex-col md:flex-row text-center";
  const h3leftcls = "w-100 md:w-[150px] text-xl my-5 font-bold md:mr-[15px]";
  const h3rightcl = "w-100 md:w-[150px] md:ml-[15px] my-5 text-xl font-bold";
  const [timer, setTimer] = useState(false);
  const [rounds, setRounds] = useState(0);
  const [work, setWork] = useState(0);
  const [rest, setRest] = useState(0);
  const renderTimer = () => {
    setTimer(!timer);
  };

  const handleWorkChange = (event) => {
    setWork(event.target.value);
  };

  const handleRoundsChange = (event) => {
    setRounds(event.target.value);
  };

  const handleRestChange = (event) => {
    setRest(event.target.value);
  };
  return (
    <Container>
      {timer ? (
        <Tabata_timer
          rondas={rounds}
          workTime={work}
          restTime={rest}
          volve={renderTimer}
        />
      ) : (
        <Container className="text-white">
          <h1 className="text-5xl uppercase mb-[25px] text-center">Tabata</h1>
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
            <h3 className={h3leftcls}>TRABALLO</h3>
            <Field
              variant="outlined"
              size="lg"
              type="number"
              className="w-[300px]"
              onChange={handleWorkChange}
            />
            <h3 className={h3rightcl}>SEGUNDOS</h3>
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
      )}
    </Container>
  );
}
