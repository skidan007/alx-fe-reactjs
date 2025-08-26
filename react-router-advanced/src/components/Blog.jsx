import { Link } from 'react-router-dom'

// Mock blog posts data (shared with BlogPost component)
const blogPosts = [
  { 
    id: 1, 
    title: 'Getting Started with React Router', 
    content: 'Learn the basics of React Router and how to set up routing in your React applications.',
    excerpt: 'A comprehensive guide to getting started with React Router in your React applications...'
  },
  { 
    id: 2, 
    title: 'Advanced Routing Techniques', 
    content: 'Explore nested routes, protected routes, and dynamic routing in React.',
    excerpt: 'Discover advanced routing patterns including nested routes and authentication...'
  },
  { 
    id: 3, 
    title: 'Authentication in React Apps', 
    content: 'Implement secure authentication flows with React Router and context API.',
    excerpt: 'Learn how to implement secure authentication in React applications...'
  }
]

function Blog() {
  return (
    <div className="card">
      <h1>Blog</h1>
      <p style={{ color: '#666', marginBottom: '2rem' }}>
        Welcome to our blog! Here you'll find articles about React, React Router, and web development.
      </p>
      
      <div style={{ display: 'grid', gap: '1.5rem', marginTop: '1rem' }}>
        {blogPosts.map(post => (
          <article key={post.id} style={{ 
            padding: '1.5rem', 
            border: '1px solid #e0e0e0', 
            borderRadius: '8px',
            backgroundColor: 'white',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}>
            <h2 style={{ margin: '0 0 0.5rem 0', color: '#2c3e50' }}>
              {post.title}
            </h2>
            
            <p style={{ color: '#666', marginBottom: '1rem' }}>
              {post.excerpt || post.content}
            </p>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Link to={`/blog/${post.id}`} className="btn btn-primary">
                Read More
              </Link>
              
              <span style={{ color: '#999', fontSize: '0.9rem' }}>
                Post #{post.id}
              </span>
            </div>
          </article>
        ))}
      </div>
      
      <div style={{ 
        marginTop: '2rem', 
        padding: '1.5rem', 
        backgroundColor: '#f8f9fa', 
        borderRadius: '8px',
        textAlign: 'center'
      }}>
        <h3>More Content Coming Soon!</h3>
        <p>We're constantly working on new content. Stay tuned for more React tutorials and best practices.</p>
      </div>
    </div>
  )
}

export default Blog