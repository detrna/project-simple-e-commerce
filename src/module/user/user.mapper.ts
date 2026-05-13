import { User } from "./User";

export class UserMapper {
    static toDomain(raw: any): User {
        return new User(
            raw.id,
            raw.name,
            raw.email,
            raw.password,
            raw.createdAt
        );
    }
}