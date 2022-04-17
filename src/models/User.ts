export interface ISignup {
    userName: string;
    email: string;
    password: string;
}

export interface IDecoded {
    email: string;
    exp: number;
    iat: number;
    isAdmin: boolean;
    password: string;
    _id: string;
}

export interface ILogin {
    email: string;
    password: string;
}