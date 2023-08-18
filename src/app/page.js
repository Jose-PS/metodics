"use client";
import Amrap from "@/components/Amrap";
import Emom from "@/components/Emom";
import Hora from "@/components/Hora";
import NonEsta from "@/components/NonEsta";
import PorTempo from "@/components/PorTempo";
import Tabatha from "@/components/Tabatha";
import { Container, Button, PrismaneProvider } from "@prismane/core";
import { useState } from "react";

export default function Home() {
  const [activo, setActivo] = useState(null);
  const btnsclass = "my-5 w-[300px] text-white hover:bg-red-500";
  const renderActivo = () => {
    switch (activo) {
      case "Hora":
        return <Hora volve={atras} aindano={nonesta} />;
      case "Tabatha":
        return <Tabatha volve={atras} aindano={nonesta} />;
      case "PorTempo":
        return <PorTempo volve={atras} aindano={nonesta} />;
      case "Emom":
        return <Emom volve={atras} aindano={nonesta} />;
      case "Amrap":
        return <Amrap volve={atras} aindano={nonesta} />;
      case "nonesta":
        return <NonEsta volve={atras} />;
      default:
        return null;
    }
  };

  const nonesta = () => {
    setActivo("nonesta");
  };
  const atras = () => {
    setActivo(null);
  };

  return (
    <PrismaneProvider>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Container>
          <h1 className="text-6xl xl:text-8xl font-serif">
            <span className="text-red-600">M</span>etodics
          </h1>
          <div className="w-[200px] xl:w-[300px] bg-red-500 text-center mt-[20px] mb-[30px] rounded-lg">
            <h3>CALISTHENIC PROGRAM</h3>
          </div>
        </Container>
        <Container>
          {renderActivo() === null ? (
            <>
              <Button
                className={btnsclass}
                variant="tertiary"
                color="white"
                size="lg"
                onClick={() => setActivo("Hora")}
              >
                Hora
              </Button>
              <Button
                className={btnsclass}
                variant="tertiary"
                color="white"
                size="lg"
                onClick={() => setActivo("Tabatha")}
              >
                Tabatha
              </Button>
              <Button
                className={btnsclass}
                variant="tertiary"
                color="white"
                size="lg"
                onClick={() => setActivo("PorTempo")}
              >
                Por Tempo
              </Button>
              <Button
                className={btnsclass}
                variant="tertiary"
                color="white"
                size="lg"
                onClick={() => setActivo("Emom")}
              >
                Emom
              </Button>
              <Button
                className={btnsclass}
                variant="tertiary"
                color="white"
                size="lg"
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
    </PrismaneProvider>
  );
}
