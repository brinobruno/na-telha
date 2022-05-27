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
                width='200px'
                height='61.9px'
                className='natelha-logo'
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