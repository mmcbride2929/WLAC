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
            Our dedication to childcare
          </h2>

          <p class="mt-4 text-white">    
          We are a home-based daycare that’s committed to providing the best care for children, offering a structured, learning-focused environment with small group sizes.
          </p>

          <p class="mt-4 text-white">
          What sets us apart is our focus on making every child feel important. We create a fun, educational, and mentor-driven atmosphere. Our hours are Monday through Friday, from 7 A.M. to midnight, and weekends from 7 A.M. to 6 P.M.
          </p>
        </div>
      </div>
    </div>
  </div>


    </section>
  )
}
export default About
