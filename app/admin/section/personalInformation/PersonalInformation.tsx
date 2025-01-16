import React from "react";
import BackToDashboard from "../../components/BackToDashboard";
import DefaultLeft from "../../components/DefaultLeft";
import SectionHero from "../../components/SectionHero";
import PersonalInfoForm from "./PersonalInfoForm";

type Props = {
  onClick: () => void;
  handleSectionClick: (componentName: string) => void;
};

const PersonalInformation = ({ onClick, handleSectionClick }: Props) => {
  return (
    <div className="">
      <div>
        <SectionHero pageTitle={"My Account"} />
      </div>
      <div className="mx-10">
        <BackToDashboard onClick={onClick} />
      </div>
      <div className="flex flex-row justify-between mx-10">
        <DefaultLeft
          onSectionClick={handleSectionClick}
          activeComponent="personalInformation"
        />
        <div className="flex flex-col w-[72%] my-4">
          <PersonalInfoForm />
        </div>
      </div>
    </div>
  );
};

export default PersonalInformation;
