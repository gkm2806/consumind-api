import React, {useEffect, useState} from "react"
import axios from "axios"

export const PlanetComponent = () => {
  const [planet, setPlanet] = useState("")

  useEffect(() => {
    axios.get('http://swapi.dev/api/planets/1/').then((res) => {
      setPlanet(res.data.name)
    })
  }, [])

  return (
    <div>
      <h2> Você está em {planet}! </h2>
    </div>
  )

}