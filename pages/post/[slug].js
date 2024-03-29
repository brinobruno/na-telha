import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

import { getPosts, getPostDetails } from '../../services'
import { PostDetail, Categories, PostWidget, Author, Comments, CommentsForm, Loader, NewsletterForm } from '../../components'

export default function PostDetails({ post }) {
  const router = useRouter()

  if(router.isFallback) return <Loader />

  return (
    <>
      <div className='container mx-auto px-5 mb-8 mt-[9.625rem]'>
        <Head>
          <title>{ post.title }</title>
          <meta
            name='description'
            content={ post.excerpt }
          />
          <meta
            name='og:title'
            content={ post.title }
          />
          <meta
            name='og:description'
            content={ post.excerpt }
          />
          <meta
            name='og:image'
            itemProp='image'
            content={ post.featuredImage.url }
          />
          <meta
            name='og:site_name'
            content='NaTelha Blog'
          />
          <meta
            name='og:type'
            content='website'
          />
        </Head>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
          <div className='col-span-1 lg:col-span-8'>
            <PostDetail post={ post } />
            <Author author={ post.author } />
            <CommentsForm slug={ post.slug } />
            <Comments slug={ post.slug } />
          </div>
          <aside className='col-span-1 lg:col-span-4'>
            <div className='relative lg:sticky top-8'>
              <PostWidget slug={ post.slug } categories={ post.categories.map((category) => category.slug) } />
              <Categories />
              <NewsletterForm />
            </div>
          </aside>
        </div>
      </div>
    </>
  )
}

export async function getStaticProps({ params }) {
  const postData = await getPostDetails(params.slug)

  return {
    props: { post: postData }
  }
}

export async function getStaticPaths() {
  const posts = await getPosts()

  return {
    paths: posts.map(({ node: { slug }}) => ({ params: { slug }})),
    fallback: true
  }
}