import { Container, Button, Field, Flex } from "@prismane/core";
export default function Tabatha(props) {
  return (
    <Container>
      <h1 className="text-5xl uppercase mb-[25px]">Tabatha</h1>
      <Flex className="my-[15px]">
        <h3 className="w-[150px] text-xl font-bold mr-[15px]">POR</h3>
        <Field
          variant="outlined"
          size="lg"
          type="number"
          className="w-[300px]"
        />
        <h3 className="w-[150px] ml-[15px] text-xl font-bold">RONDAS</h3>
      </Flex>
      <Flex className="my-[15px]">
        <h3 className="w-[150px] text-xl font-bold mr-[15px]">TRABALLO</h3>
        <Field
          variant="outlined"
          size="lg"
          type="number"
          className="w-[300px]"
        />
        <h3 className="w-[150px] ml-[15px] text-xl font-bold">SEGUNDOS</h3>
      </Flex>
      <Flex className="my-[15px]">
        <h3 className="w-[150px] text-xl font-bold mr-[15px]">DESCANSO</h3>
        <Field
          variant="outlined"
          size="lg"
          type="number"
          className="w-[300px]"
        />
        <h3 className="w-[150px] ml-[15px] text-xl font-bold">SEGUNDOS</h3>
      </Flex>

      <Flex>
        <Button
          className="my-5 mx-5 w-[300px]"
          variant="tertiary"
          color="red"
          size="lg"
          fillOnHover
          onClick={props.volve}
        >
          Voltar
        </Button>
        <Button
          className="my-5 mx-5 w-[300px]"
          variant="tertiary"
          color="red"
          size="lg"
          fillOnHover
        >
          Empezar
        </Button>
      </Flex>
    </Container>
  );
}
