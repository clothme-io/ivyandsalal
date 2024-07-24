'use client';

import FeaturesSection from "./_components/FeaturesSection";
import HowItWorksSection from "./_components/HowItWorksSection";
import JoinNowSection from "./_components/JoinNowSection";
import LandingSection from "./_components/LandingSection";


export const runtime = "edge";

function HomePage() {
  return (
    <main className="w-full font-noto-sans">
      <LandingSection />
      <HowItWorksSection className="bg-primary-yellow/5" />
      <div className="flex flex-col-reverse md:flex-col">
        <FeaturesSection />
        <JoinNowSection />
      </div>
    </main>
  )
}
export default HomePage;

// import React from 'react';
// import { EmailOptInForm } from '@/app/components/EmailOptInForm';
// import Square from '@/app/components/artifacts/Square';
// import BaseLayout from '../_components/baseLayout';

// export const runtime = "edge";

// type Props = {
//   params?: {
//     name: string
//   }
// }

// const Landings = ({
//   params
// }: Props) => {
//   return (
//     <BaseLayout name={params?.name}>
//       <div
//         className='min-h-full flex flex-col justify-center px-[80px] relative overflow-hidden'>
//         <h1 className='font-extrabold text-4xl leading-[44.48px]'>
//           Reach Millions of Parents with Your Amazing Kids Clothing
//         </h1>

//         <div className='mt-7 flex flex-col gap-4 font-extrabold text-sm text-[#00000099]'>
//           <p>
//             We created a platform where parents generates their kids sizes and buy products
//             directly from brands, designers and small retailers.
//           </p>
//           <p>
//             We don’t charge any fee but 10 - 15% per sale.
//           </p>
//           <p>
//             We send out notification to all parents who follow your brand when a product
//             is a fit for their kid.
//           </p>
//         </div>

//         <div className='mt-12 flex flex-col gap-6'>
//           <h2 className='text-xl font-extrabold'>Join now as a early vendor and</h2>
//           <EmailOptInForm
//             className="max-md:[&_input]:bg-[#D9D9D9]/60 [&_input]:bg-[#D9D9D9] max-md:[&_input]:backdrop-blur"
//             action={{ title: "Join Waitlist" }}
//           // note="We promise to never sell or redistribute your email"
//           />
//         </div>

//         {/* square arts */}
//         <Square className="h-[67.21px] absolute right-[12%] top-[12%] rotate-[20.64deg] -z-[1]" />
//         <Square size="h-[67.25px]" className="absolute left-[6%] top-[40%] rotate-[20.64deg] !bg-primary-orange/20 -z-[1]" />
//         <Square size="h-[62.86px]" className="absolute left-[30%] top-[80%] rotate-[20.64deg] !bg-primary-blue/20 -z-[1]" />
//       </div>
//     </BaseLayout>
//   )
// }

// export default Landings;
