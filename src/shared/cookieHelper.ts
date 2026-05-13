import { Response } from 'express';
import "dotenv/config";

export default function setCookie(res: Response, name: string, value: string, options?: any) {
    res.cookie(name, value, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        ...options
    });
}