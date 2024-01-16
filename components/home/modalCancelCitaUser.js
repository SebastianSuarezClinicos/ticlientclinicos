"use client";

// component
export const ModalCancelAsignCita = ({ setModalCancelCitaUser }) => {
  const cerrarModal = () => {
    setModalCancelCitaUser(false);
  };
  return (
    <main>
      <div className="fixed inset-0 min-h-screen flex justify-center items-center bg-black bg-opacity-45">
        <div className="flex flex-col items-center justify-center rounded-lg shadow-lg bg-white">
          <div className="p-4 text-lg font-semibold text-black">
            <div className="w-full pb-4 flex items-center justify-between border-b-2 border-amber-700">
              <div className="text-2xl font-extrabold text-amber-700">
                Cancelación de cita
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
            <div className="pt-4 pb-6 border-b-2">
              <div className="grid grid-cols-1 gap-2 pb-4 border-b-2 border-amber-700">
                <div className="text-lg font-bold">Servicio:</div>
                <div className="text-lg font-bold">Fecha y hora:</div>
              </div>
              <div className="pt-4">
                Al correo electronico llegará confirmación de la cita cancelada
              </div>
            </div>
            <div className="flex items-center justify-end">
              <button
                className="bg-red-600 p-2 rounded-lg text-lg font-bold text-white"
                onClick={() => cerrarModal(true)}
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
