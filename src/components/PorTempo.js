import { Container, Button, Flex, Field } from "@prismane/core";
export default function PorTempo(props) {
  const btnsclass = 'my-5 w-[300px] text-white hover:bg-red-500';
  return (
    <Container className="text-white">
      <h1 className="text-5xl uppercase mb-[25px]">Por Tempo</h1>
      <Flex className="my-[15px]">
        <h3 className="w-[150px] text-xl font-bold mr-[15px]">POR</h3>
        <Field
          variant="outlined"
          size="lg"
          type="number"
          className="w-[300px]"
        />
        <h3 className="w-[150px] ml-[15px] text-xl font-bold">MINUTOS</h3>
      </Flex>

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
          onClick={props.aindano}
        >
          Empezar
        </Button>
      </Container>
    </Container>
  );
}
