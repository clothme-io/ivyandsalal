import { Button, Input } from "@nextui-org/react";
import { ReactNode, useState } from 'react';
import { AddBrandTabContentProps } from "../_types";
import { useAddSocialAction } from "../_actions/addSocialsQuery";

type Props = AddBrandTabContentProps

const inputclassNames = {
  label: "text-black font-bold",
  inputWrapper: [
    "bg-[#ECEFF4]",
    "hover:bg-[#d3d8e0]",
    "group-data-[focused=true]:bg-[#d3d8e0]",
  ]
}

const Socials = (props: Props) => {

  const { mutate, isError, isSuccess } = useAddSocialAction();

  return (
    <form className="flex flex-col gap-4">
      <Input
        type="facebook"
        label="Facebook Account"
        labelPlacement='outside'
        placeholder=" "
        radius='sm'
        size='md'
        isRequired
        classNames={inputclassNames}
      />
      <Input
        type="instagram"
        label="Instagram account"
        labelPlacement='outside'
        placeholder=" "
        radius='sm'
        size='md'
        isRequired
        classNames={inputclassNames}
      />
      <Input
        type="linkedin"
        label="Linkedin account"
        labelPlacement='outside'
        placeholder=" "
        radius='sm'
        size='md'
        isRequired
        classNames={inputclassNames}
      />
      <Button type='submit' className='bg-primary-orange rounded px-6 mt-10 self-start'>
        Save & Proceed
      </Button>
    </form>
  )
}

export default Socials