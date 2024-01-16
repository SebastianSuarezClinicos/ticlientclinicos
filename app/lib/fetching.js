// import
import axios from "axios";

// environment
const apiUrl = process.env.NEXT_PUBLIC_API_URL_LOGIN;
const codigoUrl = process.env.NEXT_PUBLIC_API_URL_CODE;

// dev environment
const apiLocalURL = "http://127.0.0.1:8000/Autoagendamiento/Login";
const codeLocalURL =
  "http://127.0.0.1:8000/Autoagendamiento/verification/verify-code";
const cuposLocalURL = "http://127.0.0.1:8000/Autoagendamiento/space_avaliable";

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
    console.log(error);
    if (error.code === "ERR_NETWORK") {
      return "sin sistema";
    }
    return error;
  }
};

// verification code login
export const CodeLoginFetch = async (data, token) => {
  try {
    const access_code = { codigo: data.codigo, token: token };
    // const response = await axios.post(
    //   `${codigoUrl}`,
    //   access_code
    //   // , {
    //   //   headers: {
    //   //     Authorization: "Bearer " + token,
    //   //   },
    // );
    const response = await axios.post(
      "https://apicitas.azurewebsites.net/Autoagendamiento/logout/TestCookie",
      access_code
    );

    console.log(response);

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

// get cupos disponibles
export const GetCuposDisponibles = async () => {
  try {
    const response = await axios.post(`${cuposLocalURL}`);

    const cuposArrayOriginal = Object.values(
      response.data["Cupos disponibles"]
    );

    return cuposArrayOriginal;
  } catch (error) {
    return "Error from backend";
  }
};
