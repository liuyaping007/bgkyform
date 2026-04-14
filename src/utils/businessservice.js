import { getToken, setToken, setSidkey } from "./auth.js";
import axios from "axios";
import { Message } from "element-ui";
import Configs from "@/configs";
const service = axios.create({
  baseURL: Configs.businessApiUrl, // process.env.VUE_APP_BASE_API
  timeout: 60000, // request timeout
});
export function makeid(num) {
  var text = "";
  var possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < num; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}
// request interceptor
service.interceptors.request.use(
  (config) => {
    let token = getToken();
    // if ((token === undefined || token === '')) {
    //     window.location.href = '/login'
    // }
    config.headers.Authorization = "Bearer " + token;
    // const sid = getSidkey()
    // if (sid !== '' && sid !== undefined && sid !== 'undefined') {
    //     config.headers.__sid = sid
    //     config.headers.__ajax = 'json'
    // }
    //  else {
    //     window.location.href = '/login'
    // }
    return config;
  },
  (error) => {
    console.log(error); // for debug
    return Promise.reject(error);
  }
);

// response interceptor
service.interceptors.response.use(
  (response) => {
    const res = response.data;
    if (response.request.responseType === "blob") {
      return response;
    }
    if (res.code === 10001) {
      setSidkey("");
      setToken("");
      console.log(getToken());
      // if (response.config.baseURL !== "jd/") {
      //   window.location.href = "/login";
      // }

      //Message.error(res.message)
      return false;
    }
    if (res.code !== 0 && res.code !== undefined) {
      Message.error(res.msg);
      return res;
    }
    if (response.headers.token !== undefined && response.headers.token !== "") {
      setSidkey(response.headers.token);
      setToken(response.headers.token);
    }
    return res;
  },
  (error) => {
    Message.error("请求出错！404");
    return { code: 404, msg: error.response.data };
  }
);

export default service;
