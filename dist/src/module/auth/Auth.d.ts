export interface RegisterRequest {
    email: string;
    name: string;
    password: string;
    confirm: string;
}
export interface LoginRequest {
    email: string;
    password: string;
}
export interface jwtPayload {
    userId: string;
    name: string;
}
//# sourceMappingURL=Auth.d.ts.map