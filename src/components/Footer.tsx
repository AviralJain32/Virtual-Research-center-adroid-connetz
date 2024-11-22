import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-2xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="flex items-center">
              <Image src="/AdroidCMTLogo2.png" height={32} width={30} className="h-8 mr-3" alt="Adroid CMS Logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Virtual Research Center</span>
            </Link>
          </div>
          <div className="grid gap-8 pl-6 sm:gap-8 sm:gap-y-16 sm:grid-cols-4">
            {/* About Us Section */}
            <div className='sm:text-center '>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">About Us</h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <Link href="/about-us" className="hover:underline">Introduction to Research Center</Link>
                </li>
                <li className="mb-4">
                  <Link href="/team" className="hover:underline">Team</Link>
                </li>
                <li>
                  <Link href="/contact-us" className="hover:underline">Contact Us</Link>
                </li>
              </ul>
            </div>

            {/* Research Section */}
            <div className='sm:text-center'>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Research</h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <Link href="/research-themes" className="hover:underline">Research Themes</Link>
                </li>
                <li className="mb-4">
                  <Link href="/emerging-applications" className="hover:underline">Emerging Applications</Link>
                </li>
                <li className="mb-4">
                  <Link href="/completed-projects" className="hover:underline">Completed Projects</Link>
                </li>
                <li className="mb-4">
                  <Link href="/collaborators" className="hover:underline">Collaborators</Link>
                </li>
                <li>
                  <Link href="/funding-calls" className="hover:underline">Upcoming Funding Calls</Link>
                </li>
              </ul>
            </div>

            {/* Services/Consultancy Section */}
            <div className='sm:text-center'>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Services/Consultancy</h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <Link href="/proposal-writing-training" className="hover:underline">Proposal Writing Training</Link>
                </li>
                <li className="mb-4">
                  <Link href="/impact-case-studies" className="hover:underline">Impact Case Studies</Link>
                </li>
                <li className="mb-4">
                  <Link href="/training-publish-articles" className="hover:underline">Training to Publish High-Quality Articles</Link>
                </li>
                <li>
                  <Link href="/bridging-services" className="hover:underline">Bridging and Connecting Services</Link>
                </li>
              </ul>
            </div>

            {/* Join Us Section */}
            <div className='sm:text-center'>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Join Us</h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <Link href="/join-us/collaborator" className="hover:underline">As a Collaborator</Link>
                </li>
                <li className="mb-4">
                  <Link href="/join-us/researcher" className="hover:underline">As a Researcher</Link>
                </li>
                <li>
                  <Link href="/join-us/consultant" className="hover:underline">As a Consultant</Link>
                </li>
              </ul>
            </div>

            {/* Resources and Publications Section */}
            <div className='sm:text-center '>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources and Publications</h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <Link href="/publications/journals" className="hover:underline">Journals</Link>
                </li>
                <li className="mb-4">
                  <Link href="/publications/conferences" className="hover:underline">Conferences</Link>
                </li>
                <li className="mb-4">
                  <Link href="/publications/books-chapters" className="hover:underline">Books and Chapters</Link>
                </li>
                <li className="mb-4">
                  <Link href="/publications/monographs" className="hover:underline">Monographs</Link>
                </li>
                <li className="mb-4">
                  <Link href="/resources/datasets" className="hover:underline">Datasets</Link>
                </li>
                <li className="mb-4">
                  <Link href="/resources/tools" className="hover:underline">Tools and Software</Link>
                </li>
                <li className="mb-4">
                  <Link href="/resources/open-access" className="hover:underline">Open Access Research and Guidelines</Link>
                </li>
                <li>
                  <Link href="/resources/collaboration-portals" className="hover:underline">Collaboration Portals and Forum Links</Link>
                </li>
              </ul>
            </div>

            {/* Professional Development Section */}
            <div className='sm:text-center'>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Professional Development</h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <Link href="/events/upcoming" className="hover:underline">Upcoming and Past Events</Link>
                </li>
                <li className="mb-4">
                  <Link href="/courses/professional-development" className="hover:underline">Professional Development Courses</Link>
                </li>
                <li>
                  <Link href="/virtual-research-center" className="hover:underline">Virtual Research Learning Center</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <Link href="/" className="hover:underline">Virtual Research Center™</Link>. All Rights Reserved.</span>
          <div className="flex mt-4 sm:justify-center sm:mt-0 space-x-6">
            <Link href="https://www.facebook.com/profile.php?id=61565882447804&mibextid=LQQJ4d" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                <path fillRule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clipRule="evenodd" />
              </svg>
              <span className="sr-only">Facebook page</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
