import React from "react";
import BackToDashboard from "../components/BackToDashboard";
import DefaultLeft from "../components/DefaultLeft";

type Props = {
  onClick: () => void;
  handleSectionClick: (componentName: string) => void;
};

const TotalCommission = ({ onClick, handleSectionClick }: Props) => {
  return (
    <div>
      <BackToDashboard onClick={onClick} />
      <DefaultLeft
        onSectionClick={handleSectionClick}
        activeComponent={"totalCommission"}
      />
      TotalCommission
    </div>
  );
};

export default TotalCommission;
