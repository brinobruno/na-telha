import React from 'react'
import Link from 'next/link'

const NotFoundPage = () => {
  return (
    <>
      <div className='flex flex-col -mt-[160px] h-screen text-white justify-center lg:p-8 py-12 mb-8'>
        <div className='text-center'>
          <p className=''>
            Essa página ta na sua cabeça...
          </p>
          <h1 className='text-[100px] md:text-[180px] font-bold'>
            404
          </h1>
        </div>
        <div className='text-center mt-3'>
          <Link href="/">
            <a className='text-center text-black bg-white p-3 rounded-full'>
              Voltar para a home
            </a>
          </Link>
        </div>
      </div>
    </>
  )
}

export default NotFoundPage