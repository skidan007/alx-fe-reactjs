function ProfileOrders() {
  const orders = [
    { id: 1, date: '2024-01-15', total: '$99.99', status: 'Delivered' },
    { id: 2, date: '2024-01-10', total: '$149.99', status: 'Processing' },
    { id: 3, date: '2024-01-05', total: '$79.99', status: 'Delivered' }
  ]

  return (
    <div>
      <h2>Order History</h2>
      <p>View your recent orders and their status.</p>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem' }}>
        <thead>
          <tr style={{ backgroundColor: '#f5f5f5' }}>
            <th style={{ padding: '0.5rem', textAlign: 'left', border: '1px solid #ddd' }}>Order ID</th>
            <th style={{ padding: '0.5rem', textAlign: 'left', border: '1px solid #ddd' }}>Date</th>
            <th style={{ padding: '0.5rem', textAlign: 'left', border: '1px solid #ddd' }}>Total</th>
            <th style={{ padding: '0.5rem', textAlign: 'left', border: '1px solid #ddd' }}>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id}>
              <td style={{ padding: '0.5rem', border: '1px solid #ddd' }}>{order.id}</td>
              <td style={{ padding: '0.5rem', border: '1px solid #ddd' }}>{order.date}</td>
              <td style={{ padding: '0.5rem', border: '1px solid #ddd' }}>{order.total}</td>
              <td style={{ padding: '0.5rem', border: '1px solid #ddd' }}>{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ProfileOrders