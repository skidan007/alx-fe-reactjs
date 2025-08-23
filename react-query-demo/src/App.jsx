import { useState } from 'react'
import PostsComponent from './components/PostsComponent.jsx'

export default function App() {
  const [route, setRoute] = useState('home')

  return (
    <div style={{ padding: 16, display: 'grid', gap: 16 }}>
      <nav style={{ display: 'flex', gap: 8 }}>
        <button onClick={() => setRoute('home')}>Home</button>
        <button onClick={() => setRoute('posts')}>Posts</button>
      </nav>

      {route === 'home' && (
        <section>
          <h1>React Query Demo</h1>
          <p>
            Use the navigation above to open <strong>Posts</strong>. Fetch once, then
            switch back here and go again to see the cache deliver data instantly.
          </p>
        </section>
      )}

      {route === 'posts' && <PostsComponent />}
    </div>
  )
}