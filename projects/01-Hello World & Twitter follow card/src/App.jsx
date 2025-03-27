import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
    {
        userName: 'kikobeats',
        name: 'testuser1',
        isFollowing: true
    },
    {
        userName: 'pheralb',
        name: 'testuser2',
        isFollowing: false
    },
    {
        userName: 'vxnder',
        name: 'testuser3',
        isFollowing: true
    },
    {
        userName: 'PacoHdezs',
        name: 'testuser4',
        isFollowing: false
    }
]

export function App() {
    return (
        <section className="App">
            {
                users.map(user => {
                    const {userName, name, isFollowing} = user
                    return (
                        <TwitterFollowCard
                        key={userName}
                        userName={userName}
                        name={name}
                        initialIsFollowing={isFollowing}
                        ></TwitterFollowCard>
                    )
                })
            }
        </section>
    )
}