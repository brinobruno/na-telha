import React from 'react'
import moment from 'moment'

import { ShareButton } from '../index'

export const PostDetail = ({ post }) => {
  const getContentFragment = (index, text, obj, type) => {
    let modifiedText = text

    if (obj) {
      if (obj.bold) {
        modifiedText = (<b key={ index }>{ text }</b>)
      }

      if (obj.italic) {
        modifiedText = (<em key={ index }>{ text }</em>)
      }

      if (obj.underline) {
        modifiedText = (<u key={ index }>{ text }</u>)
      }
    }

    switch (type) {
      case 'heading-three':
        return <h3 key={ index } className="text-xl font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{ item }</React.Fragment>)}</h3>
      case 'paragraph':
        return <p key={ index } className="mb-8">{modifiedText.map((item, i) => <React.Fragment key={i}>{ item }</React.Fragment>)}</p>
      case 'heading-four':
        return <h4 key={ index } className="text-md font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{ item }</React.Fragment>)}</h4>
      case 'image':
        return (
          <div className='image-inside-post'>
            <img
              key={ index }
              alt={ obj.title }
              height={ obj.height }
              width={ obj.width }
              src={ obj.src }
            />
          </div>
        )
      default:
        return modifiedText
    }
  }

  const domainUrl = process.env.DOMAIN_URL
  const baseWhatsAppShareUrl = 'https://wa.me/send?text=Confira%20esse%20post%20do%20blog%20NaTelha:%0a'

  return (
    <>
      <div className='bg-white shadow-lg rounded-lg lg:p-8 pb-12 mb-8'>
        <div className='relative overflow-hidden shadow-md mb-6'>
          <img
            src={ post.featuredImage.url }
            alt={ post.title }
            className='object-top h-full w-full rounded-t-lg'
          />
        </div>
        <div className='px-4 lg:px-0'>
          <div className='flex items-center mb-4 w-full'>
            <div className="flex items-center justify-start lg:mb-0 w-full lg:w-auto mr-0 md:mr-2">
              <img
                src={ post.author.photo.url }
                alt={ post.author.name }
                height="30px"
                width="30px"
                className='align-middle rounded-full'
              />
              <p className='inline align-middle text-gray-700 ml-2 text-lg -mr-1 md:mr-0'>
                { post.author.name }
              </p>
            </div>

            <div className="flex font-medium text-gray-700 ml-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2 text-[#ff914d]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>
                { moment(post.createdAt).format('DD.MM.YYYY') }
              </span>
            </div>
          </div>

          <div>
            <a
              href={ `${ baseWhatsAppShareUrl }${ domainUrl }/post/${ post.slug }` }
              target='_blank'
            >
              <div className='flex items-start'>
                <ShareButton />
              </div>
            </a>
          </div>

          <h1 className='mb-10 text-2xl md:text-3xl font-semibold border-b w-full inline-block border-gray-100 pt-2 pb-6'>
            { post.title }
          </h1>

          { post.content.raw.children.map((typeObj, index) => {
            const children = typeObj.children.map((item, itemindex) => getContentFragment(itemindex, item.text, item))

            return getContentFragment(index, children, typeObj, typeObj.type)
          })}

          <div>
            <a
              href={ `${ baseWhatsAppShareUrl }${ domainUrl }/post/${ post.slug }` }
              target='_blank'
            >
              <div className='flex items-start'>
                <ShareButton />
                <p className='ml-2 text-strong font-semibold text-[#da8f02]'>Compartilhe no WhatsApp</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
