// imports
import Image from "next/image";

// Component
export const IntroLogin = () => {
  return (
    <main className="col-span-1 flex items-center sm:justify-start lg:justify-center">
      <div className="w-full p-10 shadow-2xl lg:rounded-tl-lg lg:rounded-bl-lg bg-custom-ecopetrol-morado">
        <Image
          src="/primerolaSalud.png"
          width={125}
          height={125}
          alt="primerolaSalud"
          className="pb-7"
        />
        <div className="text-slate-50">
          <div className="font-bold sm:text-lg lg:text-4xl sm:pb-2 lg:pb-6 ">
            Auto agendamiento
          </div>
          <div className="font-extrabold sm:text-3xl lg:text-6xl sm:pb-2 lg:pb-7">
            Exámenes ocupacionales
          </div>
          <div className="font-semibold sm:text-base lg:text-xl sm:pb-1 lg:pb-4">
            Reserva para Evaluación integral de riesgos en trabajadores EPSI -
            EIR
          </div>
        </div>
      </div>
    </main>
  );
};
