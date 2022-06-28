import { useState } from "react";

const DisplayColour = () => {
  // because the value from the fetch request isn't available
  // when we first load the component, we will store the output
  // of the fetch request in state
  const [colorName, setName] = useState('Loading...')
  const [hexCode, setHexCode] = useState('Loading...')

  const getColour = async () => {
      const response = await fetch('https://reqres.in/api/color/3?delay=2')
      const data = await response.json()
      setName(data.data.name)
      setHexCode(data.data.color)
  }
  getColour()

  return <div>
      <h1>{colorName}</h1>
      <h2>{hexCode}</h2>
  </div>
}

export default DisplayColour;