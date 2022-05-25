import { MenuIcon } from '@heroicons/react/outline'
import Button from './button'
import Divider from './divider'
import Search from './search'

const Navbar = () => {
  return (
    <nav className="flex items-center gap-4 py-3">
      <div className="w-11 h-11">
        <img src="/src/assets/unsplash-logo.svg" alt="unsplash-logo" className="w-full h-full" />
      </div>
      <Search />
      <div className="hidden md:flex gap-4 items-center">
        <div className="flex items-center">
          <Button variant="clean">Explore</Button>
          <Button variant="clean">Avertise</Button>
          <Button variant="clean">Blog</Button>
        </div>
        <Divider />
        <div className="flex items-center">
          <Button variant="clean">Log in</Button>
          <div className="w-[1px] h-4 bg-neutral-400 rotate-[15deg] mx-1"></div>
          <Button variant="clean">Sign up</Button>
        </div>
        <Button variant="normal">Submit a photo</Button>
      </div>
      <MenuIcon className="w-6 h-6 cursor-pointer" />
    </nav>
  )
}

export default Navbar
