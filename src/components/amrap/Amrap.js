import { Container, Button, Flex, Field } from "@prismane/core";
import Amrap_timer from "./Amrap_timer";
import { useState } from "react";
export default function Amrap(props) {
  const [timer, setTimer] = useState(false);
  const [mins, setMins] = useState(0);
  const btnsclass = "my-5 w-[300px] text-white hover:bg-red-500";

  const renderTimer = () =>{
    setTimer(!timer);
  }

  const handleMinsChange = (event) =>{
    setMins(event.target.value);
  }
  return (
    <Container>
      {timer ? (
        <Amrap_timer
        minutos={mins}
        volve={renderTimer}
        />
      ) : (
        <Container className="text-white">
          <h1 className="text-5xl uppercase mb-[25px] text-center my-10">
            AMRAP
          </h1>
          <div className="my-[15px] flex flex-col md:flex-row text-center">
            <h3 className="w-100 md:w-[150px] text-xl my-5 font-bold md:mr-[15px]">
              POR
            </h3>
            <Field
              variant="outlined"
              size="lg"
              type="number"
              onChange={handleMinsChange}
              value={mins}
              className="w-[300px]"
            />
            <h3 className="w-100 md:w-[150px] md:ml-[15px] my-5 text-xl font-bold">
              MINUTOS
            </h3>
          </div>

          <Container>
            <Button
              className={btnsclass}
              variant="tertiary"
              color="white"
              size="lg"
              fillOnHover
              onClick={props.volve}
            >
              Voltar
            </Button>
            <Button
              className={btnsclass}
              variant="tertiary"
              color="white"
              size="lg"
              onClick={renderTimer}
            >
              Empezar
            </Button>
          </Container>
        </Container>
      )}
    </Container>
  );
}
