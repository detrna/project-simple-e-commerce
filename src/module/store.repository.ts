import { prisma } from "../shared/prismaHelper";

export class StoreRepository {
    async getByUID(uid: string){
        try {
            const result = await prisma.store.findUnique({where: {userId: uid}});
            return result;
        } catch (e){
            throw new Error();
        }
    }
}