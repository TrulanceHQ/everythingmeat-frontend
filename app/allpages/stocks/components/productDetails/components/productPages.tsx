"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { Button } from "@/components/ui/button";
import ProductStocks from "./productStocks";
import { useSearchParams } from "next/navigation";
import { productDetails } from "./details";
import Countdown from "react-countdown";
import Image from "next/image";
import ProductImages from "./productImages";

const ProductSection = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const productId = searchParams.get("productId");

  const product = productId ? productDetails[productId] : productDetails["12573FG"];
  const [selectedImage, setSelectedImage] = useState(product.images[0]);
  const [fade, setFade] = useState(false);
  const [countdownEndTime, setCountdownEndTime] = useState(Date.now() + product.countdown);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    if (productId) {
      setCountdownEndTime(Date.now() + product.countdown);
    }
  }, [productId]);

  const handleImageChange = (image: string) => {
    setFade(true);
    setTimeout(() => {
      setSelectedImage(image);
      setFade(false);
    }, 300); // Duration of the fade effect
  };

  const handleZoomClick = () => {
    setIsFullscreen(true);
  };

  const handleExitFullscreen = () => {
    setIsFullscreen(false);
  };

  const handleImageChangeFullscreen = (image: string) => {
    setFade(true);
    setTimeout(() => {
      setSelectedImage(image);
      setFade(false);
    }, 300); // Duration of the fade effect
  };

  // Countdown renderer
  const renderer = ({ days, hours, minutes, seconds }: any) => {
    return (
      <div className="flex md:gap-3 gap-[8] md:text-xl text-sm bg-[#FFBA35] md:p-4 p-3 text-center rounded-xl">
          <div>
            <p className="font-bold">{days}</p>
            <p>Days</p>
          </div>
        <p className="md:text-5xl text-3xl mr-2">&#58;</p>
          <div>
            <p className="font-bold">{hours}</p>
            <p>Hours</p>
          </div>
        <p className="md:text-5xl text-3xl mr-2">&#58;</p>
          <div>
            <p className="font-bold">{minutes}</p>
            <p>Minutes</p>
          </div>
        <p className="md:text-5xl text-3xl mr-2">&#58;</p>
          <div>
            <p className="font-bold">{seconds}</p>
            <p>Seconds</p>
          </div>
      </div>
    );
  };

  return (
    <div className="bg-customGray pt-5 min-h-screen relative">
      {/* Fullscreen Mode */}
      {isFullscreen && (
        <div className="fixed inset-0 bg-customGray z-50 flex lg:flex-col flex-row items-center justify-center h-screen w-screen">
          <Button
            onClick={handleExitFullscreen}
            className="absolute top-5 xl:right-40 lg:right-20 md:right-10 right-8 bg-customRed hover:bg-white text-white hover:text-customRed border-2 border-customRed duration-200 py-3 px-3 rounded-lg text-sm"
          >
            Back<IoChevronForward size={18} />
          </Button>
          <div className="flex lg:flex-row flex-col w-full max-w-4xl">
            <div className="flex items-center justify-center mx-auto">
              <Image
                src={selectedImage}
                alt="Fullscreen Product"
                width={550}
                height={550}
                className={`object-contain rounded-xl lg:w-[550] md:w-[450] w-[350] xl:mt-10 transition-opacity duration-500 ${fade ? 'opacity-0' : 'opacity-100'}`}
              />
            </div>
            <div className="lg:w-1/5 flex lg:flex-col flex-row gap-4 overflow-y-auto xl:mt-[50px] lg:ml-5 items-center justify-center lg:mt-0 mt-5">
              {product.images.map((image, index) => (
                <div
                  key={index}
                  onClick={() => handleImageChangeFullscreen(image)}
                  className={`cursor-pointer rounded-md`}
                >
                  <Image
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    width={120}
                    height={120}
                    className="object-cover rounded-md lg:w-[120] md:w-[50] w-[40]"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      {/* Back Button */}
      <Button
        onClick={() => router.push("/allpages/stocks")}
        className="relative md:top-5 lg:left-10 left-4 bg-customRed hover:bg-white text-white hover:text-customRed border-2 border-customRed duration-200 md:p-5 py-3 px-4 rounded-lg flex items-center gap-2 font-bold md:text-base text-sm"
      >
        <IoChevronBack size={18} /> Back
      </Button>

      {/* Title Section */}
      <div className="text-center mt-5 mb-20">
        <h1 className="md:text-3xl text-2xl font-bold mb-3">
          Stocks
        </h1>
        <p className="md:text-lg text-base">
          Home / Stocks / {product.category} / Product Details
        </p>
      </div>

      {/* Dot Frame */}
      {/* Top */}
      <div className="absolute z-10 hidden md:block">
        <Image
          src="/dotframe.png"
          alt="Dot Frame"
          width={126}
          height={106}
          className="object-cover relative xl:-top-[275] xl:left-[850] xl:w-[126] w-[112] -top-[272] lg:left-[635] md:left-[480]"
        />
      </div>
      {/* Bottom */}
      <div className="absolute hidden md:block">
        <Image
          src="/dotframe.png"
          alt="Dot Frame"
          width={126}
          height={106}
          className="object-cover relative xl:-top-16 xl:left-[428] xl:w-[126] w-[112] -top-[58] lg:left-[280] left-[160] z-45"
        />
      </div>

      {/* Product Section */}
      <div className="flex flex-col lg:flex-row bg-white px-2 py-10 md:px-10 justify-center relative">
        {/* Left Section Image */}
        <ProductImages
          selectedImage={selectedImage}
          fade={fade}
          handleImageChange={handleImageChange}
          handleZoomClick={handleZoomClick}
          product={product}
        />

        {/* Right Section Details */}
        <div className="w-full lg:w-1/2 lg:pl-10 flex flex-col justify-center">
          {/* Stock Details Start */}
          <p className="md:text-base text-xs text-gray-500">Product ID: {product.id}</p>
          <h2 className="md:text-4xl text-2xl font-bold md:mt-2 mt-1">{product.title}</h2>
          <p className="md:text-2xl text-lg text-customRed lg:my-4 my-2 font-medium">₦{product.price} <span className="text-base text-black font-normal">/per slot</span></p>
          <p className="md:text-xl text-base">
            Available slot <span className="font-bold text-customRed">{product.slotsOut}</span> out of <span className="font-bold">{product.slotsAvailable}</span>
          </p>
          {/* Stock Details End */}
          <p className="lg:mt-4 mt-2 text-gray-600 md:text-base text-sm">
            {product.description}
          </p>
          <Button className="md:mt-6 mt-4 bg-white border-2 border-customRed py-5 rounded-lg md:w-60 w-52 text-customRed text-sm font-bold hover:bg-customRed hover:text-white duration-200">
            Add To Cart
          </Button>
          {/* Timer */}
          <div className="lg:mt-10 mt-5 md:w-[430px] w-[290]">
            <p className="md:text-lg text-base font-medium text-gray-600">Time left</p>
            <Countdown date={countdownEndTime} renderer={renderer} />
          </div>
        </div>
      </div>

      {/* Highlights Section */}
      <div className="bg-white md:px-10 md:py-8 px-5 lg:px-[100px]">
        <h3 className="md:text-2xl text-xl font-bold mb-4">
          Highlights
          <div className="w-14 h-1 bg-customRed mt-1"></div>
        </h3>
        <ul className="list-disc pl-5 md:text-sm text-xs">
          {product.highlights.map((highlight: string, index: number) => (
            <li key={index}>{highlight}</li>
          ))}
        </ul>
      </div>

      {/* Other Related Stocks */}
      <ProductStocks />
      
      {/* Space */}
      <div className="h-20"></div>
    </div>
  );
};

export default ProductSection;
