import axios from 'axios';
const baseUrl = 'https://management-school-api.herokuapp.com/';
// const baseUrl = 'http://localhost:3000/';
const localUrl = 'http://localhost:3000'
export const LoginService = {
  // baseUrl = 'https://management-school-api.herokuapp.com/';
  postLoginData,
  postSignUpData,
  baseUrl,
  localUrl
}
function postLoginData(url: string, loginData: any) {
  return axios.post(baseUrl + url, loginData);
}
function postSignUpData(url: string, signUpData: any) {
  return axios.post(baseUrl + url, signUpData);
}
export default LoginService;