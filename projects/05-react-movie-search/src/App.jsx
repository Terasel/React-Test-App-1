import './App.css'
import { useEffect, useState, useRef } from 'react'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'

function useSearch() {
  const [search, updateSearch] = useState('')
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true)

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === ''
      return
    }

    if (search === '') {
      setError('You cannot search for a movie with no name')
      return
    }

    if (search.match(/^\d+$/)) {
      setError('You cannot search for a movie with only a number for a name')
      return
    }

    if (search.length < 3) {
      setError('A search must have at least 3 characters')
      return
    }

    setError(null)
  }, [search])

  return { search, updateSearch, error }
}

function App() {
  const [sort, setSort] = useState(false)
  const { search, updateSearch, error } = useSearch()
  const { movies, loading, getMovies } = useMovies({ search, sort })

  const handleSubmit = (e) => {
    e.preventDefault()
    getMovies()
  }

  const handleSort = () => {
    setSort(!sort)
  }

  const handleChange = (e) => {
    updateSearch(e.target.value)
  }

  return (
    <div className='page'>
      <header>
        <h1>Movie search</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input style={{
            border: '1px solid transparent',
            borderColor: error ? 'red' : 'transparent'
          }}
            onChange={handleChange} value={search} name='query' type="text"
            placeholder='Avengers, Star Wars, The Matrix...' />
          <input type="checkbox" onChange={handleSort} checked={sort} />
          <button type='submit'>Search</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </header>

      <main>
        {
          loading ? <p>Loading...</p> : <Movies movies={movies} />
        }
      </main>
    </div >
  )
}

export default App
