import React from 'react';
import { Link } from 'react-router-dom';
import { personalInfo } from '../data/portfolioData';

export default function TermsOfService() {
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
          <span>LEGAL FRAMEWORK</span>
          <div className="h-px bg-outline-variant/30 flex-grow"></div>
          <span>RA 8792 • RA 8293 • DAVAO CITY</span>
        </div>
        <h1 className="font-fraunces text-3xl md:text-5xl font-bold text-black mb-4">
          Terms of Service
        </h1>
        <p className="font-inter text-sm md:text-base text-black/80 leading-relaxed">
          Governed under the laws of the <strong>Republic of the Philippines</strong>, including the <strong>Electronic Commerce Act of 2000 (Republic Act No. 8792)</strong>, the <strong>Intellectual Property Code of the Philippines (Republic Act No. 8293)</strong>, the <strong>Cybercrime Prevention Act of 2012 (Republic Act No. 10175)</strong>, and local ordinances of <strong>Davao City, Philippines</strong>.
        </p>
        <div className="mt-4 text-xs font-code-sm text-black/60">
          Effective Date: September 2026 • Jurisdiction: Davao City, Republic of the Philippines
        </div>
      </div>

      {/* Main Content Card */}
      <div className="bento-card p-8 md:p-12 rounded-xl border border-outline-variant/30 glow-border space-y-8 text-gray-300 font-inter text-sm leading-relaxed">
        
        {/* Section 1: Agreement to Terms */}
        <section className="space-y-3">
          <h2 className="font-fraunces text-xl font-bold text-white">
            1. Agreement & Acceptance of Terms
          </h2>
          <p>
            By accessing or browsing this website (<code className="text-primary-container bg-surface-container-low/50 px-1 py-0.5 rounded">bagalmarclester.github.io/Portfolio</code>), you acknowledge that you have read, understood, and agree to be bound by these Terms of Service and all applicable national and local laws and regulations of the Republic of the Philippines. If you do not agree to these terms, you are advised to discontinue browsing the website.
          </p>
        </section>

        {/* Section 2: Intellectual Property Rights */}
        <section className="space-y-3">
          <h2 className="font-fraunces text-xl font-bold text-white">
            2. Intellectual Property Rights (RA 8293)
          </h2>
          <p>
            Pursuant to the <strong>Intellectual Property Code of the Philippines (Republic Act No. 8293)</strong>:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-300">
            <li>
              <strong className="text-white">Original Portfolio Works:</strong> The visual layout, original graphics, authored articles, project summaries, and code written exclusively for this portfolio website are the intellectual property of <strong className="text-white">{personalInfo.name}</strong>, with all rights reserved unless explicitly stated otherwise.
            </li>
            <li>
              <strong className="text-white">Open Source Software:</strong> Repositories linked to GitHub are governed by their respective open source licenses (such as MIT, Apache 2.0, or GNU GPL) as clearly specified within each individual project repository.
            </li>
            <li>
              <strong className="text-white">Third-Party Trademarks:</strong> All third-party trademarks, logos, and service marks (e.g. GitHub, LinkedIn, Google, University of Mindanao) are the property of their respective owners. Their mention here constitutes fair nominative use for professional demonstration.
            </li>
          </ul>
        </section>

        {/* Section 3: Permitted Use & User Conduct */}
        <section className="space-y-3">
          <h2 className="font-fraunces text-xl font-bold text-white">
            3. Permitted Use & User Conduct (RA 10175)
          </h2>
          <p>
            Visitors are granted a personal, non-exclusive, revocable license to view, evaluate, and navigate the portfolio for hiring consideration, technical evaluation, and professional collaboration.
          </p>
          <p className="text-white font-semibold">Strictly Prohibited Acts:</p>
          <ul className="list-disc pl-5 space-y-2 text-gray-300">
            <li>
              Engaging in unauthorized access, scraping, Denial of Service (DoS) attacks, or malicious penetration testing prohibited under the <strong>Cybercrime Prevention Act of 2012 (Republic Act No. 10175)</strong>.
            </li>
            <li>
              Misrepresenting affiliation, impersonating the owner, or using contact information for unsolicited commercial advertisements (spam) or fraudulent schemes.
            </li>
            <li>
              Plagiarizing authored content or claiming proprietary project source code as one's own without attribution.
            </li>
          </ul>
        </section>

        {/* Section 4: Electronic Communications */}
        <section className="space-y-3">
          <h2 className="font-fraunces text-xl font-bold text-white">
            4. Electronic Communications (RA 8792)
          </h2>
          <p>
            In compliance with the <strong>Electronic Commerce Act of 2000 (Republic Act No. 8792)</strong>, electronic transmissions, emails, and online notices sent via the portfolio contact channels satisfy any legal requirement that such communications be in writing and constitute valid, legally recognized electronic documents.
          </p>
        </section>

        {/* Section 5: Disclaimer of Warranties */}
        <section className="space-y-3">
          <h2 className="font-fraunces text-xl font-bold text-white">
            5. Disclaimer of Warranties
          </h2>
          <p>
            This website and its showcased demonstration builds are provided strictly on an <strong>"AS-IS"</strong> and <strong>"AS-AVAILABLE"</strong> basis without warranties of any kind, whether express, implied, or statutory. While every effort is made to maintain accurate information and continuous availability, {personalInfo.name} does not warrant that the website will operate uninterrupted or error-free.
          </p>
        </section>

        {/* Section 6: Limitation of Liability */}
        <section className="space-y-3">
          <h2 className="font-fraunces text-xl font-bold text-white">
            6. Limitation of Liability
          </h2>
          <p>
            To the maximum extent permitted by applicable Philippine law and the Civil Code of the Philippines, {personalInfo.name} shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising out of your access to, use of, or inability to use this website, external links, or code repositories.
          </p>
        </section>

        {/* Section 7: Governing Law & Local Jurisdiction */}
        <section className="space-y-3 border-t border-outline-variant/20 pt-6">
          <h2 className="font-fraunces text-xl font-bold text-white">
            7. Governing Law & Exclusive Local Jurisdiction
          </h2>
          <p>
            These Terms of Service and any dispute or claim arising out of or related to this website shall be governed by, construed, and enforced in accordance with the <strong>laws of the Republic of the Philippines</strong>.
          </p>
          <div className="bg-surface-container-low/30 border border-outline-variant/30 p-4 rounded-lg font-code-sm text-xs text-gray-200">
            <strong>Exclusive Venue:</strong> Any legal action, suit, or proceeding arising under or in connection with these Terms shall be instituted exclusively in the proper courts of competent jurisdiction in <strong>Davao City, Philippines</strong>, to the exclusion of all other courts.
          </div>
        </section>

        {/* Section 8: Inquiries & Contact */}
        <section className="space-y-3 border-t border-outline-variant/20 pt-6">
          <h2 className="font-fraunces text-xl font-bold text-white">
            8. Inquiries Regarding Terms
          </h2>
          <p>
            For questions or legal correspondence regarding these Terms of Service, please reach out directly:
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <a
              href={`mailto:${personalInfo.email}?subject=Terms%20of%20Service%20Inquiry`}
              className="inline-flex items-center justify-center gap-2 bg-black text-white font-inter text-xs font-bold px-6 py-3 rounded-DEFAULT hover:opacity-85 transition-opacity"
            >
              <span className="material-symbols-outlined text-[16px]">mail</span> Contact Legal Inquiry
            </a>
            <Link
              to="/privacy"
              className="inline-flex items-center justify-center gap-2 border border-outline-variant/40 text-gray-300 font-inter text-xs px-6 py-3 rounded-DEFAULT hover:bg-surface-container-low/20 transition-colors"
            >
              View Privacy Policy <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}
