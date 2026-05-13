import { Request } from 'express';

export interface RegisterRequest {
  email: string;
  name: string;
  password: string;
  confirm: string;
};

export interface LoginRequest {
  email: string;
  password: string;
};

export interface jwtPayload {
  userId: string;
  email: string;
}

export interface AuthRequest extends Request {
  user: jwtPayload;
}