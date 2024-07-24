import {Button, Input} from "@nextui-org/react";
import { ReactNode, useState } from 'react';
import { AddBrandTabContentProps } from "../_types";

type Props = AddBrandTabContentProps

const inputclassNames = {
  label: "text-black font-bold",
  inputWrapper: [
    "bg-[#ECEFF4]",
    "hover:bg-[#d3d8e0]",
    "group-data-[focused=true]:bg-[#d3d8e0]",
  ]
}

const Contact = (props: Props) => {
  return (
    <form className="flex flex-col gap-4">
      <div className='flex gap-5'>
        <Input
          type="firstname"
          label="First Name"
          labelPlacement='outside'
          placeholder=" "
          radius='sm'
          size='md'
          classNames={inputclassNames}
        />
        <Input
          type="lastname"
          label="Last Name"
          labelPlacement='outside'
          placeholder=" "
          radius='sm'
          size='md'
          classNames={inputclassNames}
        />
      </div>
      <Input
        type="email"
        label="Email"
        labelPlacement='outside'
        placeholder=" "
        radius='sm'
        size='md'
        required
        classNames={inputclassNames}
      />
      <Input
        type="phone"
        label="Phone Number"
        labelPlacement='outside'
        placeholder=" "
        radius='sm'
        size='md'
        required
        classNames={inputclassNames}
      />
      <Input
        type="position"
        label="Position"
        labelPlacement='outside'
        placeholder=" "
        radius='sm'
        size='md'
        classNames={inputclassNames}
      />
      
      <Button type='submit' className='bg-primary-orange rounded px-6 mt-10 self-start'>
        Save & Proceed
      </Button>
    </form>
  )
}

export default Contact