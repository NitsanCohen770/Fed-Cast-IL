import React from 'react'
import Post from './Post'
import Banner from '../Banner'
const Posts: React.FC<{ posts: []; title: string }> = ({ posts, title }) => {
  return (
    <section className="posts">
      <h3 className="posts-title">{title}</h3>
      <div className="posts-center">
        <article>
          {posts.map(post => (
            <Post key={post.id} {...post} />
          ))}
        </article>
        <article>
          <Banner />
        </article>
      </div>
    </section>
  )
}

export default Posts
