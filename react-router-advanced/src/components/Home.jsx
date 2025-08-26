function Home() {
  return (
    <div className="card">
      <h1>Welcome to React Router Advanced</h1>
      <p>This application demonstrates advanced routing techniques including nested routes, protected routes, and dynamic routing.</p>
      <div style={{ marginTop: '2rem' }}>
        <h2>Features:</h2>
        <ul style={{ marginLeft: '2rem' }}>
          <li>Nested Routes in Profile section</li>
          <li>Protected Routes requiring authentication</li>
          <li>Dynamic Routing for blog posts</li>
          <li>Authentication context with login/logout</li>
        </ul>
      </div>
    </div>
  )
}

export default Home