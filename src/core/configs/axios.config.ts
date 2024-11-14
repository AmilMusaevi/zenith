import axios, { AxiosResponse, InternalAxiosRequestConfig } from "axios";
import { environment } from "./app.config";
import { useAppDispatch } from "../../store/hooks";
import { setLoader } from "../../store/store.reducer";
import { errorToast, successToast } from "../../components/Toast";
import { getToken } from "../../helpers/getToken";

export const axiosInstance = axios.create({
  baseURL: environment.mainApi,
});

const dispatch = useAppDispatch();

axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    dispatch(setLoader(true));
    return config;
  },
  (error) => {
    dispatch(setLoader(true));
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    const method = response?.config?.method?.toUpperCase() ?? "";
    if (response?.data) {
      dispatch(setLoader(false));
    }
    if (method == "DELETE") {
      successToast("Uğurla silindi");
    }
    return response;
  },
  (error) => {
    let errMsg = "";
    const {
      response: { status },
    } = error;

    switch (status) {
      case 401:
        errMsg = "Sessiya müddəti bitmişdir";
        break;

      case 404:
        errMsg = "Məlumat tapılmadı";
        break;

      case 422:
        errMsg = "Bütün vacib xanaları doldurun";
        break;

      case 500:
        errMsg = "Server xətası";
        break;

      default:
        errMsg = "Xəta baş verdi";
    }
    errorToast(errMsg);
    dispatch(setLoader(false));
  }
);
