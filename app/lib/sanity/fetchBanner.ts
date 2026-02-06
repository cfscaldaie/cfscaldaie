import { client } from "./client";
import { homeBannerQuery } from "./queries";

export async function getHomeBanner() {
  return client.fetch(homeBannerQuery);
}
