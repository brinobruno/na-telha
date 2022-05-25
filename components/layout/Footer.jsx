import React from 'react'
import  Link from 'next/link'

import { footerLinks } from './content/footer'

export const Footer = () => {
  return (
    <>
      <div className="container mx-auto px-5 mb-8">
        <div className="border-b w-full inline-block border-blue-400 py-8">
          <div className="md:float-left block">
            <Link href="/">
              <span className="cursor-pointer font-bold text-4xl text-white">
                naTelha
              </span>
            </Link>
            <p className='text-white'>
              Um blog sobre o que dá na telha!
            </p>
          </div>

          <div className="hidden md:float-left md:contents">
            {
                footerLinks.map((link) => (
                  <a key={ link.name } href={ link.url } target='_blank'>
                    <span
                    className="md:float-right mt-10 align-middle text-white ml-4 font-semibold cursor-pointer">
                      { link.name }
                    </span>
                  </a>
                ))
              }
          </div>
        </div>
      </div>
    </>
  )
}