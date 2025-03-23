import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App() {
    return (
        <section className="App">
            <TwitterFollowCard
                userName="kikobeats"
                name='testuser1'
                initialIsFollowing = {true} 
                />

            <TwitterFollowCard
                userName='pheralb'
                name='testuser2' 
                />

            <TwitterFollowCard
                userName='vxnder'
                name='testuser3' 
                />
        </section>
    )
}