# Sankalpam Mind & Wellness Foundation

A colorful, stakeholder-friendly website for the Sankalpam Mind & Wellness Foundation NGO, inspired by [The Live Love Laugh Foundation](https://www.thelivelovelaughfoundation.org/).

## Features

- **Colorful, engaging design** – Vibrant gradients and appealing visuals for stakeholders
- **Text carousels** – Inspirational quotes and stories that rotate automatically
- **Image + text sections** – Left-right alternating layouts for initiatives and programs
- **Donation with payment integration** – Razorpay integration for secure donations
- **English & Hindi** – Full language toggle (EN / हिंदी)

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Add your Razorpay keys:
   - Copy `.env.example` to `.env`
   - Get keys from [Razorpay Dashboard](https://dashboard.razorpay.com/)
   - Add `VITE_RAZORPAY_KEY=rzp_test_xxx` (frontend)
   - For the backend server, add `RAZORPAY_KEY_ID` and `RAZORPAY_KEY_SECRET` to `.env`

3. Run the development server:
   ```bash
   npm run dev
   ```

4. For donation payments, also run the order-creation server (in a separate terminal):
   ```bash
   npm install express razorpay cors
   npm run server
   ```
   The Vite dev server proxies `/api/create-order` to the backend.

## Payment Integration

Donations use Razorpay. The project includes a minimal Express server (`server/index.js`) that creates Razorpay orders. For production:

1. Deploy the backend and set `RAZORPAY_KEY_ID` and `RAZORPAY_KEY_SECRET`
2. Set `VITE_RAZORPAY_KEY` to your live key (same as KEY_ID)
3. Configure CORS and proxy as needed for your hosting

## Tech Stack

- React 19 + TypeScript
- Vite
- React Router
- react-razorpay
