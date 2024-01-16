"use client";

// imports
import { useState, useEffect } from "react";
import dayjs from "dayjs";
import axios from "axios";

// SUBCOMPONENTS Date Picker
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

// import fetching
import { GetCuposDisponibles } from "@/app/lib/fetching";

// component
export const ModalAsignCitUser = ({
  modalAsignCitaUser,
  setModalAsignCitaUser,
}) => {
  //
  //state
  const [selectedDate, setSelectedDate] = useState(dayjs()); //maneja la fecha seleccionada en el componente fecha
  const [cuposDisponibles, setCuposDisponibles] = useState({}); //maneja todos los cupos obtenidos
  const [cuposFiltrados, setCuposFiltrados] = useState([]); //maneja los cupos filtrados por fecha
  const [messageError, serMessageError] = useState(null); //maneja mensaje de error de la respuesta del backend
  const [loadingButton, setloadingButton] = useState(false); //maneja el estado loading del boton
  const [viewBitton, setViewBitton] = useState(true); //maneja la visivilidad del botón si no hay cupos
  const [cupoSeleccionado, setCupoSeleccionado] = useState(null); //maneja el cupo seleccionado

  // cupos -> cupos filtrados al inicio
  useEffect(() => {
    const fetchData = async () => {
      const response = await GetCuposDisponibles();

      if (response === "Error from backend") {
        serMessageError(
          "No podemos obtener los cupos disponibles en este momento"
        );
        setViewBitton(false);
      } else {
        setCuposDisponibles(response);
        // filtra por la fecha que esta por defecto en date picker(hoy)
        const cuposFiltradosOriginales = response.filter((cupo) => {
          const fechaCupo = dayjs(
            cupo.Fecha_y_Hora_Inicial,
            "YYYY-MM-DD HH:mm"
          );
          return fechaCupo.isSame(selectedDate, "day");
        });

        setCuposFiltrados(cuposFiltradosOriginales);
      }
    };

    if (modalAsignCitaUser) {
      fetchData();
    }
  }, [modalAsignCitaUser]);

  // update cupos filtrados
  const handleDateChange = (date) => {
    setSelectedDate(date); // actualiza el estado de la fecha seleccionada

    const cuposArray = Object.values(cuposDisponibles);

    const cuposFiltrados = cuposArray.filter((cupo) => {
      const fechaCupo = dayjs(cupo.Fecha_y_Hora_Inicial, "YYYY-MM-DD HH:mm");
      return fechaCupo.isSame(date, "day");
    });

    setCuposFiltrados(cuposFiltrados);
  };

  // change cupo seleccionado
  const asignarCupoSeleccionado = async (id) => {
    setCupoSeleccionado(id);
  };

  // // AGENDAMIENTO DE CUPO
  // const token = sessionStorage.getItem("token");
  //
  // const asignacionURL = procces.ENV.NEXT_PUBLIC_API_URL_ASING;
  // };
  // const agendar = async () => {
  //   setLoading(true);

  //   try {
  //     const data = {
  //       Id: parseInt(cupoSeleccionado),
  //       nombre: "JOSE ALBERTO JUNCO VEGA",
  //       modalidad: "Presencial",
  //     };
  //     const response = await axios.post(`${asignacionURL}`, data, {
  //       headers: { Authorization: "Bearer " + token },
  //     });
  //     if (response.data.message == "Cita asignada con éxito") {
  //       setmodalAsignacion(false);
  //     }
  //   } catch (error) {
  //     setLoading(false);
  //   }
  // };

  return (
    <main className="fixed right-0">
      <div className="p-10 flex flex-col rounded-lg shadow-lg bg-white">
        <div className="pt-4 pb-6 text-3xl font-bold text-center text-custom-clinicos-secundario">
          Agenda tu cita
        </div>
        <div className="grid grid-col-1 gap-3 text-black">
          <div>
            <label htmlFor="" className="text-sm" />
            Sede
            <select className="rounded-lg w-full h-8 text-sm text-center bg-slate-200">
              <option value="PAMI SAN MARTÍN">PAMI SAN MARTÍN</option>
            </select>
          </div>
          <div>
            <label
              htmlFor=""
              className="text-sm text-custom-clinicos-secundario"
            />
            Especialidad
            <select className="rounded-lg w-full h-8 text-sm text-center bg-slate-200">
              <option value="SALUD OCUPACIONAL">SALUD OCUPACIONAL</option>
            </select>
          </div>
          <div>
            <label htmlFor="" className="text-sm" />
            Servicio
            <select className="rounded-lg w-full h-8 text-sm text-center bg-slate-200">
              <option>
                Evaluación integral de riesgos en trabajadores EPSI - EIR
              </option>
            </select>
          </div>
        </div>

        <div className="pt-10">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer
              components={["DatePicker", "DatePicker", "DatePicker"]}
            >
              <DatePicker
                label={"Seleccione una Fecha"}
                format="DD/MM/YYYY"
                views={["year", "month", "day"]}
                value={selectedDate}
                onChange={handleDateChange}
              />
            </DemoContainer>
          </LocalizationProvider>
        </div>

        <div className="pt-10 pb-52">
          <div className="text-black text-sm pb-4">Cupos disponibles:</div>
          <div className="grid grid-cols-3 gap-2">
            {Object.entries(cuposFiltrados).map(([id, cupo]) => (
              <div
                key={id}
                className={`p-4 rounded-lg text-base text-black text-center cursor-pointer hover:border hover:border-custom-azul-clinicos  ${
                  cupoSeleccionado === cupo.Id_Registro
                    ? "bg-custom-azul-clinicos text-white"
                    : "bg-slate-200"
                }`}
                onClick={() => asignarCupoSeleccionado(cupo.Id_Registro)}
              >
                <p>
                  {new Date(cupo.Fecha_y_Hora_Inicial).toLocaleTimeString()}
                </p>
                {/* <p className='text-sm'>{new Date(cupo.Fecha_y_Hora_Inicial).toLocaleDateString()}</p> */}
              </div>
            ))}
          </div>
        </div>
        <div className="pb-2 text-sm text-center text-red-500">
          {messageError}
        </div>

        <div className="flex justify-center gap-11">
          <button
            className="border-custom-clinicos-secundario border rounded-lg px-4 py-2 w-full text-custom-clinicos-secundario hover:bg-orange-400 hover:border-orange-400 hover:text-white"
            onClick={() => setModalAsignCitaUser(false)}
          >
            Cancelar
          </button>
          {viewBitton && (
            <button
              className={`bg-custom-clinicos-secundario rounded-lg px-4 py-2 w-full hover:text-lg hover:font-bold ${
                loadingButton ? "opacity-50 cursor-not-allowed" : ""
              } `}
              onClick={() => agendar()}
              disabled={loadingButton}
            >
              {loadingButton ? "Agendando..." : "Agendar"}
            </button>
          )}
        </div>
      </div>
    </main>
  );
};
