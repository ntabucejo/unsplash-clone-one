import Explorer from './Explorer'
import Navbar from './navbar'

const Header = () => {
  return (
    <header>
      <div className="px-5 text-neutral-500 space-y-2">
        <Navbar />
        <Explorer />
      </div>
    </header>
  )
}

export default Header
