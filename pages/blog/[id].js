import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
import Date from '../../components/date'

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
  props: {
    postData
  }
  }
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
  paths,
  fallback: false
  }
}

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <section className="firstSectionPage">
        <h2 className="px-4 block text-3xl md:text-4xl font-bold text-center w-full leading-tight mb-20">{postData.title}</h2>
      </section>
      <section className="max-w-screen-md mx-auto flex lg:space-x-4 flex-wrap lg:flex-nowrap px-8 lg:px-0">
        <div className="w-full lg:w-1/5 text-sm text-gray-500 leading-8">
          <Date dateString={postData.date} />
        </div>

        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} className="blogArticle"/>
      </section>
    </Layout>
  )
  }
  