"use client";

// Import
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useDataContext } from "@/context/dataContext";
import { useRouter } from "next/navigation";

// import fetching
import { CodeLoginFetch } from "@/app/lib/fetching";

// component
export const ModalCode = () => {
  //
  // states
  const { contextData, setContextData } = useDataContext();
  const [loadingButton, setloadingButton] = useState(false); // maneja el estado loading del boton
  const [messageError, setMessageError] = useState(null); // maneja el mensaje de error mostrado

  // router
  const router = useRouter();

  // react-hook-form
  const { register, handleSubmit, formState } = useForm();

  const on_Submit = handleSubmit(async (data) => {
    //
    // change state
    setloadingButton(true); //activa el loading del boton
    setMessageError(null); //reinicia el mensaje de error

    // HTTP request
    const response = await CodeLoginFetch(data, contextData.codeToken);

    alert(response);
    setloadingButton(false);

    // router.push("/autoagendamiento/home");

    // if (response[0] === "Verificacion exitosa") {
    //   setContextData(() => ({
    //     history: response.history,
    //   }));
    //   router.push("/autoagendamiento/home");
    // } else if (response === "sin sistema") {
    //   alert("sin sistema");
    // } else {
    //   console.log("respuesta ", response);
    //   setMessageError(response);
    //   setloadingButton(false);
    // }
  });

  return (
    <main>
      <div className="fixed inset-0 min-h-screen flex justify-center items-center bg-black bg-opacity-45">
        <div className="w-96 pt-4 px-10 pb-10 border-2 rounded-lg shadow-2xl bg-slate-50 text-black">
          <div className="flex flex-col">
            <div className="py-10 text-2xl font-extrabold text-center text-custom-clinicos-secundario">
              Código de acceso
            </div>
            <div className="pb-10 text-justify">
              Queremos brindarte una experiencia segura y confiable, por eso te
              pedimos ingresar el código de 4 digitos que enviamos a tu correo
              electronico. si no lo encuentras en la bandeja de entrada, revisa
              en la carpeta de spam o no deseados.{" "}
              <span className="font-bold">
                La validez del código es de 5 minutos.
              </span>
            </div>

            <form onSubmit={on_Submit} className="flex flex-col justify-start">
              <div className="pb-8">
                <input
                  type="text"
                  placeholder="Ingrese el código"
                  {...register("codigo")}
                  className="block w-full p-2 text-center text-lg bg-slate-200"
                />
              </div>
              <button
                type="submit"
                className={`border-custom-azul-clinicos border p-2 text-custom-azul-clinicos font-extrabold hover:bg-custom-clinicos-secundario hover:text-white rounded-md ${
                  loadingButton ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={loadingButton}
              >
                {loadingButton ? "Verificando..." : "Validar código"}
              </button>
              <div className="p-2 text-sm text-red-400">{messageError}</div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};
