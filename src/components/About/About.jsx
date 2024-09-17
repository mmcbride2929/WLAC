import { Link } from 'react-scroll'
import image from '../../assets/swingset.jpg'

const About = () => {
  return (
    <section
      id="about"
      className="cta-sec relative max-w-screen-xl mx-auto py-12 px-4 md:px-8"
    >

  <div class="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
      <div class="relative z-10 lg:py-16">
        <div class="relative h-64 sm:h-80 lg:h-full">
          <img
            alt=""
            src={image}
            class="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </div>

      <div class="relative flex items-center bg-orange-500 ">
        <span
          class="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-orange-500"
        ></span>

        <div class="p-8 sm:p-16 lg:p-24">
          <h2 class="text-2xl font-bold sm:text-3xl text-white">
            About the company and what makes it special, hours, etc.
          </h2>

          <p class="mt-4 text-white">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, molestiae! Quidem est
            esse numquam odio deleniti, beatae, magni dolores provident quaerat totam eos, aperiam
            architecto eius quis quibusdam fugiat dicta.
          </p>

          <p class="mt-4 text-white">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, molestiae! Quidem est
            esse numquam odio deleniti, beatae, magni dolores provident quaerat totam eos, aperiam
            architecto eius quis quibusdam fugiat dicta.
          </p>
        </div>
      </div>
    </div>
  </div>


    </section>
  )
}
export default About
