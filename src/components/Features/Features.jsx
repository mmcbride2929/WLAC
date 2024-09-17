import { Link } from "react-scroll"

const Features = () => {
  return (
    <section
      id="services"
      className="text-white bg-orange-500  body-font px-4 md:px-8"
    >
      <div className=" max-w-screen-xl container flex flex-wrap py-24 mx-auto items-center">
        <div className="md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 mb-10 md:mb-0 pb-10 border-b border-gray-200">
          <h1 className="text-3xl font-semibold md:text-4xl mb-2 text-white">
            Services We Provide
          </h1>
          <p className="leading-relaxed text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, molestiae! Quidem est
            esse numquam odio deleniti, beatae, magni dolores provident quaerat totam eos, aperiam
            architecto eius quis quibusdam fugiat dicta.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, molestiae! Quidem est
            esse numquam odio deleniti, beatae, magni do.
          </p>

          <Link to="faq" smooth={true} duration={500}>
            <a className="text-white hover:underline inline-flex items-center mt-4 cursor-pointer">
              Frequently Asked Questions
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </Link>
        </div>
        <div className="flex flex-col md:w-1/2 md:pl-6">
          <h2 className="title-font font-semibold text-white tracking-wider text-sm mb-3">
            SERVICES
          </h2>
          <nav className="flex flex-wrap list-none -mb-1 text-sm lg:text-md">
            <li className="lg:w-1/3 mb-1 w-1/2">
              <p className="text-white ">Lorem Ipsum</p>
            </li>
            <li className="lg:w-1/3 mb-1 w-1/2">
              <p className="text-white ">Lorem Ipsum</p>
            </li>
            <li className="lg:w-1/3 mb-1 w-1/2">
              <p className="text-white ">Lorem Ipsum</p>
            </li>
            <li className="lg:w-1/3 mb-1 w-1/2">
              <p className="text-white ">Lorem Ipsum</p>
            </li>
            <li className="lg:w-1/3 mb-1 w-1/2">
              <p className="text-white ">Lorem Ipsum</p>
            </li>
            <li className="lg:w-1/3 mb-1 w-1/2">
              <p className="text-white ">Lorem Ipsum</p>
            </li>
          </nav>
        </div>
      </div>
    </section>
  )
}
export default Features
