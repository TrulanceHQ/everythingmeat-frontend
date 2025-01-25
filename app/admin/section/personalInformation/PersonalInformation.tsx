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
    <div>
      <div>
        <SectionHero pageTitle={"My Account"} />
      </div>
      <div className="mx-4 md:mx-10 flex flex-row justify-between items-center">
        <div>
          <BackToDashboard onClick={onClick} />
        </div>
        <div className="block md:hidden">
          <DefaultLeft
            onSectionClick={handleSectionClick}
            activeComponent="personalInformation"
          />
        </div>
      </div>

      <div className="flex flex-row justify-center md:justify-between mx-2 md:mx-10 md:space-x-8">
        <div className="hidden md:block md:w-[25%]">
          <DefaultLeft
            onSectionClick={handleSectionClick}
            activeComponent="personalInformation"
          />
        </div>
        <div className="flex flex-col w-[68%] my-4">
          <PersonalInfoForm />
        </div>
      </div>
    </div>
  );
};

export default PersonalInformation;
