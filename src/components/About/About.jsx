import image from '../../assets/IMG_0273.jpg'

const About = () => {
  return (
    <section
      id="about"
      className="cta-sec relative max-w-screen-xl mx-auto py-12 px-4 md:px-8"
    >
      <div className="absolute top-0 left-0 w-full h-full bg-white opacity-40"></div>
      <div className="relative z-10 gap-5 items-center lg:flex">
        <div className="flex-1 mt-5 mx-auto sm:w-9/12 lg:mt-0 lg:w-auto">
          <img src={image} alt="" className="w-full " />
        </div>
        <div className="flex-1 max-w-lg px-0 lg:px-10 py-5 sm:mx-auto sm:text-center lg:max-w-max lg:text-left">
          <h3 className="text-3xl text-gray-800 font-semibold md:text-4xl mt-8 lg:mt-2">
            Welcome to <span className="text-blue-700">Ferguson Inc.</span>
          </h3>
          <p className="text-gray-500 leading-relaxed mt-3">
            Ferguson Inc. was established in September of 2010 in Atlanta,
            Georgia, with the capability of undertaking jeprocts that range from
            both new and old electrical and general construction installations,
            repairs, and restorations. We are licensed, bonded, and insured with
            the State of Georgia.
          </p>
        </div>
      </div>
    </section>
  )
}
export default About
