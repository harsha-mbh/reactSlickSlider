import Slider from 'react-slick'
import PlanetItem from '../PlanetItem'

import './index.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const PlanetsSlider = props => {
  const {planetsList} = props
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <div className="app-container" testid="planets">
      <Slider {...settings}>
        <ul className="planet-details-container">
          {planetsList.map(eachPlanet => (
            <PlanetItem key={eachPlanet.id} planetDetails={eachPlanet} />
          ))}
        </ul>
      </Slider>
    </div>
  )
}

export default PlanetsSlider
