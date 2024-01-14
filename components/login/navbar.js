import Image from "next/image";

export const NavarLogin = () => {
  return (
    <main className="container mx-auto sm:mt-0 lg:mt-4">
      <div className=" py-3 flex justify-start sm:rounded-none lg:rounded-lg shadow-xl bg-custom-azul-clinicos-claro">
        <Image
          src="/clinicosColor.png"
          width={180}
          height={115}
          alt="clinicosColor"
          className="pl-3 items-center"
        />
      </div>
    </main>
  );
};
