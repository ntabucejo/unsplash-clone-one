import Search from './search'

const Hero = () => {
  return (
    <div className="relative w-screen h-[300px] md:h-[600px] overflow-hidden -mx-4">
      <div className="absolute w-full h-full z-10 grid items-center px-4 md:px-40">
        <div className="max-w-4xl relative md:left-1/2 md:-translate-x-1/2 space-y-2 md:space-y-6 mb-14 md:mb-0">
          <h1 className="text-2xl md:text-5xl font-bold text-white">Unsplash</h1>
          <div className="text-white text-sm md:text-lg md:font-semibold">
            <p>The internet’s source of freely-usable images.</p>
            <p>Powered by creators everywhere.</p>
          </div>
          <div className="space-y-4 hidden md:block">
            <Search variant="hero" />
            <p className="text-white">Trending: FlowerWallpapers,Backgrounds, Happy, Love</p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 md:left-auto md:right-0 py-4">
          <img className="h-8 md:h-10 mr-auto md:mr-0 md:ml-auto" src="/src/assets/squarespace-logo.png" alt="squarespace" />
          <p className="text-white mx-3">Start your website with Squarespace today.</p>
        </div>
      </div>
      <img
        className="h-full object-cover w-full bg-bottom brightness-50"
        src="/src/assets/hero-background.jpg "
        alt="hero"
      />
    </div>
  )
}

export default Hero
