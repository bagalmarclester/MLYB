import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { personalInfo } from '../data/portfolioData';

// ─────────────────────────────────────────────────────────────────────────────
// EmailJS Configuration
// 1. Sign up free at https://www.emailjs.com/
// 2. Create a new Email Service (Gmail) → copy your Service ID
// 3. Create an Email Template using the variables below → copy your Template ID
// 4. Go to Account → API Keys → copy your Public Key
//
// Required Template Variables (use these exact names in your EmailJS template):
//   {{from_name}}    - sender's name
//   {{from_email}}   - sender's email
//   {{phone}}        - sender's phone
//   {{subject}}      - subject
//   {{message}}      - message body
//   {{to_email}}     - your email (bagalmarclester@gmail.com)
// ─────────────────────────────────────────────────────────────────────────────
const EMAILJS_SERVICE_ID = 'service_hzn2mrm';   // e.g. 'service_abc123'
const EMAILJS_TEMPLATE_ID = 'template_78tb7db';  // e.g. 'template_xyz456'
const EMAILJS_PUBLIC_KEY = 'oqtm2jG_24NsfsK-R';   // e.g. 'aBcDeFgHiJkLmNoP'

export default function Contact() {
  const formRef = useRef(null);
  const [copied, setCopied] = useState(false);
  const [verified, setVerified] = useState(false);
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
    if (!verified) {
      setErrorMsg('Please complete the verification check first.');
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
    };

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );
      setStatus('success');
      // Reset after 5 seconds
      setTimeout(() => {
        setStatus('idle');
        setFormData({ name: '', phone: '', email: '', subject: '', message: '' });
        setVerified(false);
      }, 5000);
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('error');
      setErrorMsg('Failed to send. Please email me directly at bagalmarclester@gmail.com');
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
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-black/15 bg-black/[0.02] focus:bg-white focus:border-black focus:outline-none text-black font-inter text-sm transition-all resize-y"
                ></textarea>
              </div>

              {/* Human Verification Box (Cloudflare Turnstile Style) */}
              <div className="pt-2">
                <div
                  onClick={() => setVerified(!verified)}
                  className="inline-flex items-center justify-between gap-6 bg-[#222] text-white px-4 py-3 rounded-md cursor-pointer select-none border border-black/20 hover:bg-[#2a2a2a] transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-5 h-5 rounded border flex items-center justify-center transition-all ${verified
                        ? 'bg-[#3b82f6] border-[#3b82f6] text-white'
                        : 'border-gray-400 bg-[#333]'
                        }`}
                    >
                      {verified && (
                        <span className="material-symbols-outlined text-[16px] font-bold">
                          check
                        </span>
                      )}
                    </div>
                    <span className="font-inter text-xs font-medium">Verify you are human</span>
                  </div>

                  {/* Cloudflare logo mock */}
                  <div className="flex flex-col items-end opacity-80 pl-4 border-l border-white/10">
                    <div className="flex items-center gap-1 text-[9px] font-inter tracking-wider text-orange-400 font-bold uppercase">
                      <span className="material-symbols-outlined text-[14px]">cloud</span>
                      <span>Cloudflare</span>
                    </div>
                    <span className="text-[8px] text-gray-400">Privacy · Terms</span>
                  </div>
                </div>
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
