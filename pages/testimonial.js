import Link from 'next/link'

const posts = [
  {
    title: 'Blog Post',
    href: '#',
    category: { name: 'Article', href: '#' },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
    imageUrl: '/Group 218.svg',
  },
  {
    title: 'Solution',
    href: '#',
    category: { name: 'Video', href: '#' },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.',
    imageUrl: '/Group 217.svg',
  },
  {
    title: 'Blog Post',
    href: '#',
    category: { name: 'Case Study', href: '#' },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.',
    imageUrl: '/Group 218.svg',
  },
  {
    title: 'Blog Post',
    href: '#',
    category: { name: 'Case Study', href: '#' },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.',
    imageUrl: '/Group 218.svg',
  },
  {
    title: 'Blog Post',
    href: '#',
    category: { name: 'Case Study', href: '#' },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.',
    imageUrl: '/Group 218.svg',
  },
  {
    title: 'Solution',
    href: '#',
    category: { name: 'Video', href: '#' },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.',
    imageUrl: '/Group 217.svg',
  },
  {
    title: 'Blog Post',
    href: '#',
    category: { name: 'Case Study', href: '#' },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.',
    imageUrl: '/Group 218.svg',
  },
  {
    title: 'Blog Post',
    href: '#',
    category: { name: 'Case Study', href: '#' },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.',
    imageUrl: '/Group 218.svg',
  },
  {
    title: 'Solution',
    href: '#',
    category: { name: 'Video', href: '#' },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.',
    imageUrl: '/Group 217.svg',
  },
]

export default function Testimonial() {
  return (
    <div className='max-w-7xl mx-auto'>
      <h2 className='text-4xl font-bold  sm:text-6xl text-center pt-8'>
        <span className='block'>Testimonials</span>
      </h2>

      <h3 className='text-2xl font-normal  sm:text-xl text-center py-4'>
        <span className='block'>Normal SubHeader Text</span>
      </h3>
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
    </div>

  )
}
