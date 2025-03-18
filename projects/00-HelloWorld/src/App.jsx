import './App.css'

export function App() {
    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img
                    className='tw-followCard-avatar'
                    src="https://unavatar.io/kikobeats"
                    alt="The avatar" />
                <div className='tw-followCard-info'>
                    <strong>Test User</strong>
                    <span
                    className='tw-followCard-infoUserName'>@nevergonnagiveyouup</span>
                </div>
            </header>
            <aside>
                <button className='tw-followCard-button'>
                    Follow
                </button>
            </aside>
        </article>
    )
}