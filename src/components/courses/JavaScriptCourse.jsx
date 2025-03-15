import { useState } from 'react'
import { AiFillMoon, AiFillSun } from 'react-icons/ai'
import JavaScriptSections from '../courseSections/JavaScriptSections'

const JavaScriptCourse = () => {
  const [theme, setTheme] = useState('light')
  return (
    <>
      <div className="mb-1 flex items-center gap-4">
        <h1 className="pb-2.5 text-[#f7f7b9]">Java Script</h1>
        {theme === 'light' ? (
          <AiFillSun
            onClick={() => setTheme('dark')}
            className="cursor-pointer text-4xl text-yellow-400 transition-all duration-300 hover:scale-110 hover:text-yellow-500"
          />
        ) : (
          <AiFillMoon
            onClick={() => setTheme('light')}
            className="cursor-pointer text-4xl text-blue-400 transition-all duration-300 hover:scale-110 hover:text-blue-500"
          />
        )}
      </div>
      <JavaScriptSections />
    </>
  )
}

export default JavaScriptCourse
