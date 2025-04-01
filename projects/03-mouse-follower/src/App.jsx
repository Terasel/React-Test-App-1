import { useEffect, useState } from "react"

function App() {
  const [enabled, setEnabled] = useState(false)
  useEffect(() => {
    console.log('effect')
  })

  return (
    <>
      <h3>Project 3</h3>
      <button onClick={() => setEnabled(!enabled)}>
        {enabled ? 'Deactivate' : 'Activate'} follow pointer
      </button>
    </>
  )
}

export default App
