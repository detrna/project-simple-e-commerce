export type StoreDTO = {
    id: string;
    address: string;
    email: string;
    name: string;
    userId: string;
    createdAt: string;
}
export class Store {
    constructor(
        public id: string,
        public address: string,
        public email: string,
        public name: string,
        public userId: string,
        public createdAt: string,
    ) {
        this.id = id;
        this.address = address;
        this.email = email;
        this.name = name;
        this.userId = userId
        this.createdAt = createdAt;
    }
}