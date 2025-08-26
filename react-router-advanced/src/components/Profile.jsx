import { Routes, Route, Link, useLocation, Outlet } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import ProfileDetails from './ProfileDetails'
import ProfileSettings from './ProfileSettings'
import ProfileOrders from './ProfileOrders'

function Profile() {
  const { user, logout } = useAuth()
  const location = useLocation()

  return (
    <div className="card">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h1>Profile</h1>
        <button onClick={logout} className="btn btn-danger">
          Logout
        </button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr', gap: '2rem' }}>
        {/* Sidebar Navigation */}
        <nav>
          <ul style={{ listStyle: 'none' }}>
            <li style={{ marginBottom: '0.5rem' }}>
              <Link 
                to="/profile" 
                style={{ 
                  display: 'block', 
                  padding: '0.5rem', 
                  textDecoration: 'none',
                  backgroundColor: location.pathname === '/profile' ? '#3498db' : 'transparent',
                  color: location.pathname === '/profile' ? 'white' : '#333',
                  borderRadius: '4px'
                }}
              >
                Overview
              </Link>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <Link 
                to="/profile/details" 
                style={{ 
                  display: 'block', 
                  padding: '0.5rem', 
                  textDecoration: 'none',
                  backgroundColor: location.pathname === '/profile/details' ? '#3498db' : 'transparent',
                  color: location.pathname === '/profile/details' ? 'white' : '#333',
                  borderRadius: '4px'
                }}
              >
                Details
              </Link>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <Link 
                to="/profile/settings" 
                style={{ 
                  display: 'block', 
                  padding: '0.5rem', 
                  textDecoration: 'none',
                  backgroundColor: location.pathname === '/profile/settings' ? '#3498db' : 'transparent',
                  color: location.pathname === '/profile/settings' ? 'white' : '#333',
                  borderRadius: '4px'
                }}
              >
                Settings
              </Link>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <Link 
                to="/profile/orders" 
                style={{ 
                  display: 'block', 
                  padding: '0.5rem', 
                  textDecoration: 'none',
                  backgroundColor: location.pathname === '/profile/orders' ? '#3498db' : 'transparent',
                  color: location.pathname === '/profile/orders' ? 'white' : '#333',
                  borderRadius: '4px'
                }}
              >
                Orders
              </Link>
            </li>
          </ul>
        </nav>

        {/* Nested Routes Content */}
        <div>
          <Routes>
            <Route path="/" element={<ProfileOverview />} />
            <Route path="/details" element={<ProfileDetails />} />
            <Route path="/settings" element={<ProfileSettings />} />
            <Route path="/orders" element={<ProfileOrders />} />
          </Routes>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

function ProfileOverview() {
  const { user } = useAuth()

  return (
    <div>
      <h2>Welcome back, {user?.username}!</h2>
      <p>This is your profile overview. Use the navigation to manage your account.</p>
      <div style={{ marginTop: '2rem' }}>
        <h3>Quick Stats</h3>
        <p>Email: {user?.email}</p>
        <p>Member since: January 2024</p>
      </div>
    </div>
  )
}

export default Profile