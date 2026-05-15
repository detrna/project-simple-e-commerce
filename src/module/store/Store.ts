export class Store {
    constructor(
        public id: String,
        public address: String,
        public email: String,
        public name: String,
        public userId: String,
        public createdAt: String,
    ) {
        this.id = id;
        this.address = address;
        this.email = email;
        this.name = name;
        this.userId = userId
        this.createdAt = createdAt;
    }
}