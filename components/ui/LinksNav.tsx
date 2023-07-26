import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { NavItemHeaderAnimation } from '@/types';

export const navItemsSelected: { [key: string]: NavItemHeaderAnimation } = {
  '/': {
    name: 'home',
    x: 1,
    y: -3,
    w: '60px',
  },
  '/about': {
    name: 'about',
    x: 65,
    y: -3,
    w: '60px',
  },
  '/projects': {
    name: 'projects',
    x: 127,
    y: -3,
    w: '73px',
  },
  '/frames': {
    name: 'frames',
    x: 203,
    y: -3,
    w: '68px',
  },
 
  // '/blog': {
  //   name: 'blog',
  //   x: 203,
  //   y: -3,
  //   w: '45px',
  // }
};
 
const LinksNav = () => {

  let pathname = usePathname() as string;
  return (
    <div className='flex'>
      {
        Object.entries(navItemsSelected).map(([path, { name }]) => {

          const isActive = path === pathname;

          return (
            <Link
              key={path}
              href={path}
              className={clsx(
                'hidden lg:inline-block transition ease hover:text-neutral-200 py-[2px] px-[10px]',
                {
                  'text-neutral-500': !isActive,
                  'font-bold': isActive,
                }
              )}>

              {name}

            </Link>
          )
        })
        
      }

            {/* <Link href='https://blogbyninad.vercel.app'  target='_blank' rel='noreferrer' className='text-center min-[320px]: max-[1020px]:hidden'>
              <strong className='text-neutral-500 hover:text-blue-500 cursor-pointer text-lg mt-2 ml-2 font-normal font-san'>blogs</strong>
            </Link> */}
    
    </div>
  )
}

export default LinksNav;