import Link from 'next/link'
import Image from 'next/image'

export const Footer = () => {
    return (
      <footer className="sectionContentWrapper pt-4 pb-16 flex justify-between items-center text-sm border-t border-gray-300">
        <div className="text-lg" >IOMesh</div>
        <div className="space-x-4">
          <Link href="/spec">
            <a className="footerLink">Spec</a>
          </Link>
          <a className="footerLink" href="http://iomesh.com/docs/next/about-iomesh/introduction" target="_blank">Docs</a>
          <Link href="/blog">
            <a className="footerLink">Blog</a>
          </Link>
          <Link href="/contact">
            <a className="footerLink">Contact Us</a>
          </Link>
          <span className="text-gray-300"> | </span>
          <a className="hover:opacity-70" href="https://join.slack.com/t/slack-vcm1551/shared_invite/zt-nx33ud5h-~0D_MD5kL0sUrwslB~KF_A" target="_blank">
            <Image
              src="/Slack_footer.svg"
              width={16}
              height={16}
            />
          </a>
          <a className="hover:opacity-70" href="https://twitter.com/iomeshhq" target="_blank">
            <Image
              src="/Twitter_footer.svg"
              width={16}
              height={16}
            />
          </a>
          <a className="hover:opacity-70" href="https://www.youtube.com/channel/UCJV59ZDxjm822LK_oUhi7qA" target="_blank">
            <Image
              src="/YouTube_footer.svg"
              width={16}
              height={16}
            />
          </a>
        </div>
      </footer>
    )
  }