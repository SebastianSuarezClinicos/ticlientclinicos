"use client";

// import
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useDataContext } from "@/context/dataContext";
import Image from "next/image";

// import fetching
import { LoginFetch } from "@/app/lib/fetching";

// component
export const FormLogin = ({ setsendCode, setModalInfoContact }) => {
  //
  // states
  const { setContextData } = useDataContext();
  const [usernotFound, setusernotFound] = useState(false); //maneja el estado de los mensajes de error
  const [loadingButton, setloadingButton] = useState(false); //maneja el estado loading del boton

  // react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const on_Submit = handleSubmit(async (data) => {
    //
    // change state
    setusernotFound(false); //reinicia los mensaje de error
    setloadingButton(true); //activa el loading del boton

    // HTTP request
    const response = await LoginFetch(data);

    console.log(response);
    // if (response.token) {
    //   setContextData(() => ({
    //     codeToken: response.token,
    //   }));
    //   setsendCode(true);
    // } else if (response === "inactivo") {
    //   setusernotFound(true);
    //   setloadingButton(false);
    // } else if (response == "sin sistema") {
    //   alert("sin sistema");
    //   setloadingButton(true);
    // }
  });

  // update modal información de contacto
  const changeModalInfoContact = () => {
    setModalInfoContact(true);
  };

  return (
    <main className="col-span-1 flex justify-start text-black">
      <div className="w-full py-4 flex flex-col justify-center items-center sm:rounded-none lg:rounded-lg shadow-2xl bg-slate-50">
        <div className="flex flex-col justify-center items-center">
          <Image
            src="/ecopetrolLogo.png"
            width={115}
            height={115}
            alt="ecopetrolLogo"
            className="sm:pt-7 lg:pt-7 sm:pb-7 lg:pb-7"
          />
          <div className="container flex flex-col items-center justify-between">
            <div className="w-full text-4xl font-extrabold pb-10 text-center text-purple-800">
              Iniciar sesión
            </div>
          </div>
        </div>

        <form
          onSubmit={on_Submit}
          className="w-96 lg:py-4 grid grid-cols-1 gap-3 "
        >
          <div>
            <label className="block pb-1 text-xs">Seleccione</label>
            <select
              className="rounded-lg w-full h-8 text-sm text-center bg-custom-morado-claro"
              {...register("tipodeidentificacion", {
                required: {
                  value: true,
                  message: "Tipo de documento requerido",
                },
              })}
            >
              <option value="Cédula de Ciudadanía">Cédula de Ciudadanía</option>
              <option value="Cédula de Extranjería">
                Cédula de Extranjería
              </option>
            </select>
          </div>

          {errors.numerodeidentificacion && (
            <span className="text-xs text-red-400">
              {errors.numerodeidentificacion.message}
            </span>
          )}
          <div className="pb-1">
            <input
              type="text"
              placeholder="Número de identificación"
              className="w-full border rounded-lg h-8 text-sm text-center bg-custom-morado-claro"
              {...register("numerodeidentificacion", {
                required: {
                  value: true,
                  message: "El número de identificación es requerido",
                },
                minLength: {
                  value: 5,
                  message: "El número de identificación no es valido",
                },
                pattern: {
                  value: /^[0-9]+$/,
                  message: "Ingresa solo números sin espacios",
                },
              })}
            ></input>
          </div>

          {errors.correo && (
            <span className="text-xs text-red-400">
              {errors.correo.message}
            </span>
          )}
          <div className="pb-1">
            <input
              type="Email"
              placeholder="Correo corporativo"
              className="w-full border rounded-lg h-8 text-sm text-center bg-custom-morado-claro"
              {...register("correo", {
                required: { value: true, message: "El correo es requerido" },
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@clinicos\.com\.co$/,
                  message: "El dominio no es valido",
                },
              })}
            ></input>
          </div>
          {errors.contraseña && (
            <span className="text-xs text-red-400">
              {errors.contraseña.message}
            </span>
          )}
          <div className="pb-4">
            <input
              type="text"
              placeholder="Contraseña"
              className="w-full border rounded-lg h-8 text-sm text-center bg-custom-morado-claro"
              {...register("contraseña", {
                required: {
                  value: true,
                  message: "La contraseña es requerida",
                },
                pattern: {
                  value: /^[a-zA-Z0-9!@#$%^&*()-_+=<>?]+$/,
                  message: "Ingresa una contraseña sin espacios",
                },
              })}
            ></input>
          </div>

          <button
            className={`rounded-lg h-8 bg-gradient-to-r from-purple-800 via-purple-500 to-pink-500 text-white text-lg font-bold ${
              loadingButton ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={loadingButton}
          >
            {loadingButton ? "Verificando..." : "Iniciar"}
          </button>
          {usernotFound && (
            <span className="text-base font-bold text-red-400 text-center">
              Los datos ingresados no corresponden a un cuenta activa
            </span>
          )}
        </form>

        <div className="container flex flex-col items-center justify-between">
          <a
            className="w-full text-base font-bold pt-20 sm:pb-4 text-center text-indigo-500 cursor-pointer"
            onClick={() => changeModalInfoContact()}
          >
            ¿No puedes iniciar sesión?
          </a>
        </div>
      </div>
    </main>
  );
};
