import { useState } from 'react'
import data from '../data.json'
import Card from './card'

const Collection = () => {
  const [posts] = useState(data)

  return (
    <section className="grid items-center">
      <div className="mx-auto sm:columns-2 md:columns-3 max-w-7xl">
        {posts.map((post) => (
          <Card key={post.id} post={post} />
        ))}
      </div>
    </section>
  )
}

export default Collection