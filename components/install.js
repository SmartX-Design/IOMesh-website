import React from "react"
import Link from "next/link"
import { withRouter } from "next/router"

const Install = ({ router }) => {
    const {
      query: { tab }
    } = router
  
    const isTabOne = tab === "1" || tab == null
    const isTabTwo = tab === "2"
    return (
    <div className="rounded-2xl w-full mx-auto bg-iopurple bg-opacity-10 p-8 text-center">
      <h3 className="text-2xl font-bold">One-line Code to Install IOMesh</h3>
      {/* <h4 className="text-gray-500 mt-2">Just use one line of code to start using IOMesh.</h4>    */}
      <div className="tabWrapper">
        <div className="w-96 h-10 px-1 mx-auto my-4 bg-white rounded-3xl flex items-center">
          <Link scroll={false} href={{ pathname: router.pathname, query: { tab: "1" } }}>
            <a className={ `w-1/2 h-8 leading-8 text-sm rounded-3xl hover:font-bold ${
              isTabOne ? "font-bold bg-iopurple text-white" : "text-gray-800 "
            }`} >RHEL7/CentOS7</a>
          </Link>
          <Link scroll={false} href={{ pathname: router.pathname, query: { tab: "2" } }}>
          <a className={ `w-1/2 h-8 leading-8 text-sm rounded-3xl hover:font-bold ${
              isTabTwo ? "font-bold bg-iopurple text-white" : "text-gray-800 "
            }`} >RHEL8/CentOS8/CoreOS</a>
          </Link>
        </div>
        <div className="tabBody relative max-w-xl mx-auto">
          {isTabOne && <React.Fragment>
              <textarea type="textarea" disabled value="export IOMESH_DATA_CIDR=10.234.1.0/24; curl -sSL https://raw.githubusercontent.com/iomesh/docs/master/scripts/install_iomesh_el7.sh | sh -"
                className="w-full py-2 pl-2 pr-8 h-28 sm:h-20 resize-none bg-gray-900 rounded-md text-indigo-400 font-mono text-sm hover:shadow-lg transition-shadow"
              />
              <button className="px-4 h-8 absolute top-0 right-0 rounded-md text-white text-sm hover:text-iopurple-light">Copy</button>
            </React.Fragment>}
          {isTabTwo && <React.Fragment>
            <textarea type="textarea" disabled value="export IOMESH_DATA_CIDR=10.234.1.0/24; curl -sSL https://raw.githubusercontent.com/iomesh/docs/master/scripts/install_iomesh_el8.sh | sh -"
                className="w-full py-2 pl-2 pr-8 h-28 sm:h-20 resize-none bg-gray-900 rounded-md text-indigo-400 font-mono text-sm hover:shadow-lg transition-shadow"
            />
            <button className="px-4 h-8 absolute top-0 right-0 rounded-md text-white text-sm hover:text-iopurple-light">Copy</button>
          </React.Fragment>}
        </div>
      </div>
      <div className="mt-4">
          <Link href="/">
            <a className="link">Read Docs</a>
          </Link>
          <span> to explore more. Or </span>
          <a className="link"  href="https://join.slack.com/t/slack-vcm1551/shared_invite/zt-nx33ud5h-~0D_MD5kL0sUrwslB~KF_A" >join the community </a>
          on Slack!
        </div>
      </div>
    )
  }
  
  export default withRouter(Install)