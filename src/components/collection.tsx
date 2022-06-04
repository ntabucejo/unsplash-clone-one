import { useState } from 'react'
import posts from '../data/post'
import IPost from '../schemas/post'
import Card from './card'

const Collection = () => {
  return (
    <section className="grid items-center">
      <div className="mx-auto sm:columns-2 md:columns-3 max-w-7xl">
        {posts.map((post: IPost) => (
          <Card key={post.id} post={post} />
        ))}
      </div>
    </section>
  )
}

export default Collection
