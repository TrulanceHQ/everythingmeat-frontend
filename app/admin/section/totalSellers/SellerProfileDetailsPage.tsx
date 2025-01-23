import React from "react";
import BackToDashboard from "../../components/BackToDashboard";
import Image from "next/image";
import SellerInfoForm from "./SellerInfoForm";
import { TotalSellersData } from "./TotalSellersData";

type Props = {
  onClick: () => void;
  sellerId: string | null;
};

const SellerProfileDetailsPage = ({ onClick, sellerId }: Props) => {
  const selectedSeller = sellerId
    ? TotalSellersData.find((seller) => seller.id === sellerId)
    : null;

  return (
    <div className="w-full px-10 py-4">
      <div className="flex flex-col">
        <div className="flex flex-row justify-start">
          <div>
            {selectedSeller && (
              <Image src={selectedSeller.sellerImage} alt={""} width={150} height={200}></Image>
            )}
          </div>
        </div>
        {/* Form  */}
        <SellerInfoForm sellerInfo={selectedSeller ? [selectedSeller] : []} />
        <BackToDashboard onClick={onClick} />
      </div>
      
    </div>
  );
};

export default SellerProfileDetailsPage;
