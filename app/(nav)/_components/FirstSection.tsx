'use client'
import Image from 'next/image';
import { EmailOptInForm } from "@/app/components/EmailOptInForm";
import Square from "@/app/components/artifacts/Square";

export const runtime = "edge";

const FirstSection = () => {
  return (
    <section className="min-h-[100svh] overflow-hidden relative">
      <div
        className="px-5 pb-20 max-w-7xl mx-auto min-h-[100svh] relative
        flex justify-between items-center [&>*]:flex-1">
        <div
          className="relative max-w-lg z-10">
          <h1 className="text-3xl md:text-5xl font-bold text-black relative z-10 font-short-stack">
            Give them their <br />
            best look always
          </h1>
          <p className="mt-2 md:mt-[29px] text-[#00000099] md:text-lg font-extrabold">
            To all parents who are striving to help their kids 
            look good and be their best, ClothME is here to help.
          </p>

          <EmailOptInForm
            className="max-w-[538px] mt-[22px] md:mt-[71px] [&>div]:max-lg:flex-col
            [&_input]:bg-[#D9D9D9] max-md:[&_input]:backdrop-blur"
            action={{
              title: "Join As VIP",
            }}
            // note="We promise to never sell or redistribute your email"
          />
        </div>
        <div className='self-stretch relative'>
          <Image
            src='/images/landing-image-lady-and-kids.png'
            alt="Circle Image"
            layout="fill"
            objectFit="contain"
            objectPosition="center"
          />
        </div>

        {/* square arts */}
        <Square size="h-[80.29px]" className="absolute top-[16%] -left-[2%] !bg-primary-orange/20" />
        <Square size="h-[67.25px]" className="absolute top-[40%] right-1/2 !bg-primary-blue/20" />
        <Square size="h-[67.21px]" className="absolute top-[10%] left-[92%]" />
      </div>

      <div className="absolute bottom-0 inset-x-0 flex justify-between items-end select-none">
        <div className="flex -space-x-6 max-md:-z-[1]">
          <span className="h-[17px] md:h-[34px] md:min-w-[173px] bg-primary-orange"></span>
          <span className="h-[17px] md:h-[34px] md:min-w-[133px] bg-primary-yellow"></span>
        </div>

        <div className='w-1/2 h-[147px] bg-[#C9D8E5BF] rounded-tl-[60px]'></div>
      </div>
    </section>
  )
}

export default FirstSection