"use client";
import { useRouter } from 'next/navigation';
import {Tabs, Tab, Input, Textarea, Link, Button, Select, SelectItem} from "@nextui-org/react";
import IPhone11 from '@/app/components/frames/IPhone11Frame';
import BasicComponent from './_components/basicInfoComponent';
import ImageComponent from './_components/imageComponent';
import PricingComponent from './_components/pricingComponent';
import MeasurementComponent from './_components/measurementComponent';
import CareAndPolicyComponent from './_components/careAndPolicyComponent';
import { ReactNode, useState } from 'react';
import { AddProductTabContentProps } from './_types';
export const runtime = "edge";

let tabs:{
  key: string,
  label: string,
  component: (props: AddProductTabContentProps) => ReactNode
}[] = [
    { key: '1', label: 'basic-info', component: BasicComponent },
    { key: '2', label: 'visuals', component: ImageComponent },
    { key: '4', label: 'Pricing', component: PricingComponent },
    { key: '3', label: 'Size', component: MeasurementComponent },
    { key: '5', label: 'Info', component: CareAndPolicyComponent },
];
function AddProductPage() {
  const router = useRouter()
  const [selected, setSelected] = useState(tabs[0].label);

  const inputclassNames = {
    label: "text-black font-bold",
    inputWrapper: [
      "bg-[#ECEFF4]",
      "hover:bg-[#d3d8e0]",
      "group-data-[focused=true]:bg-[#d3d8e0]",
    ]
  }

  const handleProceed = ({label, data}:{label:string, data:any}) => {
    // compare tabs with 'label' to know which tab to proceed to
    let currentIndex = tabs.findIndex(tab => tab.label === label);
    if(currentIndex < tabs.length-1){
      console.log('next tab')
      setSelected(tabs[currentIndex+1].label)
    }
  }

  return (
    <div className='flex-1 flex gap-7'>
      <section className='flex-1 flex flex-col gap-2 items-start'>
        <Button
          className='bg-primary-blue text-white rounded px-6'
          onClick={() => router.push('/application/product', { scroll: false })}
          >
          Back
        </Button>
        
        <div className='self-stretch flex-1 flex flex-col bg-white p-4 rounded-t'>
          <Tabs
            selectedKey={selected}
            onSelectionChange={(value) => setSelected(value.toString())}
            radius='sm'
            size='lg'
            key='light' variant='light' aria-label="Tabs variants"
            classNames={{
              tab: "w-[123px] bg-stone-300",
              cursor: "bg-primary-blue rounded-md",
              tabContent: "group-data-[selected=true]:text-white capitalize",
            }}>
            {tabs.map((tab, i)=>(
              <Tab key={tab.label} title={tab.label.replaceAll('-', ' ')}>
                <TabContentWrap>
                  <tab.component
                    tabName={tab.label}
                    onProceed={({label, data})=>handleProceed({label, data})}
                  />
                </TabContentWrap>
              </Tab>
            ))}
          </Tabs>
        </div>
      </section>

      <section className='bg-white p-10 rounded-t'>
        <IPhone11 className='w-80' containerPadding='p-[22px] py-[21px]'>
          <div className='h-full flex bg-primary-blue/10 mt-4'>
            {/* iframe src here is temporary */}
            <iframe
              id="inlineFrameExample"
              title="Inline Frame Example"
              className='w-full h-full'
              src="https://fast.com/">
            </iframe>
          </div>
        </IPhone11>
      </section>
    </div>
  )
}

const TabContentWrap = ({
  children,
}: {
  children: ReactNode
}) => {
  return (
    <div className='flex flex-col gap-4 mt-4'>
      {children}
    </div>
  ) 
}

export default AddProductPage;