import Button from './button'
import Divider from './divider'

const Explorer = () => {
  return (
    <section className="flex gap-4 items-center group">
      <Button variant="explorer" focused>
        Editorial
      </Button>
      <Divider />
      <div className="flex overflow-x-scroll scrollbar-hide">
        <Button variant="explorer">Editorial</Button>
        <Button variant="explorer">Digital Nomad</Button>
        <Button variant="explorer">Current Events</Button>
        <Button variant="explorer">Wallpapers</Button>
        <Button variant="explorer">3D Renders</Button>
        <Button variant="explorer">Textures and Patterns </Button>
        <Button variant="explorer">Experimental</Button>
        <Button variant="explorer">Architecture</Button>
        <Button variant="explorer">Nature</Button>
        <Button variant="explorer">Business</Button>
        <Button variant="explorer">Fashion</Button>
        <Button variant="explorer">Film</Button>
        <Button variant="explorer">Food and Drink</Button>
        <Button variant="explorer">Healt and Wellness</Button>
        <Button variant="explorer">People</Button>
        <Button variant="explorer">Interiors</Button>
        <Button variant="explorer">Street Photography</Button>
        <Button variant="explorer">Travel</Button>
        <Button variant="explorer">Animals</Button>
        <Button variant="explorer">Spirituality</Button>
        <Button variant="explorer">Art and Culture</Button>
        <Button variant="explorer">History</Button>
        <Button variant="explorer">Athletics</Button>
      </div>
    </section>
  )
}

export default Explorer
