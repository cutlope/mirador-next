import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'

const headerLinks = [
  {
    name: 'Link 1',
    description:
      'Get a better understanding of where your traffic is coming from.',
    href: '#',
  },
  {
    name: 'Link 2',
    description: 'Speak directly to your customers in a more meaningful way.',
    href: '#',
  },
  {
    name: 'Link 3',
    description: "Your customers' data will be safe and secure.",
    href: '#',
  },
  {
    name: 'Link 4',
    description: "Connect with third-party tools that you're already using.",
    href: '#',
  },
]

export default function Header() {
  return (
    <Popover className='relative bg-white'>
      <div className='flex justify-between items-center py-6 px-6 lg:justify-start lg:space-x-10'>
        <div>
          <a href='#' className='hidden lg:flex'>
            <span className='sr-only'>Mirador</span>
            <img className='h-8 w-auto sm:h-10' src='icon.svg' alt='logo' />
          </a>
          <a href='#' className='lg:hidden'>
            <span className='sr-only'>Mirador</span>
            <img className='h-14 w-14' src='small-logo.svg' alt='logo' />
          </a>
        </div>

        {/* Mobile DropDown Button */}
        <div className='-mr-2 -my-2 lg:hidden'>
          <Popover.Button className='bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
            <span className='sr-only'>Open menu</span>
            <img
              src='menu.svg'
              className='h-10 w-10'
              aria-hidden='true'
              alt='menu'
            />
          </Popover.Button>
        </div>

        {/* Desktop Header Links  */}
        <div className='hidden lg:flex-1 lg:flex lg:items-center lg:justify-end'>
          <div className='flex space-x-10'>
            {headerLinks.map((item) => (
              <a
                key={item.name}
                href='#'
                className='text-2xl font-semibold text-mirador py-2'>
                {item.name}
              </a>
            ))}

            <a
              href='#'
              className='inline-flex items-center justify-center px-12 py-2 border border-transparent rounded-full shadow-sm text-2xl font-semibold text-white bg-mirador'>
              CTA LINK
            </a>
          </div>
        </div>
      </div>

      {/* Mobile DropDown Context */}
      <Transition
        as={Fragment}
        enter='duration-200 ease-out'
        enterFrom='opacity-0 scale-95'
        enterTo='opacity-100 scale-100'
        leave='duration-100 ease-in'
        leaveFrom='opacity-100 scale-100'
        leaveTo='opacity-0 scale-95'>
        <Popover.Panel
          focus
          className='absolute top-0 inset-x-0 p-2 transition transform origin-top-right lg:hidden'>
          <div className='rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50'>
            <div className='pt-5 pb-6 px-5'>
              <div className='flex items-center justify-between'>
                <div>
                  <img
                    className='h-14 w-14'
                    src='small-logo.svg'
                    alt='Mirador'
                  />
                </div>
                <div className='-mr-2'>
                  <Popover.Button className='bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
                    <span className='sr-only'>Close menu</span>
                    <XIcon className='h-6 w-6' aria-hidden='true' />
                  </Popover.Button>
                </div>
              </div>
              <div className='mt-6'>
                <nav className='grid gap-6'>
                  {headerLinks.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className='-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50'>
                      <a
                        href='#'
                        className='text-2xl font-semibold text-mirador py-2'>
                        {item.name}
                      </a>
                    </a>
                  ))}
                </nav>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}
