import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from "next/router"

export const Topnav = () => {
    const router = useRouter()
    return (
      <nav className="topNav">
          <Link href="/">
            <Image 
                src="/IOMesh_logo_on_white.svg"
                width={168}
                height={84}
            />
          </Link>
           <ul className="flex items-center space-x-4">
                {/* <li className="p-2">
                    <Link href="/">
                        <a className={ `topNavLink ${
                            router.pathname === "/" ? "font-bold" : ""
                        }`} >
                            Home
                        </a>
                    </Link>
                </li> */}
                <li className="p-2">
                    <Link href="/#">
                        <a className={ `text-base text-gray-800 hover:text-purple-600 ${
                            router.pathname === "/spec" ? "font-bold" : ""
                        }`} >
                            Spec
                        </a>
                    </Link>
                </li>
                <li className="p-2">
                    <Link href="/#">
                        <a className={ `text-base text-gray-800 hover:text-purple-600 ${
                            router.pathname === "/spec" ? "font-bold" : ""
                        }`} >
                            Docs
                        </a>
                    </Link>
                </li>
                <li className="p-2">
                    <Link href="/#">
                        <a className={ `text-base text-gray-800 hover:text-purple-600 ${
                            router.pathname === "/spec" ? "font-bold" : ""
                        }`} >
                            Blog
                        </a>
                    </Link>
                </li>
                <li className="box-border group rounded-full border-gray-800 border-3 hover:border-purple-600 transition">
                    <Link href="#">
                        <a className="text-sm inline-block px-4 py-1.5 font-bold text-gray-800 group-hover:text-purple-600 transition flex align-center space-x-2">
                            <Image
                                src="/slack.svg"
                                width={16}
                                height={16}
                            />
                            <span>We're on Slack!</span>
                        </a>
                    </Link>
                </li>
                <li className="box-border rounded-full bg-gray-800 hover:bg-purple-600 flex align-center transition">
                    <Link href="#">
                        <a className="text-sm inline-block px-4 py-2 font-bold text-white">
                            Get Started
                        </a>
                    </Link>
                </li>
            </ul>
      </nav>
    )
  }