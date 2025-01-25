import React from "react";

type Props = {
  Title: string;
  Text: string;
};

const TitleHeaders = ({ Title, Text}: Props) => {
  return (
    <div className="flex flex-col space-y-4 md:flex-row justify-between">
      <div className="flex flex-col space-y-1">
        <h3 className="font-bold text-2xl">{Title}</h3>
        <p className="font-normal text-sm">{Text}</p>
        <hr className="border-b-4 border-customRed w-10" />
      </div>
    </div>
  );
};

export default TitleHeaders;
