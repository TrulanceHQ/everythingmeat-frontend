import React from "react";
import BackToDashboard from "../components/BackToDashboard";
import DefaultLeft from "../components/DefaultLeft";

type Props = {
  onClick: () => void;
  handleSectionClick: (componentName: string) => void;
};

const Logout = ({ onClick, handleSectionClick }: Props) => {
  return (
    <div>
      <BackToDashboard onClick={onClick} />
      <DefaultLeft
        onSectionClick={handleSectionClick}
        activeComponent={"logOut"}
      />
      Logout
    </div>
  );
};

export default Logout;
