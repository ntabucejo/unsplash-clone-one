import Explorer from './Explorer'
import Navbar from './navbar'

const Header = () => {
  return (
    <header className='sticky top-0 z-20 bg-white shadow-md'>
      <div className="px-4 text-neutral-500">
        <Navbar />
        <Explorer />
      </div>
    </header>
  )
}

export default Header
