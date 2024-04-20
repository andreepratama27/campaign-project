import { baseUrl } from "@/constants";
import { Campaign } from "@/types/campaign";
import { sortAsc } from "@/utils/helper";

interface APIResponse<T> {
  response_code: string;
  response_desc: { id: string; en: string };
  data: T;
}

async function getCampaign(): Promise<APIResponse<Campaign[]>> {
  try {
    const response = await fetch(baseUrl);
    const result = await response.json();

    return result;
  } catch (error) {
    throw error;
  }
}

export { getCampaign };
