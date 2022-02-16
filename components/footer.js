/* This example requires Tailwind CSS v2.0+ */
const navigation = {
  features: [
    { name: 'GMB Management', href: '#' },
    { name: 'GMB Schedule', href: '#' },
    { name: 'Local Rank Track', href: '#' },
    { name: 'Insights', href: '#' },
  ],
  resources: [
    { name: 'Help', href: '#' },
    { name: 'Teams', href: '#' },
    { name: 'Privacy', href: '#' },
    { name: 'Affiliates', href: '#' },
  ],
}

export default function Footer() {
  return (
    <footer className='py-10 2xl:py-10 bg-mirador'>
      <div className='container max-w-full mx-auto px-8'>
        <div className='flex flex-wrap -mx-4 '>
          <div className='w-full md:w-1/5 px-4 flex '>
            <img className='max-h-54' src='/tower.svg' alt='Company name' />
            <div className='md:hidden pl-10'>
              <img
                className='h-54 md:float-right'
                src='/icon-white.svg'
                alt='Company name'
              />
              <ul role='list' className='mt-4 space-y-2 md:float-right'>
                <li>
                  <a href='#' className='text-base font-normal text-white'>
                    hello@mirador.com
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='text-base font-normal text-white md:float-right'>
                    0384029384
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className='w-full md:w-3/5 px-4 pt-12 md:pt-0'>
            <div className='flex flex-wrap -mx-4'>
              <div className='w-full  md:w-1/3 px-4 mb-16 md:mb-0'>
                <h3 className='text-sm font-bold text-white tracking-wider uppercase'>
                  Features
                </h3>
                <ul role='list' className='mt-4 space-y-4'>
                  {navigation.features.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className='text-base font-normal  text-white'>
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className='w-full  md:w-1/3 px-4 mb-16 md:mb-0'>
                <h3 className='text-sm font-bold text-white tracking-wider uppercase'>
                  Features
                </h3>
                <ul role='list' className='mt-4 space-y-4'>
                  {navigation.resources.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className='text-base font-normal text-white'>
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className='w-full md:w-1/5 px-4 md:mb-0 pr-24 hidden md:block'>
            <img
              className='h-54 md:float-right'
              src='/icon-white.svg'
              alt='Company name'
            />
            <ul role='list' className='mt-4 space-y-2 md:float-right'>
              <li>
                <a href='#' className='text-base font-normal text-white'>
                  hello@mirador.com
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-base font-normal text-white md:float-right'>
                  0384029384
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
