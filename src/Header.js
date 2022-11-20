import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAirbnb} from '@fortawesome/free-brands-svg-icons'

const Header = () => {
  return (
    <nav><FontAwesomeIcon icon={faAirbnb} /> AirBnb</nav>
  )
}

export default Header