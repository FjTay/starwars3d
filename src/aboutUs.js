import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Person from './person'
import { BrowserRouter as Route, Routes} from "react-router-dom";

const AboutUs = (props) => {

    return (
      <div className="window">
          <div>About Us</div>
          <li><Link to="personne1">Personne 1</Link></li>
          <li><Link to="personne2">Personne 2</Link></li>
          <li><Link to="personne3">Personne 3</Link></li>
      </div>)
}

export default AboutUs