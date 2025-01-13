import React from "react";
import BackToDashboard from "../../components/BackToDashboard";

type Props = {
  onClick: () => void
  sellerId: string | null;
};

const BuyerProfileDetailsPage = ({ onClick, sellerId }: Props) => {
  return (
    <div>
      <div className="mx-10">
        <BackToDashboard onClick={onClick} />
      </div>
      BuyerProfileDetailsPage - {sellerId}
    </div>
  );
};

export default BuyerProfileDetailsPage;
