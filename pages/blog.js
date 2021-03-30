import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'

export default function Spec() {
    return (
    <Layout>
        <Head>
            <title>Blog - IOMesh</title>
        </Head>
        <section className="firstSectionPage">
            <h1 className="text-5xl font-bold text-center w-full">Blog</h1>
        </section> 
    </Layout>
    )
}