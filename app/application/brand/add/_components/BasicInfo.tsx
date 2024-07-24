import { Input, Textarea, Button, Select, SelectItem } from "@nextui-org/react";
import { ReactNode, useState } from 'react';
import { AddBrandTabContentProps } from "../_types";
import { AddBrandInputType, useAddBrandAction } from "../_actions/addBrandQuery";

type Props = AddBrandTabContentProps
const inputclassNames = {
  label: "text-black font-bold",
  inputWrapper: [
    "bg-[#ECEFF4]",
    "hover:bg-[#d3d8e0]",
    "group-data-[focused=true]:bg-[#d3d8e0]",
  ]
}

const BasicInfo = (props: Props) => {

  const { mutate, isError, isSuccess } = useAddBrandAction();

  const handleBasicInfoSubmit = (event: any) => {
    event.preventDefault()
    const name = event.target.elements.name.value
    const description = event.target.elements.description.value
    const genderType = event.target.elements.genderType.value
    const brandType = event.target.elements.brandType.value
    const demography = event.target.elements.demography.value
    const establishedDate = event.target.elements.establishedDate.value
    const locations = event.target.elements.locations.value

    const inputData: AddBrandInputType = {
      vendorId: "",
      name: name,
      description: description,
      brandType: brandType,
      genderType: genderType,
      demography: demography,
      establishedDate: establishedDate,
      locations: locations
    }

    mutate(inputData);

    props?.onProceed?.({ name: 'basic-info', data: {} })
  }

  return (
    <form onSubmit={handleBasicInfoSubmit} className="flex flex-col gap-4">
      <Input
        type="text"
        label="Name"
        name="name"
        labelPlacement='outside'
        placeholder=" "
        radius='sm'
        size='md'
        isRequired
        classNames={inputclassNames}
      />

      <div className='flex gap-5'>
        <Textarea
          type="text"
          label="Description"
          name="description"
          labelPlacement='outside'
          placeholder=" "
          radius='sm'
          size='md'
          isRequired
          classNames={inputclassNames}
        />

        <Select
          label="Brand Type"
          name="brandType"
          labelPlacement='outside'
          placeholder="Select option"
          radius='sm'
          size='md'
          isRequired
          classNames={inputclassNames}
        >
          <SelectItem key={1} value={1}>
            Appareal
          </SelectItem>
          <SelectItem key={2} value={2}>
            Jewery
          </SelectItem>
          <SelectItem key={3} value={3}>
            Accessories
          </SelectItem>
        </Select>
      </div>

      <div className='flex gap-5'>
        <Select
          label="Gender Type"
          name="genderType"
          labelPlacement='outside'
          placeholder="Select option"
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
        <Select
          label="Demography"
          name="demography"
          labelPlacement='outside'
          placeholder="Select option"
          radius='sm'
          size='md'
          isRequired
          classNames={inputclassNames}
        >
          <SelectItem key={1} value={1}>
            0 - 3
          </SelectItem>
          <SelectItem key={2} value={2}>
            3 - 10
          </SelectItem>
          <SelectItem key={3} value={3}>
            10 - 18
          </SelectItem>
          <SelectItem key={4} value={4}>
            18 - 35
          </SelectItem>
          <SelectItem key={5} value={5}>
            35 - 60
          </SelectItem>
          <SelectItem key={6} value={6}>
            60+
          </SelectItem>
        </Select>
      </div>

      <div className='flex gap-5'>
        <Input
          type="text"
          label="Established Date"
          name="establishedDate"
          labelPlacement='outside'
          placeholder=" "
          radius='sm'
          size='md'
          required
          classNames={inputclassNames}
        />

        <Select
          label="Locations"
          name="locations"
          labelPlacement='outside'
          placeholder="Select option"
          radius='sm'
          size='md'
          isRequired
          classNames={inputclassNames}
        >
          <SelectItem key={1} value={1}>
            Canada
          </SelectItem>
          <SelectItem key={2} value={2}>
            USA
          </SelectItem>
        </Select>
      </div>


      {/* <Input
        type="locations"
        label="Locations"
        labelPlacement='outside'
        placeholder=" "
        radius='sm'
        size='md'
        required
        classNames={inputclassNames}
      /> */}

      <Button type='submit' className='bg-primary-orange rounded px-6 mt-10 self-start'>
        Save & Proceed
      </Button>
    </form>
  )
}

export default BasicInfo