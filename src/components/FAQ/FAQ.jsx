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
                <h2 className="text-lg font-medium">Lorem ipsum dolor sit amet consectetur adipisicing?</h2>
                  <span className="relative size-5 shrink-0">
                    <FaAngleDown className="text-black group-open:rotate-180" />
                  </span>
              </summary>

              <p className="mt-4 leading-relaxed ">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa
                in, recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo officiis
                explicabo consequuntur distinctio corporis earum similique!
              </p>
            </details>
            <details className="group py-8 [&_summary::-webkit-details-marker]:hidden border-b border-black-500">
              <summary className="flex cursor-pointer items-center justify-between t">
                <h2 className="text-lg font-medium">Lorem ipsum dolor sit amet consectetur adipisicing?</h2>
                  <span className="relative size-5 shrink-0">
                    <FaAngleDown className="text-black group-open:rotate-180" />
                  </span>
              </summary>

              <p className="mt-4 leading-relaxed ">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa
                in, recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo officiis
                explicabo consequuntur distinctio corporis earum similique!
              </p>
            </details><details className="group py-8 [&_summary::-webkit-details-marker]:hidden border-b border-black-500">
              <summary className="flex cursor-pointer items-center justify-between text-gray-900">
                <h2 className="text-lg font-medium">Lorem ipsum dolor sit amet consectetur adipisicing?</h2>
                  <span className="relative size-5 shrink-0">
                    <FaAngleDown className="text-black group-open:rotate-180" />
                  </span>
              </summary>

              <p className="mt-4 leading-relaxed text-gray-700">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa
                in, recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo officiis
                explicabo consequuntur distinctio corporis earum similique!
              </p>
            </details>
          </div>
        </div>

      </div>
    </section>
  )
}
export default Work
