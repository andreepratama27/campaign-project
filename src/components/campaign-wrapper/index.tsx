"use client";
import CampaignCard from "@/components/campaign-card";
import useSorting from "@/hooks/useSorting";
import { Campaign } from "@/types/campaign";
import { sortAsc } from "@/utils/helper";
import { useStore } from "zustand";

export default function CampaignWrapper({ data }: { data: Campaign[] }) {
  const { sortKey } = useStore(useSorting);

  return (
    <section className="container py-4">
      <div className="grid grid-cols-1 gap-4 px-4 md:px-0 md:grid-cols-2 lg:grid-cols-3">
        {sortAsc(data, sortKey).map((campaignData) => (
          <CampaignCard key={campaignData.id} {...campaignData} />
        ))}
      </div>
    </section>
  );
}
