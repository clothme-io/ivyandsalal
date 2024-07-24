import { Input, Textarea, Button, Select, SelectItem } from "@nextui-org/react";
import { ReactNode, useState } from 'react';
import { AddProductTabContentProps } from "../_types";

type Props = AddProductTabContentProps
const inputclassNames = {
  label: "text-black font-bold",
  inputWrapper: [
    "bg-[#ECEFF4]",
    "hover:bg-[#d3d8e0]",
    "group-data-[focused=true]:bg-[#d3d8e0]",
  ]
}

const PricingComponent = (props: Props) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    props?.onProceed?.({ label: 'pricing', data: {} })
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <Select
        label="Currency"
        labelPlacement='outside'
        placeholder="Select currency"
        radius='sm'
        size='md'
        isRequired
        classNames={inputclassNames}
      >
        <SelectItem key={1} value={1}>
          USD
        </SelectItem>
        <SelectItem key={2} value={2}>
          GBP
        </SelectItem>
        <SelectItem key={3} value={3}>
          EUR
        </SelectItem>
        <SelectItem key={4} value={4}>
          CAD
        </SelectItem>
      </Select>
      <Input
        type="number"
        label="Price"
        placeholder="0.00"
        labelPlacement="outside"
        endContent={
          <div className="pointer-events-none flex items-center">
            <span className="text-default-400 text-small">$</span>
          </div>
        }
      />
      <Input
        type="number"
        label="Sales Tax"
        placeholder="0.00"
        labelPlacement="outside"
        endContent={
          <div className="pointer-events-none flex items-center">
            <span className="text-default-400 text-small">%</span>
          </div>
        }
      />

      <Button type='submit' className='bg-primary-orange rounded px-6 mt-10 self-start'>
        Save & Proceed
      </Button>
    </form>
  )
}

export default PricingComponent