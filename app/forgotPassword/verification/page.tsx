"use client";

import React, { useState } from "react";
import OTPPage from "./components/OTPPage";
import PasswordResetSuccess from "./components/OTPSuccessPage";

const Verification = () => {
  const [activeSection, setActiveSection] = useState("otp_page");

  function onSubmit(otp: string) {
    setActiveSection("successPage")
    console.log(otp);
  }

  const renderActiveSection = () => {
    switch (activeSection) {
      case "otp_page":
      default:
        return <OTPPage onSubmit={onSubmit}/>;
      case "successPage":
        return <PasswordResetSuccess />;
    }
  };

  return (
    <div className="bg-[#F2F2F2] h-screen flex flex-col justify-center items-center">
      {renderActiveSection()}
    </div>
  );
};

export default Verification;
