import { Container, Button, Flex, Field } from "@prismane/core";
export default function Amrap(props) {
  const btnsclass = 'my-5 w-[300px] text-white hover:bg-red-500';
  return (
    <Container className="text-white">
      <h1 className="text-5xl uppercase mb-[25px] text-center my-10">AMRAP</h1>
      <div className="my-[15px] flex flex-col md:flex-row text-center">
        <h3 className="w-100 md:w-[150px] text-xl my-5 font-bold md:mr-[15px]">POR</h3>
        <Field
          variant="outlined"
          size="lg"
          type="number"
          className="w-[300px]"
        />
        <h3 className="w-100 md:w-[150px] md:ml-[15px] my-5 text-xl font-bold">MINUTOS</h3>
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
          onClick={() => props.timer('Amrap_timer')}
        >
          Empezar
        </Button>
      </Container>
    </Container>
  );
}
