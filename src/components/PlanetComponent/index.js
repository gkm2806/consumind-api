import React, {useEffect, useState} from "react"

export const PlanetComponent = () => {
  const [planet, setPlanet] = useState("")

  useEffect(() => {
    setPlanet("Marte")
  })
  
  return (
    <div>
      <h2> Você está em {planet}! </h2>
    </div>
  )

}