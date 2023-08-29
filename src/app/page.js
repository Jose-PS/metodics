"use client";
import Amrap from "@/components/amrap/Amrap";
import Amrap_timer from "@/components/amrap/Amrap_timer";
import Emom from "@/components/emom/Emom";
import Emom_timer from "@/components/emom/Emom_timer";
import Hora from "@/components/Hora";
import PorTempo from "@/components/porTempo/PorTempo";
import PorTempo_timer from "@/components/porTempo/PorTempo_timer";
import Tabata from "@/components/tabata/Tabata";
import Tabata_timer from "@/components/tabata/Tabata_timer";
import { Container, Button, PrismaneProvider } from "@prismane/core";
import { useState } from "react";

export default function Home() {
  const [activo, setActivo] = useState(null);
  const btnsclass = "my-5 w-[300px] text-white hover:bg-red-500";
  const renderActivo = () => {
    switch (activo) {
      case "Hora":
        return <Hora volve={atras} atimer={rendTimer} />;
      case "Tabata":
        return <Tabata volve={atras} timer={rendTimer} />;
      case "PorTempo":
        return <PorTempo volve={atras} timer={rendTimer} />;
      case "Emom":
        return <Emom volve={atras} timer={rendTimer} />;
      case "Amrap":
        return <Amrap volve={atras} timer={rendTimer} />;
      case "Tabata_timer":
        return <Tabata_timer volve={atras} />;
      case "PorTempo_timer":
        return <PorTempo_timer volve={atras} />;
      case "Emom_timer":
        return <Emom_timer volve={atras} />;
      case "Amrap_timer":
        return <Amrap_timer volve={atras} />;
      default:
        return null;
    }
  };

  const rendTimer = (timer) =>{
    setActivo(timer);
  }

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
                onClick={() => setActivo("Tabata")}
              >
                Tabata
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
