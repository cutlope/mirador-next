export default function Blog() {
  return (
    <div className='bg-[#386C79] bg-left-flower bg-no-repeat bg-contain mt-10'>
      <div className='bg-right-flower bg-no-repeat bg-contain bg-right'>
        <div className='max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8'>
          <h2 className='text-4xl font-extrabold text-white sm:text-5xl'>
            <img
              className='absolute top-0 translate-x-64 scale-50 pt-16'
              src='/Group 24.svg'
            />
            <span className='block'>Header Text</span>
          </h2>
          <p className='mt-4 text-lg leading-6 text-white'>
            Ac euismod vel sit maecenas
          </p>
          <p className='mt-2 w-full inline-flex items-center justify-center px-5 py-3 text-base font-medium sm:w-auto text-white'>
            October 31st, 2021
          </p>
        </div>
      </div>
    </div>
  )
}
