import './App.css'

function App() {
  return (
    <div className='page'>
      <header>
        <h1>Movie search</h1>
        <form className='form'>
          <input type="text" placeholder='Avengers, Star Wars, The Matrix...' />
          <button type='submit'>Search</button>
        </form>
      </header>

      <main>
        Results go here
      </main>
    </div>
  )
}

export default App
