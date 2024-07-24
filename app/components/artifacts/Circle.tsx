import Image from 'next/image';
import { motion } from "framer-motion";

export const runtime = "edge";

const Circle = (
  { size = 'h-[152px]', className = '', imageUrl }:
    { size?: string, className?: string, imageUrl?: string }
) => {
  const delay = Math.random() * 3
  const duration = Math.ceil((3 + Math.random()) * 2)

  return (
    <motion.div
      data-delay={delay}
      animate={{ y: [0, 10, 0] }}
      transition={{ duration, repeat: Infinity, delay }}
      className={`flex justify-center items-center
      rounded-full ${size} aspect-square select-none ${className}`}>
      {imageUrl && <Image
        src={imageUrl}
        alt="Circle Image"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        className="rounded-full"
      />}
    </motion.div>
  )
}

export default Circle