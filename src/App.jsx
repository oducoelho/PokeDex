import PokeDex from './images/pokedex.png'
import fetchData from './services/api'
import { useState } from 'react'
import initialData from './helpers/initialData'
import './App.css'

const App = () => {
  const [pokemon, setPokemon] = useState('')
  const [data, setData] = useState(initialData)

  
  const handleSubmit = (e) => {
    e.preventDefault()

    fetchData(pokemon).then((response) => {
      setData(response)
    })
  }

  const handlePrev = (data) => {
      const umAtras = data.id
      pokemon = umAtras
  }
  const handleNext = () => {
      console.log('mais um')
  }

  return (
    <main>
      <img 
        src={data['sprites']['versions']['generation-v']['black-white']['animated']['front_default']}  
        className='pokemon__image' 
      />

      <h1 className="pokemon__data">
        <span className='pokemon__number' id='//id que vem da api'>{data.id}</span>-
        <span className="pokemon__name">{data.name}</span>
      </h1>
      <div>
        <form className='form' onSubmit={handleSubmit}>
          <input
            type="search"
            className='input__search'
            placeholder='Name or Number'
            required
            value={pokemon}
            onChange={({ target: { value } }) => setPokemon(value)}
          />
          <div className='buttons'>
            <button 
              onClick={handlePrev}
              className='button btn-prev'
            >
              Prev
            </button>
            <button 
              onClick={handleNext}
              className='button btn-next'
            >
              Next
            </button>
          </div>
        </form>
      </div>
      <img src={PokeDex} alt="Pokedex" className='pokedex' />
    </main>
  )
}
export default App
