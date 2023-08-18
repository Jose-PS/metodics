import { Container, Button, Flex, Field } from "@prismane/core";
import { useState } from "react";
export default function PorTempo(props) {
  const [mins, setMins] = useState('');
  const btnsclass = 'my-5 w-[300px] text-white hover:bg-red-500';
  const contclass = 'my-[15px] flex flex-col md:flex-row text-center';
  const h3leftcls = 'w-100 md:w-[150px] text-xl my-5 font-bold md:mr-[15px]';
  const h3rightcl = 'w-100 md:w-[150px] md:ml-[15px] my-5 text-xl font-bold';

  const handleChange = (event) =>{
    setMins(event.target.value);
  }

  return (
    <Container className="text-white">
      <h1 className="text-5xl uppercase mb-[25px] text-center">Por Tempo</h1>
      <div className={contclass}>
        <h3 className={h3leftcls}>POR</h3>
        <Field
          variant="outlined"
          size="lg"
          type="number"
          className="w-[300px]"
          value={mins}
          onChange={handleChange}
        />
        <h3 className={h3rightcl}>MINUTOS</h3>
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
          onClick={() => props.timer('PorTempo_timer', mins)}
        >
          Empezar
        </Button>
      </Container>
    </Container>
  );
}
