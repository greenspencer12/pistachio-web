'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '911 Whalley Ave (Pistachio 1)',
    topic: 'General Inquiry',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-emerald-50 border border-emerald-200 rounded-3xl p-10 text-center">
        <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
        <h3 className="text-2xl font-serif font-bold text-emerald-950 mb-2">Message Sent!</h3>
        <p className="text-emerald-800">
          Thank you for reaching out to Pistachio Cafe. Our team has received your message and will reply shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-[#fbf9f6] p-8 sm:p-10 rounded-3xl border border-neutral-200">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold text-neutral-800 mb-2">Your Name *</label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-neutral-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#fc574a]"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-neutral-800 mb-2">Email Address *</label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-neutral-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#fc574a]"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold text-neutral-800 mb-2">Phone Number</label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-neutral-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#fc574a]"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-neutral-800 mb-2">Location of Interest</label>
          <select
            value={formData.location}
            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-neutral-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#fc574a]"
          >
            <option value="911 Whalley Ave (Pistachio 1)">911 Whalley Ave (Pistachio 1)</option>
            <option value="1245 Chapel St (Pistachio 2)">1245 Chapel St (Pistachio 2)</option>
            <option value="Both / Either Location">Both / Either Location</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-neutral-800 mb-2">Topic</label>
        <select
          value={formData.topic}
          onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
          className="w-full px-4 py-3 rounded-xl border border-neutral-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#fc574a]"
        >
          <option value="General Inquiry">General Inquiry</option>
          <option value="Private Event / Space Rental">Private Event / Space Rental</option>
          <option value="Catering Question">Catering Question</option>
          <option value="Customer Feedback">Customer Feedback</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-semibold text-neutral-800 mb-2">Your Message *</label>
        <textarea
          rows={5}
          required
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="How can we help you today?"
          className="w-full px-4 py-3 rounded-xl border border-neutral-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#fc574a]"
        />
      </div>

      <button
        type="submit"
        className="w-full py-4 rounded-xl bg-[#fc574a] text-white font-semibold hover:bg-[#e0483c] transition-all shadow-lg shadow-[#fc574a]/25 flex items-center justify-center gap-2"
      >
        <Send className="w-4 h-4" /> Send Message
      </button>
    </form>
  );
}
