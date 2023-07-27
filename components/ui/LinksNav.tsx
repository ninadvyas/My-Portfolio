import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { NavItemHeaderAnimation } from '@/types';

export const navItemsSelected: { [key: string]: NavItemHeaderAnimation } = {
  '/': {
    name: 'HOME',
    x: 1,
    y: -3,
    w: '66px',
  },
  '/about': {
    name: 'ABOUT',
    x: 71,
    y: -3,
    w: '65px',
  },
  '/projects': {
    name: 'PROJECTS',
    x: 145,
    y: -3,
    w: '96px',
  },
  '/frames': {
    name: 'FRAMES',
    x: 244,
    y: -3,
    w: '79px',
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