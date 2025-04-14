import { useEffect, useState } from 'react'
import './App.css'
import { getRandomFact } from './services/facts';

// const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWords}?
// size=50&color=red&json=true`

export function App() {
    const [fact, setFact] = useState()
    const [imageUrl, setimageUrl] = useState()



    useEffect(() => {
        getRandomFact().then(setFact)
    }, [])

    useEffect(() => {
        if (!fact) return

        const firstWords = fact.split(' ', 3).join(' ')

        fetch(`https://cataas.com/cat/says/${firstWords}?
            size=50&color=red&json=true`)
            .then(res => res.json())
            .then(response => {
                const { url } = response
                setimageUrl(url)
            })
    }, [fact])

    const handleClick = async () => {
        const newFact = await getRandomFact()
        setFact(newFact)
    }

    return (
        <main>
            <h1>Kitten app</h1>

            <button onClick={handleClick}>Get new fact</button>

            <section>
                {fact && <p>{fact}</p>}
                {imageUrl && <img src={imageUrl} alt={`Image extracted using the first 
                three words for ${fact}`} />}
            </section>
        </main>
    )
}