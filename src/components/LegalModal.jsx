import React, { useEffect, useState } from 'react';
import { personalInfo } from '../data/portfolioData';

export default function LegalModal({ isOpen, initialTab = 'privacy', onClose }) {
  const [activeTab, setActiveTab] = useState(initialTab);

  useEffect(() => {
    if (initialTab) {
      setActiveTab(initialTab);
    }
  }, [initialTab]);

  // Handle ESC key press to close and manage body scroll lock
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="bg-[#fdfcf9] text-black border border-black/15 max-w-3xl w-full max-h-[88vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="p-4 sm:p-6 border-b border-black/10 flex items-center justify-between gap-4 bg-surface-container-low/40">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('privacy')}
              className={`px-3 py-1.5 rounded-lg text-xs font-inter font-bold transition-all cursor-pointer ${
                activeTab === 'privacy'
                  ? 'bg-black text-white shadow-sm'
                  : 'text-black/70 hover:text-black hover:bg-black/5'
              }`}
            >
              Privacy Policy
            </button>
            <button
              onClick={() => setActiveTab('terms')}
              className={`px-3 py-1.5 rounded-lg text-xs font-inter font-bold transition-all cursor-pointer ${
                activeTab === 'terms'
                  ? 'bg-black text-white shadow-sm'
                  : 'text-black/70 hover:text-black hover:bg-black/5'
              }`}
            >
              Terms of Service
            </button>
          </div>

          {/* Close Button */}
          <button
            onClick={onClose}
            aria-label="Close legal modal"
            className="w-8 h-8 rounded-full flex items-center justify-center text-black hover:bg-black/10 transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-5 sm:p-8 overflow-y-auto space-y-6 font-inter text-xs sm:text-sm leading-relaxed text-black/85">
          {activeTab === 'privacy' ? (
            <div className="space-y-6">
              {/* Header Title */}
              <div>
                <div className="font-label-caps text-[11px] text-black/60 mb-1">
                  REPUBLIC ACT NO. 10173 • NATIONAL PRIVACY COMMISSION
                </div>
                <h2 className="font-fraunces text-2xl sm:text-3xl font-bold text-black">
                  Privacy Policy
                </h2>
                <p className="text-black/70 text-xs mt-1">
                  Effective & Last Updated: September 2026 • Jurisdiction: Davao City, Philippines
                </p>
              </div>

              {/* Notice Box */}
              <div className="p-4 rounded-xl bg-surface-container-low/60 border border-black/10 text-xs space-y-1">
                <div><strong>Controller:</strong> {personalInfo.name}</div>
                <div><strong>Location:</strong> {personalInfo.location}</div>
                <div><strong>Official Contact:</strong> {personalInfo.email}</div>
                <div><strong>Legal Framework:</strong> Philippine Data Privacy Act of 2012 (RA 10173) & NPC Circulars</div>
              </div>

              {/* Section 1 */}
              <section className="space-y-2">
                <h3 className="font-fraunces text-base font-bold text-black">
                  1. Declaration of Policy & Scope
                </h3>
                <p>
                  This Privacy Policy outlines how personal data is processed on this portfolio website in strict accordance with <strong>Republic Act No. 10173</strong> (Data Privacy Act of 2012), its Implementing Rules and Regulations (IRR), and issuance directives of the <strong>National Privacy Commission (NPC)</strong> of the Republic of the Philippines.
                </p>
              </section>

              {/* Section 2 */}
              <section className="space-y-2">
                <h3 className="font-fraunces text-base font-bold text-black">
                  2. Collection & Proportionality
                </h3>
                <p>
                  Adhering to the statutory principle of data minimization:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-black/80">
                  <li>
                    <strong>Direct Communications:</strong> When you send an email transmission or contact Marc Lester via <code className="bg-black/5 px-1 py-0.5 rounded text-black">{personalInfo.email}</code>, we collect your name, email address, message contents, and organizational details you voluntarily share.
                  </li>
                  <li>
                    <strong>Technical Server Logs:</strong> Standard web hosting logs (IP addresses, browser client user-agents, referral pages, access timestamps) are processed by GitHub Pages (GitHub, Inc.) for network routing, security, and diagnostics.
                  </li>
                  <li>
                    <strong>No Tracking or Advertising Cookies:</strong> This website does not place third-party marketing tracking cookies, telemetry pixels, or invasive behavioral profilers.
                  </li>
                </ul>
              </section>

              {/* Section 3 */}
              <section className="space-y-2">
                <h3 className="font-fraunces text-base font-bold text-black">
                  3. Lawful Basis for Processing (Section 12, RA 10173)
                </h3>
                <p>
                  Processing of correspondence data is anchored on the data subject's <em>express consent</em> and <em>legitimate professional interest</em> to evaluate employment proposals, discuss technical projects, facilitate academic inquiries, and comply with applicable Philippine law.
                </p>
              </section>

              {/* Section 4 */}
              <section className="space-y-3">
                <h3 className="font-fraunces text-base font-bold text-black">
                  4. Statutory Rights of the Data Subject
                </h3>
                <p>
                  Under <strong>Section 16 of RA 10173</strong>, you are entitled to:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3 rounded-lg border border-black/10 bg-surface-container-low/30">
                    <strong>Right to be Informed</strong>
                    <p className="text-black/70 mt-0.5">Know whether your personal data is collected, stored, or processed.</p>
                  </div>
                  <div className="p-3 rounded-lg border border-black/10 bg-surface-container-low/30">
                    <strong>Right to Access</strong>
                    <p className="text-black/70 mt-0.5">Request access to your personal correspondence details held by the controller.</p>
                  </div>
                  <div className="p-3 rounded-lg border border-black/10 bg-surface-container-low/30">
                    <strong>Right to Rectification</strong>
                    <p className="text-black/70 mt-0.5">Correct or update any inaccurate or obsolete personal information.</p>
                  </div>
                  <div className="p-3 rounded-lg border border-black/10 bg-surface-container-low/30">
                    <strong>Right to Erasure / Blocking</strong>
                    <p className="text-black/70 mt-0.5">Request removal or suspension of your personal data from records.</p>
                  </div>
                  <div className="p-3 rounded-lg border border-black/10 bg-surface-container-low/30">
                    <strong>Right to Damages</strong>
                    <p className="text-black/70 mt-0.5">Be indemnified for damages due to inaccurate, unlawful, or unauthorized processing.</p>
                  </div>
                  <div className="p-3 rounded-lg border border-black/10 bg-surface-container-low/30">
                    <strong>Right to File a Complaint</strong>
                    <p className="text-black/70 mt-0.5">Lodge a formal complaint with the National Privacy Commission (privacy.gov.ph).</p>
                  </div>
                </div>
              </section>

              {/* Section 5 */}
              <section className="space-y-2">
                <h3 className="font-fraunces text-base font-bold text-black">
                  5. Retention, Security & Inquiries
                </h3>
                <p>
                  Reasonable physical and technical safeguards are maintained pursuant to <strong>NPC Circular 16-01</strong>. Communications are stored only as long as necessary for professional fulfillment. To exercise any of your statutory rights, email <a href={`mailto:${personalInfo.email}?subject=Privacy%20Request%20(RA%2010173)`} className="font-bold underline text-black">{personalInfo.email}</a>.
                </p>
              </section>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Header Title */}
              <div>
                <div className="font-label-caps text-[11px] text-black/60 mb-1">
                  REPUBLIC ACTS 8792, 8293, 10175 • DAVAO CITY JURISDICTION
                </div>
                <h2 className="font-fraunces text-2xl sm:text-3xl font-bold text-black">
                  Terms of Service
                </h2>
                <p className="text-black/70 text-xs mt-1">
                  Effective Date: September 2026 • Governing Law: Republic of the Philippines
                </p>
              </div>

              {/* Notice Box */}
              <div className="p-4 rounded-xl bg-surface-container-low/60 border border-black/10 text-xs space-y-1">
                <div><strong>Governing Law:</strong> Laws of the Republic of the Philippines</div>
                <div><strong>Exclusive Court Venue:</strong> Proper Courts of Davao City, Philippines</div>
                <div><strong>Relevant Acts:</strong> RA 8792 (E-Commerce), RA 8293 (IP Code), RA 10175 (Cybercrime)</div>
              </div>

              {/* Section 1 */}
              <section className="space-y-2">
                <h3 className="font-fraunces text-base font-bold text-black">
                  1. Acceptance of Terms
                </h3>
                <p>
                  By browsing this portfolio website, you confirm your acceptance of these Terms of Service. These terms apply to all visitors, recruiters, developers, and users accessing the service.
                </p>
              </section>

              {/* Section 2 */}
              <section className="space-y-2">
                <h3 className="font-fraunces text-base font-bold text-black">
                  2. Intellectual Property Rights (RA 8293)
                </h3>
                <p>
                  Pursuant to the <strong>Intellectual Property Code of the Philippines (Republic Act No. 8293)</strong>, all bespoke portfolio designs, authored code implementations, textual writeups, and branding assets created by <strong>{personalInfo.name}</strong> are protected by copyright. Open source repositories remain subject to their designated licenses on GitHub (e.g. MIT, Apache 2.0).
                </p>
              </section>

              {/* Section 3 */}
              <section className="space-y-2">
                <h3 className="font-fraunces text-base font-bold text-black">
                  3. Permitted Use & Cybercrime Prohibitions (RA 10175)
                </h3>
                <p>
                  You are granted a revocable, non-exclusive license to review and explore this site for hiring, academic, and evaluation purposes. Under the <strong>Cybercrime Prevention Act of 2012 (Republic Act No. 10175)</strong>, the following activities are strictly prohibited:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-black/80">
                  <li>Unauthorized system intrusion, automated stress-testing, or Denial of Service (DoS) attacks.</li>
                  <li>Scraping with intent to republish or claim authored work as one's own.</li>
                  <li>Transmitting unsolicited promotional spam, harassment, or malicious payloads.</li>
                </ul>
              </section>

              {/* Section 4 */}
              <section className="space-y-2">
                <h3 className="font-fraunces text-base font-bold text-black">
                  4. Electronic Communications (RA 8792)
                </h3>
                <p>
                  Under the <strong>Electronic Commerce Act of 2000 (Republic Act No. 8792)</strong>, electronic communications, transmissions, and notices exchanged through email or forms satisfy legal requirements that contracts and notices be documented in writing.
                </p>
              </section>

              {/* Section 5 */}
              <section className="space-y-2">
                <h3 className="font-fraunces text-base font-bold text-black">
                  5. Disclaimers & Limitation of Liability
                </h3>
                <p>
                  This portfolio and demonstration software are provided on an <strong>"AS-IS"</strong> and <strong>"AS-AVAILABLE"</strong> basis without warranties of any kind. {personalInfo.name} disclaims all liability for any incidental, indirect, or consequential damages resulting from website downtime or external third-party links.
                </p>
              </section>

              {/* Section 6 */}
              <section className="space-y-2">
                <h3 className="font-fraunces text-base font-bold text-black">
                  6. Governing Law & Exclusive Venue in Davao City
                </h3>
                <p>
                  These Terms are governed by and construed in accordance with the <strong>laws of the Republic of the Philippines</strong>. Any dispute, claim, or controversy arising out of or relating to this website shall be submitted to the exclusive jurisdiction of the <strong>proper courts of Davao City, Philippines</strong>.
                </p>
              </section>
            </div>
          )}
        </div>

        {/* Modal Bottom Bar */}
        <div className="p-4 sm:p-5 border-t border-black/10 flex flex-col sm:flex-row items-center justify-between gap-3 bg-surface-container-low/30">
          <div className="text-[11px] text-black/60 font-code-sm">
            {activeTab === 'privacy' ? 'RA 10173 • NPC Compliant' : 'RA 8792 • Davao City Jurisdiction'}
          </div>
          <button
            onClick={onClose}
            className="w-full sm:w-auto bg-black text-white font-inter text-xs font-bold px-6 py-2 rounded-lg hover:opacity-85 transition-opacity cursor-pointer"
          >
            I Understand & Close
          </button>
        </div>
      </div>
    </div>
  );
}
