import React from 'react';
import data from './data';
import Post from './Post';
import LazyLoad from 'react-lazyload';
import Loading from './Loading';
import Spinner from './Spinner';

const Blog = () => {
  return (
    <div className='blog'>
      <h2>lazy load demo</h2>
      <div className='post-container'>
        {data.map((post) => (
          <LazyLoad
            key={post.id}
            height={100}
            offset={[-100, 100]}
            placeholder={<Spinner />}
          >
            <Post key={post.id} {...post} />
          </LazyLoad>
        ))}
      </div>
    </div>
  );
};

export default Blog;
