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
      <section className="pt-28 pb-20">
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

        <div className="text-xl w-2/4 mx-auto mb-20">
          IOMesh is a distributed storage system specially designed for Kubernetes workloads, providing reliable persistent storage capabilities for containerized stateful applications such as MySQL, Cassandra, and MongoDB.
        </div>

        <div className="rounded-2xl w-2/4 mx-auto bg-white bg-opacity-70 p-8 text-center">
          <h3 className="text-2xl font-bold">Get Started</h3>
          <h4 className="text-gray-500 mt-2">Just use one line of code to start using IOMesh.</h4>
          <div className="relative">
            <input type="text" disabled value="install place-holder-iomesh-address.pkg"
              className="w-full h-10 p-2 bg-gray-900 rounded-md mt-4 text-indigo-400 font-mono text-sm hover:shadow-lg transition-shadow"
            />
            <button className="px-4 h-10 absolute bottom-0 right-0 text-white text-sm hover:text-purple-400 ">Copy</button>
          </div>
          <div className="mt-4">
            <Link href="/">
             <a className="text-purple-500 hover:text-purple-600">Read Docs</a>
            </Link>
            <span> to explore more. Or </span>
             <Link href="/">
              <a className="text-purple-500 hover:text-purple-600">join the community</a>
             </Link> on Slack!
          </div>
        </div>
      </section>

      <section className="p-20">
        <h2 className="block text-4xl font-bold text-center w-full leading-tight mb-20">
          Built for Highly Dynamic and Large Scale Workloads
        </h2>
        <div className="flex">
          <div className="w-2/4 space-y-6 text-xl text-gray-700 mr-12">
            <p>
              Thousands of Pods created and destroyed every minute in kubernetes clusters. IOMesh is built for such highly dynamic and large-scale workloads in the cloud-native era.
            </p>
            <p>
              The design of IOMesh keeps this in mind and aims to provide the performance, reliability, and scalability required by cloud-native applications.
            </p>
          </div>
          <figure className="w-2/4 rounded-xl bg-white font-bold text-5xl text-gray-400 text-center py-20">
            Placehoder
          </figure>
        </div>
      </section>

      <section className="p-20">
        <h2 className="block text-4xl font-bold text-center w-full leading-tight mb-20">
          Run Natively on Kubernetes and Integrate Perfectly with Existing Workflows
        </h2>
        <div className="flex">
          <div className="w-2/4 space-y-6 text-xl text-gray-700 order-last">
            <p>
              Run natively on Kubernetes and was completely developed utilizing Kubernetes's capabilities.
            </p>
            <p>
              Operations teams can leverage the standard Kubernetes APIs for unified management of both applications and IOMesh storage system, which integrates perfectly with existing DevOps processes.
            </p>
          </div>
          <figure className="w-2/4 mr-12 rounded-xl bg-white font-bold text-5xl text-gray-400 text-center py-20">
            Placehoder
          </figure>
        </div>
      </section>

      <section className="p-20">
        <h2 className="block text-4xl font-bold text-center w-full leading-tight mb-20">
          Easily Scale Up or Out as Needed
        </h2>
        <div className="flex">
          <div className="w-2/4 space-y-6 text-xl text-gray-700">
            <figure className="w-20 h-20 rounded-xl bg-purple-700">
            </figure>
            <div>
              Allow starting on a small scale.
            </div>
          </div>
          <div className="w-2/4 space-y-6 text-xl text-gray-700">
            <figure className="w-20 h-20 rounded-xl bg-purple-700">
            </figure>
            <div>
              Allow expand the storage at will by adding disks or nodes.
            </div>
          </div>
        </div>
      </section>

      <section className="p-12 rounded-2xl bg-white mt-12">
        <h2 className="block text-3xl font-bold text-center w-full leading-tight mb-10">
          Architecture
        </h2>
        <figure className="w-full h-64 rounded-xl bg-gray-300 font-bold text-5xl text-gray-400 text-center py-20">
            Placehoder
        </figure>
      </section>

      <section className="py-20">
        <h2 className="block text-4xl font-bold text-center w-full leading-tight mb-10">
          Why use IOMesh?
        </h2>
        <div className="grid grid-col-2 gap-8">
          <div className="flex col-span-2 bg-white rounded-xl">
            <div className="p-12 w-2/4">
              <h4 className="text-md font-bold text-gray-500 uppercase">
                High Performance
              </h4>
              <h3 className="block text-2xl font-bold text-left w-full mb-8">
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
            <h4 className="text-md font-bold text-gray-500 uppercase">
              No Kernel Dependencies
            </h4>
            <h3 className="block text-2xl font-bold text-left w-full mb-8">
              More Reliable with Efficient Software Fault Isolation
            </h3>
            <figure className="w-full h-64 rounded-xl bg-gray-300 font-bold text-5xl text-gray-400 text-center py-20 mb-8">
              Placehoder
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
            <h4 className="text-md font-bold text-gray-500 uppercase">
              Storage Performance Tiering
            </h4>
            <h3 className="block text-2xl font-bold text-left w-full mb-8">
              Make the Most of Your Storage Investment
            </h3>
            <figure className="w-full h-64 rounded-xl bg-gray-300 font-bold text-5xl text-gray-400 text-center py-20 mb-8">
              Placehoder
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
      </section>

      <section className="grid grid-cols-4 gap-6 pb-20">
        <Link href="/">
          <a className="block col-span-2 p-12 group rounded-xl hover:bg-purple-600 transition-all">
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
            <button className="w-1/4 h-10 ml-4 rounded-md bg-gray-900 text-white font-bold hover:bg-purple-600">
              Subscribe
            </button>
          </div>
          <div className="flex w-full">
            <Link href="/">
              <a className="w-2/4 text-sm text-gray-700 font-medium hover:text-purple-600">
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
            </Link>
            <Link href="/">
              <a className="w-2/4 text-sm text-gray-700 font-medium hover:text-purple-600 flex items-center space-x-2">
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
            </Link>
          </div>
        </div>
        
      </section>
    </Layout>
  )
}
