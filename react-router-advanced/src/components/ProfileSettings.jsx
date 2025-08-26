function ProfileSettings() {
  return (
    <div>
      <h2>Profile Settings</h2>
      <p>Configure your account preferences and privacy settings.</p>
      <div style={{ marginTop: '1rem' }}>
        <h3>Notification Preferences</h3>
        <label style={{ display: 'block', marginBottom: '0.5rem' }}>
          <input type="checkbox" style={{ marginRight: '0.5rem' }} />
          Email notifications
        </label>
        <label style={{ display: 'block', marginBottom: '0.5rem' }}>
          <input type="checkbox" style={{ marginRight: '0.5rem' }} />
          Push notifications
        </label>
      </div>
    </div>
  )
}

export default ProfileSettings