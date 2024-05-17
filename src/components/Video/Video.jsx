import React, { useState } from 'react';
import './video.css';

const Video = () => {
    const [isPlaying, setIsPlaying] = useState(false);

    function playVideo() {
        let myVideo = document.getElementById('myVideo');
        if (myVideo) {
            myVideo.play();
            setIsPlaying(true);
        }
    }

    function pauseVideo() {
        let myVideo = document.getElementById('myVideo');
        if (myVideo) {
            myVideo.pause();
            setIsPlaying(false);
        }
    }

    return (
        <div className='video'>
            <div className='container'>
                <div className='video_section'>
                    <p>Посмотрите это впечатляющее</p>
                    <h2>видео</h2>
                    <div className='video_video'>
                        <video controls width='100%' id='myVideo' onEnded={pauseVideo}>
                            <source src='video/InShot_20240516_224507967.mp4'></source>
                        </video>
                        {!isPlaying && (
                            <button onClick={playVideo} className='video_button'>
                                <img src='images/icon/play.svg' alt='Play' />
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Video;
