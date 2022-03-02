import Link from 'next/link'

export default function CaseStudy() {
  return (
    <div>
      <div className='bg-[#ca3640] sm:bg-left-flower bg-no-repeat bg-contain mt-10'>
        <div className='sm:bg-right-flower bg-no-repeat bg-contain bg-right'>
          <div className='max-w-2xl mx-auto text-center pt-16 sm:py-20 sm:px-6 lg:px-8'>
            <h2 className='text-4xl font-extrabold text-white sm:text-5xl'>
              <img
                className='sm:absolute hidden top-0 translate-x-64 scale-50 pt-16'
                src='/Group 24.svg'
              />
              <span className='block'>Case Study</span>
            </h2>
            <p className='mt-4 text-lg leading-6 text-white'>
              Ac euismod vel sit maecenas
            </p>
            <p className='mt-2 w-full inline-flex items-center justify-center px-5 py-3 text-base font-medium sm:w-auto text-white'>
              October 31st, 2021
            </p>
            <img className='sm:hidden mx-auto ' src='/Scroll Group 1.svg' />
          </div>
        </div>
      </div>
      {/* Page Header End */}

      {/*  Post Start */}
      {/*  Post End */}
      <ul className='md:max-w-7xl max-w-xs mx-auto'>
        <li key={1} className='py-12 pt-40 '>
          <div className='space-y-2 md:grid md:grid-cols-4 md:items-baseline md:space-y-0 '>
            <dl>
              <dd className='text-xl font-semibold leading-6 text-gray-500 dark:text-gray-400 '></dd>
            </dl>
            <div className='space-y-5 md:col-span-3'>
              <div className='space-y-6'>
                <div className='prose dark:text-gray-400 prose-indigo prose-lg text-gray-500  max-w-3xl'>
                  <p>
                    Quis semper vulputate aliquam venenatis egestas sagittis
                    quisque orci. Donec commodo sit viverra aliquam porttitor
                    ultrices gravida eu. Tincidunt leo, elementum mattis
                    elementum ut nisl, justo, amet, mattis. Nunc purus, diam
                    commodo tincidunt turpis. Amet, duis sed elit interdum
                    dignissim.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li key={2} className='py-12 max-w-7xl mx-auto  '>
          <article>
            <div className='space-y-2 md:grid md:grid-cols-4 md:items-baseline md:space-y-0'>
              <dl></dl>
              <div className='space-y-5 md:col-span-3'>
                <div className='space-y-6'>
                  <div>
                    <h2 className='text-2xl font-bold leading-8 tracking-tight'>
                      <Link
                        href={`/blog/`}
                        className='text-gray-900 dark:text-gray-100'>
                        From beginner to expert in 30 days
                      </Link>
                    </h2>
                  </div>
                  <div className='prose dark:text-gray-400 prose-indigo prose-lg text-gray-500  max-w-3xl'>
                    <p>
                      Quis semper vulputate aliquam venenatis egestas sagittis
                      quisque orci. Donec commodo sit viverra aliquam porttitor
                      ultrices gravida eu. Tincidunt leo, elementum mattis
                      elementum ut nisl, justo, amet, mattis. Nunc purus, diam
                      commodo tincidunt turpis. Amet, duis sed elit interdum
                      dignissim.
                    </p>
                    <p></p>
                  </div>
                  <img
                    className='md:right-[20%] relative w-full bg-gray-300 '
                    src=''
                    alt=''
                    width={984}
                    height={600}
                  />
                </div>
              </div>
            </div>
          </article>
        </li>
        <li key={3} className='py-12 max-w-7xl mx-auto  '>
          <article>
            <div className='space-y-2 md:grid md:grid-cols-4 md:items-baseline md:space-y-0'>
              <dl></dl>
              <div className='space-y-5 md:col-span-3'>
                <div className='space-y-6'>
                  <div>
                    <h2 className='text-2xl font-bold leading-8 tracking-tight'>
                      <Link
                        href={`/blog/`}
                        className='text-gray-900 dark:text-gray-100'>
                        From beginner to expert in 30 days
                      </Link>
                    </h2>
                  </div>
                  <div className='prose dark:text-gray-400 prose-indigo prose-lg text-gray-500  max-w-3xl'>
                    <p>
                      Quis semper vulputate aliquam venenatis egestas sagittis
                      quisque orci. Donec commodo sit viverra aliquam porttitor
                      ultrices gravida eu. Tincidunt leo, elementum mattis
                      elementum ut nisl, justo, amet, mattis. Nunc purus, diam
                      commodo tincidunt turpis. Amet, duis sed elit interdum
                      dignissim.
                    </p>
                    <p>
                      Faucibus commodo massa rhoncus, volutpat. Dignissim sed
                      eget risus enim. Mattis mauris semper sed amet vitae sed
                      turpis id. Id dolor praesent donec est. Odio penatibus
                      risus viverra tellus varius sit neque erat velit.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </li>
      </ul>
    </div>
  )
}
