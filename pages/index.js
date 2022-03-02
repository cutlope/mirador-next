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

const tags = [
  {
    name: '#Data',
    href: '/',
  },
  {
    name: '#Data',
    href: '/',
  },
  {
    name: '#Data',
    href: '/',
  },
  {
    name: '#Data',
    href: '/',
  },
  {
    name: '#Data',
    href: '/',
  },
  {
    name: '#Data',
    href: '/',
  },
  {
    name: '#Data',
    href: '/',
  },
  {
    name: '#Data',
    href: '/',
  },
  {
    name: '#Data',
    href: '/',
  },
  {
    name: '#Data',
    href: '/',
  },
  {
    name: '#Data',
    href: '/',
  },
  {
    name: '#Data',
    href: '/',
  },
  {
    name: '#Data',
    href: '/',
  },
  {
    name: '#Data',
    href: '/',
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

const posts = [
  {
    title: 'Boost your conversion rate',
    href: '#',
    category: { name: 'Article', href: '#' },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    imageUrl:
      'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    readingTime: '6 min',
    author: {
      name: 'Roel Aufderehar',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    title: 'How to use search engine optimization to drive sales',
    href: '#',
    category: { name: 'Video', href: '#' },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.',
    date: 'Mar 10, 2020',
    datetime: '2020-03-10',
    imageUrl:
      'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    readingTime: '4 min',
    author: {
      name: 'Brenna Goyette',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    title: 'Improve your customer experience',
    href: '#',
    category: { name: 'Case Study', href: '#' },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.',
    date: 'Feb 12, 2020',
    datetime: '2020-02-12',
    imageUrl:
      'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    readingTime: '11 min',
    author: {
      name: 'Daniela Metz',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
]

export default function Home() {
  return (
    <main>
      {/* Hero Section Start */}
      <div className='flex flex-col-reverse px-6 py-6 lg:grid lg:grid-cols-9 lg:gap-8'>
        <div className='sm:text-center md:mx-auto lg:col-span-3 lg:text-left'>
          <h1>
            <span className='block mt-1 text-6xl tracking-tight sm:text-5xl xl:text-6xl'>
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
              className='inline-flex items-center w-auto px-10 py-2 mt-3 text-base font-medium text-white border border-transparent rounded-full shadow-sm bg-mirador focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:flex-shrink-0'>
              Start managing
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='w-4 h-4 mt-1'
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
        <div className='relative sm:mt-12 sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center'>
          <div className='relative w-full mx-auto rounded-lg lg:max-w-3xl'>
            <div className='relative block w-full overflow-hidden bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
              <img className='w-full' src='/float-home.svg' alt='' />
            </div>
          </div>
        </div>
      </div>
      {/* Hero Section End */}

      {/* Take a look */}
      <div className='bg-mirador'>
        <div className='px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8'>
          <div className='text-center sm:flex sm:justify-center'>
            <span className='block mt-1 text-2xl tracking-tight'>
              <span className='font-semibold text-white'>
                Lorem ipsum dolor sit amet,
              </span>
              <span className='text-white'> consectetur</span>
            </span>
            <button
              type='submit'
              className='inline-flex items-center w-auto px-10 py-2 mt-3 ml-4 text-base font-medium bg-white border border-transparent rounded-full shadow-sm text-mirador focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:flex-shrink-0'>
              Take a Look!
            </button>
          </div>
        </div>
      </div>
      {/* Take a look end */}

      {/* Logos Start */}
      <div className='bg-[#1A2A30]'>
        <div className='px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8 '>
          <div className='space-y-12'>
            <h2 className='text-3xl font-light tracking-tight text-center text-white sm:text-4xl'>
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

      {/* Index */}

      {/* Features Start */}
      <div className='relative pt-16 pb-32 overflow-hidden'>
        <div className='pb-12 text-center'>
          <h2 className='text-2xl font-normal tracking-tighter text-gray-900 sm:text-3xl sm:tracking-wide'>
            The Platform Built To Showcase
          </h2>
          <h2 className='text-2xl font-normal tracking-tighter text-gray-900 sm:text-3xl sm:tracking-wide'>
            Your Google My Business Results.
          </h2>
        </div>
        <div className=' md:grid-cols-3 justify-items-center gap-y-4 max-w-7xl mx-auto hidden lg:grid'>
          <span> Posting</span>
          <span> Managing</span>
          <span> Tracking</span>
          <span className='flex w-44 h-4 mr-2 rounded-xl bg-[#386c79]' />
          <span className='flex w-44 h-4 mr-2 rounded-xl bg-[#56AB95]' />
          <span className='flex w-44 h-4 mr-2 rounded-xl bg-[#E7B443]' />
        </div>
        <div className='relative'>
          <div className=' md:grid-cols-1 justify-items-center gap-y-4 lg:hidden grid'>
            <span className='text-3xl'> Posting</span>
            <span className='w-1/2 h-4 mr-2 rounded-xl bg-[#386c79]' />
          </div>
          <div className='flex flex-col-reverse lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24'>
            <div className='max-w-xl px-4 mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0'>
              <div>
                <div className='items-center hidden lg:flex'>
                  <span className='flex items-center justify-center w-4 h-4 mr-2 rounded-xl bg-[#386c79]'></span>
                  <span>Posting</span>
                </div>
                <div className='mt-6'>
                  <div className='text-center lg:text-left '>
                    <h2 className='text-3xl font-normal tracking-tight text-gray-900'>
                      Create your GMB
                    </h2>
                    <h2 className='text-3xl font-normal tracking-tight text-gray-900'>
                      content calendar
                    </h2>
                    <p className='max-w-sm mt-4 text-lg text-gray-500'>
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
                      <a className='inline-flex px-10 py-2 text-base font-semibold border-2 rounded-full shadow-sm border-miradorGreen text-miradorGreen'>
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
          <div className=' md:grid-cols-1 justify-items-center gap-y-4 lg:hidden grid'>
            <span className='text-3xl'> Managing</span>
            <span className='w-1/2 h-4 mr-2 rounded-xl bg-[#56AB95]' />
          </div>
          <div className='flex flex-col-reverse lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24'>
            <div className='max-w-xl px-4 mx-auto sm:px-6 lg:pb-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2'>
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
                    <p className='max-w-sm mt-4 text-lg text-gray-500'>
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
                  className='w-full mx-auto lg:absolute lg:left-0 lg:h-full lg:w-auto'
                  src='/globe.svg'
                  alt=''
                />
              </div>
            </div>
          </div>
        </div>
        <div className='mt-24'>
          <div className=' md:grid-cols-1 justify-items-center gap-y-4 lg:hidden grid'>
            <span className='text-3xl'> Managing</span>
            <span className='w-1/2 h-4 mr-2 rounded-xl bg-[#E7B443]' />
          </div>
          <div className='flex flex-col-reverse lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24'>
            <div className='max-w-xl px-4 mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0'>
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
                    <p className='max-w-sm mt-4 text-lg text-gray-500'>
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
                      <a className='inline-flex px-10 py-2 border-2 border-[#E7B443] text-base font-semibold rounded-full shadow-sm text-[#E7B443]'>
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
                  className='w-full mx-auto lg:absolute lg:left-0 lg:h-full lg:w-auto'
                  src='/chart.svg'
                  alt=''
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Features End */}

      {/* CTA Start */}
      <img className='max-h-40 mx-auto md:hidden' src='/Path 25.svg' alt='' />
      <div className='bg-mirador md:rounded-full mx-auto max-w-6xl md:my-6 flex items-center justify-center'>
        <img className='max-h-40 hidden md:block' src='/Path 25.svg' alt='' />

        <div className='px-4 py-12 md:px-6 lg:px-8'>
          <div className='text-center md:flex md:justify-center'>
            <span className='block mt-1 text-2xl tracking-tight'>
              <span className='font-semibold text-white'>
                Lorem ipsum dolor sit amet,
              </span>
              <span className='text-white'> consectetur</span>
            </span>
            <button
              type='submit'
              className='inline-flex items-center w-auto px-10 py-2 mt-3 ml-4 text-base font-medium bg-white border border-transparent rounded-full shadow-sm text-mirador focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:flex-shrink-0'>
              Take a Look!
            </button>
          </div>
        </div>
      </div>
      {/* CTA End */}

      {/* Tags Start */}
      <div className='rounded-3xl max-w-6xl mx-auto overflow-hidden'>
        <div className='flex flex-wrap p-4 xl:p-5 justify-center'>
          {tags.map((tag, indx) => (
            <div className='mb-2 mr-4' key={indx}>
              <a
                href='#'
                className='inline-block bg-white text-sm  py-2 px-4 rounded-full border-[#162A2F] border-2 text-[#162A2F] font-bold
                  md:py-2.5 md:px-12 dark:bg-neutral-700 dark:border-neutral-700 hover:bg-[#162A2F] hover:text-white'>
                {tag.name}
              </a>
            </div>
          ))}
        </div>
      </div>
      {/* Tags End */}

      {/* Blog Post Start */}
      <div className='relative pt-10 pb-20 px-4 sm:px-6 lg:pt-10 lg:pb-28 lg:px-8'>
        <div className='relative max-w-6xl mx-auto'>
          <div className='mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none'>
            {posts.map((post) => (
              <div
                key={post.title}
                className='flex flex-col rounded-lg shadow-lg overflow-hidden'>
                <div className='flex-shrink-0'>
                  <img
                    className='h-48 w-full object-cover'
                    src={post.imageUrl}
                    alt=''
                  />
                </div>
                <div className='flex-1 bg-[#F4F4F4] p-6 flex flex-col justify-between'>
                  <div className='flex-1'>
                    <a href={post.href} className='block mt-2'>
                      <p className='text-2xl  text-gray-900 text-center font-bold'>
                        {post.title}
                      </p>
                      <p className='mt-3 text-base text-gray-500 text-center'>
                        {post.description}
                      </p>
                    </a>
                  </div>
                  <div className='mt-6 flex justify-center'>
                    <div className='flex-shrink-0'>
                      <div className='text-center'>
                        <Link href='#'>
                          <a className='inline-flex px-10 py-2 text-base font-semibold border-4 rounded-full shadow-sm border-miradorGreen text-miradorGreen'>
                            Read More
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Blog Post End */}

      {/* Contact Start */}
      <div className=' sm:bg-left-float bg-no-repeat bg-contain bg-right'>
        <h2 className='text-center text-3xl pb-4'>Talk to us</h2>

        <div className='flex-auto overflow-y-auto px-4 pb-16 sm:px-6 lg:px-8 lg:pb-24 sm:bg-right-float bg-no-repeat bg-contain '>
          <div className='max-w-lg mx-auto lg:pt-8'>
            <form className='mt-6'>
              <div className='grid grid-cols-12 gap-y-6 gap-x-4'>
                <div className='col-span-full'>
                  <div className='mt-1'>
                    <input
                      type='text'
                      id='name'
                      name='Name'
                      autoComplete='name'
                      placeholder='Name'
                      className='block w-full border-transparent rounded-full sm:text-sm bg-[#F4F4F4]'
                    />
                  </div>
                </div>
                <div className='col-span-full  '>
                  <div className='mt-1 '>
                    <input
                      type='email'
                      id='email-address'
                      name='email-address'
                      autoComplete='email'
                      placeholder='Email address'
                      className='block w-full border-transparent rounded-full sm:text-sm bg-[#F4F4F4]'
                    />
                  </div>
                </div>
                <div className='col-span-full  '>
                  <div className='mt-1 '>
                    <textarea
                      className='mt-1 block w-full rounded-xl bg-[#F4F4F4] border-transparent'
                      placeholder='Message'
                      rows='4'
                    />
                  </div>
                </div>
              </div>
              <div className='mt-6 text-center'>
                <Link href='#'>
                  <a className='inline-flex px-24 py-2 text-base font-semibold rounded-full bg-mirador text-white'>
                    Submit
                  </a>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* Contact End */}

      {/* Testimonial Start */}
      <div className='grid lg:grid-cols-2 lg:grid-flow-row gap-y-5 lg:gap-x-5 items-center'>
        <div className='flex flex-col items-center gap-y-8 overflow-x-auto  z-10 lg:order-first relative lg:left-[20%] bottom-[20%]'>
          <img src='/Group 202.svg' className='w-1/5' />
          <p className='text-center text-4xl'>
            "Insert a quote here about the business, as a testimonial."
          </p>
          <span className='text-3xl font-bold'>Client Name</span>
          <button
            className='px-4 py-2 border-black border rounded-full'
            type='button'>
            Read more
          </button>
        </div>
        <div className='order-first lg:order-last justify-self-end '>
          <img src='/Scroll Group 4.svg' alt='' />
        </div>
      </div>
      {/* Testimonial End */}
    </main>
  )
}
