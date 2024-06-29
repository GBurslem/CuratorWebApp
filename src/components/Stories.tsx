import Story from './Story'
import '../styles/Stories.css';

function Stories() {
    return (
        <div className="main-container">
            <h1 className='header'>Curator</h1>
            <div className='stories-container'>
                <Story />
                <Story />
                <Story />
            </div>
        </div>
    );
}

export default Stories;