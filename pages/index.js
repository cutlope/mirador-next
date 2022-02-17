import Link from 'next/link'
import { CheckIcon } from '@heroicons/react/solid'

const CompanyLogos = [
  {
    imageUrl: '',
  },
  {
    imageUrl: '',
  },
  {
    imageUrl: '',
  },
  {
    imageUrl: '',
  },
]

const tiers = [
  {
    includedFeatures: [
      'Supports Offer, Standard and Event Posts',
      'Schedule Posts And Create Recurring Posts',
      'Post To Multiple Locations At Once',
    ],
  },
]

export default function Home() {
  return (
    <main>
      {/* Hero Section Start */}
      <div className='py-6 px-6 lg:grid lg:grid-cols-9 lg:gap-8 flex flex-col-reverse'>
        <div className='sm:text-center  md:mx-auto lg:col-span-3  lg:text-left'>
          <h1>
            <span className='mt-1 block text-6xl tracking-tight  sm:text-5xl xl:text-6xl'>
              <span className='block'>Lorem ipsum</span>
              <span className='block'>dolor sit amet,</span>
              <span className='block font-extrabold text-gray-900'>
                consectetur
              </span>
              <span className='block font-extrabold text-gray-900'>
                adipig elit.
              </span>
            </span>
          </h1>
          <p className='mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl '>
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo. Elit sunt amet fugiat veniam
          </p>
          <div className='mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0'>
            <button
              type='submit'
              className='mt-3 px-10 py-2 border border-transparent text-base font-medium rounded-full text-white bg-mirador shadow-sm  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:flex-shrink-0 inline-flex items-center w-auto'>
              Start managing
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-4 w-4 mt-1'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M9 5l7 7-7 7'
                />
              </svg>
            </button>
          </div>
        </div>
        <div className='sm:mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center'>
          <div className='relative mx-auto w-full rounded-lg lg:max-w-3xl'>
            <div className='relative block w-full bg-white rounded-lg overflow-hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
              <img className='w-full' src='/float-home.svg' alt='' />
            </div>
          </div>
        </div>
      </div>
      {/* Hero Section End */}

      {/* Take a look */}
      <div className='bg-mirador'>
        <div className='max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8'>
          <div className='text-center sm:flex sm:justify-center'>
            <span className='mt-1 block text-2xl tracking-tight'>
              <span className='font-semibold text-white'>
                Lorem ipsum dolor sit amet,
              </span>
              <span className='text-white'> consectetur</span>
            </span>
            <button
              type='submit'
              className=' ml-4 mt-3 px-10 py-2 border border-transparent text-base font-medium rounded-full text-mirador bg-white shadow-sm  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:flex-shrink-0 inline-flex items-center w-auto'>
              Take a Look!
            </button>
          </div>
        </div>
      </div>
      {/* Take a look end */}
      {/* Logos Start */}
      <div className='bg-[#1A2A30]'>
        <div className='mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 '>
          <div className='space-y-12'>
            <h2 className='text-3xl font-light text-white tracking-tight sm:text-4xl text-center'>
              Trusted by
            </h2>
            <ul
              role='list'
              className='space-y-4 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:grid-cols-4 lg:gap-8'>
              {CompanyLogos.map((person, indx) => (
                <li key={indx}>
                  <div className='space-y-6 xl:space-y-10'>
                    <img
                      className={`mx-auto h-36 w-36 rounded-full ${
                        person.imageUrl ? '' : 'bg-gray-600'
                      }`}
                      src={person.imageUrl ? person.imageUrl : ''}
                      alt=''
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {/* Logos End */}

      {/* Features Start */}
      <div className='relative pt-16 pb-32 overflow-hidden'>
        <div className='text-center pb-12'>
          <h2 className='sm:text-3xl font-normal tracking-tighter sm:tracking-wide text-2xl text-gray-900'>
            The Platform Built To Showcase
          </h2>
          <h2 className='sm:text-3xl tracking-tighter font-normal sm:tracking-wide text-2xl text-gray-900'>
            Your Google My Business Results.
          </h2>
        </div>
        <div className='relative'>
          <div className='flex flex-col-reverse lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24'>
            <div className='px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0'>
              <div>
                <div className='items-center hidden lg:flex'>
                  <span className='h-4 w-4 mr-2 rounded-xl flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-800'></span>
                  <span> Posting</span>
                </div>
                <div className='mt-6'>
                  <div className='text-center lg:text-left '>
                    <h2 className='text-3xl font-normal tracking-tight text-gray-900'>
                      Create your GMB
                    </h2>
                    <h2 className='text-3xl font-normal tracking-tight text-gray-900'>
                      content calendar
                    </h2>
                    <p className='mt-4 text-lg text-gray-500 max-w-sm'>
                      Lorem ipsum dolor sit amet, consectetur Nam et libero
                      magna. Aliquam erat volutpat. Vivamus vitae volutpat nisi,
                      non sagittis ex.
                    </p>
                  </div>
                  <ul role='list' className='mt-6 space-y-4'>
                    {tiers.map((tier, indx) => (
                      <div key={indx} className='divide-y divide-gray-200'>
                        <ul role='list' className='mt-6 space-y-4'>
                          {tier.includedFeatures.map((feature) => (
                            <li key={feature} className='flex space-x-3'>
                              <CheckIcon
                                className='flex-shrink-0 h-5 w-5 text-[#386C79]'
                                aria-hidden='true'
                              />
                              <span className='text-sm text-gray-500'>
                                {feature}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </ul>
                  <div className='mt-6 text-center lg:text-left'>
                    <Link href='#'>
                      <a className='inline-flex px-10 py-2  border-2 border-miradorGreen text-base font-semibold rounded-full shadow-sm text-miradorGreen'>
                        CTA Link
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className='mt-12 sm:mt-16 lg:mt-0'>
              <div className='px-6 md:px-20 sm:pl-6 lg:px-0 lg:m-0 lg:relative lg:h-full'>
                <img
                  className='w-full lg:absolute lg:left-0 lg:h-full lg:w-auto'
                  src='/calendar.svg'
                  alt=''
                />
              </div>
            </div>
          </div>
        </div>
        <div className='mt-24'>
          <div className='flex flex-col-reverse lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24'>
            <div className='px-4 max-w-xl mx-auto sm:px-6 lg:pb-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2'>
              <div>
                <div className='items-center hidden lg:flex'>
                  <span className='h-4 w-4 mr-2 rounded-xl flex items-center justify-center bg-[#56AB95]'></span>
                  <span>Managing</span>
                </div>
                <div className='mt-6'>
                  <div className='text-center lg:text-left '>
                    <h2 className='text-3xl font-normal tracking-tight text-gray-900'>
                      Manage all of your locations,
                    </h2>
                    <h2 className='text-3xl font-normal tracking-tight text-gray-900'>
                      in one dashboard.
                    </h2>
                    <p className='mt-4 text-lg text-gray-500 max-w-sm'>
                      Lorem ipsum dolor sit amet, consectetur Nam et libero
                      magna. Aliquam erat volutpat. Vivamus vitae volutpat nisi,
                      non sagittis ex.
                    </p>
                  </div>
                  <ul role='list' className='mt-6 space-y-4'>
                    {tiers.map((tier) => (
                      <div key={tier.name} className='divide-y divide-gray-200'>
                        <ul role='list' className='mt-6 space-y-4'>
                          {tier.includedFeatures.map((feature) => (
                            <li key={feature} className='flex space-x-3'>
                              <CheckIcon
                                className='flex-shrink-0 h-5 w-5 text-[#386C79]'
                                aria-hidden='true'
                              />
                              <span className='text-sm text-gray-500'>
                                {feature}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </ul>
                  <div className='mt-6 text-center lg:text-left'>
                    <Link href='#'>
                      <a className='inline-flex px-10 py-2 border-2 border-[#56AB95] text-base font-semibold rounded-full shadow-sm text-[#56AB95]'>
                        CTA Link
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className='mt-12 sm:mt-16 lg:mt-0 lg:col-start-1'>
              <div className='px-6 md:px-20 sm:pl-6 lg:px-0 lg:m-0 lg:relative lg:h-full'>
                <img
                  className='w-full lg:absolute lg:left-0 lg:h-full lg:w-auto mx-auto'
                  src='/globe.svg'
                  alt=''
                />
              </div>
            </div>
          </div>
        </div>
        <div className='mt-24'>
          <div className='flex flex-col-reverse lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24'>
            <div className='px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0'>
              <div>
                <div className='items-center hidden lg:flex'>
                  <span className='h-4 w-4 mr-2 rounded-xl flex items-center justify-center bg-[#E7B443]'></span>
                  <span> Posting</span>
                </div>
                <div className='mt-6'>
                  <div className='text-center lg:text-left '>
                    <h2 className='text-3xl font-normal tracking-tight text-gray-900'>
                      Track rankings and visibility
                    </h2>
                    <h2 className='text-3xl font-normal tracking-tight text-gray-900'>
                      for all of your locations.
                    </h2>
                    <p className='mt-4 text-lg text-gray-500 max-w-sm'>
                      Lorem ipsum dolor sit amet, consectetur Nam et libero
                      magna. Aliquam erat volutpat. Vivamus vitae volutpat nisi,
                      non sagittis ex.
                    </p>
                  </div>
                  <ul role='list' className='mt-6 space-y-4'>
                    {tiers.map((tier) => (
                      <div key={tier.name} className='divide-y divide-gray-200'>
                        <ul role='list' className='mt-6 space-y-4'>
                          {tier.includedFeatures.map((feature) => (
                            <li key={feature} className='flex space-x-3'>
                              <CheckIcon
                                className='flex-shrink-0 h-5 w-5 text-[#386C79]'
                                aria-hidden='true'
                              />
                              <span className='text-sm text-gray-500'>
                                {feature}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </ul>
                  <div className='mt-6 text-center lg:text-left'>
                    <Link href='#'>
                      <a className='inline-flex px-10 py-2  border-2 border-[#E7B443] text-base font-semibold rounded-full shadow-sm text-[#E7B443]'>
                        CTA Link
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className='mt-12 sm:mt-16 lg:mt-0'>
              <div className='px-6 md:px-20 sm:pl-6 lg:px-0 lg:m-0 lg:relative lg:h-full'>
                <img
                  className='w-full lg:absolute lg:left-0 lg:h-full lg:w-auto mx-auto'
                  src='/chart.svg'
                  alt=''
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
