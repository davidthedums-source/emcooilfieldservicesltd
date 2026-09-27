import React, { useState } from 'react';
import { Phone, ArrowRight, CheckCircle2, ShieldCheck, Clock, Mail } from 'lucide-react';
import { COMPANY_INFO, SERVICES } from '../data/content';
import { ContactFormData } from '../types';
import { EnergyBackgroundCanvas } from './EnergyBackgroundCanvas';
import { useTheme } from '../context/ThemeContext';

export const ContactSection: React.FC = () => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'black';

  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    company: '',
    email: '',
    phoneNumber: '',
    serviceRequired: 'Oilfield Services',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    // Validation
    if (!formData.fullName.trim()) {
      setErrorMessage('Please enter your full name.');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setErrorMessage('Please provide a valid corporate or professional email address.');
      return;
    }
    if (!formData.phoneNumber.trim()) {
      setErrorMessage('Please provide a contact phone number.');
      return;
    }
    if (!formData.message.trim()) {
      setErrorMessage('Please provide brief details of your operational requirement.');
      return;
    }

    setIsSubmitting(true);

    // Simulate clean submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  return (
    <section
      id="contact"
      className={`py-24 relative overflow-hidden border-t transition-colors duration-300 ${
        isDark ? 'bg-[#050814] border-white/5' : 'bg-slate-50 border-slate-200'
      }`}
    >
      <EnergyBackgroundCanvas variant="hero" density={20} className="opacity-40" />

      {/* Background Glow */}
      <div
        className={`absolute top-1/4 right-0 w-[500px] h-[500px] blur-[150px] pointer-events-none rounded-full ${
          isDark ? 'bg-blue-600/10' : 'bg-blue-300/20'
        }`}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-cyan-400 bg-cyan-500/10 border border-cyan-400/20 mb-4">
            Start a Conversation
          </div>
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4 uppercase [text-wrap:balance] ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}
          >
            LET'S WORK TOGETHER.
          </h2>
          <p
            className={`text-base sm:text-lg leading-relaxed font-normal [text-wrap:pretty] ${
              isDark ? 'text-slate-300' : 'text-slate-700'
            }`}
          >
            Have an oilfield, engineering or energy-sector requirement? Start a conversation with {COMPANY_INFO.name}.
          </p>
        </div>

        {/* Clean Two-Column Contact Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Column 1: Verified Company Contact Details */}
          <div className="lg:col-span-5 space-y-8">
            <div
              className={`p-8 rounded-2xl hairline-border transition-colors ${
                isDark
                  ? 'bg-gradient-to-br from-slate-900/90 via-[#0a1226] to-[#070d1e]'
                  : 'bg-white shadow-md'
              }`}
            >
              <span className="text-xs font-mono text-cyan-500 uppercase tracking-wider block mb-2">
                Official Entity
              </span>
              <h3 className={`text-2xl font-bold mb-1 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                {COMPANY_INFO.legalName}
              </h3>
              <p className={`text-xs font-medium text-cyan-400 mb-6`}>
                {COMPANY_INFO.subheading}
              </p>

              {/* Verified Contact Methods */}
              <div className={`pt-6 border-t space-y-6 ${isDark ? 'border-white/10' : 'border-slate-200'}`}>
                {/* Phone */}
                <div>
                  <div className={`text-xs uppercase tracking-wider mb-2 font-medium ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                    Phone
                  </div>
                  <a
                    href={COMPANY_INFO.phoneHref}
                    className={`group inline-flex items-center gap-3 text-lg sm:text-xl font-mono font-bold transition-colors ${
                      isDark ? 'text-cyan-300 hover:text-white' : 'text-blue-600 hover:text-blue-800'
                    }`}
                  >
                    <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-400/20 flex items-center justify-center text-cyan-500 group-hover:border-cyan-400 transition-colors shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <span>{COMPANY_INFO.phone}</span>
                  </a>
                </div>

                {/* Email */}
                <div>
                  <div className={`text-xs uppercase tracking-wider mb-2 font-medium ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                    Email Address
                  </div>
                  <a
                    href={COMPANY_INFO.emailHref}
                    className={`group inline-flex items-center gap-3 text-base sm:text-lg font-mono font-medium transition-colors break-all ${
                      isDark ? 'text-cyan-300 hover:text-white' : 'text-blue-600 hover:text-blue-800'
                    }`}
                  >
                    <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-400/20 flex items-center justify-center text-cyan-500 group-hover:border-cyan-400 transition-colors shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <span>{COMPANY_INFO.email}</span>
                  </a>
                </div>

                {/* Verified Location */}
                <div>
                  <div className={`text-xs uppercase tracking-wider mb-1 font-medium ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                    Location
                  </div>
                  <div className={`text-sm ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                    Nigeria <span className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>(Operating across Nigerian oilfields & energy facilities)</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-2 flex flex-wrap gap-3">
                  <a
                    href={COMPANY_INFO.phoneHref}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-md transition-all border border-blue-400/30"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call {COMPANY_INFO.phone}</span>
                  </a>
                  <a
                    href={COMPANY_INFO.emailHref}
                    className={`inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-semibold rounded-lg transition-all border ${
                      isDark
                        ? 'text-cyan-300 bg-white/5 hover:bg-white/10 border-white/10'
                        : 'text-blue-700 bg-blue-50 hover:bg-blue-100 border-blue-200'
                    }`}
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Send Email</span>
                  </a>
                </div>
              </div>

              <div className={`mt-8 pt-6 border-t text-xs space-y-3 ${isDark ? 'border-white/10 text-slate-400' : 'border-slate-200 text-slate-600'}`}>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-cyan-500 shrink-0" />
                  <span>Verified corporate response channel</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-cyan-500 shrink-0" />
                  <span>Direct routing to technical coordinators</span>
                </div>
              </div>
            </div>

            <div className={`p-6 rounded-xl border ${isDark ? 'bg-slate-900/40 border-white/5' : 'bg-white border-slate-200 shadow-sm'}`}>
              <h4 className={`text-sm font-semibold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Tender & Technical Scopes
              </h4>
              <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                For RFP packages, scopes of work, and formal contractor inquiries, submit using the enquiry console or send details directly to <a href={COMPANY_INFO.emailHref} className="text-cyan-400 hover:underline">{COMPANY_INFO.email}</a>.
              </p>
            </div>
          </div>

          {/* Column 2: Clean Contact Form */}
          <div className="lg:col-span-7">
            <div
              className={`p-8 sm:p-10 rounded-2xl hairline-border relative transition-colors ${
                isDark ? 'bg-slate-900/60' : 'bg-white shadow-md'
              }`}
            >
              <div className="mb-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-cyan-500 block mb-1">
                  Start a Conversation
                </span>
                <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  Operational & Service Enquiry
                </h3>
              </div>
              {isSubmitted ? (
                <div className="py-12 px-4 text-center">
                  <div className="w-16 h-16 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-500 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className={`text-2xl font-bold mb-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    Thank you. Your enquiry has been received.
                  </h3>
                  <p className={`text-sm max-w-md mx-auto mb-8 font-normal ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                    An EMCO Oilfield Services representative will review your operational requirements and connect with you shortly.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        fullName: '',
                        company: '',
                        email: '',
                        phoneNumber: '',
                        serviceRequired: 'Oilfield Services',
                        message: '',
                      });
                    }}
                    className={`px-6 py-2.5 text-xs font-semibold rounded-lg border transition-colors ${
                      isDark
                        ? 'text-slate-300 hover:text-white border-white/10 hover:border-white/20'
                        : 'text-slate-700 hover:text-black border-slate-300 hover:bg-slate-100'
                    }`}
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {errorMessage && (
                    <div className="p-3.5 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-500 text-xs">
                      {errorMessage}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Full Name */}
                    <div>
                      <label className={`block text-xs font-semibold uppercase tracking-wider mb-2 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="e.g. Adebayo Okonjo"
                        required
                        className={`w-full px-4 py-3 rounded-lg text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/50 transition-colors border ${
                          isDark
                            ? 'bg-slate-950/70 border-white/10 text-white placeholder-slate-500'
                            : 'bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400'
                        }`}
                      />
                    </div>

                    {/* Company */}
                    <div>
                      <label className={`block text-xs font-semibold uppercase tracking-wider mb-2 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                        Company *
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Company or Organization"
                        required
                        className={`w-full px-4 py-3 rounded-lg text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/50 transition-colors border ${
                          isDark
                            ? 'bg-slate-950/70 border-white/10 text-white placeholder-slate-500'
                            : 'bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400'
                        }`}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Email */}
                    <div>
                      <label className={`block text-xs font-semibold uppercase tracking-wider mb-2 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="name@company.com"
                        required
                        className={`w-full px-4 py-3 rounded-lg text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/50 transition-colors border ${
                          isDark
                            ? 'bg-slate-950/70 border-white/10 text-white placeholder-slate-500'
                            : 'bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400'
                        }`}
                      />
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label className={`block text-xs font-semibold uppercase tracking-wider mb-2 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        placeholder="+234 ..."
                        required
                        className={`w-full px-4 py-3 rounded-lg text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/50 transition-colors border ${
                          isDark
                            ? 'bg-slate-950/70 border-white/10 text-white placeholder-slate-500'
                            : 'bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400'
                        }`}
                      />
                    </div>
                  </div>

                  {/* Service Required */}
                  <div>
                    <label className={`block text-xs font-semibold uppercase tracking-wider mb-2 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                      Service Required *
                    </label>
                    <select
                      name="serviceRequired"
                      value={formData.serviceRequired}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/50 transition-colors cursor-pointer border ${
                        isDark
                          ? 'bg-slate-950/70 border-white/10 text-white'
                          : 'bg-slate-50 border-slate-300 text-slate-900'
                      }`}
                    >
                      {SERVICES.map((srv) => (
                        <option key={srv.id} value={srv.title} className={isDark ? 'bg-slate-900 text-white' : 'bg-white text-slate-900'}>
                          {srv.title}
                        </option>
                      ))}
                      <option value="General Technical Inquiry" className={isDark ? 'bg-slate-900 text-white' : 'bg-white text-slate-900'}>
                        General Technical Inquiry
                      </option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className={`block text-xs font-semibold uppercase tracking-wider mb-2 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                      Message *
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Outline your project scope, location, timeline, or operational requirements..."
                      required
                      className={`w-full px-4 py-3 rounded-lg text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/50 transition-colors resize-none border ${
                        isDark
                          ? 'bg-slate-950/70 border-white/10 text-white placeholder-slate-500'
                          : 'bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400'
                      }`}
                    />
                  </div>

                  {/* Submit Button */}
                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-lg shadow-blue-600/25 transition-all border border-blue-400/30 disabled:opacity-50"
                    >
                      <span>{isSubmitting ? 'Sending Enquiry...' : 'Send Enquiry'}</span>
                      {!isSubmitting && (
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
