export class Product {
    constructor(
        public id: string,
        public name: string,
        public category: string,
        public subCategory: string,
        public createdAt: Date
    ){
        this.id = id,
        this.name = name
        this.category = category
        this.subCategory = subCategory
        this.createdAt = createdAt
    }
}