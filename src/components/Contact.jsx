// ============================================================
// 📁 src/components/Contact.jsx
// Contact section featuring:
//  • Validated contact form
//  • Email sending placeholder (swap with EmailJS / Formspree)
//  • Social links
// ============================================================

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiSend, FiCheck } from 'react-icons/fi';
import SectionTitle from './ui/SectionTitle';
import ScrollReveal from './ui/ScrollReveal';
import { personalInfo } from '../data/portfolioData';

// Social links shown in right panel
const socials = [
  { Icon: FiGithub,   href: personalInfo.github,   label: 'GitHub'   },
  { Icon: FiLinkedin, href: personalInfo.linkedin,  label: 'LinkedIn' },
  { Icon: FiTwitter,  href: personalInfo.twitter,   label: 'Twitter'  },
  { Icon: FiMail,     href: `mailto:${personalInfo.email}`, label: 'Email' },
];

// ─── Form field ───────────────────────────────────────────────
const Field = ({ label, error, children }) => (
  <div>
    <label className="block font-sans text-sm font-medium text-[var(--text-primary)] mb-1.5">
      {label}
    </label>
    {children}
    <AnimatePresence>
      {error && (
        <motion.p
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="text-red-400 text-xs mt-1"
        >
          {error}
        </motion.p>
      )}
    </AnimatePresence>
  </div>
);

const Contact = () => {
  const [form, setForm]     = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'

  // ─── Validation ─────────────────────────────────────────────
  const validate = () => {
    const e = {};
    if (!form.name.trim())    e.name    = 'Name is required.';
    if (!form.email.trim())   e.email   = 'Email is required.';
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Please enter a valid email.';
    if (!form.message.trim()) e.message = 'Message cannot be empty.';
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    // Clear error on type
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  // ─── Submit ─────────────────────────────────────────────────
  // Replace this placeholder with real email logic:
  // Option A: EmailJS — https://www.emailjs.com
  // Option B: Formspree — https://formspree.io
  // Option C: Resend / Nodemailer via your own backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setStatus('loading');

    // ─── PLACEHOLDER — wire up EmailJS / Formspree here ────
    // Example with EmailJS:
    // await emailjs.send('SERVICE_ID', 'TEMPLATE_ID', {
    //   from_name: form.name,
    //   reply_to:  form.email,
    //   message:   form.message,
    // }, 'PUBLIC_KEY');
    // ────────────────────────────────────────────────────────

    await new Promise(r => setTimeout(r, 1500)); // Simulate network request
    setStatus('success');
    setForm({ name: '', email: '', message: '' });
    setTimeout(() => setStatus('idle'), 5000);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-[var(--bg-secondary)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <SectionTitle
          label="Get In Touch"
          title="Let's Talk"
          subtitle="Have a project in mind or just want to say hello? My inbox is open."
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

          {/* ─── Contact Form ─────────────────────────── */}
          <ScrollReveal direction="left" className="lg:col-span-3">
            <form onSubmit={handleSubmit} noValidate className="space-y-5">

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Name */}
                <Field label="Your Name" error={errors.name}>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Dhanush R"
                    className={`form-input ${errors.name ? 'border-red-400 focus:border-red-400 focus:shadow-none' : ''}`}
                  />
                </Field>

                {/* Email */}
                <Field label="Email Address" error={errors.email}>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="hello@example.com"
                    className={`form-input ${errors.email ? 'border-red-400 focus:border-red-400 focus:shadow-none' : ''}`}
                  />
                </Field>
              </div>

              {/* Message */}
              <Field label="Message" error={errors.message}>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={6}
                  placeholder="I'd like to talk about..."
                  className={`form-input resize-none ${errors.message ? 'border-red-400 focus:border-red-400 focus:shadow-none' : ''}`}
                />
              </Field>

              {/* Submit button */}
              <motion.button
                type="submit"
                disabled={status === 'loading' || status === 'success'}
                whileHover={{ y: -2, boxShadow: '0 0 24px rgba(0,212,255,0.35)' }}
                whileTap={{ scale: 0.97 }}
                className={`
                  w-full sm:w-auto flex items-center justify-center gap-2
                  px-8 py-3.5 rounded-xl font-sans text-sm font-semibold
                  transition-all duration-300
                  ${status === 'success'
                    ? 'bg-green-500 text-white shadow-none cursor-default'
                    : 'bg-primary text-surface shadow-glow hover:bg-primary-dark'}
                  ${status === 'loading' ? 'opacity-70 cursor-wait' : ''}
                `}
              >
                {status === 'loading' && (
                  <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                )}
                {status === 'success' && <FiCheck size={17} />}
                {status === 'idle'    && <FiSend  size={15} />}
                {status === 'idle'    && 'Send Message'}
                {status === 'loading' && 'Sending…'}
                {status === 'success' && 'Message Sent!'}
              </motion.button>

            </form>
          </ScrollReveal>

          {/* ─── Right Panel ──────────────────────────── */}
          <ScrollReveal direction="right" className="lg:col-span-2">
            <div className="space-y-6">
              <div className="glass rounded-2xl border border-[var(--border)] p-6">
                <h3 className="font-display text-xl font-bold text-[var(--text-primary)] mb-2">
                  Let's build something together
                </h3>
                <p className="text-[var(--text-muted)] text-sm leading-relaxed mb-6">
                  I'm currently open to internship opportunities, freelance projects, and
                  collaborations. Whether you have a question or just want to say hi, feel
                  free to reach out!
                </p>

                {/* Social icons */}
                <div className="flex flex-col gap-3">
                  {socials.map(({ Icon, href, label }) => (
                    <motion.a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ x: 4, color: '#00D4FF' }}
                      className="flex items-center gap-3 text-[var(--text-muted)] hover:text-primary transition-colors group"
                    >
                      <div className="w-9 h-9 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border)] flex items-center justify-center group-hover:border-primary/40 transition-colors">
                        <Icon size={16} />
                      </div>
                      <span className="font-sans text-sm font-medium">{label}</span>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Availability chip */}
              <div className="glass rounded-xl border border-primary/20 p-4 flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
                <div>
                  <p className="font-mono text-xs text-primary">Available for work</p>
                  <p className="text-[var(--text-muted)] text-xs">
                    Open to internships & freelance projects
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
};

export default Contact;
