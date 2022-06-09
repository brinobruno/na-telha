import React, { useState, useEffect, useRef } from 'react'
import { BsSoundwave } from 'react-icons/bs'

import { submitComment } from '../../services'

export const CommentsForm = ({ slug }) => {
  const [error, setError] = useState(false)  
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)

  const commentElement = useRef()
  const nameElement = useRef()
  const emailElement = useRef()
  const storeDataElement = useRef()

  useEffect(() => {
    nameElement.current.value = window.localStorage.getItem('name')
    emailElement.current.value = window.localStorage.getItem('email')
  }, [])

  const handleCommentSubmission = () => {
    setError(false)

    const { value: comment } = commentElement.current
    const { value: name } = nameElement.current
    const { value: email } = emailElement.current
    const { checked: storeData } = storeDataElement.current

    if(!comment || !name || !email) {
      setError(true)
      return
    }

    const commentObj = {
      name, email, comment, slug
    }

    if(storeData) {
      window.localStorage.setItem('name', name)
      window.localStorage.setItem('email', email)
    }

    else {
      window.localStorage.removeItem('name', name)
      window.localStorage.removeItem('email', email)
    }

    submitComment(commentObj)
      .then((_response) => {
        setShowSuccessMessage(true)

        setTimeout(() => {
          setShowSuccessMessage(false)
        }, 3000)
      })
  }

  return (
    <>
      <div>
        <div className='bg-white shadow-lg rounded-lg p-8 pb12 mb-8'>
        <h3 className='text-xl mb-8 font-semibold border-b pb-4 flex items-center gap-2'>
          Solta a voz! <BsSoundwave />
        </h3>
        <div className='grid grid-cols-1 gap-4 mb-4'>
          <textarea
            ref={ commentElement }
            className='p-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700'
            placeholder='Deixe seu comentário aqui'
            name='comment'
          />
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4'>
          <input
            ref={ nameElement }
            type="text" 
            className='py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700'
            placeholder='Nome'
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

        <div className='grid grid-cols-1 gap-4 mb-4'>
          <div>
            <input
              ref={ storeDataElement }
              type="checkbox"
              id='storeData'
              name='storeData'
              value={ true }
            />
            <label
              htmlFor='storeData'
              className='select-none text-gray-500 ml-2 cursor-pointer'
            >
              Lembre meu nome e email para a próxima vez que eu comentar
            </label>
          </div>
        </div>

        {error && <p className='text-xs text-red-500'>Todos os campos são obrigatórios.</p>}

        <div className='mt-8'>
          <button
            type='button'
            onClick={ handleCommentSubmission }
            className='transition duration-500 ease hover:bg-[#E17938]
            inline-block bg-[#ff914d] text-lg rounded-full text-white px-8 py-3'
            >
          Postar comentário
          </button>
          { showSuccessMessage && <span className='text-xl float-right font-semibold mt-3 text-green-500'>
            Comentário enviado para revisão!
            </span> }
        </div>

        </div>
      </div>
    </>
  )
}
