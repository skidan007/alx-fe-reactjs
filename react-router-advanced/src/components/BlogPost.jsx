import { useParams, Link } from 'react-router-dom'

// Mock blog posts data (should be shared with Blog component)
const blogPosts = [
  { 
    id: 1, 
    title: 'Getting Started with React Router', 
    content: 'Learn the basics of React Router and how to set up routing in your React applications.',
    fullContent: `
      <p>React Router is a powerful routing library for React applications. It allows you to handle navigation and rendering of different components based on the URL.</p>
      <p>To get started with React Router, you need to install it using npm or yarn:</p>
      <pre>npm install react-router-dom</pre>
      <p>Then, wrap your application with the BrowserRouter component and define your routes using the Routes and Route components.</p>
    `
  },
  { 
    id: 2, 
    title: 'Advanced Routing Techniques', 
    content: 'Explore nested routes, protected routes, and dynamic routing in React.',
    fullContent: `
      <p>Advanced routing techniques include:</p>
      <ul>
        <li><strong>Nested Routes:</strong> Creating hierarchical route structures</li>
        <li><strong>Protected Routes:</strong> Requiring authentication for certain pages</li>
        <li><strong>Dynamic Routing:</strong> Handling variable URL parameters</li>
        <li><strong>Programmatic Navigation:</strong> Navigating programmatically using useNavigate</li>
      </ul>
    `
  },
  { 
    id: 3, 
    title: 'Authentication in React Apps', 
    content: 'Implement secure authentication flows with React Router and context API.',
    fullContent: `
      <p>Implementing authentication in React applications involves:</p>
      <ol>
        <li>Creating an AuthContext to manage authentication state</li>
        <li>Building protected route components</li>
        <li>Handling login/logout functionality</li>
        <li>Persisting authentication state across page refreshes</li>
        <li>Redirecting users based on authentication status</li>
      </ol>
    `
  }
]

function BlogPost() {
  const { postId } = useParams()
  const post = blogPosts.find(p => p.id === parseInt(postId))

  if (!post) {
    return (
      <div className="card">
        <h2>Post Not Found</h2>
        <p>The blog post you're looking for doesn't exist.</p>
        <Link to="/blog" className="btn btn-primary">
          Back to Blog
        </Link>
      </div>
    )
  }

  return (
    <div className="card">
      <Link to="/blog" className="btn btn-primary" style={{ marginBottom: '1rem' }}>
        ← Back to Blog
      </Link>
      
      <article>
        <h1>{post.title}</h1>
        <p style={{ color: '#666', fontStyle: 'italic' }}>{post.content}</p>
        
        <div 
          style={{ 
            marginTop: '2rem', 
            padding: '1.5rem', 
            backgroundColor: '#f8f9fa', 
            borderRadius: '8px',
            borderLeft: '4px solid #3498db'
          }}
          dangerouslySetInnerHTML={{ __html: post.fullContent }}
        />
        
        <div style={{ marginTop: '2rem', padding: '1rem', backgroundColor: '#e8f4f8', borderRadius: '4px' }}>
          <h3>About the Author</h3>
          <p>This post was written by our React expert. Stay tuned for more advanced React content!</p>
        </div>
      </article>
    </div>
  )
}

export default BlogPost