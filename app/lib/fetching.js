// import
import axios from "axios";

// environment
const apiUrl = process.env.NEXT_PUBLIC_API_URL_LOGIN;
const codigoUrl = process.env.NEXT_PUBLIC_API_URL_CODE;

// form login
export const LoginFetch = async (data) => {
  try {
    const response = await axios.post(`${apiUrl}`, data);

    if (response.data.token) {
      return response.data;
    } else if (
      response.data === "Usuario no encontrado" ||
      response.data === "Usuario Inactivo"
    ) {
      return "inactivo";
    }
  } catch (error) {
    if (error.code === "ERR_NETWORK") {
      return "sin sistema";
    }
    return error;
  }
};

// const datauseraccess = decode(response.data.token, "CL1N1CO$");

// verification code login
export const CodeLoginFetch = async (data, token) => {
  try {
    const access_code = { codigo: data.codigo };
    const response = await axios.post(`${codigoUrl}`, access_code, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });

    if (response.data[0] === "Verificacion exitosa") {
      return response.data;
    }
  } catch (error) {
    console.log("error", error.response.data.detail);
    if (
      error.response.data.detail ===
        "Código incorrecto, por favor inténtelo de nuevo." ||
      error.response.data.detail === "Código de verificación no encontrado" ||
      error.response.data.detail === "El código de verificación ha expirado."
    ) {
      return error.response.data.detail;
    } else if (error.code === "ERR_NETWORK") {
      return "sin sistema";
    }
  }
};

// if (
//     error.response.data.detail ==
//     "Código incorrecto, por favor inténtelo de nuevo."
//   ) {
//     alert("Código incorrecto, por favor inténtelo de nuevo.");
//     setLoading(false);
//   } else if (
//     error.response.data.detail == "El código de verificación ha expirado."
//   ) {
//     alert("El código de verificación ha expirado.");
//     setLoading(false);
//   } else if (
//     error.response.data.detail == "Código de verificación no encontrado."
//   ) {
//     alert("Código de verificación no encontradó");
//     setLoading(false);
//   }
