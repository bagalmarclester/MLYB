import React from 'react';
import { Link } from 'react-router-dom';
import { personalInfo } from '../data/portfolioData';

export default function PrivacyPolicy() {
  return (
    <div className="relative z-10 w-full max-w-4xl mx-auto">
      {/* Back Link */}
      <div className="mb-6">
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-xs font-inter font-semibold text-black hover:opacity-70 transition-opacity"
        >
          <span className="material-symbols-outlined text-[18px]">arrow_back</span> Back to Home
        </Link>
      </div>

      {/* Header */}
      <div className="mb-10">
        <div className="font-label-caps text-xs text-black mb-3 flex items-center gap-3">
          <span>LEGAL COMPLIANCE</span>
          <div className="h-px bg-outline-variant/30 flex-grow"></div>
          <span>RA 10173 • NPC</span>
        </div>
        <h1 className="font-fraunces text-3xl md:text-5xl font-bold text-black mb-4">
          Privacy Policy
        </h1>
        <p className="font-inter text-sm md:text-base text-black/80 leading-relaxed">
          Compliant with the <strong>Data Privacy Act of 2012 (Republic Act No. 10173)</strong>, its Implementing Rules and Regulations (IRR), circulars issued by the <strong>National Privacy Commission (NPC)</strong> of the Philippines, and applicable local regulations in <strong>Davao City, Philippines</strong>.
        </p>
        <div className="mt-4 text-xs font-code-sm text-black/60">
          Last Updated & Effective: September 2026 • Jurisdiction: Davao City, Philippines
        </div>
      </div>

      {/* Main Content Card */}
      <div className="bento-card p-8 md:p-12 rounded-xl border border-outline-variant/30 glow-border space-y-8 text-gray-300 font-inter text-sm leading-relaxed">
        
        {/* Section 1: Overview & Controller */}
        <section className="space-y-3">
          <h2 className="font-fraunces text-xl font-bold text-white">
            1. Personal Information Controller (PIC)
          </h2>
          <p>
            This personal developer portfolio is operated by <strong className="text-white">{personalInfo.name}</strong>, who acts as the <strong>Personal Information Controller (PIC)</strong> under Philippine Law.
          </p>
          <div className="bg-surface-container-low/30 border border-outline-variant/30 p-4 rounded-lg font-code-sm text-xs text-gray-200 space-y-1">
            <div><strong>Controller:</strong> {personalInfo.name}</div>
            <div><strong>Location:</strong> {personalInfo.location}</div>
            <div><strong>Contact Endpoint:</strong> {personalInfo.email}</div>
            <div><strong>Applicable Law:</strong> Republic Act No. 10173 (DPA of 2012)</div>
          </div>
        </section>

        {/* Section 2: Personal Information Collected */}
        <section className="space-y-3">
          <h2 className="font-fraunces text-xl font-bold text-white">
            2. Personal Information We Collect
          </h2>
          <p>
            We adhere to the principle of <em>data minimization</em> as mandated by RA 10173. We collect only what is strictly necessary to communicate with you:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-300">
            <li>
              <strong className="text-white">Direct Inquiries:</strong> When you initiate contact via email (<code className="text-primary-container bg-surface-container-low/50 px-1 py-0.5 rounded">{personalInfo.email}</code>), we receive your sender email address, name, subject line, and any communication details you voluntarily provide.
            </li>
            <li>
              <strong className="text-white">Technical Metadata:</strong> This website is hosted on GitHub Pages (GitHub, Inc.). When you visit, standard server access logs (such as IP address, user-agent, operating system, and referral timestamp) may be processed by the host infrastructure for diagnostic and security purposes.
            </li>
            <li>
              <strong className="text-white">Zero Tracking Cookies:</strong> This portfolio does not utilize third-party commercial tracking cookies, advertising analytics, or invasive biometric profiling tools.
            </li>
          </ul>
        </section>

        {/* Section 3: Purpose of Data Collection */}
        <section className="space-y-3">
          <h2 className="font-fraunces text-xl font-bold text-white">
            3. Purpose & Legal Basis for Processing
          </h2>
          <p>
            In accordance with <strong>Section 12 of Republic Act No. 10173</strong>, processing of personal data is carried out on the lawful basis of your <em>voluntary consent</em> and <em>legitimate professional interest</em>, specifically:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-300">
            <li>Evaluating and responding to recruitment, internship, freelance, or employment inquiries.</li>
            <li>Facilitating technical consultations, open-source software collaboration, and academic networking.</li>
            <li>Complying with lawful orders issued by Philippine regulatory or law enforcement bodies pursuant to the Cybercrime Prevention Act of 2012 (RA 10175).</li>
          </ul>
        </section>

        {/* Section 4: Rights of the Data Subject */}
        <section className="space-y-4">
          <h2 className="font-fraunces text-xl font-bold text-white">
            4. Your Rights as a Data Subject
          </h2>
          <p>
            Under <strong>Section 16 of the Data Privacy Act of 2012</strong>, visitors and correspondents from both the Philippines and worldwide are entitled to the following statutory rights:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-lg bg-surface-container-low/20 border border-outline-variant/30">
              <h3 className="font-bold text-white text-sm mb-1">Right to be Informed</h3>
              <p className="text-xs text-gray-300">You have the right to know whether your personal data shall be, are being, or have been processed.</p>
            </div>
            <div className="p-4 rounded-lg bg-surface-container-low/20 border border-outline-variant/30">
              <h3 className="font-bold text-white text-sm mb-1">Right to Access</h3>
              <p className="text-xs text-gray-300">You may demand reasonable access to the contents of your personal information held in correspondence archives.</p>
            </div>
            <div className="p-4 rounded-lg bg-surface-container-low/20 border border-outline-variant/30">
              <h3 className="font-bold text-white text-sm mb-1">Right to Rectification</h3>
              <p className="text-xs text-gray-300">You have the right to dispute any inaccuracy or error in your personal information and have it corrected.</p>
            </div>
            <div className="p-4 rounded-lg bg-surface-container-low/20 border border-outline-variant/30">
              <h3 className="font-bold text-white text-sm mb-1">Right to Erasure or Blocking</h3>
              <p className="text-xs text-gray-300">You may request the suspension, withdrawal, or order the removal of your personal information from our files.</p>
            </div>
            <div className="p-4 rounded-lg bg-surface-container-low/20 border border-outline-variant/30">
              <h3 className="font-bold text-white text-sm mb-1">Right to Damages</h3>
              <p className="text-xs text-gray-300">You shall be indemnified for any damages sustained due to inaccurate, false, unlawfully obtained or unauthorized use of personal data.</p>
            </div>
            <div className="p-4 rounded-lg bg-surface-container-low/20 border border-outline-variant/30">
              <h3 className="font-bold text-white text-sm mb-1">Right to Lodge a Complaint</h3>
              <p className="text-xs text-gray-300">You may lodge complaints with the National Privacy Commission (NPC) if your privacy rights are violated.</p>
            </div>
          </div>
        </section>

        {/* Section 5: Security Measures & Retention */}
        <section className="space-y-3">
          <h2 className="font-fraunces text-xl font-bold text-white">
            5. Security Measures & Data Retention
          </h2>
          <p>
            We implement reasonable and appropriate organizational, physical, and technical measures compliant with <strong>NPC Circular 16-01</strong> to safeguard personal information against accidental loss, unauthorized access, or unlawful destruction.
          </p>
          <p>
            Correspondence data is retained solely for the duration required to achieve the purpose of communication (e.g. ongoing project contracts or recruitment processes) and is securely deleted when no longer needed.
          </p>
        </section>

        {/* Section 6: Inquiries & Exercise of Rights */}
        <section className="space-y-3 border-t border-outline-variant/20 pt-6">
          <h2 className="font-fraunces text-xl font-bold text-white">
            6. Privacy Inquiries & Exercising Your Rights
          </h2>
          <p>
            To exercise any of your statutory rights or submit questions regarding data privacy, please contact the controller directly:
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <a
              href={`mailto:${personalInfo.email}?subject=Data%20Privacy%20Inquiry%20(RA%2010173)`}
              className="inline-flex items-center justify-center gap-2 bg-black text-white font-inter text-xs font-bold px-6 py-3 rounded-DEFAULT hover:opacity-85 transition-opacity"
            >
              <span className="material-symbols-outlined text-[16px]">mail</span> Email Data Privacy Request
            </a>
            <a
              href="https://privacy.gov.ph"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-outline-variant/40 text-gray-300 font-inter text-xs px-6 py-3 rounded-DEFAULT hover:bg-surface-container-low/20 transition-colors"
            >
              National Privacy Commission (NPC) Portal <span className="material-symbols-outlined text-[14px]">open_in_new</span>
            </a>
          </div>
        </section>

      </div>
    </div>
  );
}
