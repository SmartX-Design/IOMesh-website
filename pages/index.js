import Head from 'next/head'
import Layout from '../components/layout'
import Install from '../components/install'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <Layout>
      <Head>
          <title>IOMesh</title>
      </Head>
      <section className="firstSection">
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
            <p>with <span className="bg-clip-text text-transparent bg-gradient-to-br from-iopurple-light to-iopurple-dark">Faster Storage</span></p>
          </h1>

          <div className="heroDesciption text-3xl leading-10 text-center lg:w-2/3 mx-auto mb-20 text-gray-600 hover:text-gray-900 transition">
            A distributed storage system providing persistent storage for stateful applications in Kubernetes.
          </div>

          <div className="w-full flex">
            <a href="#install" className="mx-auto box-border rounded-full bg-gradient-to-br from-iopurple-light to-iopurple-dark hover:from-iopurple hover:to-blue-600 hover:shadow-md transform hover:scale-105 transition-transform text-lg px-6 py-2 font-bold text-white">
              Install IOMesh Now
            </a>
          </div>

        </div>  
      </section>

      <section className="py-20">
        <div className="sectionContentWrapper">
          <h2 className="block text-4xl font-bold text-center w-full leading-tight mb-20">
            Fast, Feasible, Flexible
          </h2>
          <div className="flex items-start flex-wrap space-y-8 lg:space-y-0 lg:flex-nowrap">
            <div className="w-full lg:w-1/3 lg:px-4 xl:px-8 space-y-6 mr-6 relative">
              <figure className="">
                <Image 
                  src="/dynamic.svg"
                  width={40}
                  height={40}
                />              
              </figure>
              <h3 className="text-2xl text-gray-900 font-bold">
                Built for Highly Dynamic and Large-Scale Workloads
              </h3>
              <p className="text-lg">
                IOMesh is designed to provide the performance, reliability, and scalability required by cloud-native applications. 
              </p>
            </div>
            <div className="w-full lg:w-1/3 lg:px-4 xl:px-8 space-y-6 mr-6 relative">
              <figure className="">
                <Image 
                  src="/integrate.svg"
                  width={40}
                  height={40}
                />              
              </figure>
              <h3 className="text-2xl text-gray-900 font-bold">
                Integrates Perfectly with Your Existing Workflows
              </h3>
              <p className="text-lg">
                IOMesh runs natively on Kubernetes. The standard k8s primitives are sufficient to manage IOMesh. 
              </p>
            </div>
            <div className="w-full lg:w-1/3 lg:px-4 xl:px-8 space-y-6 relative">
              <figure className="">
                <Image 
                  src="/scale.svg"
                  width={40}
                  height={40}
                />              
              </figure>
              <h3 className="text-2xl text-gray-900 font-bold">
                Easy to Scale Up or Out as Needed
              </h3>
              <p className="text-lg">
                IOMesh allows you to start small and expand storage at will by adding disks or nodes. 
              </p>
            </div>
           
          </div>
        </div>
      </section>

      <section className="mt-12 bg-white">
        <div className="sectionContentWrapper p-12 ">
          <h2 className="block text-3xl font-bold text-center w-full leading-tight mb-10">
            Architecture
          </h2>
          <figure className="flex flex-col items-center">
            <Image
              src="/IOMesh_Architecture.png"
              width={800}
              height={484}
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
            <div className="flex flex-wrap md:flex-nowrap col-span-2 bg-white rounded-xl hover:shadow-lg transition-shadow   duration-500">
              <div className="p-6 md:p-8 lg:p-10 w-full md:w-2/4">
                <h4 className="text-md font-bold text-gray-500 uppercase mb-2">
                  High Performance
                </h4>
                <h3 className="block text-3xl font-bold text-left w-full mb-8">
                  Better TPS for Database
                </h3>
                <p className="text-xl text-gray-700">
                  IOMesh performs very well in benchmark tests for Kubernetes, with greater IOPS and lower I/O latency, which means that it can provide more stable data services.
                </p>
                <figure className="text-gray-900 mt-12 w-1/2 xl:w-1/3">
                  <div className="">
                    <span className="text-5xl italic">&lt;</span> <span className="text-5xl font-bold italic">100</span> <span>ms</span>
                  </div>
                  <div className="mt-4 text-gray-500 leading-tight">
                    I/O Latency Latency is stablely kept in a low level.
                  </div>
                </figure>
              </div>
              <div className="w-full md:w-2/4  rounded-b-xl md:rounded-r-xl md:rounded-bl-none bg-gray-900">
                Performance Chart
              </div>
            </div>
            <div className="p-6 md:p-8 lg:p-10 col-span-2 bg-white rounded-xl flex flex-wrap md:flex-nowrap items-center space-y-8 md:space-y-0  hover:shadow-lg transition-shadow   duration-500">
              <div className="w-full md:w-2/4">
                <h4 className="text-md font-bold text-gray-500 uppercase mb-2">
                  No Kernel Dependencies
                </h4>
                <h3 className="block text-3xl font-bold text-left w-full mb-8">
                  Efficient Software Fault Isolation
                </h3>
                
                <div className="text-xl text-gray-700 space-y-6">
                  <p>
                    IOMesh runs entirely in user space, minimizing the crash of the entire system. 
                  </p>
                  <p>
                    This can help you simplify deployment and maintenance without having to consider kernel modules.
                  </p>
                </div>
              </div>

              <figure className="w-full md:w-2/4 flex flex-col items-center">
                <Image 
                  src="/no_kernel.png"
                  width={394}
                  height={160}
                />    
              </figure>

            </div>
            <div className="p-6 md:p-8 lg:p-10 col-span-2 bg-white rounded-xl flex items-center md:flex-nowrap items-end space-y-8 md:space-y-0 hover:shadow-lg transition-shadow   duration-500">
              <div className="w-full md:w-2/4">
                <h4 className="text-md font-bold text-gray-500 uppercase mb-2">
                  Automated Storage Tiering
                </h4>
                <h3 className="block text-3xl font-bold text-left w-full mb-8">
                  Make the Most out of Your Money
                </h3>
                <div className="text-xl text-gray-700 space-y-6">
                  <p>
                    Support flexible deployment of hybrid disks, such as NVMe SSD, SATA SSD, HDD.
                  </p>
                  <p>
                    Maximize the storage performance while controlling costs to a certain extent.
                  </p>
                </div>
              </div>
              
              <figure className="w-full md:w-2/4 flex flex-col items-center">
                <Image 
                  src="/tiering.png"
                  width={394}
                  height={160}
                />    
              </figure>
              
            </div>
          </div>
        </div>
      </section>
      <section className="py-10 bg-white"  id="install">
        <div className="sectionContentWrapper">
          <Install></Install> 
        </div>
      </section>

      <section className="py-10">
        <div className="sectionContentWrapper grid grid-cols-4 gap-6 pb-20">
          <Link href="/blog/annoucing-iomesh-1.0.0">
            <a className="block col-span-4 lg:col-span-2 p-12 group rounded-xl hover:bg-iopurple transition-all">
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
          <div className="col-span-4 lg:col-span-2 p-12">
            <h4 className="text-md font-bold text-gray-600 uppercase group-hover:text-white group-hover:opacity-60 transition">
              Stay Tuned
            </h4>
            <h3 className="block text-2xl font-bold text-left w-full mb-4 group-hover:text-white transition">
              Subscribe to Newsletter
            </h3>
            <div className="flex pb-2">
            {/* <div className="flex pb-4 mb-4 border-b border-gray-300"> */}
              <input type="text" placeholder="yourname@email.com" className="w-3/4 input"></input>
              <button className="w-1/4 min-w-min px-4 h-12 ml-4 rounded-md bg-gray-900 text-white font-bold hover:bg-iopurple">
                Subscribe
              </button>
            </div>
            <div className="flex w-full text-sm text-gray-500">
              Only product updates, at most 1 email/month.
              {/* <a className="w-2/4 text-sm text-gray-700 font-medium hover:text-iopurple" href="https://join.slack.com/t/slack-vcm1551/shared_invite/zt-nx33ud5h-~0D_MD5kL0sUrwslB~KF_A" target="_blank">
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
              
              <a className="w-2/4 text-sm text-gray-700 font-medium hover:text-iopurple flex items-center space-x-2" href="https://twitter.com/iomeshhq" target="_blank">
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
              </a> */}
            </div>
          </div>
        </div>
      </section>
    
      
    </Layout>
  )
}
