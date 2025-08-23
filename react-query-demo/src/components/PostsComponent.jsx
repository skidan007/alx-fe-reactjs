import { useQuery, useQueryClient } from '@tanstack/react-query'
import { useState, useMemo } from 'react'

const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts'

// A tiny fetcher that supports abort via the signal provided by React Query
async function fetchPosts({ signal }) {
  const res = await fetch(POSTS_URL, { signal })
  if (!res.ok) throw new Error(`Failed to fetch posts: ${res.status}`)
  return res.json()
}

export default function PostsComponent() {
  const queryClient = useQueryClient()
  const [filter, setFilter] = useState('')

  const {
    data: posts,
    error,
    isError,
    isLoading,
    isFetching, // true during background refetches
    refetch,
  } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
    // Keep showing previous data instantly on remounts while fetching fresh in bg
    placeholderData: (prev) => prev ?? [],
    // Select lets us transform data without re-rendering consumers elsewhere
    select: (data) => data.slice(0, 30), // demo: only first 30
  })

  const filtered = useMemo(() => {
    if (!posts) return []
    const q = filter.trim().toLowerCase()
    if (!q) return posts
    return posts.filter(p =>
      p.title.toLowerCase().includes(q) || String(p.id).includes(q)
    )
  }, [posts, filter])

  if (isLoading) {
    return (
      <div className="p-4">
        <h2>Posts</h2>
        <p>Loading…</p>
      </div>
    )
  }

  if (isError) {
    return (
      <div className="p-4">
        <h2>Posts</h2>
        <p style={{ color: 'crimson' }}>Error: {error.message}</p>
        <button onClick={() => refetch()}>Try again</button>
      </div>
    )
  }

  return (
    <div className="p-4" style={{ display: 'grid', gap: 12 }}>
      <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
        <h2 style={{ margin: 0 }}>Posts</h2>
        {isFetching && <small>(refreshing…)</small>}
      </div>

      <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
        <input
          placeholder="Filter by title or id…"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          style={{ padding: 8, flex: 1 }}
        />
        <button onClick={() => refetch()}>Refetch</button>
        <button onClick={() => queryClient.invalidateQueries({ queryKey: ['posts'] })}>
          Invalidate
        </button>
        <button
          onClick={async () => {
            // prefetch keeps data warm in the cache without mounting the component
            await queryClient.prefetchQuery({ queryKey: ['posts'], queryFn: fetchPosts })
            alert('Prefetched posts into cache!')
          }}
        >
          Prefetch
        </button>
      </div>

      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 8 }}>
        {filtered.map((p) => (
          <li key={p.id} style={{ border: '1px solid #eee', borderRadius: 8, padding: 12 }}>
            <strong>#{p.id}:</strong> {p.title}
            <p style={{ marginTop: 8 }}>{p.body}</p>
          </li>
        ))}
      </ul>

      {!filtered.length && <p>No results.</p>}
    </div>
  )
}