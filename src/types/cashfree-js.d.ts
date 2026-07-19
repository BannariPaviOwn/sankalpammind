declare module '@cashfreepayments/cashfree-js' {
  export interface CashfreeCheckoutOptions {
    paymentSessionId: string;
    redirectTarget?: '_self' | '_blank' | '_top' | '_modal';
    returnUrl?: string;
  }

  export interface CashfreeInstance {
    checkout(options: CashfreeCheckoutOptions): Promise<unknown>;
  }

  export interface CashfreeLoadOptions {
    mode: 'sandbox' | 'production';
  }

  export function load(options: CashfreeLoadOptions): Promise<CashfreeInstance | null>;
}
