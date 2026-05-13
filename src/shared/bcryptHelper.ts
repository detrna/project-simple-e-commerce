import bcrypt from 'bcrypt';

export async function hashPassword(password: string, salt: number): Promise<string> {
    const hashed = await bcrypt.hash(password, salt);
    return hashed;
}

export async function comparePassword(plainPassword: string, hashedPassword: string): Promise<boolean> {
    const isMatch = await bcrypt.compare(plainPassword, hashedPassword);
    return isMatch;
}