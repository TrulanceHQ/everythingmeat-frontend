"use client";

import React, { useState } from "react";
import SellerDefault from "./section/SellerDefault";
import TotalSales from "./section/totalSales/TotalSales";
import TotalCommission from "./section/totalCommissions/TotalCommission";
import TotalSellers from "./section/totalSellers/TotalSellers";
import TotalBuyers from "./section/totalBuyers/TotalBuyers";
import PersonalInformation from "./section/personalInformation/PersonalInformation";
import MyProduct from "./section/productList/MyProduct";
import PaymentRequest from "./section/paymentRequest/PaymentRequest";
import ChangePassword from "./section/changePassword/ChangePassword";
import Logout from "./section/logOut/Logout";

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
        return <SellerDefault handleCardClick={onCardClick} />;
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
        return <SellerDefault handleCardClick={onCardClick} />;
    }
  };

  return <div>{renderComponent()}</div>;
};

export default Page;
