import React, { useEffect, useState } from 'react'
import moment from 'moment'
import Link from 'next/link'
import Image from 'next/image';

import { getMostRecentPosts, getSimilarPosts } from '../services'

export const PostWidget = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([])

  useEffect(() => {
    if(slug) {
      getSimilarPosts(categories, slug)
        .then((result) => setRelatedPosts(result))
    }
    else {
      getMostRecentPosts()
      .then((result) => setRelatedPosts(result))
    }

  }, [slug])

  return (
    <>
      <div className="bg-white shadow-lg rounded-lg px-4 pt-8 pb-8 sm:pb-12 mb-8">
        <h3 className='text-xl mb-8 font-semibold border-b pb-4'>
          { slug ? 'Posts relacionados' : 'Posts recentes'}
        </h3>

        { relatedPosts.map((post) => (
          <div key={ post.title } className="flex items-center w-full mb-4">
            <div className="w-16 flex-none">
              <div>
              <Image
                className='related-posts-image align-middle rounded-full'
                src={ post.featuredImage.url }
                alt={ post.title }
                title={ post.title }
                unoptimized
                height="60px"
                width="60px"
              />
              </div>
            </div>
            <div className='flex-grow ml-4'>
              <p className='text-gray-500 font-xs'>
                { moment(post.createdAt).format('DD.MM.YYYY') }
              </p>
              <Link
                href={`/post/${post.slug}`}
                key="post.title"
                className="text-md">
                  { post.title }
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}