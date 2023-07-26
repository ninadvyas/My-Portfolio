import Link from 'next/link';

const LinksMenu = [
  {
    name: 'Home',
    path: '/',
    delay: '150ms'
  },
  {
    name: 'About',
    path: '/about',
    delay: '175ms'
  },
  {
    name: 'Projects',
    path: '/projects',
    delay: '200ms'
  },
  {
    name: 'Frames',
    path: '/frames',
    delay: '225ms'
  },
  // {
  //   name: 'Blogs',
  //   path: 'https://blogbyninad.vercel.app',
  //   delay: '250ms'
  // },
  // {
  //   name: 'Blog',
  //   path: '/blog',
  //   delay: '225ms'
  // },
]


const LinksMenuNav = () => {
  return (
    <>
      {
        LinksMenu.map(({ name, path, delay }) => (
          <li
            key={name}
            className='border-gray-700 text-gray-100 text-sm font-semibold'
            style={{ transitionDelay: delay }}>
            <Link href={path} className='pb-4' >
              {name}
            </Link>
          </li>
          
        ))
      }
     {/* <Link href='https://blogbyninad.vercel.app'   target='_blank' rel='noreferrer' className='text-center ml-[9rem]'>
              <strong className='text-neutral-500 hover:text-blue-500 cursor-pointer text-lg mt-2  font-normal font-san'>blogs</strong>
            </Link> */}
    </>
  )
}

export default LinksMenuNav;