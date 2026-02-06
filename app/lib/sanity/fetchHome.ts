import { client } from "./client";
import { homeQuery } from "./queries";


export async function getHomeData() {
  return client.fetch(homeQuery);
}

