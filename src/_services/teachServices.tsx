
import axios from 'axios';
import LoginService from './login_service';
const TeacherServices = {
    addTeacher,
    getTeacherList,
    deleteTeacher
}
function addTeacher(url: string, branchData: any) {
    return axios.post(LoginService.baseUrl + url, branchData);
}
function getTeacherList(url: string) {
    return axios.get(LoginService.baseUrl + url);
}
function deleteTeacher(url: string) {
    return axios.delete(LoginService.baseUrl + url);
}
export default TeacherServices;