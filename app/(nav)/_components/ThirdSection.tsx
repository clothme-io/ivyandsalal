'use client'
import Image from 'next/image';
import Square from "@/app/components/artifacts/Square";

export const runtime = "edge";

const ThirdSection = () => {
  return (
    <section className="min-h-[100svh] overflow-hidden relative bg-primary-yellow/10">
      <div className="px-5 max-w-7xl mx-auto min-h-[100svh] relative flex flex-col">
        <div className='flex-1 py-12 flex'>
          <div className='flex-1 space-y-12'>
            <div className='grid grid-cols-4 gap-6'>
              <div className='col-span-2'>
                <h1 className='text-3xl md:text-5xl font-short-stack'>
                  Your Story
                </h1>
                <p className='text-lg text-black/60 font-extrabold mt-[15px]'>
                  To all parents who are striving to help their kids 
                  look good and be their best, ClothME is here to help.
                </p>
              </div>
              <div className='col-span-2 h-[309px] flex relative max-w-lg'>
                <div className='flex-1 relative rounded-[10px] overflow-hidden z-10'>
                  <Image
                    src='/images/image0.jpg'
                    alt="Circle Image"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                  />
                </div>

                {/* square arts */}
                <Square size="h-[67.21px]" className="absolute -top-[8%] rotate-[20.64deg] -right-[4%]" />
              </div>
            </div>

            <div className='grid grid-cols-4 gap-6'>
              <div className='col-span-2 h-[364px] flex gap-2.5 relative'>
                <div className='flex-1 relative rounded-[10px] overflow-hidden z-10'>
                  <Image
                    src='/images/smiley-women-taking-selfie-medium-shot.png'
                    alt="Circle Image"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                  />
                </div>

                <div className='flex-1 relative rounded-[10px] overflow-hidden z-10'>
                  <Image
                    src='/images/cute-little-girl-with-parents-playing-by-mobile-phone-home.png'
                    alt="Circle Image"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                  />
                </div>

                {/* square arts */}
                <Square size="h-[80.29px]" className="absolute -top-[10%] rotate-[20.64deg] -left-[8%] !bg-primary-blue/20" />
                <Square size="h-[67.25px]" className="absolute -bottom-[8%] rotate-[20.64deg] -right-[4%] !bg-primary-orange/20" />
              </div>

              <div className='col-span-2'>
                <h1 className='text-3xl md:text-5xl font-short-stack'>
                  Our Story
                </h1>
                <p className='text-lg text-black/60 font-extrabold mt-[15px]'>
                  To all parents who are striving to help their kids 
                  look good and be their best, ClothME is here to help.
                </p>
              </div>              
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ThirdSection