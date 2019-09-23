export interface SignUpModel {
    user_name: string;
    school_name: string;
    email: string;
    password: string;
    school_address: string;
    roll: number;
}
export interface UserData {
    address: string;
    email: string;
    roll: number;
    school_id: string;
    school_name: string;
}
export interface IResult {
    result: Array<UserData>;
    access_token: string;
}