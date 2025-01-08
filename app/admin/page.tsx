"use client";

import React, { useState } from "react";
import AdminDefault from "./section/AdminDefault";

import TotalBuyers from "./section/TotalBuyers";
import TotalCommission from "./section/TotalCommission";
import TotalSellers from "./section/TotalSellers";
import PersonalInformation from "./section/PersonalInformation";
import MyProduct from "./section/MyProduct";
import PaymentRequest from "./section/PaymentRequest";
import ChangePassword from "./section/ChangePassword";
import Logout from "./section/Logout";
import TotalSales from "./section/totalSales/TotalSales";

const Page: React.FC = () => {
  const [activeComponent, setActiveComponent] = useState<string>("Default");

  const onCardClick = (cardLink: string) => {
    setActiveComponent(cardLink);
  };

  const onNavigate = (componentName: string) => {
    setActiveComponent(componentName);
  };

  const onBackClick = () => {
    setActiveComponent("Default");
  };

  const renderComponent = () => {
    switch (activeComponent) {
      case "Default":
        return <AdminDefault handleCardClick={onCardClick} />;
      case "totalSales":
        return (
          <TotalSales onClick={onBackClick} handleSectionClick={onNavigate} />
        );
      case "totalBuyers":
        return (
          <TotalBuyers onClick={onBackClick} handleSectionClick={onNavigate} />
        );
      case "totalCommission":
        return (
          <TotalCommission
            onClick={onBackClick}
            handleSectionClick={onNavigate}
          />
        );
      case "totalSellers":
        return (
          <TotalSellers onClick={onBackClick} handleSectionClick={onNavigate} />
        );
      case "personalInformation":
        return (
          <PersonalInformation
            onClick={onBackClick}
            handleSectionClick={onNavigate}
          />
        );
        case "myProduct":
        return (
          <MyProduct
            onClick={onBackClick}
            handleSectionClick={onNavigate}
          />
        );
        case "paymentRequest":
          return (
            <PaymentRequest
              onClick={onBackClick}
              handleSectionClick={onNavigate}
            />
          );
          case "changePassword":
          return (
            <ChangePassword
              onClick={onBackClick}
              handleSectionClick={onNavigate}
            />
          );
          case "logOut":
          return (
            <Logout
              onClick={onBackClick}
              handleSectionClick={onNavigate}
            />
          );
      default:
        return <AdminDefault handleCardClick={onCardClick} />;
    }
  };

  return <div>{renderComponent()}</div>;
};

export default Page;
