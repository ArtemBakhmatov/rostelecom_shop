import Link from 'next/link'

const Logo = () => (
  <Link className='logo' href='/'>
    <img src='./img/logo.svg' alt='Rostelecom Logo' className='logo_img' />
  </Link>
)

export default Logo
