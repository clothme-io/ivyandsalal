import Image from 'next/image';
import Circle from "@/app/components/artifacts/Circle";

export const runtime = "edge";

const HowItWorksSection = ({ className }: { className?: string }) => {
  return (
    <section className={`min-h-[100svh] overflow-hidden ${className}`}>
      <div
        className="px-6 md:px-10 pb-20 pt-16 max-w-7xl mx-auto min-h-[100svh] relative">
        <div className="text-center space-y-4">
          <h1 className="text-[30px] md:text-[40px] font-bold text-black">How it Works</h1>
          <p className="text-lg md:text-xl text-[#00000099]">Let them be more, let us help them express themselves and look Good.</p>
        </div>

        <div className='mt-[76px] max-w-5xl mx-auto flex flex-wrap justify-center max-md:gap-[57px] md:gap-x-[114px]'>
          <Step
            step={1}
            image='/images/5f779a76defa0bea1f3d2fc315f0acd8_ivvrnn.png'
            title='Generate Your Kids’ Measurement'
            description='Start by generating sizes for each kids. You do from 2 photos or manually entering their shirt or pant sizes'
          />
          <Step
            step={2}
            image='/images/026d99290ed800cfc33279c0bf432614_bqrylk.jpg'
            title='Select Brand & Style For Each Kid'
            description='Personalized experience for each kid. You only see products that fits each kid based on size and style.'
            className='!bg-primary-orange/30 [&_.circle]:!bg-primary-orange [&_.circle]:left-[76%]'
          />
          <Step
            step={3}
            image='/images/c7ec4d057fef5b9dca12c8b5e1dcb8de_fudgc4.png'
            title='Unbeatable Customer  Relations'
            description='Shop with competitive prices, home delivery or in-store pickup and clearly defined return policies.'
            className='lg:ml-[56px] md:mt-[89px] self-start !bg-primary-blue/30
            [&_.circle]:!bg-primary-blue [&_.circle]:left-[70%]'
          />
          <Circle
            size="h-[341px]"
            className="max-md:hidden mt-[28px] !bg-primary-orange/10 relative"
            imageUrl="/images/09a138508d545ed4b58d390465dcb43a_j05q8n.jpg"
          />
        </div>
      </div>
    </section>
  )
}

export default HowItWorksSection

const Step = (
  { step, title, description, className = '', image }:
    { step: number, title: string, description: string, className?: string, image: string }
) => {
  return (
    <div
      className={`flex justify-center rounded-[10px] p-7
      min-h-[234px] w-[406px] bg-primary-yellow/30 relative ${className}`}>
      <div
        className='circle h-[47px] aspect-square rounded-full bg-primary-yellow
        absolute left-[20%] -top-[23.5px] text-white font-semibold text-xl
        flex justify-center items-center'>
        {step}
      </div>
      <div className='flex flex-col items-center'>
        <div className='w-[239px] h-[74px] relative'>
          <Image
            src={image}
            alt="step image"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            className="image"
          />
        </div>
        <h3 className='text-lg font-semibold mt-4'>{title}</h3>
        <p className='text-xs font-bold text-[#00000099] mt-2'>{description}</p>
      </div>
    </div>
  )
}