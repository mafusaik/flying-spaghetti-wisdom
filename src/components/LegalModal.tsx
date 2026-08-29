import React, { useState, useEffect } from 'react';
import { Shield, FileText, HelpCircle, ArrowLeft, Mail, Copy, CheckCircle2 } from 'lucide-react';
import { FSMLogo } from './Logo';

type ModalDoc = 'privacy' | 'terms' | 'support' | null;

interface LegalModalProps {
  doc: ModalDoc;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ doc, onClose }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (doc) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [doc, onClose]);

  if (!doc) return null;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('glazer.dev@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Dialog Window */}
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-[#0c1222] border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden flex flex-col z-10 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-[#090e1c]/90">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-400">
              <FSMLogo className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold text-white tracking-tight flex items-center gap-2">
                {doc === 'privacy' && (
                  <>
                    <Shield className="w-4 h-4 text-orange-400" />
                    <span>Privacy Policy</span>
                  </>
                )}
                {doc === 'terms' && (
                  <>
                    <FileText className="w-4 h-4 text-orange-400" />
                    <span>Terms of Service</span>
                  </>
                )}
                {doc === 'support' && (
                  <>
                    <HelpCircle className="w-4 h-4 text-orange-400" />
                    <span>Developer Support &amp; FAQ</span>
                  </>
                )}
              </h2>
              <p className="text-xs text-slate-400">Flying Spaghetti Wisdom &bull; GlazerDev</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors border border-slate-700/60"
            aria-label="Close modal"
          >
            ✕
          </button>
        </div>

        {/* Scrollable Document Content */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6 text-slate-300 text-sm leading-relaxed">
          
          {doc === 'privacy' && (
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-semibold">
                Effective Date: August 27, 2026
              </div>

              <section className="space-y-2">
                <h3 className="text-base font-bold text-white">1. Introduction</h3>
                <p>
                  GlazerDev (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) is committed to protecting your privacy. This Privacy Policy explains how information is handled when you use the <strong>Flying Spaghetti Wisdom</strong> mobile app and companion website.
                </p>
              </section>

              <section className="space-y-2">
                <h3 className="text-base font-bold text-white">2. No Personal Data Collection</h3>
                <p>
                  <strong>Flying Spaghetti Wisdom does NOT collect, sell, or transmit any personally identifiable information (PII).</strong>
                </p>
                <ul className="list-disc pl-5 space-y-1 text-slate-300">
                  <li>No registration or login accounts are required.</li>
                  <li>No location data, contact lists, or device files are accessed.</li>
                  <li>Your favorite quotes and wisdom history remain strictly stored on your local device.</li>
                </ul>
              </section>

              <section className="space-y-2">
                <h3 className="text-base font-bold text-white">3. Local Notifications &amp; Daily Reminders</h3>
                <p>
                  If you enable daily wisdom notifications, reminders are scheduled strictly locally on your device via Android / iOS system alarms. No push notifications or external tracking servers are involved.
                </p>
              </section>

              <section className="space-y-2">
                <h3 className="text-base font-bold text-white">4. Children&apos;s Privacy (COPPA &amp; GDPR-K)</h3>
                <p>
                  Our application is suitable for all audiences and does not knowingly collect any data from children or adults.
                </p>
              </section>

              <section className="space-y-2">
                <h3 className="text-base font-bold text-white">5. Contact GlazerDev</h3>
                <p>
                  If you have any questions regarding this Privacy Policy, you can reach out directly via email at:
                </p>
                <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 flex items-center justify-between">
                  <span className="font-mono text-orange-400 font-semibold text-xs sm:text-sm">glazer.dev@gmail.com</span>
                  <button
                    onClick={handleCopyEmail}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-orange-500/20 hover:bg-orange-500/30 text-orange-300 text-xs font-medium transition-colors"
                  >
                    {copiedEmail ? <CheckCircle2 className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedEmail ? 'Copied!' : 'Copy Email'}</span>
                  </button>
                </div>
              </section>
            </div>
          )}

          {doc === 'terms' && (
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-semibold">
                Effective Date: August 27, 2026
              </div>

              <section className="space-y-2">
                <h3 className="text-base font-bold text-white">1. Agreement to Terms</h3>
                <p>
                  By installing, accessing, or using <strong>Flying Spaghetti Wisdom</strong>, you agree to be bound by these Terms of Service. If you disagree with any portion of these terms, please do not use the application.
                </p>
              </section>

              <section className="space-y-2">
                <h3 className="text-base font-bold text-white">2. Nature of the Application</h3>
                <p>
                  Flying Spaghetti Wisdom provides humorous wisdom, historical lore, parody teachings, and quotations inspired by the Gospel of the Flying Spaghetti Monster and Church of the Flying Spaghetti Monster (Pastafarianism). Content is intended for educational, philosophical, satire, and spiritual enjoyment.
                </p>
              </section>

              <section className="space-y-2">
                <h3 className="text-base font-bold text-white">3. Intellectual Property &amp; Pastafarian Lore</h3>
                <p>
                  App code, original artworks, and interactive designs are copyright &copy; 2026 GlazerDev. Canonical texts, the Eight &ldquo;I&apos;d Really Rather You Didn&apos;ts&rdquo;, and Pastafarian lore are celebrated in honoring the public tradition established by Bobby Henderson.
                </p>
              </section>

              <section className="space-y-2">
                <h3 className="text-base font-bold text-white">4. Disclaimer of Warranties</h3>
                <p>
                  The application is provided &ldquo;as is&rdquo; without warranties of any kind. GlazerDev is not liable for spilled marinara sauce, unexpected pirate attire urges, or unboiled pasta.
                </p>
              </section>

              <section className="space-y-2">
                <h3 className="text-base font-bold text-white">5. Contact</h3>
                <p>
                  For any legal or licensing inquiries, please contact: <span className="text-orange-400 font-mono">glazer.dev@gmail.com</span>
                </p>
              </section>
            </div>
          )}

          {doc === 'support' && (
            <div className="space-y-6">
              <div className="p-4 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-200 text-sm">
                Need help, want to suggest new wisdom quotes, or reporting a bug? We are here to help!
              </div>

              <section className="space-y-3">
                <h3 className="text-base font-bold text-white">Frequently Asked Questions (FAQ)</h3>
                
                <div className="space-y-3">
                  <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
                    <h4 className="font-semibold text-white text-sm">How do I change the daily notification time?</h4>
                    <p className="text-xs text-slate-300 mt-1">
                      Open Settings inside the mobile app, toggle Daily Wisdom, and pick your preferred time (default is 09:00 AM).
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
                    <h4 className="font-semibold text-white text-sm">Does the app work without internet?</h4>
                    <p className="text-xs text-slate-300 mt-1">
                      Yes! 100% of wisdom quotes, the full Gospel, and reminders are stored offline on your device.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
                    <h4 className="font-semibold text-white text-sm">Is the app free?</h4>
                    <p className="text-xs text-slate-300 mt-1">
                      Yes, the app is free and contains no intrusive third-party ads.
                    </p>
                  </div>
                </div>
              </section>

              <section className="space-y-2">
                <h3 className="text-base font-bold text-white">Direct Email Support</h3>
                <p>Send an email to the developer anytime:</p>
                <div className="p-4 bg-slate-900 rounded-xl border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div className="flex items-center gap-2 text-white font-mono text-sm">
                    <Mail className="w-4 h-4 text-orange-400" />
                    <span>glazer.dev@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <a
                      href="mailto:glazer.dev@gmail.com?subject=Flying%20Spaghetti%20Wisdom%20Inquiry"
                      className="px-3 py-1.5 rounded-lg bg-orange-500 hover:bg-orange-600 text-white text-xs font-semibold transition-colors"
                    >
                      Open Email App
                    </a>
                    <button
                      onClick={handleCopyEmail}
                      className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium transition-colors border border-slate-700"
                    >
                      {copiedEmail ? 'Copied!' : 'Copy'}
                    </button>
                  </div>
                </div>
              </section>
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-slate-800 bg-[#090e1c] flex items-center justify-between">
          <button
            onClick={onClose}
            className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to App</span>
          </button>
          <span className="text-xs text-slate-500">&copy; 2026 GlazerDev</span>
        </div>

      </div>
    </div>
  );
};
