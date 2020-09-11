import React, {useEffect, useState} from "react"
import axios from "axios"

export const PlanetComponent = () => {
  const [planet, setPlanet] = useState({})

  useEffect(() => {
    axios.get('http://swapi.dev/api/planets/1/').then((res) => {
      setPlanet(res.data)
    })
  }, [])

  return (
    <div>
      <h2> Você está em {planet.name}! </h2>
      <div> População: {planet.population}</div>
      <div> Duração do dia: {planet.rotation_period}</div>
      <div> Duração do ano: {planet.orbital_period}</div>
    </div>
  )
}