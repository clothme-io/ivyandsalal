'use client'
import Image from 'next/image';
import Square from "@/app/components/artifacts/Square";

export const runtime = "edge";

const SecondSection = () => {
  return (
    <section className="min-h-[100svh] overflow-hidden relative">
      <span className='absolute inset-x-0 bg-[#C9D8E5BF] h-[40svh] rounded-br-3xl'></span>

      <div className="px-5 max-w-7xl mx-auto min-h-[100svh] relative flex flex-col">
        <h1 className='mt-12 text-3xl md:text-5xl font-short-stack md:max-w-[70%]'>
          We’ll do all we can to find
          the best fashion for our kids
        </h1>

        <div
          className='flex-1 mt-9 bg-white rounded-t-[10px] p-10 2xl:p-14
          grid grid-cols-4 gap-6 relative z-10
          [&>*]:relative [&>*]:rounded-[10px] [&>*]:overflow-hidden'>
          <div className='my-5'>
            <Image
              src='/images/2-kids-in-denim.jpeg'
              alt="Circle Image"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </div>
          <div className='col-span-2'>
            <Image
              src='/images/cute-little-girl-with-parents-playing-by-mobile-phone-home.png'
              alt="Circle Image"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </div>
          <div className='my-5'>
            <Image
              src='/images/medium-shot-smiley-women-taking-selfie.png'
              alt="Circle Image"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </div>
        </div>
        <p className='text-lg text-black/60 font-extrabold mt-[15px] text-center max-w-3xl mx-auto mb-10'>
          To all parents who are striving to help their kids look good and be their best,
          ClothME is here to help.  To all parents who are striving to help their kids look
          good and be their best, ClothME is here to help.
        </p>

        {/* square arts */}
        <Square size="h-[67.21px]" className="absolute top-[10%] left-[92%]" />
        <Square size="h-[80.29px]" className="absolute top-[40%] -left-[2%] !bg-primary-orange/20" />
        <Square size="h-[67.25px]" className="absolute top-[80%] -right-[1%] !bg-primary-blue/20" />
      </div>
    </section>
  )
}

export default SecondSection