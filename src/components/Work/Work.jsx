import image from '../../assets/20131120_215047.jpg'
import image2 from '../../assets/IMAG0037.jpg'
import image3 from '../../assets/20131205_222625.jpg'
import image4 from '../../assets/ceiling.jpg'
import image5 from '../../assets/framing.jpg'
import image6 from '../../assets/kitchen.jpg'

const Work = () => {
  return (
    <section id="work" className="text-gray-600 body-font px-4 md:px-8">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="text-3xl font-semibold md:text-4xl mb-4 text-black">
            What We've Been Up To
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            We have been affiliated with major projects, including the Macon and
            Bibb County Schools' LED lighting retrofit projects, the
            Hartsfield-Jackson International Airport Duty Free Stores, and the
            Department of Veterans Affairs' retrofit and restoration project at
            what was known as Fort McPherson Army Base.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative">
              <img
                alt="gallery"
                className="absolute inset-0 w-full h-full object-cover object-center"
                src={image}
              />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                  March 2021
                </h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  Duty Free
                </h1>
                <p className="leading-relaxed">
                  A more recent project at the Hartsfield-Jackson International
                  Airport, remodeling the duty free store.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative">
              <img
                alt="gallery"
                className="absolute inset-0 w-full h-full object-cover object-center"
                src={image2}
              />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                  May 2022
                </h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  Residential Pool Light Installation
                </h1>
                <p className="leading-relaxed">
                  Installed and fit pool lighting making a summer pool safe and
                  swimmable during the night hours.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative">
              <img
                alt="gallery"
                className="absolute inset-0 w-full h-full object-cover object-center"
                src={image3}
              />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                  March 2021
                </h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  Hartsfield-Jackson Airport
                </h1>
                <p className="leading-relaxed">
                  A more recent project at the Hartsfield-Jackson International
                  Airport, remodeling the duty free store.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative">
              <img
                alt="gallery"
                className="absolute inset-0 w-full h-full object-cover object-center"
                src={image4}
              />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                  September 2019
                </h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  Commercial Light Installation
                </h1>
                <p className="leading-relaxed">
                  We installed four rows of commercial lights, at over 75 feet
                  in the air at a local recreational center.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative">
              <img
                alt="gallery"
                className="absolute inset-0 w-full h-full object-cover object-center"
                src={image5}
              />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                  April 2022
                </h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  Residential Electrical Layout
                </h1>
                <p className="leading-relaxed">
                  Organized and installed electrical layout within multiple open
                  framed residential homes as they prepare for further
                  construction.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative">
              <img
                alt="gallery"
                className="absolute inset-0 w-full h-full object-cover object-center"
                src={image6}
              />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                  February 2023
                </h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  Residential Kitchen Lighting
                </h1>
                <p className="leading-relaxed">
                  blueprinted and installed new kitchen lighting above
                  appliances, making an outdated kitchen look new again.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Work
