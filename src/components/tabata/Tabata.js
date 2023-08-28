import { Container, Button, Field, Flex } from "@prismane/core";
export default function Tabata(props) {
  const btnsclass = 'my-5 w-[300px] text-white hover:bg-red-500';
  const contclass = 'my-[15px] flex flex-col md:flex-row text-center';
  const h3leftcls = 'w-100 md:w-[150px] text-xl my-5 font-bold md:mr-[15px]';
  const h3rightcl = 'w-100 md:w-[150px] md:ml-[15px] my-5 text-xl font-bold';
  return (
    <Container className="text-white">
      <h1 className="text-5xl uppercase mb-[25px] text-center">Tabata</h1>
      <div className={contclass}>
        <h3 className={h3leftcls}>POR</h3>
        <Field
          variant="outlined"
          size="lg"
          type="number"
          className="w-[300px]"
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
          onClick={() => props.timer('Tabata_timer')}
        >
          Empezar
        </Button>
      </Container>
    </Container>
  );
}