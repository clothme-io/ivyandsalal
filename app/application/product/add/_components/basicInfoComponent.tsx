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

const BasicComponent = (props: Props) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    props?.onProceed?.({label: 'basic-info', data: {}})
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
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

      <Textarea
        label="Description"
        labelPlacement='outside'
        placeholder=" "
        radius='sm'
        size='md'
        isRequired
        classNames={inputclassNames}
      />

      <Select
        label="Gender Type"
        labelPlacement='outside'
        placeholder="Select option"
        radius='sm'
        size='md'
        isRequired
        classNames={inputclassNames}
      >
        <SelectItem key={1} value={1}>
          Option
        </SelectItem>
      </Select>

      <Select
        label="Colors"
        labelPlacement='outside'
        placeholder="Select option"
        radius='sm'
        size='md'
        isRequired
        classNames={inputclassNames}
      >
        <SelectItem key={1} value={1}>
          Option
        </SelectItem>
      </Select>

      <Select
        label="Type"
        labelPlacement='outside'
        placeholder="Select option"
        radius='sm'
        size='md'
        isRequired
        classNames={inputclassNames}
      >
        <SelectItem key={1} value={1}>
          Option
        </SelectItem>
      </Select>

      <Select
        label="Style"
        labelPlacement='outside'
        placeholder="Select option"
        radius='sm'
        size='md'
        isRequired
        classNames={inputclassNames}
      >
        <SelectItem key={1} value={1}>
          Option
        </SelectItem>
      </Select>

      <Button type='submit' className='bg-primary-orange rounded px-6 mt-10 self-start'>
        Save & Proceed
      </Button>
    </form>
  )
}

export default BasicComponent