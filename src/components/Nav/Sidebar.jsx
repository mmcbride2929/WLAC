const Sidebar = ({ setSidebarActive }) => {
  return (
    <div>
      <div className="flex h-screen flex-col  justify-between  bg-white-600">
        <div className="px-4 py-4 h-full ">
          <button
            className=" block rounded bg-white p-2.5 text-black transition hover:text-gray-900/75 md:hidden"
            onClick={() => setSidebarActive(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M14.95 5.636l-1.414-1.414L10 8.586 6.464 5.05 5.05 6.464 8.586 10l-3.536 3.536 1.414 1.414L10 11.414l3.536 3.536 1.414-1.414L11.414 10l3.536-3.536z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
          <ul className="h-full flex flex-col justify-center space-y-1">
            <li>
              <a
                onClick={() => setSidebarActive(false)}
                href="#about"
                className="block rounded-lg px-4 py-2 text-5xl  font-medium text-red-500 hover:text-black hover:bg-white"
              >
                About
              </a>
            </li>
            <li>
              <a
                onClick={() => setSidebarActive(false)}
                href="#services"
                className="block rounded-lg px-4 py-2 text-5xl  font-medium text-blue-500 hover:text-black hover:bg-white "
              >
                Services
              </a>
            </li>

            <li>
              <a
                onClick={() => setSidebarActive(false)}
                href="#work"
                className="block rounded-lg px-4 py-2 text-5xl font-medium text-orange-500 hover:text-black hover:bg-white "
              >
                FAQ
              </a>
            </li>

            <li>
              <a
                onClick={() => setSidebarActive(false)}
                href="#contact"
                className="block rounded-lg px-4 py-2 text-5xl font-medium text-green-500 hover:text-black hover:bg-white "
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
export default Sidebar
