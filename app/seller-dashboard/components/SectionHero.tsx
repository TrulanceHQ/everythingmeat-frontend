import Image from "next/image";
import React from "react";

type Props = {
  pageTitle: string;
};

const SectionHero = ({ pageTitle }: Props) => {
  return (
    <div>
      <div>
        <Image
          src={"/dotframe.png"}
          alt={""}
          width={90}
          height={70}
          className="absolute right-[400] top-[80] hidden lg:block"
        ></Image>
      </div>
      <div className="h-56 bg-[#F2F2F2] flex flex-col justify-center items-center py-4">
        <h3 className="font-bold text-3xl">{pageTitle}</h3>
        <p className="font-normal text-xl">Home / {pageTitle}</p>
      </div>
      <div>
        <Image
          src={"/dotframe.png"}
          alt={""}
          width={90}
          height={70}
          className="absolute left-[400] top-[280] hidden lg:block"
        ></Image>
      </div>
    </div>
  );
};

export default SectionHero;
