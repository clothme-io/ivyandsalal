import Image from 'next/image';
import { EmailOptInForm } from "@/app/components/EmailOptInForm";
import SectionalBrandOverlay from "@/app/components/SectionalBrandOverlay";
import Circle from "@/app/components/artifacts/Circle";
import Square from "@/app/components/artifacts/Square";
import { toast } from 'sonner';

export const runtime = "edge";

const LandingSection = () => {
  return (
    <section className="min-h-[100svh] overflow-hidden">
      <div
        className="px-6 md:px-10 pb-20 max-w-7xl mx-auto min-h-[100svh] relative
        flex justify-center items-center">
        <SectionalBrandOverlay
          base
          className="absolute inset-x-0 top-0 px-6 md:px-10 pt-6 md:pt-[65px] z-30"
        />

        <div
          className="relative text-center max-w-2xl z-10 md:bg-white/[.95] bg-white/0
          shadow-2xl shadow-white/0 md:shadow-white before:absolute before:inset-0 before:z-[-1]
          before:shadow-2xl before:shadow-white/0 md:before:shadow-white after:absolute after:inset-0 after:z-[-1]
          after:shadow-2xl after:shadow-white/0 md:after:shadow-white">
          <h1 className="text-3xl md:text-5xl font-bold text-black relative z-10">
            Having our kids look <br /> good is every parent’s dream
          </h1>
          <p className="mt-2 md:mt-[29px] text-[#00000099] text-[10px] md:text-sm">
            Generate your kids sizes from 2 photos or manually input just their pant and shirt sizes.
            Easily and quickly find that shirt with your kid’s favorite character.
            Get update from brands your kids love whenever we find a shirt or pants that fit them.
            Plus you always get the best price we can find.
          </p>

          <EmailOptInForm
            className="max-w-[538px] mt-[22px] md:mt-[71px] mx-auto
            max-md:[&_input]:bg-[#F1F1F1]/60 max-md:[&_input]:backdrop-blur"
            action={{
              title: "Join As VIP",
              // callback: async (email) => {
              //   console.log({ email })
              //   await new Promise((resolve, reject) => setTimeout(resolve, 5000))
              //   toast('Email submitted')
              //   console.log('Email submitted')
              // }
            }}
            note="We promise to never sell or redistribute your email"
          />
          {/* circular arts */}
          <Circle
            className="max-md:h-[49px] absolute max-md:top-[20px] -top-[70px] max-md:right-[94%] right-full"
            imageUrl="/images/family_4.jpg"
          />
          <Circle
            size="max-md:h-[52px] h-[185px]"
            className="absolute max-md:top-[30px] top-0 max-md:left-[94%] left-full"
            imageUrl="/images/family_3.jpg"
          />
          <Circle
            size="max-md:h-[52px] h-[185px]"
            className="absolute max-md:top-[50%] top-3/4 max-md:right-[90%] right-[116%] -z-[1]"
            imageUrl="/images/family_2.jpg"
          />
          <Circle
            size="max-md:h-[54px] h-[196px]"
            className="absolute max-md:top-[74%] top-[90%] max-md:left-[90%] left-[110%]"
            imageUrl="/images/family_1.jpg"
          />

          {/* square arts */}
          <Square className="max-md:h-[23.94px] absolute bottom-full max-md:left-[84%] left-[96%]" />
          <Square size="max-md:h-[29.79px] h-[48.29px]" className="absolute top-[30%] max-md:right-[94%] right-[124%] !bg-primary-blue/20" />
          <Square size="max-md:h-[27.2px] h-[48.29px]" className="absolute max-md:top-[46%] top-[110%] max-md:-right-[4%] right-[84%] !bg-primary-orange/20" />
        </div>

        <div className="absolute max-md:inset-x-0 bottom-0 max-md:flex max-md:justify-center select-none">
          <Image
            src="/images/app_mock.png"
            alt="app screenshot"
            width={363.75}
            height={275}
            className='max-lg:scale-[64%] origin-bottom'
          />

          <div className="flex absolute bottom-0 max-md:inset-x-0 left-full md:pl-5 -space-x-6 max-md:-z-[1]">
            <span className="h-[17px] md:h-[34px] max-md:w-full md:min-w-[173px] bg-primary-orange"></span>
            <span className="h-[17px] md:h-[34px] max-md:w-full md:min-w-[133px] bg-primary-yellow"></span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LandingSection