import { FaAngleDown } from "react-icons/fa";

const Work = () => {
  return (
    <section id="work" className="body-font px-4 md:px-8">
      <div className="container px-5 py-24 mx-auto">
        <h1 className="text-3xl font-semibold md:text-4xl mb-12 ">
          Frequently Asked Questions
        </h1>
        <div className="flow-root">
          <div className="-my-8 divide-y divide-black-500 ">
            <details className="group py-8 [&_summary::-webkit-details-marker]:hidden ">
              <summary className="flex cursor-pointer items-center justify-between ">
                <h2 className="text-lg font-medium">Can I cancel or reschedule my ride to work?</h2>
                  <span className="relative size-5 shrink-0">
                    <FaAngleDown className="text-black group-open:rotate-180" />
                  </span>
              </summary>

              <p className="mt-4 leading-relaxed ">
              We understand that plans can change. Please notify us at least 24 hours in advance if you need to cancel or reschedule a ride to avoid any cancellation fees. Shorter notice may result in a partial charge.
              </p>
            </details>
            <details className="group py-8 [&_summary::-webkit-details-marker]:hidden border-b border-black-500">
              <summary className="flex cursor-pointer items-center justify-between t">
                <h2 className="text-lg font-medium">Can I arrange a recurring ride for my child’s daycare drop-off?</h2>
                  <span className="relative size-5 shrink-0">
                    <FaAngleDown className="text-black group-open:rotate-180" />
                  </span>
              </summary>

              <p className="mt-4 leading-relaxed ">
              Absolutely! We offer flexible scheduling options, including recurring rides for daycare drop-offs and pickups. Let us know your preferred schedule, and we will arrange reliable transportation for your child.
              </p>
            </details><details className="group py-8 [&_summary::-webkit-details-marker]:hidden border-b border-black-500">
              <summary className="flex cursor-pointer items-center justify-between text-gray-900">
                <h2 className="text-lg font-medium">How do I book a ride to work?</h2>
                  <span className="relative size-5 shrink-0">
                    <FaAngleDown className="text-black group-open:rotate-180" />
                  </span>
              </summary>

              <p className="mt-4 leading-relaxed text-gray-700">
              Booking a ride is simple! Just contact us via our website or phone to schedule your preferred date and time. We recommend booking rides in advance to ensure availability, especially during peak hours.
              </p>
            </details>
          </div>
        </div>

      </div>
    </section>
  )
}
export default Work
