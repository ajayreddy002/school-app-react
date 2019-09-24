
import axios from 'axios';
import LoginService from './login_service';
const BranchServices = {
    postBranchData,
    getBranchData,
    deleteBranch
}
function postBranchData(url: string, branchData: any) {
    return axios.post(LoginService.baseUrl + url, branchData);
}
function getBranchData(url: string) {
    return axios.get(LoginService.baseUrl + url);
}
function deleteBranch(url: string) {
    return axios.delete(LoginService.baseUrl + url);
}
export default BranchServices;