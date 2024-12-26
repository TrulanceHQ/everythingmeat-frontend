"use client";

import { useState, useEffect } from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { RiDoubleQuotesL } from "react-icons/ri";
import { Rating } from "flowbite-react";

const testimonials = [
  {
    id: 1,
    name: "Mrs. Sarah L",
    role: "Meat Sharer",
    rating: 4.0,
    testimonial:
      "Absolutely thrilled with the quality of meat I received from Everything Meat! It's clear that they care deeply about the welfare of the animals and the satisfaction of their customers. Can't wait to place my next order.",
    image: "/homeImages/customer/customer1.jpg",
  },
  {
    id: 2,
    name: "Mr. John D",
    role: "Restaurant Owner",
    rating: 4.0,
    testimonial:
      "As someone who values transparency and sustainability, I was delighted to discover Everything Meat. Their commitment to ethical farming practices and traceability sets them apart from other meat suppliers.",
    image: "/homeImages/customer/customer2.png",
  },
  {
    id: 3,
    name: "Mr. David R",
    role: "Butcher",
    rating: 5.0,
    testimonial:
      "As a professional butcher, I am impressed with the consistency and premium quality of Everything Meat products.",
    image: "/homeImages/customer/customer3.jpg",
  },
  {
    id: 4,
    name: "Mrs. Emily K",
    role: "Chef",
    rating: 4.5,
    testimonial:
      "The freshness and quality of the meat from Everything Meat are unmatched. My recipes have never tasted better!",
    image: "/homeImages/customer/customer4.jpg",
  },
  {
    id: 5,
    name: "Mr. Michael B",
    role: "Food Critic",
    rating: 4.8,
    testimonial:
      "I love the convenience of ordering from Everything Meat. The packaging is excellent, and the meat is always fresh!",
    image: "/homeImages/customer/customer5.jpg",
  },
  {
    id: 6,
    name: "Mr. James T",
    role: "Restaurant Supplier",
    rating: 4.5,
    testimonial:
      "Partnering with Everything Meat has been a game-changer for my business. The quality and reliability are top-notch.",
    image: "/homeImages/customer/customer6.jpg",
  },
];

const TestimonialReview = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerSlide, setCardsPerSlide] = useState(1); // Default to 1 (mobile-first)

  // Update cardsPerSlide dynamically on the client
  useEffect(() => {
    const getCardsPerSlide = () => {
      if (typeof window !== "undefined") {
        // Check if window is defined (client-side only)
        return window.innerWidth >= 1024 ? 2 : 1; // Desktop: 2 cards, Mobile: 1 card
      }
      return 1; // Default fallback for SSR
    };

    setCardsPerSlide(getCardsPerSlide()); // Set initial value

    const handleResize = () => {
      setCardsPerSlide(getCardsPerSlide());
    };

    window.addEventListener("resize", handleResize); // Listen for screen resizing

    return () => window.removeEventListener("resize", handleResize); // Cleanup
  }, []);

  const slides = Array.from(
    { length: Math.ceil(testimonials.length / cardsPerSlide) },
    (_, slideIndex) =>
      testimonials.slice(
        slideIndex * cardsPerSlide,
        slideIndex * cardsPerSlide + cardsPerSlide
      )
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup interval
  }, [slides.length]);

  return (
    <div className="bg-gray-100 py-12 md:px-6 px-[2px]">
      <h1 className="md:text-3xl text-2xl font-bold text-center mb-2">
        Reviews From Our Customers
      </h1>
      <p className="text-center xl:px-[400px] lg:px-52 md:px-20 px-2 mb-2 text-sm md:text-base">
        At Everything Meat, our customers&#x27; satisfaction is our top priority.
        Here&#x27;s what they have to say about their experience with us.
      </p>
      <div className="w-16 border-2 border-customRed md:mb-16 mb-10 mx-auto"></div>

      {/* Cards */}
      <div className="relative max-w-4xl mx-auto overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              className="min-w-full md:px-4 flex-shrink-0 flex-grow-0 flex justify-center gap-5"
            >
              {slide.map((testimonial) => (
                <Card
                  key={testimonial.id}
                  className="md:max-w-[400px] max-w-[300px] mx-2 rounded-lg shadow-none border-0 md:h-[300px] h-[250px]"
                >
                  <CardHeader className="relative rounded-t-lg flex flex-row items-center p-0 space-y-0">
                    <div className="bg-customRed md:p-5 p-4 rounded-tl-lg rounded-r-[50%] mb-2">
                      <div className="md:w-20 md:h-20 w-14 h-14 rounded-full overflow-hidden md:border-[3px] border-2 border-white">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col items-start md:px-4 px-2">
                      <h3 className="md:text-lg text-base font-medium">
                        {testimonial.name}
                      </h3>
                      <p className="md:text-sm text-xs md:mt-1">{testimonial.role}</p>
                      <div className="mt-2 flex justify-center items-center">
                        <Rating>
                          {[...Array(5)].map((_, index) => (
                            <Rating.Star
                              key={index}
                              filled={index < Math.floor(testimonial.rating)}
                            />
                          ))}
                        </Rating>
                        <span className="ml-2 md:text-sm text-xs font-semibold">
                          {testimonial.rating.toFixed(1)}
                        </span>
                      </div>
                    </div>
                    <div className="md:ml-12 ml-8 bg-gray-100 md:p-2 p-1 rounded-full">
                      <RiDoubleQuotesL className="text-customRed md:text-3xl text-2xl" />
                    </div>
                  </CardHeader>
                  <CardContent className="text-start p-4">
                    <p className="md:mt-4 md:text-base text-sm">{testimonial.testimonial}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-6 gap-2">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`md:h-[6px] md:w-12 h-1 w-10 rounded-full ${
              index === currentIndex ? "bg-customRed" : "bg-gray-300"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialReview;
