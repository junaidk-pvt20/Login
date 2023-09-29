import axios from "../lib/axios";
import { Cookies } from "react-cookie";
import { COOKIES } from "./constants";
import { PATH } from "./pagePath";
import { toast } from "react-hot-toast";

const axiosPrivate = axios;
const cookies = new Cookies();

const errorHandler = (err) => {
  console.log('err>>>>>>', err)
  const values = Object.values(err);
  console.log('values', values)
  values?.map((val) => {
    if (Array.isArray(val)) {
      val?.map((msg) => {
        toast?.error(msg);
      });
    } else {
      toast?.error(val)
    }
  });
};
axiosPrivate.interceptors.request.use(
  (config) => {
    const customHeaders = [
      {
        key: "Authorization",
        value: "token eb33bed41ebc137:348f33df4a5e962",
        type: "text"
      },]
    customHeaders.forEach(header => {
      config.headers[header.key] = header.value;
    });
    return config;
  },
  (error) => Promise.reject(error)
);

axiosPrivate.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);

export default axiosPrivate;
