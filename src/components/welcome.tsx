import Search from './search'

const Welcome = () => {
  return (
    <div className="max-w-4xl relative md:left-1/2 md:-translate-x-1/2 space-y-2 md:space-y-6 mb-14 md:mb-0">
      <h1 className="text-2xl md:text-5xl font-bold text-white">Unsplash</h1>
      <div className="text-white text-sm md:text-lg md:font-semibold">
        <p>
          The internet’s source of{' '}
          <span className="underline font-light cursor-pointer text-neutral-200 hover:text-white">
            freely-usable images.
          </span>
        </p>
        <p>Powered by creators everywhere.</p>
      </div>
      <div className="space-y-4 hidden md:block">
        <Search variant="hero" />
        <ul className="text-neutral-200 flex gap-2">
          <li className="hover:text-white">
            <a href="#">Trending</a>
          </li>
          <li className="hover:text-white">
            <a href="#">Flower</a>
          </li>
          <li className="hover:text-white">
            <a href="#">Wallpapers</a>
          </li>
          <li className="hover:text-white">
            <a href="#">Backgrounds</a>
          </li>
          <li className="hover:text-white">
            <a href="#">Happy</a>
          </li>
          <li className="hover:text-white">
            <a href="#">Love</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Welcome
