import React, { useState, useEffect } from 'react'
import moment from 'moment'
import parse from 'html-react-parser'

import { getComments } from '../../services'

export const Comments = ({ slug }) => {
  const [comments, setComments] = useState([])

  useEffect(() => {
    getComments(slug)
      .then((result) => setComments(result))
  }, [])

  return (
    <>
      { comments.length > 1 && (
        <div className='bg-white shadow-lg rounded-lg p-8 pb-12 mb-8'>
          <h3 className='text-xl mb-8 font-semibold border-b pb-4'>
            { comments.length }
            {' '}
            Comentários
          </h3>
          { comments.map((comment) => (
            <div
              key={ comment.createdAt }
              className='border-b border-gray-100 mb-4 pb-4'
            >
              <p className='mb-4'>
                <span className='font-semibold'>{ comment.name }</span>
                  {' '}
                  em
                  {' '}
                  { moment(comment.createdAt).format('DD.MM.YYYY') }
              </p>
              <p className='whitespace-pre-line text-gray-600 w-full'>
                { parse(comment.comment) }
              </p>
            </div>
          )) }
        </div>
      )}

      { comments.length === 1 && (
        <div className='bg-white shadow-lg rounded-lg p-8 pb-12 mb-8'>
          <h3 className='text-xl mb-8 font-semibold border-b pb-4'>
            { comments.length }
            {' '}
            Comentário
          </h3>
          { comments.map((comment) => (
            <div
              key={ comment.createdAt }
              className='border-b border-gray-100 mb-4 pb-4'
            >
              <p className='mb-4'>
                <span className='font-semibold'>{ comment.name }</span>
                  {' '}
                  em
                  {' '}
                  { moment(comment.createdAt).format('DD.MM.YYYY') }
              </p>
              <p className='whitespace-pre-line text-gray-600 w-full'>
                { parse(comment.comment) }
              </p>
            </div>
          )) }
        </div>
      )}

      { comments.length === 0 && (
        <div className='bg-white shadow-lg rounded-lg p-8 pb-12 mb-8'>
          <h3 className='text-xl mb-8 font-semibold border-b pb-4'>
            Sem comentário mano...
          </h3>
          <p className='mb-4'>
            Seja o
            {' '}
            <span className='font-semibold'>primeiro</span>
            {' '}
            a comentar!
          </p>
        </div>
      )}
    </>
  )
}
