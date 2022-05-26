
import Head from 'next/head'
import { PostCard, PostWidget, Categories } from '../components/index'
import { StoriesPosts } from '../sections/StoriesPosts'

import { getPosts } from '../services'

const Home = ({ posts }) => {
  return (
    <div className="container custom-container mx-auto px-4 md:px-10 mb-8">
      <Head>
        <title>Na Telha</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <StoriesPosts />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className='lg:col-span-8 col-span-1'>
          {
            posts.map((post, index) => (
              <div>
                <PostCard post={ post.node } key={ post.title } />
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

export async function getStaticProps() {
  const posts = (await getPosts()) || []

  return {
    props: { posts }
  }
}