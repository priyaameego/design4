import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import {
  CreditCard,
  ShieldCheck,
  Lock,
  CheckCircle2,
  XCircle,
  Building2,
  FileText,
  ArrowRight,
  RefreshCw,
  QrCode
} from 'lucide-react';
import { COMPANY_INFO } from '../data/siteData';

// Payment Layout & Screen Selector
export const PaymentPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Sub-routes: /payment/checkout, /payment/success, /payment/failure
  const isSuccess = location.pathname.includes('success');
  const isFailure = location.pathname.includes('failure');

  const [paymentMethod, setPaymentMethod] = useState<'card' | 'upi' | 'netbanking'>('upi');
  const [isProcessing, setIsProcessing] = useState(false);

  const [formData, setFormData] = useState({
    invoiceNumber: 'INV-ZT-2026-8841',
    organizationName: 'Global Manufacturing Corp',
    clientEmail: 'finance@enterprise.com',
    amount: '45,000.00',
    currency: 'INR'
  });

  const handleProcessPayment = (simulateOutcome: 'success' | 'failure') => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      if (simulateOutcome === 'success') {
        navigate('/payment/success');
      } else {
        navigate('/payment/failure');
      }
    }, 1200);
  };

  // 1. Success Screen View
  if (isSuccess) {
    return (
      <div className="min-h-[75vh] flex items-center justify-center py-16 px-4">
        <div className="max-w-lg w-full bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-2xl text-center space-y-6">
          <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-10 h-10" />
          </div>

          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              Transaction Successful
            </span>
            <h1 className="text-3xl font-extrabold text-navy-950 mt-3 font-display">
              Payment Confirmed
            </h1>
            <p className="text-slate-500 text-xs mt-1">Transaction Ref: TXN-ZT-9938204194</p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-left space-y-2.5 text-xs">
            <div className="flex justify-between text-slate-600">
              <span>Invoice Number:</span>
              <strong className="text-navy-950">{formData.invoiceNumber}</strong>
            </div>
            <div className="flex justify-between text-slate-600">
              <span>Paid Amount:</span>
              <strong className="text-navy-950">₹{formData.amount} INR</strong>
            </div>
            <div className="flex justify-between text-slate-600">
              <span>Billed Organization:</span>
              <strong className="text-navy-950">{formData.organizationName}</strong>
            </div>
            <div className="flex justify-between text-slate-600">
              <span>Payment Gateway:</span>
              <strong className="text-emerald-700">Enterprise Verified 256-bit Encrypted</strong>
            </div>
          </div>

          <p className="text-xs text-slate-500">
            A formal GST tax invoice and payment acknowledgement receipt has been dispatched to <strong>{formData.clientEmail}</strong>.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <Link
              to="/"
              className="flex-1 py-3 rounded-xl bg-navy-950 hover:bg-slate-800 text-white font-semibold text-xs transition-colors"
            >
              Return to Homepage
            </Link>
            <Link
              to="/payment/checkout"
              className="flex-1 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs transition-colors"
            >
              Make Another Payment
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // 2. Failure Screen View
  if (isFailure) {
    return (
      <div className="min-h-[75vh] flex items-center justify-center py-16 px-4">
        <div className="max-w-lg w-full bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-2xl text-center space-y-6">
          <div className="w-20 h-20 rounded-full bg-red-100 text-red-600 flex items-center justify-center mx-auto">
            <XCircle className="w-10 h-10" />
          </div>

          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-red-700 bg-red-50 px-3 py-1 rounded-full border border-red-200">
              Payment Failed
            </span>
            <h1 className="text-3xl font-extrabold text-navy-950 mt-3 font-display">
              Transaction Declined
            </h1>
            <p className="text-slate-500 text-xs mt-1">Error Code: ERR_GATEWAY_TIMEOUT_504</p>
          </div>

          <div className="p-4 rounded-2xl bg-red-50/50 border border-red-200 text-left space-y-2 text-xs text-slate-700">
            <p className="font-semibold text-red-900">What happened?</p>
            <p className="leading-relaxed">
              The banking authorization gateway could not complete the handshake or the session expired. No funds were permanently deducted from your enterprise account.
            </p>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <Link
              to="/payment/checkout"
              className="flex-1 py-3 rounded-xl bg-blue-700 hover:bg-blue-600 text-white font-semibold text-xs transition-colors flex items-center justify-center gap-1.5"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Retry Payment</span>
            </Link>
            <Link
              to="/contact"
              className="flex-1 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs transition-colors"
            >
              Contact Accounts Desk
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // 3. Checkout Screen View (Default)
  return (
    <div className="space-y-16 pb-20">
      <section className="bg-navy-950 text-white py-14 border-b border-white/10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-400 bg-teal-500/10 px-3 py-1 rounded-full border border-teal-500/30">
              Secure Corporate Gateway
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white font-display">
              Client & Student Payment Portal
            </h1>
            <p className="text-slate-300 text-sm leading-relaxed">
              Enterprise invoice settlements and professional training enrollment fees via 256-bit SSL encrypted gateway.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left: Invoice Breakdown */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div>
                  <h3 className="text-base font-bold text-navy-950">Invoice Summary</h3>
                  <p className="text-xs text-slate-400 font-mono mt-0.5">{formData.invoiceNumber}</p>
                </div>
                <span className="px-2.5 py-1 rounded bg-blue-50 text-blue-700 text-xs font-semibold">
                  Pending Settlement
                </span>
              </div>

              <div className="space-y-3 text-xs text-slate-600">
                <div className="flex justify-between">
                  <span>Billed To:</span>
                  <strong className="text-navy-950">{formData.organizationName}</strong>
                </div>
                <div className="flex justify-between">
                  <span>Billing Email:</span>
                  <strong className="text-navy-950">{formData.clientEmail}</strong>
                </div>
                <div className="flex justify-between">
                  <span>Service Package:</span>
                  <strong className="text-navy-950">SAP S/4HANA Consulting Sprint</strong>
                </div>
                <div className="flex justify-between">
                  <span>GSTIN (18% Included):</span>
                  <strong className="text-navy-950 font-mono">07AAACZ1234F1Z8</strong>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-slate-400 font-bold">Total Amount Due</span>
                  <p className="text-2xl font-extrabold text-navy-950 font-mono">₹{formData.amount}</p>
                </div>
                <span className="text-xs text-slate-500 font-medium">INR (Net)</span>
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-500 pt-2">
                <Lock className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Protected by end-to-end PCI-DSS compliant protocols.</span>
              </div>
            </div>
          </div>

          {/* Right: Payment Method & Simulation Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-lg space-y-6">
              <h3 className="text-xl font-bold text-navy-950">Select Settlement Method</h3>

              {/* Method Tabs */}
              <div className="grid grid-cols-3 gap-3">
                <button
                  type="button"
                  onClick={() => setPaymentMethod('upi')}
                  className={`p-3 rounded-2xl border text-center transition-all ${
                    paymentMethod === 'upi'
                      ? 'border-blue-600 bg-blue-50/50 text-blue-700 font-semibold'
                      : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  <QrCode className="w-5 h-5 mx-auto mb-1 text-teal-600" />
                  <span className="text-xs block">Corporate UPI / QR</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('card')}
                  className={`p-3 rounded-2xl border text-center transition-all ${
                    paymentMethod === 'card'
                      ? 'border-blue-600 bg-blue-50/50 text-blue-700 font-semibold'
                      : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  <CreditCard className="w-5 h-5 mx-auto mb-1 text-blue-600" />
                  <span className="text-xs block">Credit / Debit Card</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('netbanking')}
                  className={`p-3 rounded-2xl border text-center transition-all ${
                    paymentMethod === 'netbanking'
                      ? 'border-blue-600 bg-blue-50/50 text-blue-700 font-semibold'
                      : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  <Building2 className="w-5 h-5 mx-auto mb-1 text-indigo-600" />
                  <span className="text-xs block">Net Banking (NEFT)</span>
                </button>
              </div>

              {/* Card Inputs Mock */}
              {paymentMethod === 'card' && (
                <div className="space-y-4 pt-2">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Cardholder Name</label>
                    <input
                      type="text"
                      defaultValue="Rahul Sharma"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm outline-none focus:border-blue-600"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Card Number</label>
                    <input
                      type="text"
                      defaultValue="4532 •••• •••• 8812"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm font-mono outline-none focus:border-blue-600"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Expiry Date</label>
                      <input
                        type="text"
                        defaultValue="08/29"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm font-mono outline-none focus:border-blue-600"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">CVV</label>
                      <input
                        type="password"
                        defaultValue="•••"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm font-mono outline-none focus:border-blue-600"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* UPI Mock */}
              {paymentMethod === 'upi' && (
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-3">
                  <div className="w-32 h-32 bg-white rounded-xl border border-slate-200 mx-auto flex items-center justify-center p-2 shadow-sm">
                    <QrCode className="w-24 h-24 text-slate-800" />
                  </div>
                  <p className="text-xs text-slate-600 font-mono">VPA: zisantech.solutions@icici</p>
                  <p className="text-[11px] text-slate-400">Scan using any corporate UPI application to authorize ₹45,000.00.</p>
                </div>
              )}

              {/* Netbanking Mock */}
              {paymentMethod === 'netbanking' && (
                <div className="space-y-3">
                  <label className="block text-xs font-bold text-slate-700">Select Corporate Bank</label>
                  <select className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm bg-white outline-none focus:border-blue-600">
                    <option>HDFC Bank Corporate Banking</option>
                    <option>ICICI Bank Corporate Portal</option>
                    <option>State Bank of India (CINB)</option>
                    <option>Axis Bank Commercial Banking</option>
                  </select>
                </div>
              )}

              {/* Simulation triggers for client review */}
              <div className="pt-4 border-t border-slate-100 space-y-3">
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Frontend Simulation Controls:</p>
                <div className="flex gap-3">
                  <button
                    type="button"
                    disabled={isProcessing}
                    onClick={() => handleProcessPayment('success')}
                    className="flex-1 py-3.5 rounded-xl bg-gradient-to-r from-blue-700 to-teal-600 hover:from-blue-600 hover:to-teal-500 text-white font-bold text-xs transition-all flex items-center justify-center gap-1.5 shadow-lg shadow-blue-900/20"
                  >
                    {isProcessing ? <RefreshCw className="w-4 h-4 animate-spin" /> : <ShieldCheck className="w-4 h-4" />}
                    <span>Pay ₹45,000 (Simulate Success)</span>
                  </button>

                  <button
                    type="button"
                    disabled={isProcessing}
                    onClick={() => handleProcessPayment('failure')}
                    className="py-3.5 px-4 rounded-xl bg-red-50 hover:bg-red-100 text-red-700 font-bold text-xs border border-red-200 transition-all"
                  >
                    Simulate Failure
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

