import { useTheme } from './ThemeContext'
import { AiFillMoon, AiFillSun } from 'react-icons/ai'
import myPhoto from '../assets/myPhoto.jpg'
import Contacts from './Contacts.Jsx'
import MusicPlayer from './MusicPlayer'

const Header = () => {
  const { theme, toggleTheme } = useTheme()
  return (
    <header className="flex h-[220px] w-full items-center justify-start bg-gray-800 px-2 text-2xl text-white">
      <img
        src={myPhoto}
        alt="Profile"
        className="m-[5px] h-[210px] w-[210px] rounded-md border-2 transition-all duration-300 max-sm:h-[150px] max-sm:w-[150px]"
      />
      <Contacts />
      <div className="mb-1 flex items-center gap-4">
        <MusicPlayer />
        {theme === 'light' ? (
          <AiFillSun
            onClick={toggleTheme}
            className="cursor-pointer text-4xl text-yellow-400 transition-all duration-300 hover:scale-110 hover:text-yellow-500"
          />
        ) : (
          <AiFillMoon
            onClick={toggleTheme}
            className="cursor-pointer text-4xl text-blue-400 transition-all duration-300 hover:scale-110 hover:text-blue-500"
          />
        )}
      </div>
    </header>
  )
}

export default Header
