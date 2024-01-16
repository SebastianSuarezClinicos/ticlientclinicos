import Image from "next/image";

export const Footer = () => {
  return (
    <main className="p-2 sm:bg-transparent lg:bg-white">
      <div className="container mx-auto grid sm:grid-cols-1 lg:grid-cols-2">
        <div className="flex flex-col ">
          <Image
            src="/clinicosColor.png"
            width={180}
            height={115}
            alt="clinicosColor"
            className="p-1"
          />
          <div className="py-3 text-sm text-black">
            Todos los derechos reservados - CLINICOS PROGRAMAS DE ATENCIÓN
            INTEGRAL S.A.S IPS
          </div>
        </div>
        <div className="flex items-center justify-center">
          <a
            className="pb-4 text-black font-bold"
            href="/Politica de Protección de Datos Personales Clinicos IPS.pdf"
            target="_blank"
          >
            Politica de datos
          </a>
        </div>
      </div>
    </main>
  );
};
