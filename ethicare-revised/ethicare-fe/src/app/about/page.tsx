import React from 'react'
import Image from 'next/image';
import aboutImg from '@/images/students-darkened.jpg'

export default function page() {
  return (
    <>
      <div className="bg-white mt-10 mx-80 px-10 py-5 rounded-2xl flex items-center space-x-8">
        {/* Image Section */}
        <div className="relative flex-shrink-0 w-[400px] h-[400px] overflow-hidden rounded-lg">
          <Image
            src={aboutImg}
            alt="About background image"
            className="object-cover w-full h-full filter grayscale"
          />
          {/* Green Masking */}
          <div className="absolute inset-0 bg-ethicare-green/30 rounded-lg" />
        </div>

        {/* Content Section */}
        <div className="flex-1 text-ethicare-green">
          <div className="text-7xl font-extrabold mb-4">
            ABOUT US!
          </div>
          <p className="text-lg text-ethicare-pink-two">
            We are looking for ambassadors who are interested in understanding and addressing the issues of mental health, morale, and wellbeing, so what are you waiting for? Register Now!
          </p>
        </div>
      </div>
    </>
  )
}