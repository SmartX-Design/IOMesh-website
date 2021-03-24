import Link from 'next/link'
import Image from 'next/image'

export const Footer = () => {
    return (
      <footer className="w-full pt-4 pb-16 flex justify-between items-center text-sm border-t border-gray-400">
        <div className="text-lg" >IOMesh</div>
        <div className="space-x-4">
          <Link href="/#">
            <a className="footerLink">Spec</a>
          </Link>
          <Link href="/#">
            <a className="footerLink">Docs</a>
          </Link>
          <Link href="/#">
            <a className="footerLink">Blog</a>
          </Link>
          <Link href="/#">
            <a className="footerLink">Contact Us</a>
          </Link>
          <span className="text-gray-300"> | </span>
          <Link href="/#">
            <a className="footerLink">Slack</a>
          </Link>
          <Link href="/#">
            <a className="footerLink">Twitter</a>
          </Link>
        </div>
      </footer>
    )
  }