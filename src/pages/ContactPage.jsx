import { useState } from 'react';
import {
  ArrowLeft,
  Check,
  Copy,
  Loader2,
  Mail,
  MapPin,
  Send,
  Sparkles,
} from 'lucide-react';
import Reveal from '../components/ui/Reveal';
import { PROFILE } from '../data/portfolioData';

const INITIAL_FORM = {
  name: '',
  email: '',
  subject: '',
  message: '',
  botcheck: '',
};

const WEB3FORMS_ACCESS_KEY = '04793817-a7ce-4cfb-8043-4a5326b267dc';
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ContactPage({ onBackHome }) {
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [submittedName, setSubmittedName] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);

  const emailAddress = PROFILE.email || 'hello@example.com';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (error) setError('');
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(emailAddress);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.botcheck) {
      return;
    }

    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedSubject =
      formData.subject.trim() || `Portfolio Inquiry from ${trimmedName}`;
    const trimmedMessage = formData.message.trim();

    if (!trimmedName || !trimmedEmail || !trimmedMessage) {
      setError('Please fill in your name, email address, and message.');
      return;
    }

    if (!EMAIL_REGEX.test(trimmedEmail)) {
      setError('Please enter a valid email address.');
      return;
    }

    if (!WEB3FORMS_ACCESS_KEY) {
      setError(
        'Add your Web3Forms Access Key in ContactPage.jsx before sending messages.'
      );
      return;
    }

    setIsSending(true);
    setError('');
    setSubmittedName('');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: trimmedName,
          email: trimmedEmail,
          subject: trimmedSubject,
          message: trimmedMessage,
          botcheck: '',
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || 'Submission failed');
      }

      setSubmittedName(trimmedName);
      setFormData(INITIAL_FORM);
    } catch {
      setError(
        'Could not send your message right now. Please try again or email me directly.'
      );
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section className="px-4 py-16 sm:px-6 md:px-8 md:py-24">
      <div className="mx-auto max-w-6xl">
        {/* Top Back Link & Centered Header */}
        <Reveal delay={0}>
          <div>
            {typeof onBackHome === 'function' && (
              <button
                type="button"
                onClick={onBackHome}
                className="mb-6 inline-flex items-center gap-1.5 rounded-xl border border-line bg-surface px-3.5 py-2 text-xs font-medium text-secondary backdrop-blur-md transition-colors hover:border-line-hover hover:text-primary sm:text-sm"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Back to Home</span>
              </button>
            )}

            <div className="text-center">
              <h1 className="text-3xl font-semibold tracking-tight text-primary sm:text-4xl md:text-5xl">
                Get in Touch
              </h1>
              <p className="mt-2.5 text-sm text-secondary sm:text-base">
                Have a project idea, role opportunity, or question? Send a message below.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Two-Column Contact Layout */}
        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-start">
          {/* Left Column: Direct Contact Info & Socials */}
          <div className="space-y-6 lg:col-span-5">
            <Reveal delay={60}>
              <article className="rounded-2xl border border-line bg-surface p-6 shadow-lg shadow-black/20 backdrop-blur-md sm:p-8">
                <div className="flex items-center gap-2.5">
                  <Sparkles className="h-5 w-5 text-accent" />
                  <h2 className="text-xl font-semibold tracking-tight text-primary sm:text-2xl">
                    Contact Details
                  </h2>
                </div>

                <p className="mt-3 text-sm leading-relaxed text-secondary">
                  I am open to frontend engineering roles, UI/UX design collaborations, and freelance web builds.
                </p>

                {PROFILE.availability && (
                  <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-line bg-canvas/70 px-3 py-1 text-xs text-secondary">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                    </span>
                    <span>{PROFILE.availability}</span>
                  </div>
                )}

                <div className="mt-6 space-y-4">
                  {/* Email Box */}
                  <div className="rounded-xl border border-line bg-surface-elevated p-4">
                    <div className="flex items-center justify-between gap-2">
                      <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-muted">
                        <Mail className="h-3.5 w-3.5 text-accent" />
                        <span>Email</span>
                      </span>

                      <button
                        type="button"
                        onClick={handleCopyEmail}
                        className="inline-flex items-center gap-1 rounded-lg border border-line bg-surface px-2.5 py-1 text-xs font-medium text-secondary transition-colors hover:border-line-hover hover:text-primary"
                      >
                        {copied ? (
                          <>
                            <Check className="h-3.5 w-3.5 text-accent" />
                            <span>Copied</span>
                          </>
                        ) : (
                          <>
                            <Copy className="h-3.5 w-3.5" />
                            <span>Copy</span>
                          </>
                        )}
                      </button>
                    </div>

                    <a
                      href={`mailto:${emailAddress}`}
                      className="mt-2 block break-all text-sm font-medium text-primary transition-colors hover:text-accent"
                    >
                      {emailAddress}
                    </a>
                  </div>

                  {/* Location Box */}
                  <div className="rounded-xl border border-line bg-surface-elevated p-4">
                    <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-muted">
                      <MapPin className="h-3.5 w-3.5 text-accent" />
                      <span>Location</span>
                    </span>
                    <p className="mt-2 text-sm font-medium text-primary">
                      {PROFILE.location || 'Abakaliki, Ebonyi State, Nigeria'}
                    </p>
                  </div>
                </div>

                {/* Social Links */}
                <div className="mt-6 border-t border-line pt-5">
                  <p className="font-mono text-xs uppercase tracking-wider text-muted">
                    Social Profiles
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2.5">
                    {PROFILE.github && (
                      <a
                        href={PROFILE.github}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-xl border border-line bg-surface-elevated px-3.5 py-2 text-xs font-medium text-secondary transition-colors hover:border-line-hover hover:text-primary sm:text-sm"
                      >
                        GitHub
                      </a>
                    )}
                    {PROFILE.linkedin && (
                      <a
                        href={PROFILE.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-xl border border-line bg-surface-elevated px-3.5 py-2 text-xs font-medium text-secondary transition-colors hover:border-line-hover hover:text-primary sm:text-sm"
                      >
                        LinkedIn
                      </a>
                    )}
                    {PROFILE.twitter && (
                      <a
                        href={PROFILE.twitter}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-xl border border-line bg-surface-elevated px-3.5 py-2 text-xs font-medium text-secondary transition-colors hover:border-line-hover hover:text-primary sm:text-sm"
                      >
                        X (Twitter)
                      </a>
                    )}
                  </div>
                </div>
              </article>
            </Reveal>
          </div>

          {/* Right Column: Message Form */}
          <div className="lg:col-span-7">
            <Reveal delay={100}>
              <article className="rounded-2xl border border-line bg-surface p-6 shadow-lg shadow-black/20 backdrop-blur-md sm:p-8">
                <h2 className="text-xl font-semibold tracking-tight text-primary sm:text-2xl">
                  Send a Message
                </h2>
                <p className="mt-1.5 text-sm text-secondary">
                  Share details about what you are building and how we can collaborate.
                </p>

                {submittedName && (
                  <div
                    role="status"
                    className="mt-5 rounded-xl border border-line bg-surface-elevated p-4 text-sm text-primary"
                  >
                    <p className="font-medium">
                      Thanks, {submittedName}! Your message has been sent.
                    </p>
                    <p className="mt-1 text-xs text-secondary">
                      I have received your note and will get back to you as soon as possible.
                    </p>
                  </div>
                )}

                {error && (
                  <p
                    role="alert"
                    className="mt-4 rounded-xl border border-line bg-surface-elevated px-4 py-2.5 text-xs font-medium text-accent sm:text-sm"
                  >
                    {error}
                  </p>
                )}

                <form onSubmit={handleSubmit} className="mt-6 space-y-5" noValidate>
                  <input
                    type="checkbox"
                    name="botcheck"
                    checked={Boolean(formData.botcheck)}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        botcheck: e.target.checked ? 'true' : '',
                      }))
                    }
                    tabIndex={-1}
                    autoComplete="off"
                    className="hidden"
                    aria-hidden="true"
                  />

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-xs font-medium uppercase tracking-wider text-secondary"
                      >
                        Your Name *
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        disabled={isSending}
                        className="mt-2 w-full rounded-xl border border-line bg-surface-elevated px-4 py-2.5 text-sm text-primary placeholder:text-muted focus:border-line-hover focus:outline-none disabled:opacity-60"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-xs font-medium uppercase tracking-wider text-secondary"
                      >
                        Email Address *
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        disabled={isSending}
                        className="mt-2 w-full rounded-xl border border-line bg-surface-elevated px-4 py-2.5 text-sm text-primary placeholder:text-muted focus:border-line-hover focus:outline-none disabled:opacity-60"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-subject"
                      className="block text-xs font-medium uppercase tracking-wider text-secondary"
                    >
                      Subject
                    </label>
                    <input
                      id="contact-subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Frontend project, UI/UX redesign, or opportunity"
                      disabled={isSending}
                      className="mt-2 w-full rounded-xl border border-line bg-surface-elevated px-4 py-2.5 text-sm text-primary placeholder:text-muted focus:border-line-hover focus:outline-none disabled:opacity-60"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-xs font-medium uppercase tracking-wider text-secondary"
                    >
                      Message *
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me a bit about your project, timeline, and goals..."
                      disabled={isSending}
                      className="mt-2 w-full resize-y rounded-xl border border-line bg-surface-elevated px-4 py-2.5 text-sm text-primary placeholder:text-muted focus:border-line-hover focus:outline-none disabled:opacity-60"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSending}
                    className="inline-flex items-center gap-2 rounded-xl bg-btn-primary px-5 py-2.5 text-sm font-medium text-btn-primary-text transition-colors hover:bg-btn-primary-hover disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {isSending ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="h-4 w-4" />
                      </>
                    )}
                  </button>
                </form>
              </article>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}