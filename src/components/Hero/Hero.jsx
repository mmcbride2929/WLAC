import { Link } from 'react-scroll'
import heroImage from '../../assets/hero2.jpg'

const Hero = () => {
  return (
    <section
      className="relative  bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* absolute top-1.5 right-0 */}
      <div className="mobile-only  flex justify-end items-start">
        <a
          href="tel:+1-888-636-9406"
          className="p-2 px-4 text-blue-700  bg-white"
        >
          Call Now (888)-636-9406 ext. 101
        </a>
      </div>

      <div className="relative mx-auto   px-4 py-44 sm:px-6 flex justify-center align-center  lg:items-center lg:px-8">
        <div className=" text-center text-white ltr:sm:text-left rtl:sm:text-right">
          <h1 className="text-3xl font-extrabold sm:text-5xl">Ferguson Inc.</h1>

          <p className="mt-2  sm:text-xl/relaxed max-w-xs md:max-w-md">
            Building Trust With Quality Work and Impeccable Customer Service
            Since 2010
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-4 text-center ">
            <Link to="contact" smooth={true} duration={500}>
              <a
                href="#contact"
                className="block w-full rounded bg-blue-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-blue-700 focus:outline-none focus:ring active:bg-blue-800 sm:w-auto"
              >
                Contact
              </a>
            </Link>
            <Link to="work" smooth={true} duration={500}>
              <a
                href="#work"
                className="block w-full rounded bg-white hover:bg-gray-100 px-12 py-3 text-sm font-medium text-blue-600 shadow hover:text-blue-700 focus:outline-none focus:ring active:text-blue-500 sm:w-auto"
              >
                Our Work
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Hero
