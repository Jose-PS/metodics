"use client";
import Amrap from "@/components/Amrap";
import Emom from "@/components/Emom";
import Hora from "@/components/Hora";
import PorTempo from "@/components/PorTempo";
import Tabatha from "@/components/Tabatha";
import { Container, Button } from "@prismane/core";
import { useState } from "react";

export default function Home() {
  const [activo, setActivo] = useState(null);

  const renderActivo = () => {
    switch (activo) {
      case "Hora":
        return <Hora volve={atras} />;
      case "Tabatha":
        return <Tabatha volve={atras}/>;
      case "PorTempo":
        return <PorTempo volve={atras}/>;
      case "Emom":
        return <Emom volve={atras}/>;
      case "Amrap":
        return <Amrap volve={atras}/>;
      default:
        return null;
    }
  };

  const atras = () => {
    setActivo(null);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Container>
        <h1 className="text-8xl font-serif">
          <span className="text-red-600">M</span>etodics
        </h1>
        <div className="w-[300px] bg-red-500 text-center mt-[20px] rounded-lg"><h3>CALISTHENIC PROGRAM</h3></div>
      </Container>
      <Container>
        {renderActivo() === null ? (
          <>
            <Button
              className="my-5 w-[300px]"
              variant="tertiary"
              color="red"
              size="lg"
              fillOnHover
              onClick={() => setActivo("Hora")}
            >
              Hora
            </Button>
            <Button
              className="my-5 w-[300px]"
              variant="tertiary"
              color="red"
              size="lg"
              fillOnHover
              onClick={() => setActivo("Tabatha")}
            >
              Tabatha
            </Button>
            <Button
              className="my-5 w-[300px]"
              variant="tertiary"
              color="red"
              size="lg"
              fillOnHover
              onClick={() => setActivo("PorTempo")}
            >
              Por Tempo
            </Button>
            <Button
              className="my-5 w-[300px]"
              variant="tertiary"
              color="red"
              size="lg"
              fillOnHover
              onClick={() => setActivo("Emom")}
            >
              Emom
            </Button>
            <Button
              className="my-5 w-[300px]"
              variant="tertiary"
              color="red"
              size="lg"
              fillOnHover
              onClick={() => setActivo("Amrap")}
            >
              Amrap
            </Button>
          </>
        ) : (
          renderActivo()
        )}
      </Container>
    </main>
  );
}
