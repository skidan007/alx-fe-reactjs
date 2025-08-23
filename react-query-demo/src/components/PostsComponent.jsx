import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useState } from 'react'
import './PostsComponent.css'

// API service function
const fetchPosts = async () => {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts')
  return data
}

const PostsComponent = () => {
  const [showPosts, setShowPosts] = useState(true)

  // Using React Query to fetch posts
  const {
    data: posts,
    isLoading,
    isError,
    error,
    refetch,
    isFetching,
  } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
    staleTime: 30000, // 30 seconds
  })

  // Toggle component visibility to demonstrate caching
  const toggleVisibility = () => {
    setShowPosts(!showPosts)
  }

  if (isLoading) {
    return (
      <div className="posts-container">
        <div className="loading">Loading posts...</div>
        <div className="controls">
          <button onClick={refetch} disabled={isFetching}>
            {isFetching ? 'Refreshing...' : 'Refresh Data'}
          </button>
          <button onClick={toggleVisibility}>
            {showPosts ? 'Hide Posts' : 'Show Posts'}
          </button>
        </div>
      </div>
    )
  }

  if (isError) {
    return (
      <div className="posts-container">
        <div className="error">Error: {error.message}</div>
        <button onClick={refetch}>Retry</button>
      </div>
    )
  }

  return (
    <div className="posts-container">
      <div className="controls">
        <button onClick={refetch} disabled={isFetching}>
          {isFetching ? 'Refreshing...' : 'Refresh Data'}
        </button>
        <button onClick={toggleVisibility}>
          {showPosts ? 'Hide Posts' : 'Show Posts'}
        </button>
        <span className="cache-info">
          {isFetching ? 'Fetching...' : 'Data is cached'}
        </span>
      </div>

      {showPosts && (
        <div className="posts-list">
          <h2>Posts ({posts?.length || 0})</h2>
          <div className="posts-grid">
            {posts?.slice(0, 12).map((post) => (
              <div key={post.id} className="post-card">
                <h3>{post.title}</h3>
                <p className="post-body">{post.body}</p>
                <span className="post-id">ID: {post.id}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {!showPosts && (
        <div className="hidden-state">
          <p>Posts are hidden. The data is still cached by React Query!</p>
          <p>Toggle visibility to see how cached data loads instantly.</p>
        </div>
      )}
    </div>
  )
}

export default PostsComponent