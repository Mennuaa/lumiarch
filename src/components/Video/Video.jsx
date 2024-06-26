import React, { useEffect, useState, useRef, useContext } from 'react';
import './video.css';
import { ConfigContext } from '../../App';

const Video = () => {
	const config = useContext(ConfigContext);

	const [isPlaying, setIsPlaying] = useState(false);
	const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);
	const videoRef = useRef(null);
	const sectionRef = useRef(null);

	useEffect(() => {
		const handleResize = () => setIsDesktop(window.innerWidth > 768);
		window.addEventListener('resize', handleResize);

		return () => window.removeEventListener('resize', handleResize);
	}, []);

	const playVideo = () => {
		const myVideo = videoRef.current;
		if (myVideo) {
			myVideo.play();
			setIsPlaying(true);
		}
	};

	const pauseVideo = () => {
		const myVideo = videoRef.current;
		if (myVideo) {
			myVideo.pause();
			setIsPlaying(false);
		}
	};

	useEffect(() => {
		if (isDesktop) {
			const observer = new IntersectionObserver(
				(entries) => {
					const entry = entries[0];
					if (entry.isIntersecting) {
						playVideo();
					} else {
						pauseVideo();
					}
				},
				{ threshold: 0.5 }
			);

			if (sectionRef.current) {
				observer.observe(sectionRef.current);
			}

			return () => {
				if (sectionRef.current) {
					observer.unobserve(sectionRef.current);
				}
			};
		}
	}, [isDesktop]);

	return (
		<div
			ref={sectionRef}
			className='video'
			style={
				isDesktop
					? {
							background: 'url(mobile/lecondo/video_bg.jpg)',
							backgroundSize: 'cover',
							backgroundRepeat: 'no-repeat',
							backgroundPosition: 'center',
					  }
					: {}
			}
		>
			<div className='container' style={{ margin: '0 auto' }}>
				<div className='video_section object_section'>
					<p>{config.Ru_video_mobile_subheader}</p>
					<h2 className='mainh2'>{config.Ru_video_mobile_header}</h2>
					<div className='video_video'>
						{isDesktop ? (
							<video ref={videoRef} autoPlay loop muted width='100%' id='myVideo'>
								<source type='video/mp4' src='video/video_desc.mp4' />
							</video>
						) : (
							<>
								<video muted ref={videoRef}  id='myVideo'>
									<source type='video/mp4' src='video/vide_mob.mp4' />
								</video>
								{!isPlaying && (
									<button onClick={playVideo} className='video_button'>
										<img src='images/icon/play.svg' alt='Play' />
									</button>
								)}
							</>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Video;
