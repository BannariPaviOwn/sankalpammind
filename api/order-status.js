import { getCashfree, hasCredentials } from './_lib/cashfree.js';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const orderId = req.query.order_id;
    if (!orderId || typeof orderId !== 'string') {
      return res.status(400).json({ error: 'order_id is required' });
    }
    if (!hasCredentials()) {
      return res.status(500).json({ error: 'Cashfree credentials not configured' });
    }

    const cashfree = getCashfree();
    const response = await cashfree.PGFetchOrder(orderId);
    const orderStatus = response.data?.order_status;

    let status = 'pending';
    if (orderStatus === 'PAID') {
      status = 'success';
    } else if (['EXPIRED', 'TERMINATED', 'CANCELLED'].includes(orderStatus)) {
      status = 'failed';
    }

    res.json({ status, orderStatus });
  } catch (err) {
    console.error('Order status error:', err.response?.data || err.message || err);
    res.status(500).json({ error: 'Failed to fetch order status' });
  }
}
