import axios, { AxiosError } from "axios";
import { baseInstance, authInstance } from "../index";
import Swal from "sweetalert2";

type ServerError = { errorMessage: string };

export const login = async (email: string, password: string) => {
  try {
    const url = "/security-service/login";
    const loginObject = { email, password };
    const response = await baseInstance.post(url, loginObject);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const serverError = error as AxiosError<ServerError>;
      if (serverError && serverError.response) {
        if (serverError.response.status === 401) {
          Swal.fire({
            title: "Error!",
            text: "아이디 혹은 비밀번호가 일치하지 않습니다.",
            icon: "error",
            confirmButtonText: "확인",
          });
        }
      }
    } else {
      Swal.fire({
        title: "Error!",
        text: "axios request failed",
        icon: "error",
        confirmButtonText: "확인",
      });
    }
    return null;
  }
};
