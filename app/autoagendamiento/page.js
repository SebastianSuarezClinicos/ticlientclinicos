"use client";

// import
import { useState } from "react";

// components
import { NavarLogin } from "@/components/login/navbar";
import { IntroLogin } from "@/components/login/intro";
import { FormLogin } from "@/components/login/formLogin";
import { ModalCode } from "@/components/login/modalCode";

// component
export default function Autoagendamiento() {
  //
  // state
  const [sendCode, setsendCode] = useState(false); // activa el modal para el código

  return (
    <main className=" min-h-screen">
      <NavarLogin />
      <div className="container mx-auto grid sm:grid-cols-1 lg:grid-cols-2 sm:my-auto lg:my-14">
        <IntroLogin />
        <FormLogin setsendCode={setsendCode} />
        {sendCode && <ModalCode />}
      </div>
    </main>
  );
}
