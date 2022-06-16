import React from 'react'
import  Link from 'next/link'
import Image from 'next/image'
import { IconContext } from 'react-icons'

import { footerLinks } from './content/footer'
import NatelhaLogo from '../../public/natelha-logo.png'

export const Footer = () => {
  return (
    <>
      <div className='container mx-auto px-5 mb-8'>
        <div className='w-full flex flex-col md:flex-row gap-8 md:gap-0 align-center justify-between py-8'>
          <div className='md:float-left block'>
            <Link href='/'>
              <a>
                <Image
                  width='150px'
                  height='45.75px'
                  className='cursor-pointer'
                  src={ NatelhaLogo }
                  alt='Na Telha'
                />
              </a>
            </Link>
            <p className='text-white'>
              Um blog sobre o que dá na telha!
            </p>
          </div>

          <div className='flex justify-between items-center w-[125px]'>
            {
              footerLinks.map((link) => (
                <a key={ link.name } href={ link.url } target='_blank'>
                  <IconContext.Provider
                    value={{
                      title: link.name,
                      color: 'white', 
                      className:'social-icons', 
                      size: '32px' 
                    }}>
                    <link.icon />
                  </IconContext.Provider>
                </a>
              ))
            }
          </div>
        </div>
      </div>
    </>
  )
}