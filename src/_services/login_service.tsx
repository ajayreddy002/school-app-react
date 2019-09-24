import axios from 'axios';
const baseUrl = 'https://management-school-api.herokuapp.com/';
export const LoginService = {
  // baseUrl = 'https://management-school-api.herokuapp.com/';
  postLoginData,
  postSignUpData,
  baseUrl
}
function postLoginData(url: string, loginData: any) {
  return axios.post(baseUrl + url, loginData);
}
function postSignUpData(url: string, signUpData: any) {
  return axios.post(baseUrl + url, signUpData);
}
export default LoginService;