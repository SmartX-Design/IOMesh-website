import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'

export default function Contact() {
  return (
    <Layout>
      <Head>
          <title>Contact Us - IOMesh</title>
      </Head>
      <section className="firstSectionPage">
          <h1 className="text-5xl font-bold text-center w-full">Contact Us</h1>
      </section>
      <section className="py-16">
          <div className="sectionContentWrapper">
            <form className="contactForm">
              <div className="flex space-x-4">
                <div className="w-2/4">
                  <label for="firstName">First Name</label>
                  <input type="text" id="firstName" required className="input w-full error"></input>
                  <div class="text-red-500 text-sm leading-loose">First Name is required.</div>
                </div>
                <div className="w-2/4">
                  <label for="lastName">Last Name</label>
                  <input type="text" id="lastName" required className="input w-full"></input>
                </div>
              </div>
              <div className="flex space-x-4">
                <div className="w-2/4">
                  <label for="company">Company</label>
                  <input type="text" id="company" required className="input w-full"></input>
                </div>
                <div className="w-2/4">
                  <label for="jobTitle">Job Title</label>
                  <input type="text" id="jobTitle" required className="input w-full"></input>
                </div>
              </div>
              <div>
                <label for="email">Work Email</label>
                <input type="email" id="email" required className="input w-full" title="Please input a valid email address."></input>
              </div>
              <div>
                <label for="message">Message</label>
                <textarea id="message" className="input w-full" placeholder="Request for support or demo, or ask us anything."></textarea>
              </div>
              <div className="flex justify-items-end">
                <div className="w-3/4 flex items-center">
                  <input type="checkbox" id="subscribe" className="subscribeCheck"/>
                  <label for="subscribe" className="subscribeCheckToggle mr-2">Toggle</label>
                  <label for="subscribe" className="cursor-pointer hover:text-gray-800">Subscribe to IOMesh Newsletter</label>
                </div>
                <div className="w-1/4">
                  <button className="w-full h-12 rounded-md bg-gray-900 text-white font-bold hover:bg-iopurple">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
      </section>
  </Layout>
  )
}