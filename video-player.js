var player = videojs('videoPlayer', {
	autoplay: 'unmuted',
	controls: true,
	poster: 'poster.png',
	plugins: {
		hotkeys: {
			seekStep: 30
		}
	}
});
player.play();
