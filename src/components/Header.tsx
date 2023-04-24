import Link from 'next/link'
import React from 'react'

export const Header = () => {
  return (<header className="text-gray-600 body-font">
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <Link href={'/'} className="flex text-black dark:text-white title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        Kbar + Nextjs
      </Link>
      <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
        <Link href={'/'} className="mr-5 hover:text-gray-900 text-black dark:text-white">Home</Link>
        <Link href={'/'} className="mr-5 hover:text-gray-900 text-black dark:text-white">About</Link>
      </nav>

    </div>
  </header>
  )
}
