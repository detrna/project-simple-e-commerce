export interface UserDTO {
  id: string;
  name: string;
  email: string;
  createdAt: Date;
}

export class User {
  constructor(
    public id: string,
    public name: string,
    public email: string,
    public password: string,
    public createdAt: Date,
  ) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
    this.createdAt = createdAt;
  }

  toSafeObject(): UserDTO {
    const { password, ...rest } = this;
    return rest;
  }
}

