import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <nav className="w-full min-w-0 bg-gray-500 p-4 text-white opacity-95 transition-all duration-300 sm:w-[237px]">
      <h3>Courses I have completed</h3>
      <ul>
        <li>
          <NavLink
            to="/javaScriptCourse"
            className={({ isActive }) =>
              isActive
                ? 'block py-2 text-[22px] text-[#f7f7b9] no-underline hover:text-[#EEDD82]'
                : 'block py-2 text-[22px] text-[#ADD8E6] underline hover:text-[#7FB3D5]'
            }
          >
            Go to Java script
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/reactCourse"
            className={({ isActive }) =>
              isActive
                ? 'block py-2 text-[22px] text-[#f7f7b9] no-underline hover:text-[#EEDD82]'
                : 'block py-2 text-[22px] text-[#ADD8E6] underline hover:text-[#7FB3D5]'
            }
          >
            Go to React
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/nodeJsCourse"
            className={({ isActive }) =>
              isActive
                ? 'block py-2 text-[22px] text-[#f7f7b9] no-underline hover:text-[#EEDD82]'
                : 'block py-2 text-[22px] text-[#ADD8E6] underline hover:text-[#7FB3D5]'
            }
          >
            Go to Node.js
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dockerCourse"
            className={({ isActive }) =>
              isActive
                ? 'block py-2 text-[22px] text-[#f7f7b9] no-underline hover:text-[#EEDD82]'
                : 'block py-2 text-[22px] text-[#ADD8E6] underline hover:text-[#7FB3D5]'
            }
          >
            Go to Docker
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/gitCourse"
            className={({ isActive }) =>
              isActive
                ? 'block py-2 text-[22px] text-[#f7f7b9] no-underline hover:text-[#EEDD82]'
                : 'block py-2 text-[22px] text-[#ADD8E6] underline hover:text-[#7FB3D5]'
            }
          >
            Go to Git
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/cssCourse"
            className={({ isActive }) =>
              isActive
                ? 'block py-2 text-[22px] text-[#f7f7b9] no-underline hover:text-[#EEDD82]'
                : 'block py-2 text-[22px] text-[#ADD8E6] underline hover:text-[#7FB3D5]'
            }
          >
            Go to CSS
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/mongodbCourse"
            className={({ isActive }) =>
              isActive
                ? 'block py-2 text-[22px] text-[#f7f7b9] no-underline hover:text-[#EEDD82]'
                : 'block py-2 text-[22px] text-[#ADD8E6] underline hover:text-[#7FB3D5]'
            }
          >
            Go to MongoDB
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? 'block py-2 text-[22px] text-[#f7f7b9] no-underline hover:text-[#EEDD82]'
                : 'block py-2 text-[22px] text-[#ADD8E6] underline hover:text-[#7FB3D5]'
            }
          >
            Go Home
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Sidebar
