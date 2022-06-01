import React from 'react'

export const NewsletterForm = () => {
  return (
    <>
      <div>
        <h3 className='text-white pb-6'>
          Inscreva-se na Newsletter do NaTelha para receber notificações de novos posts!
        </h3>
        <form class="w-full">
          <div class="flex items-center border-b border-[#ff914d] py-2">
            <input
              class="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none text-md"
              type="email"
              id='email'
              name='email'
              placeholder="Endereço e-mail"
              aria-label="Endereço e-mail"
            />
            <button class="flex-shrink-0 font-semibold bg-[#ff914d] hover:bg-[#d47133] border-[#ff914d] hover:border-[#d47133] text-md border-4 text-white py-1 px-2 rounded" type="button">
              Inscreva-se
            </button>
          </div>
        </form>
      </div>
    </>
  )
}
