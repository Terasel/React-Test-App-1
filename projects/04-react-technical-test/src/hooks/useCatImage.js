import { useEffect, useState } from "react"

export function useCatImage({ fact }) {
    const [imageUrl, setimageUrl] = useState()

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

    return { imageUrl }
}