import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App() {
    return (
        <section className="App">
            <TwitterFollowCard
                isFollowing
                userName='kikobeats'
                name='testuser1' 
                />

            <TwitterFollowCard
                isFollowing={false}
                userName='pheralb'
                name='testuser2' 
                />

            <TwitterFollowCard
                isFollowing
                userName='vxnder'
                name='testuser3' 
                />
        </section>
    )
}