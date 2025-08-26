# React Router Advanced - Testing Guide

## Test Cases

### 1. Basic Navigation

- [ ] Home page loads correctly
- [ ] About page loads correctly
- [ ] Blog page loads correctly
- [ ] Navigation links work properly

### 2. Protected Routes

- [ ] Unauthenticated user redirected to login when accessing /profile
- [ ] Authenticated user can access /profile
- [ ] Login redirects back to intended protected route
- [ ] Logout functionality works

### 3. Nested Routes

- [ ] Profile overview loads at /profile
- [ ] Profile details load at /profile/details
- [ ] Profile settings load at /profile/settings
- [ ] Profile orders load at /profile/orders
- [ ] Navigation between nested routes works

### 4. Dynamic Routing

- [ ] Blog post list shows all posts
- [ ] Clicking "Read More" navigates to correct post
- [ ] Dynamic post pages load correct content
- [ ] Invalid post IDs show "Post Not Found"
- [ ] Back navigation works from post pages

### 5. Authentication Flow

- [ ] Login with any credentials works
- [ ] Authentication state persists across page refreshes
- [ ] Protected routes remain accessible after login
- [ ] Logout clears authentication state

## Running Tests

1. Start the development server:
   ```bash
   npm run dev
   ```
