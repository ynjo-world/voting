import axios, { CreateAxiosDefaults } from "axios";

const BASE_URL = process.env.REACT_APP_BACK_END;

const axiosApi = (
  url: string | undefined,
  options?: CreateAxiosDefaults<any> | undefined
) => {
  const instance = axios.create({ baseURL: url, ...options });
  return instance;
};

const axiosAuthApi = (
  url: string | undefined,
  options?: CreateAxiosDefaults<any> | undefined
) => {
  const token = localStorage.getItem("token");
  const instance = axios.create({
    baseURL: url,
    headers: { Authorization: "Bearer " + token },
    ...options,
  });
  return instance;
};

export const baseInstance = axiosApi(BASE_URL);
export const authInstance = axiosAuthApi(BASE_URL);
