export interface IAuthContext {
    isAuthenticated: boolean;
    login: (token: string) => void;
    logout: () => void;
}