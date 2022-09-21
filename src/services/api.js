const fetchData = async(pokemon) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`

  const fetchResponse = await fetch(url)
  const data = await fetchResponse.json()
  
  return data

}

export default fetchData
