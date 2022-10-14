import Slider from 'react-slick'
import PlanetItem from '../PlanetItem'

import './index.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const PlanetsSlider = props => {
  const {planetsList} = props
  const settings = {
    className: 'slider-container',
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <div className="app-container" testid="planets">
      <h1 className="heading">PLANETS</h1>
      <Slider {...settings}>
        {planetsList.map(eachPlanet => (
          <PlanetItem key={eachPlanet.id} planetDetails={eachPlanet} />
        ))}
      </Slider>
    </div>
  )
}

export default PlanetsSlider
