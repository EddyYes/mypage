import myPhoto from '../assets/myPhoto.jpg'
import Contacts from './Contacts.Jsx'
import MusicPlayer from './MusicPlayer'

const Header = () => {
  return (
    <>
      <header className="flex h-[220px] w-full items-center justify-start bg-gray-800 px-2 text-2xl text-white">
        <img
          src={myPhoto}
          alt="Profile"
          className="m-[5px] h-[210px] w-[210px] rounded-md border-2 transition-all duration-300 max-sm:h-[150px] max-sm:w-[150px]"
        />
        <Contacts />
        <MusicPlayer />
      </header>
    </>
  )
}

export default Header
