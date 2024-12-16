import Image from "next/image";

const features = [
  {
    imgSrc: "/homeImages/approval.png",
    title: "Government Approval",
    description:
      "At Everything Meat, we ensure trust and quality with approval from the Lagos State Ministry of Agriculture.",
  },
  {
    imgSrc: "/homeImages/moneybag.png",
    title: "Affordable Price",
    description:
      "At Everything Meat, we offer top-quality meats at competitive prices without compromising quality.",
  },
  {
    imgSrc: "/homeImages/leaves.png",
    title: "100% Fresh",
    description:
      "At Everything Meat, freshness is key. We deliver only the freshest cuts from the farm to your dining table.",
  },
];

const SecondPage = () => {
  return (
    <section className="flex flex-col-reverse lg:flex-row items-center bg-white py-12 px-6 lg:px-16">
      {/* Left Section */}
      <div className="lg:w-1/2 w-full lg:mt-0 mt-5 flex justify-center md:flex hidden">
        <Image
          src="/homeImages/freshmeat.png"
          alt="Fresh Meat Display"
          width={600}
          height={400}
          className="rounded-tr-[15%] rounded-bl-[15%]"
        />
      </div>

      {/* Right Section */}
      <div className="lg:w-1/2 w-full lg:pl-20 space-y-6 lg:px-0 md:px-10">
      <div className="">
        <h2 className="md:text-3xl text-2xl font-bold">
          What Makes Us Unique
        </h2>
        <p className="md:mt-3 mt-1">
          We understand that food brings people together. That&apos;s why
          we&apos;ve created a platform dedicated to promoting live cattle for
          meat sharing.
        </p>
        <div className="border-2 border-red-700 w-[75px] mt-2"></div>
        </div>

        {/* Features */}
        <div className="space-y-6">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div
                className={`md:p-6 p-5 rounded-md flex items-center justify-center bg-red-700`}
              >
                <Image
                  src={feature.imgSrc}
                  alt={feature.title}
                  width={45}
                  height={45}
                  className="rounded"
                />
              </div>
              <div>
                <h3 className="md:text-xl text-lg font-bold">
                  {feature.title}
                </h3>
                <p className="md:text-base text-sm leading-tight">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecondPage;
