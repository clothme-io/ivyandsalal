
export const runtime = "edge";

const Square = (
  { size = 'h-[80.82px]', className = '' }:
    { size?: string, className?: string }
) => {
  return (
    <div
      className={`flex justify-center items-center rotate-[-20.64deg]
      ${size} bg-primary-yellow/20 aspect-square select-none ${className}`}>
    </div>
  )
}

export default Square