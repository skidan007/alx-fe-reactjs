function ProfileDetails() {
  return (
    <div>
      <h2>Profile Details</h2>
      <p>Manage your personal information and contact details.</p>
      <form style={{ maxWidth: '400px', marginTop: '1rem' }}>
        <div style={{ marginBottom: '1rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem' }}>Full Name:</label>
          <input type="text" style={{ width: '100%', padding: '0.5rem' }} />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem' }}>Email:</label>
          <input type="email" style={{ width: '100%', padding: '0.5rem' }} />
        </div>
        <button type="submit" className="btn btn-primary">Save Changes</button>
      </form>
    </div>
  )
}

export default ProfileDetails