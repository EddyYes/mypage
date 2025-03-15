import React, { useState, useEffect, useRef } from 'react'
import bgImage from '../assets/TayaTere.png'

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const iframeRef = useRef(null)
  const playerRef = useRef(null)

  useEffect(() => {
    const loadYouTubeAPI = () => {
      if (!window.YT) {
        const tag = document.createElement('script')
        tag.src = 'https://www.youtube.com/iframe_api'
        const firstScriptTag = document.getElementsByTagName('script')[0]
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)
      } else {
        initPlayer()
      }
    }

    const initPlayer = () => {
      if (playerRef.current || !iframeRef.current) return

      playerRef.current = new window.YT.Player(iframeRef.current, {
        events: {
          onReady: (event) => console.log('YouTube Player is ready!'),
          onStateChange: (event) => {
            if (event.data === 0) {
              console.log('Music finished, resetting the status')
              setIsPlaying(false)
            }
          },
        },
      })
    }

    window.onYouTubeIframeAPIReady = initPlayer
    loadYouTubeAPI()
  }, [])

  const handleButtonClick = () => {
    if (!playerRef.current) return console.error('YouTube player not found')

    if (isPlaying) {
      playerRef.current.pauseVideo()
      console.log('Pause')
    } else {
      playerRef.current.playVideo()
      console.log('Play')
    }
    setIsPlaying(!isPlaying)
  }

  return (
    <div
      className="music-player relative m-[5px] h-[210px] w-[210px] rounded-md border-2 bg-black/0 bg-contain bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <iframe
        ref={iframeRef}
        id="music-iframe"
        src="https://www.youtube.com/embed/IJ81GOPQtBw?enablejsapi=1"
        style={{ display: 'none' }}
        allow="autoplay; encrypted-media"
        title="Taya Tere"
      ></iframe>

      <button
        onClick={handleButtonClick}
        className="music-button absolute right-1 bottom-1 flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-white shadow-md hover:bg-gray-700 active:scale-95"
      >
        {isPlaying ? '⏸' : '▶'}
      </button>

      <div className="music-info absolute bottom-1 left-1 text-cyan-300">
        <p className="text-sm font-light">Music: Taya Tere</p>
        <p className="text-sm font-light">Author: Eden Shalev</p>
        <p className="text-sm font-light">Label: Cafe De Anatolia</p>
      </div>
    </div>
  )
}

export default MusicPlayer
