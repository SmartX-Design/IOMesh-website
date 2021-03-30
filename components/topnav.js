import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from "next/router"

export const Topnav = () => {
    const router = useRouter()
    return (
      <nav className="topNavWrapper">
        <div className="topNav">
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
                <li className="">
                    <Link href="/spec">
                        <a className={ `p-4 text-base text-gray-800 hover:text-iopurple ${
                            router.pathname === "/spec" ? "font-bold" : ""
                        }`} >
                            Spec
                        </a>
                    </Link>
                </li>
                <li className="">
                    <a className="p-4 text-base text-gray-800 hover:text-iopurple" href="http://iomesh.com/docs/next/about-iomesh/introduction" target="_blank">
                        Docs
                    </a>
                </li>
                <li className="">
                    <Link href="/blog">
                        <a className={ `p-4 text-base text-gray-800 hover:text-iopurple ${
                            router.pathname === "/blog" ? "font-bold" : ""
                        }`} >
                            Blog
                        </a>
                    </Link>
                </li>
                <li className="box-border group rounded-full border-gray-800 border-2 hover:border-purple-600 transition">
                    <a className="text-sm inline-block px-4 py-1.5 font-bold text-gray-800 group-hover:text-iopurple transition flex align-center space-x-2"  href="https://join.slack.com/t/slack-vcm1551/shared_invite/zt-nx33ud5h-~0D_MD5kL0sUrwslB~KF_A" >
                        <Image
                            src="/slack.svg"
                            width={16}
                            height={16}
                        />
                        <span>We're on Slack!</span>
                    </a>
                </li>
                <li className="box-border rounded-full bg-gray-800 hover:bg-iopurple flex align-center transition">
                    <Link href="#">
                        <a className="text-sm inline-block px-4 py-2 font-bold text-white">
                            Get Started
                        </a>
                    </Link>
                </li>
            </ul>
        </div>
      </nav>
    )
  }