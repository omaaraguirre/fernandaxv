import { prefix } from '@/constants'
import { useMemo, useState } from 'react'

const SongButton = () => {
  const [isPlaying, setIsPlaying] = useState(false)

  const song = useMemo(() => {
    const audio = new Audio(`${prefix}/song.mp3`)
    return audio
  }, [])

  const toggleSong = () => {
    setIsPlaying(prevState => {
      prevState ? song.pause() : song.play()
      return !prevState
    })
  }

  return (
    <button
      className="fixed bottom-10 right-10 bg-accent p-2 rounded-lg shadow shadow-background opacity-50 active:opacity-100 md:hover:opacity-100 transition-opacity duration-300 z-50"
      onClick={toggleSong}
    >
      {
        isPlaying
          ? <svg viewBox="0 0 24 24" className="size-8">
            <path fill="currentColor" d="M2 6c0-1.886 0-2.828.586-3.414S4.114 2 6 2s2.828 0 3.414.586S10 4.114 10 6v12c0 1.886 0 2.828-.586 3.414S7.886 22 6 22s-2.828 0-3.414-.586S2 19.886 2 18zm12 0c0-1.886 0-2.828.586-3.414S16.114 2 18 2s2.828 0 3.414.586S22 4.114 22 6v12c0 1.886 0 2.828-.586 3.414S19.886 22 18 22s-2.828 0-3.414-.586S14 19.886 14 18z" />
          </svg>
          : <svg viewBox="0 0 24 24" className="size-8">
            <path fill="currentColor" d="M21.409 9.353a2.998 2.998 0 0 1 0 5.294L8.597 21.614C6.534 22.737 4 21.277 4 18.968V5.033c0-2.31 2.534-3.769 4.597-2.648z" />
          </svg>
      }
    </button>
  )
}

export default SongButton
