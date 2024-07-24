import Image from 'next/image';

export const runtime = "edge";

const cardList = [
  {
    image: '/images/8a4fbe00c70e82765b9cd0851e404557_iey0bu.jpg',
    title: 'Size Generation',
    description: 'Sizes for your kids’ clothing will be generated from 2 photos. You will also be able to manually input your kids’ sizes.'
  },
  {
    image: '/images/3b8173b163714d0b70255cd86fb0973c_fqycfc.jpg',
    title: 'Personalized Experience',
    description: 'Each kid will see only what fits based on the their style. You can personalized color, fashion style, how product fit the child and our internal styling system will always try to advise on styles.'
  },
  {
    image: '/images/381626cdfdf940bde632f95c0b7fa415_ub7ai3.jpg',
    title: 'Competitive Prices',
    description: 'Focus is what each kids likes and what fits their style. You can personalized color, fashion style, how product fit the child and our internal styling system will always try to advise on styles.'
  },
  {
    image: '/images/3b8173b163714d0b70255cd86fb0973c_fqycfc.jpg',
    title: 'Sell Unused Clothes',
    description: 'Each kid will see only what fits based on the their style. You can personalized color, fashion style, how product fit the child and our internal styling system will always try to advise on styles.'
  },
  {
    image: '/images/3b8173b163714d0b70255cd86fb0973c_fqycfc.jpg',
    title: '24/7 Customer Support',
    description: 'Each kid will see only what fits based on the their style. You can personalized color, fashion style, how product fit the child and our internal styling system will always try to advise on styles.'
  },
  {
    image: '/images/3b8173b163714d0b70255cd86fb0973c_fqycfc.jpg',
    title: 'Community',
    description: 'Each kid will see only what fits based on the their style. You can personalized color, fashion style, how product fit the child and our internal styling system will always try to advise on styles.'
  },
];


const FeaturesSection = () => {
  return (
    <section className="min-h-[100svh] overflow-hidden max-md:bg-primary-blue/15 bg-[#F8F7F7]">
      <div className='md:hidden text-center pt-6'>
        <span className='text-xs font-bold text-black/40'>Be Expressive</span>
        <h1 className='text-3xl font-bold'>Amazing Features</h1>
      </div>

      <div
        className="px-6 md:px-10 pb-20 max-md:pt-7 pt-16 max-w-7xl mx-auto relative
        flex items-center justify-center">
        <div className='grid md:grid-cols-3 gap-x-[42px] gap-y-[66px]'>
          {cardList.map((card) => <Card
            key={card.title}
            image={card.image}
            title={card.title}
            description={card.description}
          />)}
        </div>
      </div>
    </section>
  )
}

const Card = ({ title, description, image }: { title: string, description: string, image: string }) => {
  return (
    <div className="md:h-[492px] lg:w-[384px] gap-4 rounded-[10px] bg-white overflow-hidden">
      <div className="h-[259px] rounded-b-[10px] overflow-hidden relative">
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className='px-[30px] max-md:pb-[30px] mt-[31px] font-semibold text-black space-y-4'>
        <h3 className="text-center text-xl">{title}</h3>
        <p className="text-left">{description}</p>
      </div>
    </div>
  )
}

export default FeaturesSection