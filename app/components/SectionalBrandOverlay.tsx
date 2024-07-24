import React from 'react';
import Logo from './Logo';

export const runtime = "edge";

type Props = {
  base?: boolean
  /** @type {string: tailwind class, default: md:gap-[333px] } */
  gap?: string
  /** @type {string: tailwind class} */
  className?: string
}
const SectionalBrandOverlay = ({ base, className = '', gap = 'md:gap-[333px]' }: Props) => {
  return (
    <div className={`flex max-md:justify-between items-center ${!!base ? gap : 'justify-between px-20'} ${className}`}>
      <span className='!font-extrabold text-[25px]'>ClothME</span>
      <Logo />
    </div>
  )
}

export default SectionalBrandOverlay