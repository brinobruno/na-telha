import React from 'react'
import  Link from 'next/link'
import Image from 'next/image'

import { footerLinks } from './content/footer'
import NatelhaLogo from '../../public/natelha-logo.png'

export const Footer = () => {
  return (
    <>
      <div className="container mx-auto px-5 mb-8">
        <div className="w-full inline-block py-8">
          <div className="md:float-left block">
            <Link href="/">
              <Image
                width='150px'
                height='45.75px'
                className='cursor-pointer'
                src={ NatelhaLogo }
                alt='Na Telha'
              />
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
                    className="md:float-right mt-10 align-middle text-white transition duration-300 hover:text-[#ff914d] ml-4 font-semibold cursor-pointer">
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