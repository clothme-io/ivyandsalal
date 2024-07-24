'use client'

import BrandAndCustomersSection from "./_components/BrandAndCustomersSection"
import CommunitySection from "./_components/CommunitySection"
import FirstSection from "./_components/FirstSection"
import SecondSection from "./_components/SecondSection"
import ThirdSection from "./_components/ThirdSection"

type Props = {}

const Pages = ({ }: Props) => {
  return (
    <div>
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <CommunitySection />
      <BrandAndCustomersSection />
    </div>
  )
}
export default Pages