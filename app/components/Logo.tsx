type Props = {
  size?: string
  space?: string
}

const Logo = ({ size='[&>*]:h-[22.43px]', space='-space-x-2' }: Props) => {
  return (
    <div
      className={`flex ${size} [&>*]:aspect-square
      [&>*]:rounded-full ${space}`}>
      <span className='bg-primary-orange'></span>
      <span className='bg-primary-yellow'></span>
      <span className='bg-primary-blue'></span>
    </div>
  )
}
export default Logo