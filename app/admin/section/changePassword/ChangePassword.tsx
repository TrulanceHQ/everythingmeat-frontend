import React from "react";
import BackToDashboard from "../../components/BackToDashboard";
import DefaultLeft from "../../components/DefaultLeft";
import SectionHero from "../../components/SectionHero";
import PasswordChangeForm from "./PasswordChangeForm";

type Props = {
  onClick: () => void;
  handleSectionClick: (componentName: string) => void;
};

const ChangePassword = ({ onClick, handleSectionClick }: Props) => {
  return (
    <div>
      <div>
        <SectionHero pageTitle={"My Account"} />
      </div>
      <div className="mx-10">
        <BackToDashboard onClick={onClick} />
      </div>
      <div className="flex flex-row justify-between mx-10">
        <DefaultLeft
          onSectionClick={handleSectionClick}
          activeComponent="changePassword"
        />
        <div className="flex flex-col w-[72%] my-4">
          <div className="flex flex-col space-y-1">
            <h3 className="font-bold text-2xl">Change Password</h3>
            <p className="font-normal text-sm">Please provide below information to change your password.</p>
            <hr className="border-b-4 border-customRed w-10" />
          </div>
          <PasswordChangeForm />
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
