import { Container, Button } from "@prismane/core";

export default function NonEsta(props) {
    const btnsclass = 'my-5 w-[300px] text-white hover:bg-red-500';
  return (
    <Container>
      <h1 className="text-4xl my-5 text-white text-center">Ata o nerviooo</h1>
      <div className="text-4xl font-semibold text-white text-center">
        Que ainda queda choio por facer!!!
      </div>
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
  );
}