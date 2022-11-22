import React from 'react'
import { useParams } from 'react-router-dom'

const Person = () => {

    const {person}= useParams()

    return <div  className="window">bonjour, je suis {person}</div>
}

export default Person