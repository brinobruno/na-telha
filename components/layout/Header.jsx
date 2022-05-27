import React, { useState, useEffect } from 'react'
import  Link from 'next/link'
import Image from 'next/image'

import { getCategories } from '../../services'
import NatelhaLogo from '../../public/natelha-logo.png'

export const Header = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    getCategories()
      .then((newCategories) => setCategories(newCategories))
  }, [])

  return (
    <>
      <div className="container mx-auto px-5 mb-4">
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
          </div>

          <div className="hidden md:float-left md:contents">
            {
              categories.map((category) => (
                <Link key={ category.slug } href={`/category/${category.slug}`}>
                  <span
                  className="md:float-right mt-9 align-middle text-white transition duration-300 hover:text-[#ff914d] ml-4 font-semibold cursor-pointer">
                    { category.name }
                  </span>
                </Link>
              ))
            }
          </div>
        </div>
      </div>
    </>
  )
}