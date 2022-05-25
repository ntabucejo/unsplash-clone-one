import Explorer from './Explorer'
import Navbar from './navbar'

const Header = () => {
  return (
    <header>
      <div className="px-4 text-neutral-500">
        <Navbar />
        <Explorer />
      </div>
    </header>
  )
}

export default Header
