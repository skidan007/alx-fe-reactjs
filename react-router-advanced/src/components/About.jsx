function About() {
  return (
    <div className="card">
      <h1>About Us</h1>
      <p>This is a demonstration application built with React and React Router to showcase advanced routing techniques.</p>
      
      <div style={{ marginTop: '2rem' }}>
        <h2>Technologies Used:</h2>
        <ul style={{ marginLeft: '2rem' }}>
          <li>React 18</li>
          <li>React Router DOM</li>
          <li>React Context API</li>
          <li>CSS3 for styling</li>
        </ul>
      </div>

      <div style={{ marginTop: '2rem' }}>
        <h2>Routing Features:</h2>
        <ul style={{ marginLeft: '2rem' }}>
          <li>Basic routing with multiple pages</li>
          <li>Nested routes for complex layouts</li>
          <li>Protected routes with authentication</li>
          <li>Dynamic routes with URL parameters</li>
          <li>Programmatic navigation</li>
        </ul>
      </div>
    </div>
  )
}

export default About