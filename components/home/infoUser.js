"use client";

// imports
import Image from "next/image";
import LogoutIcon from "@mui/icons-material/Logout";
import { useRouter } from "next/navigation";

// component
export const InfoUser = ({ setModalInfoContact }) => {
  //
  // router
  const router = useRouter();

  //change modal
  const openModalInfoContact = () => {
    setModalInfoContact(true);
  };

  return (
    <main className="col-span-1 rounded-lg bg-white text-black">
      <a
        className="flex items-center justify-end pt-5 pr-10 font-bold"
        onClick={() => {
          router.push("/autoagendamiento");
        }}
      >
        <LogoutIcon /> Salir
      </a>
      <div className="flex items-center px-7 pt-10">
        <Image
          className="inline-block h-24 w-24 rounded-full ring-2 object-contain ring-white shadow-xl"
          src="/ecopetrolLogo.png"
          width={115}
          height={115}
          alt="ecopetrolLogo"
        />
        <div className="px-4 font-bold">
          <span className="block text-base">
            {/* {contextData.user["Nombre Completo"]} */}
          </span>
          <span className="block text-sm">Ecopetrol</span>
        </div>
      </div>

      <div className="p-10">
        <h1 className="text-xl font-bold pb-4 text-custom-clinicos-secundario">
          Contacto
        </h1>
        <h3 className="text-lg pb-2">Email</h3>
        <span className="block text-sm font-semibold pb-4">
          {/* {contextData.user.Correo} */}
        </span>
        <h3 className="text-lg pb-2">Teléfono</h3>
        <span className="block text-sm font-semibold pb-4">
          {/* {contextData.user.Telefono} */}
        </span>

        <h1 className="text-xl font-bold pb-4 text-custom-clinicos-secundario">
          Estado de afiliación
        </h1>
        <h3 className="text-lg pb-2">Estado</h3>
        <span className="block text-sm font-semibold pb-4">
          {/* {contextData.user.Estado} */}
        </span>
        <h3 className="text-lg pb-2">Tipo</h3>
        <span className="block text-sm font-semibold pb-4">
          {/* {contextData.user.Tipo_Afiliacion} */}
        </span>
      </div>

      <div className="pt-20 pb-10">
        <a
          onClick={() => openModalInfoContact()}
          className="block pb-3 text-center text-lg font-bold text-custom-clinicos-secundario cursor-pointer"
        >
          ¿Tus datos están desactualizados?
        </a>
      </div>
    </main>
  );
};
