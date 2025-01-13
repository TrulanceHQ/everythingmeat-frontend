"use client";

import Image from "next/image";
import React, { useState } from "react";

// type Props = {}

const PasswordInput = () => {
  const [passwordToggle, setPasswordToggle] = useState("password");
  const [password, setPassword] = useState("");

  const handleEyeClick = () => {
    setPasswordToggle((prevState) =>
      prevState === "password" ? "text" : "password"
    );
  };

  return (
    <div className="relative mt-4 w-full">
      <input
        type={passwordToggle}
        name="password"
        className={`border-tgrey2 rounded-md p-2 text-h2 text-tgrey1 font-normal w-full focus:border-tgrey2 focus:outline-none focus:ring focus:ring-gold1 ${
          password ? "bg-gray-100" : ""
        }`}
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
        required
        aria-label="Password"
      />
      <button
        type="button"
        className="absolute right-4 top-1/2 transform -translate-y-1/2"
        onClick={handleEyeClick}
        aria-label="Toggle password visibility"
      >
        <Image src="/eye.png" width={16} height={16} alt="Toggle visibility" />
      </button>
    </div>
  );
};

export default PasswordInput;
