import React from 'react';
import { IoIosArrowBack } from 'react-icons/io';

type Props = {
  onClick: () => void;
};

const BackToDashboard = ({ onClick }: Props) => {
  return (
    <div onClick={onClick} className="cursor-pointer flex items-center space-x-2 py-4 w-[13rem] text-customRed hover:text-customRed/50">
      <IoIosArrowBack className="h-5 w-5" />
      <span className='text-base font-medium'>Go back to Dashboard</span>
    </div>
  );
};

export default BackToDashboard;