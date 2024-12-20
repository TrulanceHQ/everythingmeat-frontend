import Image from "next/image";
import { GoArrowRight } from "react-icons/go";
import { Button } from "@/components/ui/button";

const FifthPage = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-center md:p-20 p-10 bg-white ">
      {/* Left Image Section */}
      <div className="w-full md:w-1/2 md:flex hidden">
        <Image
          src="/homeImages/farmercow.png"
          alt="Cattle and Farmer"
          width={500}
          height={300}
          className="rounded-tl-[60px] rounded-br-[60px] object-cover"
        />
      </div>

      {/* Right Text Section */}
      <div className="w-full md:w-1/2 text-left space-y-3 md:ml-8 xl:ml-0">
        <h1 className="md:text-3xl text-2xl font-bold leading-snug">
          Elevate Your Cattle Sales by Partnering for Profitable Meat Sharing.
        </h1>
        <p className="text-base xl:pr-20 leading-tight">
          Everything Meat connects cattle farmers with consumers seeking
          high-quality sourced meat, offering new avenues for marketing
          livestock and increasing profits.
        </p>
        <div className="w-14 border-b-4 border-customRed"></div>
        <div>
          <Button className="flex items-center justify-center gap-2 md:p-6 p-3 text-white bg-customRed hover:bg-customRed rounded-lg font-bold md:mt-10 mt-5 md:text-base text-sm">
            Explore More <GoArrowRight className="text-lg" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FifthPage;
