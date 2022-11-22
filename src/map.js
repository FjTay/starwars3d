import React, { memo } from 'react'
import { useParams } from 'react-router-dom'
import Canvas from './canvas'

const Map = ({setCurrentPlanet, setPlanetOnHover, planetOnHover}) => {

    return (
        <>
            {console.log("render de la map")}
            <div id="map">
                <Canvas setCurrentPlanet={setCurrentPlanet} ></Canvas>
            </div>
        </>
    )
}

export default memo(Map)

