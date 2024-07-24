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

const MeasurementComponent = (props: Props) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    props?.onProceed?.({ label: 'size', data: {} })
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <Select
        label="Type"
        labelPlacement='outside'
        placeholder="Select type"
        radius='sm'
        size='md'
        isRequired
        classNames={inputclassNames}
      >
        <SelectItem key={1} value={1}>
          Top
        </SelectItem>
        <SelectItem key={2} value={2}>
          Gawn
        </SelectItem>
        <SelectItem key={3} value={3}>
          Pant
        </SelectItem>
        <SelectItem key={4} value={4}>
          Short
        </SelectItem>
        <SelectItem key={5} value={5}>
          Skirt
        </SelectItem>
      </Select>
      <Input
        type="name"
        label="Name"
        labelPlacement='outside'
        placeholder=" "
        radius='sm'
        size='md'
        isRequired
        classNames={inputclassNames}
      />
      <Select
        label="Gender"
        labelPlacement='outside'
        placeholder="Select gender"
        radius='sm'
        size='md'
        isRequired
        classNames={inputclassNames}
      >
        <SelectItem key={1} value={1}>
          Male
        </SelectItem>
        <SelectItem key={2} value={2}>
          Female
        </SelectItem>
        <SelectItem key={3} value={3}>
          Unisex
        </SelectItem>
      </Select>

      <Button type='submit' className='bg-primary-orange rounded px-6 mt-10 self-start'>
        Save & Proceed
      </Button>
    </form>
  )
}

export default MeasurementComponent