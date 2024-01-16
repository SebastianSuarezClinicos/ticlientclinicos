"use client";

// import
import axios from "axios";
import { useState, useEffect } from "react";
// import { useDataContext } from "@/context/dataContext";

// subcomponets
// import { SelectVariants } from "@/components/subcomponents/select";
// import { ReferenceDateUsingValue } from "@/components/subcomponents/dateTime";

export const HistoryCitasUser = ({ setModalAsignCitaUser }) => {
  //
  // States
  // const { contextData, setcontextData } = useDataContext(); // useContext

  // Update States
  const activeModalAsignacion = (value) => {
    setModalAsignCitaUser(value);
  };

  // logs

  // const historyURL = process.env.NEXT_PUBLIC_API_URL_HISTORY;

  // obtener historial de atenciones actualizada
  // useEffect(() => {
  //   const historialAtenciones = async () => {
  //     const response = await axios.post(`${historyURL}`, {
  //       headers: { Authorization: "Bearer " + contextData.token },
  //     });
  //   };
  //   historialAtenciones();
  // });

  // Logica
  // Formateo de fecha
  // function formatDateAndTime(dateTime) {
  //   let date = new Date(dateTime);

  //   let timeDifference = -5 * 60; // en minutos

  //   date.setMinutes(date.getMinutes() + timeDifference);

  //   return date.toLocaleDateString() + " " + date.toLocaleTimeString();
  // }

  return (
    <main className="sm:col-span-1 lg:col-span-3 flex flex-col justify-start shadow-2xl rounded-lg bg-white text-black ">
      <div className="p-10 flex justify-between border-b-2 border-custom-clinicos-secundario">
        <h1 className="text-2xl font-bold text-custom-clinicos-secundario">
          Inicio
        </h1>
        <button
          onClick={() => activeModalAsignacion(true)}
          className="p-2 border-4 border-custom-clinicos-secundario rounded-lg text-custom-clinicos-secundario text-base font-bold hover:text-white hover:bg-custom-clinicos-secundario"
        >
          Quiero agendar una cita
        </button>
      </div>

      <div className=" px-10 py-5 text-base font-bold">
        <div className="pb-2 font-bold text-custom-clinicos-secundario">
          Citas recientes:
        </div>
        <div className="flex items-center justify-stretch">
          {/* <SelectVariants /> */}
          {/* <ReferenceDateUsingValue /> */}
        </div>
      </div>

      <div></div>

      <div className="grid grid-cols-1 sm:px-2 lg:px-10 gap-2">
        <div className="grid grid-cols-6 gap-3 py-3 items-center text-center sm:text-xs lg:text-base font-bold bg-slate-100 rounded-md">
          <div className="pl-5 text-start">Servicio</div>
          <div> Fecha</div>
          <div> Hora</div>
          <div> Sede</div>
          <div> Asigno</div>
          <div> Estado</div>
        </div>

        {/* {Object.entries(contextData.history.history).map(([id, cita]) => (
          <div
            key={id}
            className="grid grid-cols-5 gap-4 py-3 border-b-4 border-slate-100 rounded-lg text-center text-sm cursor-pointer hover:bg-slate-100"
          >
            <div className="text-start pl-5"> {cita.Servicio}</div>
            <div> {formatDateAndTime(cita.FechaInicioCita)}</div>
            <div> {cita.Sede}</div>
            <div> {cita.PersonaAsigna}</div>
            <div> {cita.Estado}</div>
          </div>
        ))} */}

        <div
          // key={id}
          className="grid grid-cols-6 gap-4 py-3 border-b-4 border-slate-100 rounded-lg text-center text-sm cursor-pointer hover:bg-slate-100"
        >
          <div className="text-start pl-5"> SALUD OCUPACIONAL</div>
          <div> 01-12-2023</div>
          <div> 06:00 AM</div>
          <div> SAN MARTÍN</div>
          <div> JOSE JUNCO</div>
          <div>CANCELADA</div>
        </div>
      </div>
    </main>
  );
};
