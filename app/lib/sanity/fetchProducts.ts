import { client } from "./client";
import { productsQuery } from "./queries";

export async function getProducts() {
  return await client.fetch(productsQuery);
}
