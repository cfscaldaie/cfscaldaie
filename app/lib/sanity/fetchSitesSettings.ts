import { client } from "./client";
import { siteSettingsQuery } from "./queries";

export async function getSiteSettings() {
  return await client.fetch(siteSettingsQuery);
}
