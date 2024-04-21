import { Campaign } from "@/types/campaign";
import { formatCurrency } from "@/utils/helper";
import Image from "next/image";
import ProgressBar from "../progress-bar";

export default function CampaignCard(campaignData: Campaign) {
  return (
    <div
      key={campaignData.id}
      className="rounded border p-2"
      data-testid="campaign-card"
    >
      <div className="h-72 w-full bg-blue-100">
        <Image
          src={campaignData.image}
          alt={campaignData.title}
          className="h-full w-full object-contain"
          width={100}
          height={200}
        />
      </div>
      <div className="title-wrapper py-4 text-sm">
        <p className="font-semibold" data-testid="campaign-card-title">
          {campaignData.title}
        </p>
        <p className="font-mono pt-2">
          {formatCurrency(campaignData.donation_target)}
        </p>
      </div>
      <div className="progress-wrapper">
        <ProgressBar percentage={campaignData.donation_percentage} />
      </div>
      <div className="info-wrapper flex items-center md:items-start md:gap-2 justify-between text-sm py-2">
        <div className="box">
          <p>Terkumpul</p>
          <p>{formatCurrency(campaignData.donation_received)}</p>
        </div>

        <div className="box text-right">
          <p>Sisa Hari</p>
          <p>{campaignData.days_remaining}</p>
        </div>
      </div>
    </div>
  );
}
