export interface IUser {
    id: string;
    username: string;
}

export interface IAuth {
    token: string;
    isAuthenticated: boolean;
    user: IUser | null;
}

export type AuthContextType = {
    authValue: IAuth;
    login: (username: string, password: string) => void;
    logout: () => void;
}