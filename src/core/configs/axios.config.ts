import axios, { AxiosResponse, InternalAxiosRequestConfig } from "axios";
import { environment } from "./app.config";
import { errorToast, successToast } from "../../components/Toast";
import { getToken } from "../../helpers/getToken";

export const axiosInstance = axios.create({
  baseURL: environment.mainApi,
});

axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    const method = response?.config?.method?.toUpperCase() ?? "";
    if (method == "DELETE") {
      successToast("Uğurla silindi");
    }
    return response;
  },

  (error) => {
    try {
      const errorMessage = error?.response?.data?.error;

      if (errorMessage) {
        errorToast(errorMessage);
      } else {
        errorToast("Xəta baş verdi");
      }
    } catch (e) {
      errorToast("Xəta baş verdi");
    }
  }
);
