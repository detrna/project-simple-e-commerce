export interface UserDTO {
    id: string;
    name: string;
    email: string;
    createdAt: Date;
}
export declare class User {
    id: string;
    name: string;
    email: string;
    password: string;
    createdAt: Date;
    constructor(id: string, name: string, email: string, password: string, createdAt: Date);
    toSafeObject(): UserDTO;
}
//# sourceMappingURL=User.d.ts.map