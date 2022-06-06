import React, { useState, useEffect } from 'react'
import Link from 'next/link'
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
          <div className="flex items-center justify-between">
            <div>
              <Link href="/">
                <Image
                  width='150px'
                  height='45.75px'
                  className='cursor-pointer'
                  src={ NatelhaLogo }
                  alt='Na Telha'
                />
              </Link>
            </div>
            <div className="visible">
              <div className="">
                {
                  categories.map((category) => (
                    <Link key={ category.slug } href={`/category/${category.slug}`}>
                      <span
                      className="mt-[1.65rem] align-middle text-white transition duration-300 hover:text-[#ff914d] ml-4 font-semibold cursor-pointer">
                        { category.name }
                      </span>
                    </Link>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}