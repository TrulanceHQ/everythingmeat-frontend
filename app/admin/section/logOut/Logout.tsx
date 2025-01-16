import React from "react";
import BackToDashboard from "../../components/BackToDashboard";
import DefaultLeft from "../../components/DefaultLeft";
import SectionHero from "../../components/SectionHero";
import { Button } from "@/components/ui/button";

type Props = {
  onClick: () => void;
  handleSectionClick: (componentName: string) => void;
};

const Logout = ({ onClick, handleSectionClick }: Props) => {
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
          activeComponent="logOut"
        />
        <div className="flex flex-col w-[72%] my-4 space-y-6">
          <div className="flex flex-col space-y-2">
            <h3 className="font-bold text-2xl">Log Out</h3>
            <p className="font-normal text-sm">
              Are you sure you want to log out?
            </p>
          </div>
          <div>
          <Button
            type="button"
            className="w-1/4 bg-customRed text-base text-center font-bold py-5"
          >
            Yes, Log out
          </Button>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Logout;
