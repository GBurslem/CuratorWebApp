import { useEffect, useRef, useState } from 'react';
import '../styles/Stories.css';
import Story from './Story';

function Stories() {
    const [showAbout, setShowAbout] = useState(false);

    const story1: Story = {
        id: 1,
        title: 'Embark on an exciting journey with the story of the Rosetta Stone, from its discovery by a French soldier to its pivotal role in deciphering ancient Egyptian hieroglyphs, now showcased in the British Museum, London.',
        filePath: '/rosetta_stone.mp3'
    }

    const story2: Story = {
        id: 2,
        title: 'Step into the rich history and tradition of Scottish whisky at the Glenlivet Distillery, where centuries-old craftsmanship and stories of resilience come to life.',
        filePath: '/glenlivet_distillery.mp3'
    }

    const story3: Story = {
        id: 3,
        title: 'Journey through the evolution of respiratory science at the Museum of Natural History in New York City, where centuries of discoveries and medical innovations come to life.',
        filePath: '/new_york_respiratory.mp3'
    }

    const handleOnClick = () => {
        setShowAbout(!showAbout);
    }

    const titleRef = useRef<HTMLHeadingElement>(null);
    const storiesRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleAnimationEnd = () => {
            titleRef.current?.removeEventListener('animationend', handleAnimationEnd);
            storiesRef.current?.classList.add('fade-in');
        };

        titleRef.current?.addEventListener('animationend', handleAnimationEnd);
    });

    return (
        <div className="main-container">
            <h1 className='header'></h1>
            {showAbout ? (
                <div>
                    <div className='about-container'>
                        <p className='about-text fade-in'>Curator is on a journey to redefine the museum experience. Discover history and culture through immersive narratives that entertain and educate, letting you live the stories behind each exhibit. Coming soon.</p>
                    </div>
                </div>
            ) : (
                <div>
                    <div className='stories-container'>
                        <h3 ref={titleRef} className='stories-container-title  fade-in'>Step Into Story</h3>
                        <div ref={storiesRef} className='stories-body-container'>
                            <Story story={story1} />
                            <Story story={story2} />
                            <Story story={story3} />
                        </div>
                    </div>
                </div>
            )}
            <div className='stories-footer'>
                <div className='stories-footer-link' onClick={handleOnClick}>{showAbout ? "Back" : "About"}</div>
            </div>
        </div>
    );
}

export default Stories;