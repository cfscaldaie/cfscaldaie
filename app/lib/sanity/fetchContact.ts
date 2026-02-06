import { client } from "./client";
import { contactPageQuery } from "./queries";

export async function getContactPage() {
  return client.fetch(contactPageQuery);
}
