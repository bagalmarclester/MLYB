import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import ReCAPTCHA from 'react-google-recaptcha';
import { personalInfo } from '../data/portfolioData';

// ─────────────────────────────────────────────────────────────────────────────
// EmailJS Configuration
// 1. Sign up free at https://www.emailjs.com/
// 2. Create a new Email Service (Gmail) → copy your Service ID
// 3. Create an Email Template using the variables below → copy your Template ID
// 4. Go to Account → API Keys → copy your Public Key
//
// Required Template Variables (use these exact names in your EmailJS template):
//   {{from_name}}            - sender's name
//   {{from_email}}           - sender's email
//   {{phone}}                - sender's phone
//   {{subject}}              - subject
//   {{message}}              - message body
//   {{to_email}}             - your email (bagalmarclester@gmail.com)
//   {{g-recaptcha-response}} - Google reCAPTCHA response token
// ─────────────────────────────────────────────────────────────────────────────
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_hzn2mrm';
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_78tb7db';
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'oqtm2jG_24NsfsK-R';

// ─────────────────────────────────────────────────────────────────────────────
// Google reCAPTCHA v2 Configuration
// 1. Go to: https://www.google.com/recaptcha/admin
// 2. Label: Portfolio (or your choice)
// 3. reCAPTCHA type: Challenge (v2) -> "I'm not a robot" Checkbox
// 4. Domains: Add 'bagalmarclester.github.io' and 'localhost'
// 5. Copy your public Site Key and paste into .env (VITE_RECAPTCHA_SITE_KEY)
// 6. Copy your Secret Key and add it in EmailJS:
//    EmailJS Dashboard -> Email Templates -> 'template_78tb7db' -> Settings tab ->
//    Check 'Enable reCAPTCHA V2 verification' -> Paste your Secret Key -> Save.
// ─────────────────────────────────────────────────────────────────────────────
const RECAPTCHA_SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY || '6LevN7EtAAAAAOyGvErZMRrhbVpMbmq7r71prOi8';

export default function Contact() {
  const formRef = useRef(null);
  const recaptchaRef = useRef(null);
  const [copied, setCopied] = useState(false);
  const [verified, setVerified] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState('');
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'success' | 'error'
  const [errorMsg, setErrorMsg] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
  });

  const copyEmail = () => {
    const email = personalInfo.email;
    const handleSuccess = () => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    };

    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard
        .writeText(email)
        .then(handleSuccess)
        .catch(() => fallbackCopy(email, handleSuccess));
    } else {
      fallbackCopy(email, handleSuccess);
    }
  };

  const fallbackCopy = (text, callback) => {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.opacity = '0';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand('copy');
      callback();
    } catch (err) {
      console.error('Copy fallback failed', err);
    }
    document.body.removeChild(textArea);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!verified || !recaptchaToken) {
      setErrorMsg('Please complete the reCAPTCHA verification check first.');
      return;
    }
    setErrorMsg('');
    setStatus('sending');

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone || 'Not provided',
      subject: formData.subject,
      message: formData.message || 'No message provided.',
      to_email: 'bagalmarclester@gmail.com',
      'g-recaptcha-response': recaptchaToken,
    };

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );
      setStatus('success');
      setTimeout(() => {
        setStatus('idle');
        setFormData({ name: '', phone: '', email: '', subject: '', message: '' });
        setVerified(false);
        setRecaptchaToken('');
        recaptchaRef.current?.reset();
      }, 5000);
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('error');
      setErrorMsg('Failed to send. Please ensure reCAPTCHA is verified or email me directly at bagalmarclester@gmail.com');
      recaptchaRef.current?.reset();
      setVerified(false);
      setRecaptchaToken('');
    }
  };

  return (
    <div className="relative z-10 w-full">
      {/* Section Header */}
      <div className="font-label-caps text-label-caps text-black mb-8 flex items-center gap-4">
        Contact
        <div className="h-px bg-outline-variant/30 flex-grow ml-4"></div>
      </div>

      {/* Main Layout */}
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start w-full">
        {/* Left Column: Email & Preferences */}
        <div className="w-full lg:w-[320px] shrink-0 flex flex-col gap-5">
          {/* Email Box */}
          <div
            onClick={copyEmail}
            className="border border-black rounded-2xl p-4 flex items-center gap-4 bg-transparent cursor-pointer hover:bg-black/[0.02] transition-colors group relative"
            title="Click to copy email"
          >
            <div className="w-10 h-10 rounded-xl border border-black/20 flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[20px] text-black">mail</span>
            </div>
            <div className="flex-1 min-w-0">
              <span className="text-[11px] font-inter font-medium text-black/50 block leading-tight mb-0.5">
                Email
              </span>
              <span className="text-xs sm:text-sm font-inter font-bold text-black truncate block">
                {personalInfo.email}
              </span>
            </div>
            {copied && (
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] font-inter font-semibold bg-black text-white px-2 py-1 rounded">
                Copied!
              </span>
            )}
          </div>

          {/* Preferences Card */}
          <div className="border border-black rounded-2xl p-6 bg-transparent">
            <h2 className="text-[11px] font-inter font-bold uppercase tracking-wider text-black/50 mb-6">
              Preferences
            </h2>

            <div className="space-y-5 font-inter">
              <div>
                <span className="text-xs text-black/50 font-medium block mb-1">
                  Role-Type
                </span>
                <span className="text-sm font-bold text-black block">
                  Full-Time / Contract
                </span>
              </div>

              <div>
                <span className="text-xs text-black/50 font-medium block mb-1">
                  Work Setup
                </span>
                <span className="text-sm font-bold text-black block">
                  Remote or On-Site
                </span>
              </div>

              <div>
                <span className="text-xs text-black/50 font-medium block mb-1">
                  Engagement
                </span>
                <span className="text-sm font-bold text-black block">
                  Freelance / Project-Based
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="w-full flex-1 border border-black rounded-2xl md:rounded-3xl p-6 md:p-8 bg-transparent">
          {status === 'success' ? (
            <div className="py-16 flex flex-col items-center justify-center text-center">
              <div className="w-16 h-16 rounded-full bg-black text-white flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-3xl">check</span>
              </div>
              <h3 className="font-fraunces text-2xl font-bold text-black mb-2">Message Sent!</h3>
              <p className="font-inter text-sm text-black/70 max-w-md">
                Thank you for reaching out! I'll get back to you at <strong>{formData.email || 'your email'}</strong> within 24–48 hours.
              </p>
              <button
                type="button"
                onClick={() => {
                  setStatus('idle');
                  setFormData({ name: '', phone: '', email: '', subject: '', message: '' });
                  setVerified(false);
                  setRecaptchaToken('');
                  recaptchaRef.current?.reset();
                }}
                className="mt-6 px-5 py-2.5 text-xs font-inter font-semibold border border-black/20 rounded-xl hover:bg-black hover:text-white transition-all cursor-pointer"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-[11px] font-inter font-bold uppercase tracking-wider text-black/70 mb-1.5"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  maxLength={100}
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-black/15 bg-black/[0.02] focus:bg-white focus:border-black focus:outline-none text-black font-inter text-sm transition-all"
                />
              </div>

              {/* Phone Number */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-[11px] font-inter font-bold uppercase tracking-wider text-black/70 mb-1.5"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  maxLength={30}
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-black/15 bg-black/[0.02] focus:bg-white focus:border-black focus:outline-none text-black font-inter text-sm transition-all"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-[11px] font-inter font-bold uppercase tracking-wider text-black/70 mb-1.5"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  maxLength={120}
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-black/15 bg-black/[0.02] focus:bg-white focus:border-black focus:outline-none text-black font-inter text-sm transition-all"
                />
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="block text-[11px] font-inter font-bold uppercase tracking-wider text-black/70 mb-1.5"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  maxLength={150}
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-black/15 bg-black/[0.02] focus:bg-white focus:border-black focus:outline-none text-black font-inter text-sm transition-all"
                />
              </div>

              {/* Your Message (Optional) */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-[11px] font-inter font-bold uppercase tracking-wider text-black/70 mb-1.5"
                >
                  Your Message (Optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  maxLength={3000}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-black/15 bg-black/[0.02] focus:bg-white focus:border-black focus:outline-none text-black font-inter text-sm transition-all resize-y"
                ></textarea>
              </div>

              {/* Google reCAPTCHA v2 Verification */}
              <div className="pt-2 overflow-x-auto">
                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey={RECAPTCHA_SITE_KEY}
                  onChange={(token) => {
                    if (token) {
                      setVerified(true);
                      setRecaptchaToken(token);
                      setErrorMsg('');
                    } else {
                      setVerified(false);
                      setRecaptchaToken('');
                    }
                  }}
                  onExpired={() => {
                    setVerified(false);
                    setRecaptchaToken('');
                  }}
                  onErrored={() => {
                    setVerified(false);
                    setRecaptchaToken('');
                  }}
                />
              </div>

              {/* Error message */}
              {errorMsg && (
                <div className="flex items-start gap-2 px-4 py-3 bg-red-50 border border-red-200 rounded-lg">
                  <span className="material-symbols-outlined text-red-500 text-[18px] shrink-0 mt-0.5">error</span>
                  <p className="font-inter text-xs text-red-600">{errorMsg}</p>
                </div>
              )}

              {/* Submit Button */}
              <div className="pt-3">
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full bg-black text-white font-inter font-semibold py-3.5 px-6 rounded-xl hover:opacity-90 active:scale-[0.99] transition-all cursor-pointer text-center text-sm flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === 'sending' ? (
                    <>
                      <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                      </svg>
                      Sending...
                    </>
                  ) : 'Submit'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
