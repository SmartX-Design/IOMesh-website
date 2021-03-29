import Head from 'next/head'
import Layout from '../components/layout'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <Layout>
      <Head>
          <title>IOMesh</title>
      </Head>
      <section className="pt-28 pb-20 bg-gradient-to-b from-white to-gray-50">
        <div className="sectionContentWrapper">
          <div className="flex flex-col algin-center mb-10">
            <Image 
              src="/IOMesh_graph.svg"
              width={72}
              height={80}
            />
          </div>
          
          <h1 className="block text-5xl font-bold text-center w-full leading-tight mb-12">
            <p>Power Containerized Stateful Applications</p> 
            <p>with <span className="bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-blue-800">Faster Storage</span></p>
          </h1>

          <div className="heroDesciption text-xl w-2/4 mx-auto mb-20 hover:text-gray-600 transition">
            IOMesh is a <span className="highlighted">distributed storage system</span> specially designed for <span className="highlighted">Kubernetes workloads</span>, providing reliable persistent storage capabilities for <span className="highlighted">containerized stateful applications</span> such as MySQL, Cassandra, and MongoDB.
          </div>

          <div className="rounded-2xl w-2/4 mx-auto bg-iopurple bg-opacity-10 p-8 text-center">
            <h3 className="text-2xl font-bold">Get Started</h3>
            <h4 className="text-gray-500 mt-2">Just use one line of code to start using IOMesh.</h4>
            <div className="relative">
              <input type="textarea" disabled value="export IOMESH_DATA_CIDR=10.234.1.0/24; curl -sSL https://raw.githubusercontent.com/iomesh/docs/master/scripts/install_iomesh_el7.sh | sh -"
                className="w-full p-2 bg-gray-900 rounded-md mt-4 text-indigo-400 font-mono text-sm hover:shadow-lg transition-shadow"
              />
              <button className="px-4 h-10 absolute bottom-0 right-0 text-white text-sm hover:text-iopurple-light ">Copy</button>
            </div>
            <div className="mt-4">
              <Link href="/">
              <a className="text-iopurple hover:text-iopurple-dark">Read Docs</a>
              </Link>
              <span> to explore more. Or </span>
              <a className="text-iopurple hover:text-iopurple-dark"  href="https://join.slack.com/t/slack-vcm1551/shared_invite/zt-nx33ud5h-~0D_MD5kL0sUrwslB~KF_A" >join the community </a>
              on Slack!
            </div>
          </div>
        </div>  
      </section>

      <section className="p-20">
        <div className="sectionContentWrapper">
          <h2 className="block text-4xl font-bold text-center w-full leading-tight mb-20">
            Built for Highly Dynamic and Large Scale Workloads
          </h2>
          <div className="flex items-center">
            <div className="w-2/4 px-12 space-y-6 whatContent mr-6 relative">
              <p>
                Thousands of Pods created and destroyed every minute in kubernetes clusters. IOMesh is built for such highly dynamic and large-scale workloads in the cloud-native era.
              </p>
              <p>
                The design of IOMesh keeps this in mind and aims to provide the performance, reliability, and scalability required by cloud-native applications.
              </p>
            </div>
            <figure className="w-2/4 rounded-xl relative flex flex-col items-center">
              <Image 
                src="/built_for_flatten.png"
                width={400}
                height={400}
              />              
            </figure>
          </div>
        </div>
      </section>

      <section className="p-20 bg-white">
        <div className="sectionContentWrapper">
          <h2 className="block text-4xl font-bold text-center w-full leading-tight mb-20">
            Run Natively on Kubernetes
          </h2>
          <div className="flex">
            <div className="w-2/4 space-y-6 whatContent order-last">
              <p>
                Run natively on Kubernetes and was completely developed utilizing Kubernetes's capabilities.
              </p>
              <p>
                Operations teams can leverage the standard Kubernetes APIs for unified management of both applications and IOMesh storage system, which integrates perfectly with existing DevOps processes.
              </p>
            </div>
            <figure className="w-2/4 rounded-xl relative flex flex-col">
              <Image 
                src="/native.svg"
                width={400}
                height={275}
              />              
            </figure>
          </div>
        </div>
      </section>

      <section className="p-20">
        <div className="sectionContentWrapper">
          <h2 className="block text-4xl font-bold text-center w-full leading-tight mb-20">
            Easily Scale Up or Out as Needed
          </h2>
          <div className="flex flex-col flex-wrap w-2/4 whatContent bg-white rounded-2xl p-12 mx-auto">
            <div className="pb-8">
              Allow starting on a small scale.
            </div>
            <div className="pt-8 border-gray-200 border-t-2">
              Allow expand the storage at will by adding disks or nodes.
            </div>
          </div>
        </div>
      </section>

      <section className="mt-12 bg-white">
        <div className="sectionContentWrapper p-12 ">
          <h2 className="block text-3xl font-bold text-center w-full leading-tight mb-10">
            Architecture
          </h2>
          <figure className="">
            <Image
              src="/IOMesh_Architecture.png"
              width={1182}
              height={716}
            />
          </figure>
        </div>
      </section>

      <section className="py-20">
        <div className="sectionContentWrapper">
          <h2 className="block text-4xl font-bold text-center w-full leading-tight mb-10">
            Why Use IOMesh?
          </h2>
          <div className="grid grid-col-2 gap-8">
            <div className="flex col-span-2 bg-white rounded-xl">
              <div className="p-12 w-2/4">
                <h4 className="text-md font-bold text-gray-500 uppercase mb-2">
                  High Performance
                </h4>
                <h3 className="block text-3xl font-bold text-left w-full mb-8">
                  Better TPS for Database
                </h3>
                <p className="text-xl text-gray-700">
                  IOMesh has shown excellent performance in standard benchmark tests for Kubernetes. The Read/Write Latency is stable. This means that it can provide more stable and efficient data services.
                </p>
                <figure className="text-gray-900 mt-12 w-1/3">
                  <div className="">
                    <span className="text-5xl italic">&lt;</span> <span className="text-5xl font-bold italic">100</span> <span>ms</span>
                  </div>
                  <div className="mt-4 text-gray-500 leading-tight">
                    Read/Write Latency is stablely kept in a low level.
                  </div>
                </figure>
              </div>
              <div className="w-2/4 rounded-r-xl bg-gray-900">
                Performance Chart
              </div>
            </div>
            <div className="p-12 col-span-1 bg-white rounded-xl">
              <h4 className="text-md font-bold text-gray-500 uppercase mb-2">
                No Kernel Dependencies
              </h4>
              <h3 className="block text-3xl font-bold text-left w-full mb-8">
                More Reliable with Efficient Software Fault Isolation
              </h3>
              <figure className="w-full flex flex-col items-center mb-8">
                <Image 
                  src="/no_kernel.png"
                  width={394}
                  height={160}
                />    
              </figure>
              <div className="text-xl text-gray-700 space-y-6">
                <p>
                  IOMesh runs entirely in the userspace. It can provide more reliable service with efficient software fault isolation. When something wrong happens, the rest applications running on the same node can continue to run instead of causing the entire system to crash. 
                </p>
                <p>
                  Simple to deploy and maintain: There is no need to install any kernel module during deployment, and no need to consider kernel version compatibility in the future.
                </p>
              </div>
            </div>
            <div className="col-span-1 p-12 bg-white rounded-xl">
              <h4 className="text-md font-bold text-gray-500 uppercase mb-2">
                Storage Performance Tiering
              </h4>
              <h3 className="block text-3xl font-bold text-left w-full mb-8">
                Make the Most of Your Storage Investment
              </h3>
              <figure className="w-full flex flex-col items-center mb-8">
                <Image 
                  src="/tiering.png"
                  width={394}
                  height={160}
                />    
              </figure>
              <div className="text-xl text-gray-700 space-y-6">
                <p>
                  Support flexible deployment of hybrid disks, such as NVMe SSD, SATA SSD, HDD.
                </p>
                <p>
                  Maximize the storage performance while controlling costs to a certain extent.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="">
        <div className="sectionContentWrapper grid grid-cols-4 gap-6 pb-20">
          <Link href="/">
            <a className="block col-span-2 p-12 group rounded-xl hover:bg-iopurple transition-all">
              <h4 className="text-md font-bold text-gray-600 uppercase group-hover:text-white group-hover:opacity-60 transition">
                Latest Blog
              </h4>
              <h3 className="block text-2xl font-bold text-left w-full mb-4 group-hover:text-white transition">
                Announcing IOMesh 1.0.0
              </h3>
              <p className="h-28 overflow-hidden text-lg bg-clip-text text-transparent bg-gradient-to-b from-gray-700 group-hover:text-white group-hover:opacity-80 transition">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore ...
              </p>
            </a>
          </Link>
          <div className="col-span-2 p-12">
            <h4 className="text-md font-bold text-gray-600 uppercase group-hover:text-white group-hover:opacity-60 transition">
              Stay Tuned
            </h4>
            <h3 className="block text-2xl font-bold text-left w-full mb-4 group-hover:text-white transition">
              Subscribe to Newsletter
            </h3>
            <div className="flex pb-4 mb-4 border-b border-gray-300">
              <input type="text" placeholder="yourname@email.com" className="w-3/4 h-10 p-2 rounded-md border-gray-300 border-2 text-sm hover:border-purple-500 focus:outline-none focus:border-purple-300 focus:ring-2 focus:ring-purple-300"></input>
              <button className="w-1/4 h-10 ml-4 rounded-md bg-gray-900 text-white font-bold hover:bg-iopurple">
                Subscribe
              </button>
            </div>
            <div className="flex w-full">
              
              <a className="w-2/4 text-sm text-gray-700 font-medium hover:text-iopurple" href="https://join.slack.com/t/slack-vcm1551/shared_invite/zt-nx33ud5h-~0D_MD5kL0sUrwslB~KF_A" >
                <div className="mx-auto flex items-center space-x-2">
                  <Image
                    src="/slack.svg"
                    width={12}
                    height={12}
                  />
                  <span>
                    Join IOMesh Slack Community
                  </span>
                </div>        
              </a>
              
              <a className="w-2/4 text-sm text-gray-700 font-medium hover:text-iopurple flex items-center space-x-2" href="https://twitter.com/iomeshhq">
                <div className="mx-auto flex items-center space-x-2">
                  <Image
                      src="/twitter.svg"
                    width={12}
                    height={12}
                  />
                  <span>
                    Follow IOMesh on Twitter
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
