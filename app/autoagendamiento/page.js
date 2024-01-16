"use client";

// import
import { useState } from "react";

// components
import { NavarLogin } from "@/components/login/navbar";
import { IntroLogin } from "@/components/login/intro";
import { FormLogin } from "@/components/login/formLogin";
import { ModalCode } from "@/components/login/modalCode";
import { ModalInfoContact } from "@/components/infoContact";

// component
export default function Autoagendamiento() {
  //
  // state
  const [sendCode, setsendCode] = useState(false); // activa el modal para el código
  const [modalInfoContact, setModalInfoContact] = useState(false); //maneja la visibilidad del modal información de contacto

  return (
    <main className=" min-h-screen">
      <NavarLogin />
      <div className="container mx-auto grid sm:grid-cols-1 lg:grid-cols-2 sm:my-auto lg:my-14">
        <IntroLogin />
        <FormLogin
          setsendCode={setsendCode}
          setModalInfoContact={setModalInfoContact}
        />
        {sendCode && <ModalCode />}
        {modalInfoContact && (
          <ModalInfoContact setModalInfoContact={setModalInfoContact} />
        )}
      </div>
    </main>
  );
}
