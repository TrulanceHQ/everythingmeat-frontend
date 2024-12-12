import Image from "next/image";
import React from "react";

type Props = {
    imageSource: string;
};

const Head = ({imageSource}: Props) => {
  return (
    <div className="flex flex-col justify-left space-y-4 lg:flex-row lg:space-x-8">
      <div>
        <Image src={imageSource} alt={""} width={150} height={200}></Image>
      </div>
      <div className="flex flex-col justify-center space-y-2">
        <h3 className="font-bold text-2xl ">Hello Admin</h3>
        <p className="font-normal text-base">How can we help you today?</p>
      </div>
    </div>
  );
};

export default Head;
