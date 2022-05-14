import React from 'react'

export const PostCard = ({ post }) => {
  return (
    <>
      { post.title }
      { post.excerpt }
    </>
  )
}