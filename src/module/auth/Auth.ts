export type RegisterRequest = {
  email: string;
  name: string;
  password: string;
  confirm: string;
};

export type LoginRequest = {
  email: string;
  password: string;
};
