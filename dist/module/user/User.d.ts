export declare class User {
    id: string;
    name: string;
    email: string;
    password: string;
    createdAt: Date;
    constructor(id: string, name: string, email: string, password: string, createdAt: Date);
    toSafeObject(): Omit<this, "password" | "toSafeObject">;
}
//# sourceMappingURL=User.d.ts.map