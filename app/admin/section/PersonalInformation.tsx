import React from "react";
import BackToDashboard from "../components/BackToDashboard";
import DefaultLeft from "../components/DefaultLeft";

type Props = {
  onClick: () => void;
  handleSectionClick: (componentName: string) => void;
};

const PersonalInformation = ({ onClick, handleSectionClick }: Props) => {
  return (
    <div>
      <BackToDashboard onClick={onClick} />
      <DefaultLeft
        onSectionClick={handleSectionClick}
        activeComponent={"personalInformation"}
      />
      Personal Information
    </div>
  );
};

export default PersonalInformation;
