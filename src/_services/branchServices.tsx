import React from 'react';
import axios from 'axios';
import LoginService from './login_service';
import { IBranchModel } from '../_routes/_models/branchModel';
const BranchServices = {
    postBranchData
}
function postBranchData(url: string, branchData: any) {
    return axios.post(LoginService.baseUrl + url, branchData);
}
export default BranchServices;