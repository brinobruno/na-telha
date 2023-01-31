import React, { useState, useEffect } from 'react'
import Link from 'next/link'

import { getCategories } from '../services'

export const Categories = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    getCategories()
      .then((newCategories) => setCategories(newCategories.reverse()))
  }, [])

  return (
    <>
      <div className='bg-white shadow-lg rounded-lg px-4 pt-8 mb-8 pb-8
      sm:pb-12'>
        <h3 className='text-xl mb-8 font-semibold border-b pb-4'>
          Tópicos
        </h3>
        { categories.map((category) => (
          <Link key={ category.slug } href={`/category/${category.slug}`}>
            <span className='cursor-pointer block pb-3 mb-3 hover:text-[#ff914d]
            transition-colors duration-250 max-w-max'>
              { category.name }
            </span>
          </Link>
        )) }
      </div>
    </>
  )
}