import Link from 'next/link'
import Image from 'next/image'

export const Footer = () => {
    return (
      <footer className="sectionContentWrapper pt-4 pb-16 flex justify-between items-center text-sm border-t border-gray-400">
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
          <a className="footerLink" href="https://join.slack.com/t/slack-vcm1551/shared_invite/zt-nx33ud5h-~0D_MD5kL0sUrwslB~KF_A" >Slack</a>
          <a className="footerLink" href="https://twitter.com/iomeshhq">Twitter</a>
        </div>
      </footer>
    )
  }