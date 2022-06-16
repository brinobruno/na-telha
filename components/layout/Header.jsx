import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { IconContext } from 'react-icons'
import { RiMenu3Fill } from 'react-icons/ri'

import NatelhaLogo from '../../public/natelha-logo.png'
import { getCategories } from '../../services'

export const Header = () => {
  const [categories, setCategories] = useState([])
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    getCategories()
      .then((newCategories) => setCategories(newCategories))
  }, [])

  const toggleMenu = () => {
    setIsActive(!isActive)
  }

  return (
    <>
      <nav className='container mx-auto px-5 mb-4'>
        <div className='container px-2 md:px-5 mx-auto md:flex md:justify-between md:items-center w-full inline-block py-8'>
          <div className='flex items-center justify-between'>
            <div>
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
            </div>
                  
            <div className='flex md:hidden'>
              <button
                onClick={ toggleMenu }
                type='button'
                className='text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400'
                aria-label='toggle menu'
              >
                <IconContext.Provider
                  value={{
                    className:'menu-icon',
                    size: '32px'
                  }}>
                  <RiMenu3Fill />
                </IconContext.Provider>
              </button>
            </div>
          </div>

          <div className={`items-center md:flex ${ isActive ? 'block absolute bg-[#131516] z-10 h-100 w-screen pb-14 pt-4 -translate-x-[39px] overflow-hidden' : 'hidden' }`}>
            <div className='flex flex-col md:flex-row'>
              {
                categories.map((category) => (
                  <Link key={ category.slug } href={`/category/${category.slug}`}>
                    <span
                    className='text-xl md:text-base mt-[1.65rem] align-middle text-white transition duration-300 hover:text-[#ff914d] ml-10 md:ml-4 font-semibold cursor-pointer'>
                      { category.name }
                    </span>
                  </Link>
                ))
              }
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}