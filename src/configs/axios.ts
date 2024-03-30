import axios, { AxiosError } from "axios";

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const { code, config, request, response } = error;
    const message = response
      ? response.data.message
      : "Sorry, an error occured while trying to connect to server. Please try again later.";
    const axiosError = new AxiosError(message, code, config, request, response);
    return Promise.reject(axiosError);
  },
);

export default axios;
