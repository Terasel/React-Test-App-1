import './App.css'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'

function App() {
  const { movies } = useMovies()

  const handleSubmit = (e) => {
    e.preventDefault()
    const fields = new window.FormData(e.target)
    const query = fields.get('query')
    console.log(query)
  }

  return (
    <div className='page'>
      <header>
        <h1>Movie search</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input name='query' type="text" placeholder='Avengers, Star Wars, The Matrix...' />
          <button type='submit'>Search</button>
        </form>
      </header>

      <main>
        <Movies movies={movies} />
      </main>
    </div >
  )
}

export default App
