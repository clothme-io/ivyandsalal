'use client'
import Image from 'next/image';
import Square from "@/app/components/artifacts/Square";

export const runtime = "edge";

const Section = () => {
  return (
    <section className="min-h-[100svh] overflow-hidden relative">
      <div className="px-5 max-w-7xl mx-auto min-h-[100svh] relative flex flex-col">
        <h1 className='mt-12 text-3xl md:text-5xl font-short-stack md:max-w-[70%]'>
          We’ll do all we can to find
          the best fashion for our kids
        </h1>

        <div className='h-20 flex-1 flex justify-center'>
          <div className='flex-1 grid grid-cols-4 gap-12 mt-14'>
            <div className='col-span-2'>
              <p className='text-lg text-black/60 font-extrabold mt-[15px] max-w-[80%]'>
                To all parents who are striving to help their kids 
                look good and be their best, ClothME is here to help.
              </p>
            </div>
            <div className='col-span-2 h-[70%] flex relative'>
              <div className='flex-1 relative rounded-[10px] overflow-hidden z-10'>
                <Image
                  src='/images/mother-daughter-using-mobile.png'
                  alt="none"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                />
              </div>

              {/* square arts */}
              <Square size="h-[57.21px]" className="absolute -top-[8%] rotate-[20.64deg] -right-[4%]" />
              <Square size="h-[67.25px]" className="absolute top-[90%] -right-[5%] !bg-primary-blue/20" />
            </div>
          </div>

          <Image
            src='/images/PhoneMock.png'
            width={500} height={500}
            className='absolute bottom-0 object-contain h-1/2 z-10'
            alt='phone mockup'
          />
        </div>        
      </div>
    </section>
  )
}

export default Section