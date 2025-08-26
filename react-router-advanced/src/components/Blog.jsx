import { Routes, Route, Link, useParams, Outlet } from 'react-router-dom'

// Mock blog posts data
const blogPosts = [
  { id: 1, title: 'Getting Started with React Router', content: 'Learn the basics of React Router and how to set up routing in your React applications.' },
  { id: 2, title: 'Advanced Routing Techniques', content: 'Explore nested routes, protected routes, and dynamic routing in React.' },
  { id: 3, title: 'Authentication in React Apps', content: 'Implement secure authentication flows with React Router and context API.' }
]

function Blog() {
  return (
    <div className="card">
      <h1>Blog</h1>
      <Routes>
        <Route path="/" element={<BlogList />} />
        <Route path=":postId" element={<BlogPost />} />
      </Routes>
      <Outlet />
    </div>
  )
}

function BlogList() {
  return (
    <div>
      <h2>Latest Posts</h2>
      <div style={{ display: 'grid', gap: '1rem', marginTop: '1rem' }}>
        {blogPosts.map(post => (
          <div key={post.id} style={{ padding: '1rem', border: '1px solid #ddd', borderRadius: '4px' }}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <Link to={`/blog/${post.id}`} className="btn btn-primary">
              Read More
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

function BlogPost() {
  const { postId } = useParams()
  const post = blogPosts.find(p => p.id === parseInt(postId))

  if (!post) {
    return (
      <div>
        <h2>Post Not Found</h2>
        <p>The blog post you're looking for doesn't exist.</p>
        <Link to="/blog" className="btn btn-primary">
          Back to Blog
        </Link>
      </div>
    )
  }

  return (
    <div>
      <Link to="/blog" className="btn btn-primary" style={{ marginBottom: '1rem' }}>
        ← Back to Blog
      </Link>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <div style={{ marginTop: '2rem', padding: '1rem', backgroundColor: '#f5f5f5', borderRadius: '4px' }}>
        <h3>More Content</h3>
        <p>This is additional content for the blog post. In a real application, this would come from a database or CMS.</p>
      </div>
    </div>
  )
}

export default Blog