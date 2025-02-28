"use client";

import React, { useState } from "react";
import SellerDefault from "./seller-dashboard/SellerDefault";
import PersonalInformation from "./seller-dashboard/section/personalInformation/PersonalInfomration";
import MyProduct from "./seller-dashboard/section/product/Product";
import Order from "./seller-dashboard/section/order/Order"
import Withdrawal from "./seller-dashboard/section/withdrawal/Withdrawal";
import ChangePassword from "./seller-dashboard/section/changePassword/ChangePassword";
import Logout from "./seller-dashboard/section/logout/Logout";
import ProductUpload from "./seller-dashboard/section/productUpload/ProductUpload";

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
      case "Withdrawal":
        return (
          <Withdrawal onClick={onBackClick} handleSectionClick={onNavigate} />
        );
      case "Order":
        return (
          <Order onClick={onBackClick} handleSectionClick={onNavigate} />
        );
      case "ProductUpload":
        return (
          <ProductUpload
            onClick={onBackClick}
            handleSectionClick={onNavigate}
          />
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
