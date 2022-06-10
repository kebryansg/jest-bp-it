import {Product} from "../product.service";
import {faker} from "@faker-js/faker";


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
