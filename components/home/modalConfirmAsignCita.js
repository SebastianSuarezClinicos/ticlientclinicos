"use client";

// component
export const ModalConfirmAsignCita = ({
  setModalConfirmAsigCita,
  setModalAsignCitaUser,
}) => {
  const cerrarModal = () => {
    setModalConfirmAsigCita(false);
    setModalAsignCitaUser(false);
  };
  return (
    <main>
      <div className="fixed inset-0 min-h-screen flex justify-center items-center bg-black bg-opacity-45">
        <div className="flex flex-col items-center justify-center rounded-lg shadow-lg bg-white">
          <div className="p-4 text-lg font-semibold text-black">
            <div className="w-full pb-4 flex items-center justify-between border-b-2 border-custom-clinicos-secundario">
              <div className="text-xl font-extrabold text-custom-clinicos-secundario">
                Asignación exitosa
              </div>
              <button
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                onClick={() => cerrarModal(true)}
              >
                <svg
                  class="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span class="sr-only">Close modal</span>
              </button>
            </div>
            <div className="py-4 border-b-2">
              Favor tener presente las recomendaciones enviadas al correo
              electrónico.
              <p>
                En caso de cancelación de su cita, agradecemos que se realice
                mínimo 24 horas antes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
