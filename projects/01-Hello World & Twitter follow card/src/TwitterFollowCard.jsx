import { useState } from "react"

export function TwitterFollowCard ({userName, name, initialIsFollowing}) {
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

    const text = isFollowing ? 'Following' : 'Follow'
    const buttonClassName = isFollowing 
    ? 'tw-followCard-button is-following' 
    : 'tw-followCard-button'

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img
                    className='tw-followCard-avatar'
                    src={`https://unavatar.io/${userName}`}
                    alt="The avatar" />
                <div className='tw-followCard-info'>
                    <strong>{name}</strong>
                    <span
                    className='tw-followCard-infoUserName'>@{userName}
                    </span>
                </div>
            </header>
            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    <span className='tw-followCard-text'>{text}</span>
                    <span className='tw-followCard-stopFollow'>Stop following</span>
                </button>
            </aside>
        </article>
    )
}