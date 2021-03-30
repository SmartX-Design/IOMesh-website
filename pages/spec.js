import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Layout from '../components/layout'

export default function Spec() {
    return (
    <Layout>
        <Head>
            <title>Feature Specification - IOMesh</title>
        </Head>
        <section className="firstSectionPage">
            <h1 className="text-5xl font-bold text-center w-full">Spec</h1>
        </section> 
        <section className="py-20">
          <div className="sectionContentWrapper">
            <table className="table-fixed max-w-screen-lg mx-auto text-left bg-white lg:rounded-lg">
              <thead className="text-xl border-b-2 border-gray-200">
                <tr className="h-20">
                    <th className="w-2/5 px-8"></th>
                    <th className="w-1/3 px-8 text-center">Community Edition</th>
                    <th className="w-1/3 px-8 text-center">Enterprise Edition</th>
                </tr>
              </thead>
              <tbody className="text-base text-gray-500">
                <tr className="text-sm uppercase font-bold h-12 text-gray-900">
                  <td className="px-8">Support</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr className="border-b-2 border-gray-100">
                    <td className="px-8 py-2 text-gray-800">Support</td>
                    <td className="px-8 py-2 text-center"><a href="https://iomesh.slack.com" target="_blank" className="link">Community Support via Slack</a></td>
                    <td className="px-8 py-2 text-center"><Link href="/contact"><a className="link">24x7 Enterprise Support</a></Link></td>
                </tr>
                <tr className="text-base uppercase font-bold h-12 text-gray-900">
                    <td className="px-8">Features</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="px-8 py-2 text-gray-800">Support Block Volume and Mounted/File Volume</td>
                  <td className="px-8 py-2 text-center">
                    <Image
                      src="/check.svg"
                      width={16}
                      height={16}
                    />
                  </td>
                  <td className="px-8 py-2 text-center">
                    <Image
                      src="/check.svg"
                      width={16}
                      height={16}
                    /></td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="px-8 py-2 text-gray-800">Shared Volumes</td>
                  <td className="px-8 py-2 text-center">
                    <Image
                      src="/check.svg"
                      width={16}
                      height={16}
                    /></td>
                  <td className="px-8 py-2 text-center">
                    <Image
                      src="/check.svg"
                      width={16}
                      height={16}
                    /></td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="px-8 py-2 text-gray-800">Volume Expansion</td>
                  <td className="px-8 py-2 text-center">
                    <Image
                      src="/check.svg"
                      width={16}
                      height={16}
                    /></td>
                  <td className="px-8 py-2 text-center">
                    <Image
                      src="/check.svg"
                      width={16}
                      height={16}
                    /></td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="px-8 py-2 text-gray-800">Volume Cloning</td>
                  <td className="px-8 py-2 text-center">
                    <Image
                      src="/check.svg"
                      width={16}
                      height={16}
                    /></td>
                  <td className="px-8 py-2 text-center">
                    <Image
                      src="/check.svg"
                      width={16}
                      height={16}
                    /></td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="px-8 py-2 text-gray-800">Snapshots and Recovery</td>
                  <td className="px-8 py-2 text-center">
                    <Image
                      src="/check.svg"
                      width={16}
                      height={16}
                    /></td>
                  <td className="px-8 py-2 text-center">
                    <Image
                      src="/check.svg"
                      width={16}
                      height={16}
                    /></td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="px-8 pt-2 pb-8 text-gray-800">Aggregating Volumes for Storage Pooling across Hosts</td>
                  <td className="px-8 pt-2 pb-8 text-center">
                    <Image
                      src="/check.svg"
                      width={16}
                      height={16}
                    /></td>
                  <td className="px-8 pt-2 pb-8 text-center">
                    <Image
                      src="/check.svg"
                      width={16}
                      height={16}
                    /></td>
                </tr>
              </tbody>
            </table>
          </div>

        </section>
    </Layout>
    )
}