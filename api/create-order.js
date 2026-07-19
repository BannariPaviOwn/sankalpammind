import {
  getCashfree,
  getFrontendUrl,
  hasCredentials,
  sanitizeCustomerId,
} from './_lib/cashfree.js';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { amount, name, email, phone } = req.body || {};

    if (!amount || amount < 1) {
      return res.status(400).json({ error: 'Invalid amount (minimum ₹1)' });
    }
    if (!name?.trim() || !email?.trim() || !phone?.trim()) {
      return res.status(400).json({ error: 'Name, email, and phone are required' });
    }
    if (!/^\d{10}$/.test(String(phone).replace(/\D/g, '').slice(-10))) {
      return res.status(400).json({ error: 'Enter a valid 10-digit phone number' });
    }
    if (!hasCredentials()) {
      return res.status(500).json({ error: 'Cashfree credentials not configured' });
    }

    const cashfree = getCashfree();
    const orderId = `donation_${Date.now()}`;
    const phoneDigits = String(phone).replace(/\D/g, '').slice(-10);

    const request = {
      order_amount: Number(amount),
      order_currency: 'INR',
      order_id: orderId,
      customer_details: {
        customer_id: sanitizeCustomerId(email),
        customer_name: name.trim(),
        customer_email: email.trim(),
        customer_phone: phoneDigits,
      },
      order_meta: {
        return_url: `${getFrontendUrl()}/donate/result?order_id={order_id}`,
      },
      order_note: 'Sankalpam Mind & Wellness Foundation donation',
    };

    const response = await cashfree.PGCreateOrder(request);
    const data = response.data;

    res.json({
      orderId: data.order_id,
      paymentSessionId: data.payment_session_id,
    });
  } catch (err) {
    console.error('Create order error:', err.response?.data || err.message || err);
    res.status(500).json({ error: 'Failed to create order' });
  }
}
