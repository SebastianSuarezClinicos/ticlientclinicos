"use client";

// import
import { useState } from "react";

// component
import { NavarLogin } from "@/components/login/navbar";
import { InfoUser } from "@/components/home/infoUser";
import { HistoryCitasUser } from "@/components/home/historyCitasUser";
import { ModalAsignCitUser } from "@/components/home/modalAsignCitaUser";
import { ModalInfoContact } from "@/components/infoContact";
import { ModalConfirmAsignCita } from "@/components/home/modalConfirmAsignCita";
import { ModalCancelAsignCita } from "@/components/home/modalCancelCitaUser";

export default function Home() {
  //
  // state
  const [modalAsignCitaUser, setModalAsignCitaUser] = useState(); //maneja la visibilidad del modal asignar cita
  const [modalInfoContact, setModalInfoContact] = useState(false); //maneja la visibilidad del modal información de contacto
  const [modalConfirmAsigCita, setModalConfirmAsigCita] = useState(false); //maneja la visibilidad del modal de confirma cita
  const [modalCancelCitaUser, setModalCancelCitaUser] = useState(false); //maneja la visibilidad del modal de cancelar cita

  return (
    <main className="min-h-screen">
      <NavarLogin />

      <div className="container mx-auto pt-4 grid sm:grid-cols-1 lg:grid-cols-4 gap-2">
        <InfoUser setModalInfoContact={setModalInfoContact} />
        <HistoryCitasUser setModalAsignCitaUser={setModalAsignCitaUser} />
        {modalAsignCitaUser && (
          <ModalAsignCitUser
            setModalAsignCitaUser={setModalAsignCitaUser}
            modalAsignCitaUser={modalAsignCitaUser}
          />
        )}
        {modalInfoContact && (
          <ModalInfoContact setModalInfoContact={setModalInfoContact} />
        )}
        {modalConfirmAsigCita && (
          <ModalConfirmAsignCita
            setModalConfirmAsigCita={setModalConfirmAsigCita}
            setModalAsignCitaUser={setModalAsignCitaUser}
          />
        )}
        {modalCancelCitaUser && (
          <ModalCancelAsignCita
            setModalCancelCitaUser={setModalCancelCitaUser}
          />
        )}
      </div>
    </main>
  );
}
