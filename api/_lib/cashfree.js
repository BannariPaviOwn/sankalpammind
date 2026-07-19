/**
 * Shared Cashfree client + helpers.
 * Used by the Vercel serverless functions (api/*.js) and the local Express
 * dev server (server/index.js) so there is a single source of truth.
 *
 * Files/folders prefixed with "_" inside /api are ignored by Vercel routing.
 */
import { Cashfree, CFEnvironment } from 'cashfree-pg';

let client = null;

export function getCashfree() {
  if (!client) {
    const isProduction = process.env.CASHFREE_ENV === 'production';
    client = new Cashfree(
      isProduction ? CFEnvironment.PRODUCTION : CFEnvironment.SANDBOX,
      process.env.CASHFREE_APP_ID || '',
      process.env.CASHFREE_SECRET_KEY || '',
      undefined,
      undefined,
      undefined,
      false,
    );
  }
  return client;
}

export function getFrontendUrl() {
  return process.env.FRONTEND_URL || 'http://localhost:5173';
}

export function hasCredentials() {
  return Boolean(process.env.CASHFREE_APP_ID && process.env.CASHFREE_SECRET_KEY);
}

export function sanitizeCustomerId(email) {
  const id = email.replace(/[^a-zA-Z0-9]/g, '_').slice(0, 50);
  return id || `donor_${Date.now()}`;
}
