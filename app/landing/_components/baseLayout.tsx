"use client";

import React from 'react'
import Image from 'next/image'
import SectionalBrandOverlay from '@/app/components/SectionalBrandOverlay'

export const runtime = "edge";

type Props = {
    name?: string,
    children?: React.ReactNode
}


const BaseLayout = ({ children, name }: Props) => {
    const image = name === '1' ?
        '/images/3e6a634362098f0630fe36e8858d126d.jpeg' :
        '/images/fd369907272dbb4f2fd4d044cd53f894.jpeg'
    return (
        <div className='w-full flex'>
            <div className='h-svh w-full flex p-1 md:p-2 max-w-7xl mx-auto relative z-10'>
                <div className='flex-1'></div>
                <div className='flex-1 overflow-y-auto'>
                    {children}
                </div>
            </div>

            <div
                className='min-h-svh w-full flex mx-auto absolute inset-0'>
                <div className='flex-1 relative m-1 md:m-2'>
                    <SectionalBrandOverlay
                        className="absolute inset-x-0 top-0 px-[70px] pt-[26px] z-10"
                    />
                    <Image
                        src={image}
                        alt="Lady with dress"
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center"
                    />
                </div>
                <div className='flex-1 relative'>

                    <div className="flex absolute bottom-0 right-0">
                        <span className="h-[17px] md:h-[34px] max-md:w-full md:min-w-[173px] bg-primary-orange"></span>
                        <span className="h-[17px] md:h-[34px] max-md:w-full md:min-w-[133px] bg-primary-yellow"></span>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default BaseLayout;