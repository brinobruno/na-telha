import React from 'react'
import emailjs from 'emailjs-com'

export const NewsletterForm = () => {
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
  const emailTemplate = process.env.NEXT_PUBLIC_EMAILJS_EMAIL_TEMPLATE
  const APIKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_API_KEY

  function handleFormSubmit(e) {
    e.preventDefault()

    emailjs.sendForm(serviceId, emailTemplate, e.target, APIKey)
      .then(result => console.log(result.text))
      .catch(err => console.log(err))

      //form reset
      e.target.reset() 
  }

  return (
    <>
      <div>
        <h3 className='text-white pb-6'>
          Inscreva-se na Newsletter do NaTelha para receber notificações de novos posts!
        </h3>
        <form
          onSubmit={ handleFormSubmit }
          className="w-full"
        >
          <div class="flex items-center border-b border-[#ff914d] py-2">
            <input
              className="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none text-md"
              type='email'
              id='email'
              name='email'
              placeholder='Endereço e-mail'
              aria-label='Endereço e-mail'
              required
            />
            <button
              className="flex-shrink-0 font-semibold bg-[#ff914d] hover:bg-[#d47133] border-[#ff914d] hover:border-[#d47133] text-md border-4 text-white py-1 px-2 rounded"
              type='submit'
            >
              Inscreva-se
            </button>
          </div>
        </form>
      </div>
    </>
  )
}
