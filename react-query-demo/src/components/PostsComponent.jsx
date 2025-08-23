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
  const [currentPage, setCurrentPage] = useState(1)
  const postsPerPage = 6

  // Using React Query to fetch posts with advanced options
  const {
    data: posts,
    isLoading,
    isError,
    error,
    refetch,
    isFetching,
    isPreviousData,
  } = useQuery({
    queryKey: ['posts', currentPage],
    queryFn: fetchPosts,
    staleTime: 30000, // 30 seconds
    cacheTime: 10 * 60 * 1000, // 10 minutes cache time
    refetchOnWindowFocus: true, // Refetch when window gains focus
    keepPreviousData: true, // Keep previous data while fetching new data
  })

  // Calculate paginated posts
  const paginatedPosts = posts?.slice(0, currentPage * postsPerPage) || []

  // Toggle component visibility to demonstrate caching
  const toggleVisibility = () => {
    setShowPosts(!showPosts)
  }

  // Load more posts for pagination
  const loadMorePosts = () => {
    if (posts && currentPage * postsPerPage < posts.length) {
      setCurrentPage(prev => prev + 1)
    }
  }

  if (isLoading && !isPreviousData) {
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
        <div className="controls">
          <button onClick={refetch}>Retry</button>
          <button onClick={toggleVisibility}>
            {showPosts ? 'Hide Posts' : 'Show Posts'}
          </button>
        </div>
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
          {isFetching ? 'Fetching...' : `Cached (${posts?.length} posts)`}
        </span>
        <span className="window-focus-info">
          Refetch on window focus: {refetchOnWindowFocus ? 'Enabled' : 'Disabled'}
        </span>
      </div>

      {showPosts && (
        <div className="posts-list">
          <h2>Posts ({paginatedPosts.length} of {posts?.length || 0})</h2>
          
          <div className="posts-grid">
            {paginatedPosts.map((post) => (
              <div key={post.id} className="post-card">
                <h3>{post.title}</h3>
                <p className="post-body">{post.body}</p>
                <span className="post-id">ID: {post.id}</span>
                <span className="post-user">User: {post.userId}</span>
              </div>
            ))}
          </div>

          {posts && currentPage * postsPerPage < posts.length && (
            <div className="pagination-controls">
              <button 
                onClick={loadMorePosts} 
                disabled={isFetching}
                className="load-more-btn"
              >
                {isFetching ? 'Loading...' : 'Load More Posts'}
              </button>
              <span className="pagination-info">
                Showing {paginatedPosts.length} of {posts.length} posts
                {isPreviousData && ' (showing previous data)'}
              </span>
            </div>
          )}
        </div>
      )}

      {!showPosts && (
        <div className="hidden-state">
          <h3>Posts are hidden</h3>
          <p>The data is still cached by React Query for 10 minutes!</p>
          <p>Toggle visibility to see how cached data loads instantly.</p>
          <p>Try switching browser tabs and coming back - it will refetch due to window focus!</p>
        </div>
      )}

      <div className="features-demo">
        <h3>React Query Features Demonstrated:</h3>
        <ul>
          <li>✅ <strong>cacheTime: 10 minutes</strong> - Data stays cached for 10 minutes</li>
          <li>✅ <strong>refetchOnWindowFocus: true</strong> - Refetches when window gains focus</li>
          <li>✅ <strong>keepPreviousData: true</strong> - Shows old data while fetching new data</li>
          <li>✅ <strong>staleTime: 30 seconds</strong> - Data becomes stale after 30 seconds</li>
          <li>✅ Automatic caching and background updates</li>
        </ul>
      </div>
    </div>
  )
}

export default PostsComponent