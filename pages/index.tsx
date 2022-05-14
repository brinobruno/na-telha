import type { NextPage } from 'next'
import Head from 'next/head'

import { PostCard, PostWidget, Categories } from '../components/index'

const posts = [
  { title: 'Sample blog title', excerpt: 'read this amazing post!'},
  { title: 'General blog title', excerpt: 'read this less awesome post!'},
  { title: 'Thats just lazy writing', excerpt: 'read this way less cool post'}
]

const Home: NextPage = () => {
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>Na Telha</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className='lg:col-span-8 col-span-1'>
          {
            posts.map((post, index) => (
              <div>
                <PostCard post={ post } key={ post.title } />
              </div>
            ))
          }
        </div>

        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
