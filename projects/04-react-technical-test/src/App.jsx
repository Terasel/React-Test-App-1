import { useEffect, useState } from 'react'
import './App.css'

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
// const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWords}?
// size=50&color=red&json=true`

export function App() {
    const [fact, setFact] = useState()
    const [imageUrl, setimageUrl] = useState()

    useEffect(() => {
        fetch(CAT_ENDPOINT_RANDOM_FACT)
            .then(res => res.json())
            .then(data => {
                const { fact } = data
                setFact(fact)
            })
    }, [])

    useEffect(() => {
        if(!fact) return

        const firstWords = fact.split(' ', 3).join(' ')

        fetch(`https://cataas.com/cat/says/${firstWords}?
            size=50&color=red&json=true`)
            .then(res => res.json())
            .then(response => {
                const { url } = response
                setimageUrl(url)
            })
    }, [fact])

    return (
        <main>
            <h1>Kitten app</h1>
            <section>
                {fact && <p>{fact}</p>}
                {imageUrl && <img src={imageUrl} alt={`Image extracted using the first 
                three words for ${fact}`} />}
            </section>
        </main>
    )
}