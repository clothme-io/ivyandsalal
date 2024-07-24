'use client'

import Image from 'next/image';
import Square from "@/app/components/artifacts/Square";
import { EmailOptInForm } from '@/app/components/EmailOptInForm';

export const runtime = "edge";

const BrandAndCustomersSection = () => {
  return (
    <section className="min-h-[100svh] bg-primary-orange/20 overflow-hidden relative">
      <div
        className="px-5 max-w-7xl mx-auto min-h-[100svh] relative
        flex justify-between [&>*]:flex-1">
        <div className="relative max-w-lg z-10 mt-12">
          <h1 className="text-3xl md:text-5xl font-bold text-black relative z-10 font-short-stack">
            It’s all about love for
            our kids and local brands
          </h1>
          <p className="mt-2 md:mt-20 text-[#00000099] md:text-lg font-extrabold">
            To all parents who are striving to help their kids
            look good and be their best, ClothME is here to help.
          </p>

          <EmailOptInForm
            className="max-w-[538px] mt-[22px] md:mt-[71px] [&>div]:max-lg:flex-col
            [&_input]:bg-white/70"
            action={{
              title: "Subscriber",
            }}
          />
        </div>
        <div className='self-stretch relative'>
          {/* <Image
            src='/images/landing-image-lady-and-kids.png'
            alt="Circle Image"
            layout="fill"
            objectFit="contain"
            objectPosition="center"
          /> */}
        </div>

        {/* square arts */}
        <Square size="h-[67.21px]" className="absolute top-[10%] left-[92%]" />
        <Square size="h-[67.25px]" className="absolute top-[80%] right-[20%] !bg-primary-blue/20" />
      </div>

      <div className="absolute bottom-0 inset-x-0 flex justify-between items-end select-none">
        <div className="flex -space-x-6 max-md:-z-[1]">
          <span className="h-[17px] md:h-[34px] md:min-w-[173px] bg-primary-orange"></span>
          <span className="h-[17px] md:h-[34px] md:min-w-[133px] bg-primary-yellow"></span>
        </div>
      </div>
    </section>
  )
}

export default BrandAndCustomersSection