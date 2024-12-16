import React from 'react'
import Image from "next/image";
import GetForm from './component/getForm';

const ContactPage = () => {
  return (
    <div className="bg-gray-100 pt-5 min-h-screen">
      {/* Title Section */}
            <div className="text-center mt-5 mb-20">
              <h1 className="md:text-3xl text-2xl font-bold text-black mb-3">Contact</h1>
              <p className="md:text-lg text-base">Home / Contact</p>
            </div>
      
            {/* Dot Frame */}
            {/* Top */}
            <div className="absolute">
              <Image
                src="/dotframe.png"
                alt="Dot Frame"
                width={126}
                height={106}
                className="object-cover relative xl:-top-[284] xl:left-[795] xl:w-[126] md:w-[112] w-[100] -top-[279] lg:left-[635] md:left-[480] left-[273]"
              />
            </div>
            {/* Bottom */}
            <div className="absolute">
              <Image
                src="/dotframe.png"
                alt="Dot Frame"
                width={126}
                height={106}
                className="object-cover relative  xl:-top-16 xl:left-[428] xl:w-[126] md:w-[112] w-[100] md:-top-[55] lg:left-[280] md:left-[160] -top-[34] left-[36]"
              />
            </div>

            {/* Component */}
            <GetForm />
    </div>
  )
}

export default ContactPage