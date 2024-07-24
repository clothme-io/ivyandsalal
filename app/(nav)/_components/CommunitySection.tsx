'use client'
import Image from 'next/image';
import Square from "@/app/components/artifacts/Square";

export const runtime = "edge";

const CommunitySection = () => {
  return (
    <section className="min-h-[100svh] overflow-hidden relative">
      <div className="px-5 max-w-7xl mx-auto min-h-[100svh] relative flex flex-col">
        <h1 className='mt-12 text-3xl md:text-5xl font-short-stack md:max-w-[70%]'>
          Be part of an
          amazing community
        </h1>

        <div className='mt-52 flex justify-center relative z-10 h-[260px]'>
          <div className='absolute inset-y-0 w-[145%] grid grid-cols-4 gap-[18px]'>
            <div className='relative rounded-[10px] overflow-hidden'>
              <Image
                src='/images/happy-attractive-man-holds-his-arms-has-fun-with-little-cute-girl-new-year-atmosphere.png'
                alt="Circle Image"
                layout="fill"
                objectFit="cover"
                objectPosition="5em"
              />
            </div>
            <div className='relative rounded-[10px] overflow-hidden -translate-y-24'>
              <Image
                src='/images/woman-walks-outside-with-shopping-bags.png'
                alt="Circle Image"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
            </div>
            <div className='relative rounded-[10px] overflow-hidden -translate-y-11'>
              <Image
                src='/images/cheerful-young-ladies-stylish-outfits-work-as-fashion-designers-cozy-office-shorthaired-women-creates-clothes-patterns.png'
                alt="Circle Image"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
            </div>
            <div className='relative rounded-[10px] overflow-hidden'>
              <Image
                src='/images/grandmother-mother-daughter.png'
                alt="Circle Image"
                layout="fill"
                objectFit="cover"
                objectPosition="-5em"
              />
            </div>
          </div>
        </div>

        <div className='flex justify-center'>
          <p className='text-lg text-black/60 font-extrabold mt-10'>
            To all parents who are striving to help their kids <br />
            look good and be their best, ClothME is here to help.
          </p>
        </div>

        {/* square arts */}
        <Square size="h-[103.18px]" className="absolute top-[10%] left-[92%]" />
        <Square size="h-[96.51px]" className="absolute top-[28%] rotate-[20.64deg] left-[10%] !bg-primary-orange/20" />
        <Square size="h-[81.03px]" className="absolute top-[80%] right-[60%] !bg-primary-blue/20" />
      </div>
    </section>
  )
}

export default CommunitySection