/**
 * Simple backend for Razorpay order creation.
 * Run with: node server/index.js
 * Requires: npm install express razorpay cors
 */
import express from 'express';
import cors from 'cors';
import Razorpay from 'razorpay';

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID || 'rzp_test_placeholder',
  key_secret: process.env.RAZORPAY_KEY_SECRET || 'placeholder_secret',
});

const FRONTEND_URL = process.env.FRONTEND_URL || 'http://localhost:5178';

app.post('/api/create-order', async (req, res) => {
  try {
    const { amount, currency = 'INR', receipt, notes } = req.body;
    if (!amount || amount < 100) {
      return res.status(400).json({ error: 'Invalid amount (min 100 paise)' });
    }
    const order = await razorpay.orders.create({
      amount: Number(amount),
      currency,
      receipt: receipt || `donation_${Date.now()}`,
      notes: notes || {},
    });
    res.json({ orderId: order.id });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to create order' });
  }
});

// Razorpay redirects user here after payment (success or failure)
app.post('/api/payment-callback', (req, res) => {
  const { razorpay_payment_id, razorpay_order_id, razorpay_signature } = req.body;
  const hasError = req.body.error || !razorpay_payment_id;

  const status = hasError ? 'failed' : 'success';
  const frontendOrigin = req.query.frontend || FRONTEND_URL;
  const redirectUrl = `${frontendOrigin}/donate/result?status=${status}`;
  res.redirect(302, redirectUrl);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
