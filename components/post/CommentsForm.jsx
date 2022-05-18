import React, { useState, useEffect, useRef } from 'react'

export const CommentsForm = ({ slug }) => {
  const [error, setError] = useState(false)  
  const [localStorage, setLocalStorage] = useState(null)
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)

  const commentElement = useRef()
  const nameElement = useRef()
  const emailElement = useRef()
  const storeDataElement = useRef()

  const handleCommentSubmission = () => {

  }

  return (
    <>
      <div>
        <div className='bg-white shadow-lg rounded-lg p-8 pb12 mb-8'>
        <h3 className='text-xl mb-8 font-semibold border-b pb-4'>
          Comments form
        </h3>
        <div className='grid grid-cols-1 gap-4 mb-4'>
          <textarea
            ref={ commentElement }
            className='p-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700'
            placeholder='Comment'
            name='comment'
          />
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4'>
          <input
            ref={ nameElement }
            type="text" 
            className='py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700'
            placeholder='Name'
            name='name'
          />
          <input
            ref={ emailElement }
            type="text" 
            className='py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700'
            placeholder='Email'
            name='email'
          />
        </div>

        {error && <p className='text-xs text-red-500'>All fields are required</p>}

        <div className='mt-8'>
          <button
            type='button'
            onClick={ handleCommentSubmission }
            className='transition duration-500 ease hover:bg-indigo-900 
            inline-block bg-pink-600 text-lgrounded-full text-white px-8 py-3'
            >
          Post comment
          </button>
          { showSuccessMessage && <span className='text-xl float-right font-semibold mt-3 text-green-500'>
            Comment submitted for review!
            </span> }
        </div>

        </div>
      </div>
    </>
  )
}
