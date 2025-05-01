import './App.css'
import { useEffect, useState } from 'react'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'

function App() {
  const { movies } = useMovies()
  const [query, setQuery] = useState('')
  const [error, setError] = useState(null)


  const handleSubmit = (e) => {
    e.preventDefault()
    console.log({ query })
  }

  const handleChange = (e) => {
    const newQuery = e.target.value
    if (newQuery.startsWith(' ')) return
    setQuery(e.target.value)
  }

  useEffect(() => {
    if (query === '') {
      setError('You cannot search for a movie with no name')
      return
    }

    if (query.match(/^\d+$/)) {
      setError('You cannot search for a movie with only a number for a name')
      return
    }

    if (query.length < 3) {
      setError('A search must have at least 3 characters')
      return
    }

    setError(null)
  }, [query])

  return (
    <div className='page'>
      <header>
        <h1>Movie search</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input style={{
            border: '1px solid transparent',
            borderColor: error ? 'red' : 'transparent'
          }}
            onChange={handleChange} value={query} name='query' type="text"
            placeholder='Avengers, Star Wars, The Matrix...' />
          <button type='submit'>Search</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </header>

      <main>
        <Movies movies={movies} />
      </main>
    </div >
  )
}

export default App
