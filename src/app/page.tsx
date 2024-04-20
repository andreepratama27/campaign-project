import CampaignWrapper from "@/components/campaign-wrapper";
import Navbar from "@/components/navbar";
import { getCampaign } from "@/service/campaign.service";

export default async function Home() {
  const data = await getCampaign();

  return (
    <main className="mx-auto max-w-2xl">
      <Navbar />
      <CampaignWrapper data={data.data} />
    </main>
  );
}
