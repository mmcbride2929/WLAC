import Sidebar from './Sidebar'
import { Link } from 'react-scroll'

const Nav = ({ sidebarActive, setSidebarActive }) => {
  return (
    <header className="bg-blue-700">
      {sidebarActive ? (
        <Sidebar
          setSidebarActive={setSidebarActive}
          sidebarActive={sidebarActive}
        />
      ) : (
        <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8 justify-between text-white">
          <a className="block font-bold" href="/">
            FERGUSON INC.
          </a>

          <div className="flex items-center gap-4  ">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 ">
                <li>
                  <Link to="about" smooth={true} duration={500}>
                    <a
                      className="text-white transition border-b border-solid border-transparent hover:border-white hover:border-b-2 cursor-pointer"
                      href="#about"
                    >
                      About
                    </a>
                  </Link>
                </li>
                <li>
                  <Link to="services" smooth={true} duration={500}>
                    <a
                      className="text-white transition border-b border-solid border-transparent hover:border-white hover:border-b-2 cursor-pointer"
                      href="#services"
                    >
                      Services
                    </a>
                  </Link>
                </li>
                <li>
                  <Link to="work" smooth={true} duration={500}>
                    <a
                      className="text-white transition border-b border-solid border-transparent hover:border-white hover:border-b-2 cursor-pointer"
                      href="work"
                    >
                      Work
                    </a>
                  </Link>
                </li>

                <li>
                  <Link to="contact" smooth={true} duration={500}>
                    <a
                      className="text-white transition border-b border-solid border-transparent hover:border-white hover:border-b-2 cursor-pointer"
                      href="#contact"
                    >
                      Contact
                    </a>
                  </Link>
                </li>
              </ul>
            </nav>
            <button
              className="block rounded bg-white p-2.5 text-black transition hover:text-gray-900/75 md:hidden"
              onClick={() => setSidebarActive(true)}
            >
              <span className="sr-only">Toggle menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
export default Nav
