import { client } from "./client";
import { productsQuery } from "./queries";
import { ProductType } from "@/app/types/product";
export async function getProducts():Promise<ProductType[]> {
  return await client.fetch(productsQuery);
}
