import React from "react";
import BackToDashboard from "../../components/BackToDashboard";
import Image from "next/image";

type Props = {
  onClick: () => void;
  sellerId: string | null;
};

const SellerProfileDetailsPage = ({ onClick, sellerId }: Props) => {
  const sellerInfo = { imageSource: "/admin_profile.png" };

  return (
    <div>
      <div className="mx-10">
        <BackToDashboard onClick={onClick} />
      </div>
      SellerProfileDetailsPage - {sellerId}
      <div>
        <div>
          <Image
            src={sellerInfo.imageSource}
            alt={""}
            width={150}
            height={200}
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default SellerProfileDetailsPage;
