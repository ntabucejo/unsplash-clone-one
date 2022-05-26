import Welcome from './welcome'
import hero from '../assets/images/hero-background.jpg'
import squarespace from '../assets/images/squarespace-logo.png'

const Hero = () => {
  return (
    <div className="relative w-screen h-[300px] md:h-[600px] overflow-hidden -mx-4">
      <div className="absolute w-full h-full z-10 grid items-center px-4 md:px-40">
        <Welcome />
        <div className="absolute bottom-0 left-0 md:left-auto md:right-0 py-4 mr-5">
          <img className="h-8 md:h-10 mr-auto md:mr-0 md:ml-auto" src={squarespace} alt="squarespace" />
          <p className="text-white mx-3 text-xs">Start your website with Squarespace today.</p>
        </div>
      </div>
      <img className="h-full object-cover w-full bg-bottom brightness-50" src={hero} alt="hero" />
    </div>
  )
}

export default Hero
