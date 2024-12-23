import Image from "next/image";
import { IoMdPlay } from "react-icons/io";
import { Card } from "flowbite-react"; // Importing Flowbite Card component

const steps = [
  {
    title: "Selecting & Booking",
    description: "Browse our extensive Live Cattle selection, and book for meat sharing.",
    imgSrc: "/homeImages/booking.png",
  },
  {
    title: "Make Payment",
    description: "Effortlessly complete secure transactions with our versatile payment gateway.",
    imgSrc: "/homeImages/cashlesspay.png",
  },
  {
    title: "Processed",
    description: "Once bookings are complete, cattle are processed and the meat is shared equally.",
    imgSrc: "/homeImages/butchershop.png",
  },
  {
    title: "Delivery",
    description: "Our reliable logistics team ensures prompt delivery to your doorstep.",
    imgSrc: "/homeImages/deliverymeat.png",
  },
];

const HomeThird = () => {
  return (
    <section className="bg-gray-100 py-12 px-6 xl:px-16">
      {/* Title and Subtitle */}
      <div className="text-center mb-12">
        <h2 className="md:text-3xl text-2xl font-bold">How It Works</h2>
        <p className="max-w-2xl mx-auto mt-4">
          Discover the ease of our meat-sharing platform, where seamless exchanges among users are facilitated, ensuring efficient sharing at every step.
        </p>
        <div className="mt-2 w-16 mx-auto border-b-4 border-customRed"></div>
      </div>

      {/* Steps Section */}
      <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-center">
        {/* Cards and Connections */}
        <div className="flex flex-col lg:flex-row xl:space-x-24 lg:space-x-8 items-center justify-center">
          {steps.map((step, index) => (
            <div key={index} className="relative flex flex-col items-center">
              {/* Step Card */}
              <Card className="max-w-sm xl:w-[230px] lg:w-[220px] h-[260px] shadow-none">
                <Image
                  src={step.imgSrc}
                  alt={step.title}
                  width={60}
                  height={60}
                  className="mb-3 mx-auto"
                />
                <h3 className="text-lg font-bold text-center">{step.title}</h3>
                <p className="mt-2 text-sm text-center">{step.description}</p>
              </Card>

              {/* Horizontal Dashed Border and Play Icon for Desktop */}
              {index < steps.length - 1 && (
                <div className="hidden items-center absolute top-1/2 left-[245px] lg:flex">
                  <div className="border-dashed border-b-4 border-customRed w-14 xl:flex lg:hidden"></div>
                  <IoMdPlay size={36} className="text-customRed lg:ml-[-25px] xl:ml-[-10px]" />
                </div>
              )}

              {/* Vertical Dashed Border and Rotated Play Icon for Tablet/Mobile */}
              {index < steps.length - 1 && (
                <div className="lg:hidden flex flex-col items-center">
                  <div className="border-dashed border-l-4 border-customRed h-16 mt-2"></div>
                  <IoMdPlay
                    size={36}
                    className="text-customRed -mt-3 rotate-90"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeThird;
