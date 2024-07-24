import Link from 'next/link'

type Props = {}

const Navbar = ({ }: Props) => {
  return (
    <nav className='flex text-xl gap-[180px]'>
      <ul className='flex gap-10'>
        <li><Link href="#">About</Link></li>
        <li><Link href="#">Look Book</Link></li>
        <li><Link href="#">Newsroom</Link></li>
        <li><Link href="#">For Brands</Link></li>
      </ul>

      <div className='flex gap-5'>
        <Link href="/login">LogIn</Link>
        <Link href="/register">SignUp</Link>
      </div>
    </nav >
  )
}

export default Navbar