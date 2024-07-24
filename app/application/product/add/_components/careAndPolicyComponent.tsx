import {Input, Textarea, Button, Select, SelectItem} from "@nextui-org/react";
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

const CareAndPolicyComponent = (props: Props) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    props?.onProceed?.({label: 'info', data: {}})
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <Textarea
        label="Care"
        labelPlacement='outside'
        placeholder=" "
        radius='sm'
        size='md'
        isRequired
        classNames={inputclassNames}
      />
      <Textarea
        label="Return Policy"
        labelPlacement='outside'
        placeholder=" "
        radius='sm'
        size='md'
        isRequired
        classNames={inputclassNames}
      />
      <Textarea
        label="Refund Policy"
        labelPlacement='outside'
        placeholder=" "
        radius='sm'
        size='md'
        isRequired
        classNames={inputclassNames}
      />

      <Button type='submit' className='bg-primary-orange rounded px-6 mt-10 self-start'>
        Save
      </Button>
    </form>
  )
}

export default CareAndPolicyComponent