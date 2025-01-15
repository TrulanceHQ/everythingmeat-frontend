import React from "react";
import BackToDashboard from "../../components/BackToDashboard";
import Image from "next/image";
import BuyerInfoForm from "./BuyerInfoForm";
import { TotalBuyersData } from "./TotalBuyersData";

type Props = {
  onClick: () => void;
  buyerId: string | null;
};

const BuyerProfileDetailsPage = ({ onClick, buyerId }: Props) => {
  const selectedBuyer = buyerId
    ? TotalBuyersData.find((buyer) => buyer.id === buyerId)
    : null;

  return (
    <div className="w-full px-10 py-8">
      <div className="flex flex-col">
        <div className="flex flex-row justify-start">
          <div className="flex flex-row justify-between">
            {selectedBuyer && (
              <Image
                src={selectedBuyer.buyerImage}
                alt={""}
                width={150}
                height={200}
              ></Image>
            )}
            <BackToDashboard onClick={onClick} />
          </div>
        </div>
        {/* Form  */}
        <BuyerInfoForm buyerInfo={selectedBuyer ? [selectedBuyer] : []} />
      </div>
    </div>
  );
};

export default BuyerProfileDetailsPage;
