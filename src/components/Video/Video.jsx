import React from 'react'
import './video.css'

const Video = () => {
	function playVideo() {
		let myVideo = document.getElementById('#video')
		console.log(myVideo)
	}
	return (
		<div className='video'>
			<div className='container'>
				<div className='video_section' id='video'>
					<p>Посмотрите это впечатляющее</p>
					<h2>видео</h2>
					<div className='video_video'>
						<video width='100%' id='video'>
							<source src='video/InShot_20240516_224507967.mp4'></source>
						</video>
						<button onClick={playVideo()} className='video_button'>
							<img src='images/icon/play.svg' alt='' />
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Video
