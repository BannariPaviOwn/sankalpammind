/**
 * Local development server for the Cashfree payment endpoints.
 *
 * In production these endpoints run as Vercel serverless functions
 * (see /api/create-order.js and /api/order-status.js). This Express server
 * simply mounts the SAME handlers so `npm run dev` + `npm run server` work
 * locally with the Vite proxy (/api -> http://localhost:3001).
 *
 * Run with: npm run server
 */
import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import createOrder from '../api/create-order.js';
import orderStatus from '../api/order-status.js';

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/create-order', createOrder);
app.get('/api/order-status', orderStatus);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Payment server running on http://localhost:${PORT}`);
});
