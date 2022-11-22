import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import fetchData from './canvas/fetchData'
import planets from './planets'
import { Link } from 'react-router-dom'
import { initializeFirestore } from 'firebase/firestore'

const PlanetPopUp = ({ initial }) => {

    const {planet}= useParams()
    const [planetInfo, setPlanetInfo] = useState(false)

    console.log(initial[planet])

    return (
        <>
            <div>
                <div className="popup">
                    informations sur {planet}
                    <Link to={`/planets/${planet}/details`}>
                        <button>See {planet} details</button>
                    </Link>
                </div>
            </div>
            {console.log("render du Planet Pop Up")}
        </>
    )
}

export default PlanetPopUp