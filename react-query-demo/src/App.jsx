import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import PostsComponent from './components/PostsComponent'
import './App.css'

// Create a QueryClient instance
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      cacheTime: 10 * 60 * 1000, // 10 minutes
      retry: 2, // Retry failed requests 2 times
    },
  },
})

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="app">
        <h1>React Query Demo - Posts</h1>
        <PostsComponent />
      </div>
    </QueryClientProvider>
  )
}

export default App