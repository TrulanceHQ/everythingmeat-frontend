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
      <div className="mx-4 md:mx-10 flex flex-row justify-between items-center">
        <div>
          <BackToDashboard onClick={onClick} />
        </div>
        <div className="block md:hidden">
          <DefaultLeft
            onSectionClick={handleSectionClick}
            activeComponent="logOut"
          />
        </div>
      </div>

      <div className="flex flex-row justify-center md:justify-between md:mx-10 md:space-x-8">
        <div className="hidden md:block md:w-[25%]">
          <DefaultLeft
            onSectionClick={handleSectionClick}
            activeComponent="logOut"
          />
        </div>
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
              className="md:w-1/4 bg-customRed text-base text-center font-bold py-5"
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
