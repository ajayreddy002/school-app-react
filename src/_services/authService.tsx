import { BehaviorSubject } from 'rxjs';
import { IResult } from '../components/login/model';
const currentUserSubject = new BehaviorSubject(localStorage.getItem('currentUser'));
export const authenticationService = {
    login,
    logout,
    currentUser: currentUserSubject.asObservable(),
    get currentUserValue() { return currentUserSubject.value }
};
function login(userData: IResult) {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUser', JSON.stringify(userData.result[0]));
            localStorage.setItem('token', userData.access_token);
            currentUserSubject.next(JSON.stringify(userData.result[0]));

            return userData.result[0];
}
function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    localStorage.clear();
    currentUserSubject.next(null);
}