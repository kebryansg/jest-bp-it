import {faker} from "@faker-js/faker";
import {Product} from "../../product/services/product.service";


export function generateProduct(): Product {
  return {
    cod: faker.database.mongodbObjectId(),
    name: faker.commerce.productName(),
    price: +faker.commerce.price()
  }
}

export function generateProducts(count: number): Product[] {
  return new Array(count)
    .map(() => generateProduct())
}
