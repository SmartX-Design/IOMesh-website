import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from "next/router"
import { useState } from 'react';

export const Topnav = () => {
  const router = useRouter();
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <nav className="topNavWrapper">
      <div className="topNav relative">
        <Link href="/">
          <Image 
            src="/IOMesh_logo_on_white.svg"
            width={168}
            height={84}
          />
        </Link>
        <button
          className="w-12 h-12 hover:bg-iopurple rounded lg:hidden text-iopurple ml-auto hover:text-white outline-none ring-0 transition"
          onClick={handleClick}
        >
          <svg
            className='w-6 h-6 mx-auto'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </button>
        <ul className={`${
            active ? '' : 'hidden'
          } flex flex-col absolute bg-white right-0 top-20 rounded p-4 lg:p-0 lg:bg-transparent lg:relative lg:top-0 lg:flex lg:flex-row lg:items-center lg:space-x-4 shadow-xl lg:shadow-none`}>
          <li className="">
            <Link href="/spec">
              <a className={ `p-4 text-base text-gray-800 hover:text-iopurple block w-full lg:w-auto ${
                router.pathname === "/spec" ? "font-bold" : ""
              }`} >
                Spec
              </a>
            </Link>
          </li>
          <li className="">
            <a className="p-4 text-base text-gray-800 hover:text-iopurple block w-full lg:w-auto" href="http://iomesh.com/docs/next/about-iomesh/introduction" target="_blank">
              Docs
            </a>
          </li>
          <li className="">
            <Link href="/blog">
              <a className={ `p-4 text-base text-gray-800 hover:text-iopurple block w-full lg:w-auto ${
                router.pathname === "/blog" ? "font-bold" : ""
              }`} >
                Blog
              </a>
            </Link>
          </li>
          <li className="">
            <a className="block my-2 lg:my-0 box-border group rounded-full border-gray-800 border-2 hover:border-purple-600 transition text-sm inline-block px-4 py-1.5 font-bold text-gray-800 group-hover:text-iopurple flex align-center space-x-2"  href="https://join.slack.com/t/slack-vcm1551/shared_invite/zt-nx33ud5h-~0D_MD5kL0sUrwslB~KF_A" >
              <Image
                src="/slack.svg"
                width={16}
                height={16}
              />
              <span>We're on Slack!</span>
            </a>
          </li>
          <li className="">
            <Link href="#">
              <a className="block w-full lg:w-ault text-sm text-center inline-block px-4 py-2 font-bold text-white box-border rounded-full bg-gray-800 hover:bg-iopurple transition">
                Get Started
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}