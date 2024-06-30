import React, { useState, useEffect } from "react";
import "../styles/Story.css";

interface StoryProps {
    story: Story;
}

type Story = {
    id: number;
    title: string;
    filePath: string;
};

function Story({ story }: StoryProps) {
    const [audio] = useState(new Audio(story.filePath));
    const [isPlaying, setIsPlaying] = useState(false);

    const playStory = () => {
        audio.play();
        setIsPlaying(true);
    };

    const pauseStory = () => {
        audio.pause();
        setIsPlaying(false);
    };

    useEffect(() => {
        audio.addEventListener('ended', () => setIsPlaying(false));
        return () => {
            audio.removeEventListener('ended', () => setIsPlaying(false));
        };
    }, [audio]);

    return (
        <div className="story-container">
            {isPlaying ? (
                <i className="fas fa-pause story-button" onClick={pauseStory}></i>
            ) : (
                <i className="fas fa-play story-button" onClick={playStory}></i>
            )}
            <p className="story-text">{story.title}</p>
        </div>
    );
}

export default Story;