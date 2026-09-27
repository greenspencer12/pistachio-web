'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

export default function CateringForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    eventDate: '',
    headcount: '',
    notes: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center">
        <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
        <h3 className="text-2xl font-serif font-bold text-emerald-950 mb-2">Quote Request Received!</h3>
        <p className="text-emerald-800 text-sm">
          Thank you for choosing Pistachio Cafe catering. Our catering director will contact you within 24 hours to confirm your menu and pricing.
        </p>
      </div>
    );
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-stone-700 uppercase mb-1">Your Full Name *</label>
          <input
            type="text"
            required
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            placeholder="Mohamad Al-Hafez"
            className="w-full px-4 py-2.5 rounded-xl border border-stone-300 text-sm focus:outline-none focus:border-[#fc574a]"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-stone-700 uppercase mb-1">Email Address *</label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="name@organization.com"
            className="w-full px-4 py-2.5 rounded-xl border border-stone-300 text-sm focus:outline-none focus:border-[#fc574a]"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label className="block text-xs font-semibold text-stone-700 uppercase mb-1">Phone Number *</label>
          <input
            type="tel"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="(203) 000-0000"
            className="w-full px-4 py-2.5 rounded-xl border border-stone-300 text-sm focus:outline-none focus:border-[#fc574a]"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-stone-700 uppercase mb-1">Event Date *</label>
          <input
            type="date"
            required
            value={formData.eventDate}
            onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
            className="w-full px-4 py-2.5 rounded-xl border border-stone-300 text-sm focus:outline-none focus:border-[#fc574a]"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-stone-700 uppercase mb-1">Estimated Headcount</label>
          <input
            type="number"
            min="5"
            placeholder="25"
            value={formData.headcount}
            onChange={(e) => setFormData({ ...formData, headcount: e.target.value })}
            className="w-full px-4 py-2.5 rounded-xl border border-stone-300 text-sm focus:outline-none focus:border-[#fc574a]"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-stone-700 uppercase mb-1">
          Event Details &amp; Menu Preferences
        </label>
        <textarea
          rows={4}
          value={formData.notes}
          onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
          placeholder="Tell us about your event, dietary requirements (100% Halal, vegetarian, gluten-free), and desired delivery time..."
          className="w-full px-4 py-2.5 rounded-xl border border-stone-300 text-sm focus:outline-none focus:border-[#fc574a]"
        />
      </div>

      <div>
        <button
          type="submit"
          className="w-full sm:w-auto text-sm px-8 py-3 rounded-xl bg-[#fc574a] text-white font-semibold hover:bg-[#e0483c] transition-all shadow-md shadow-[#fc574a]/20 flex items-center justify-center gap-2"
        >
          <Send className="w-4 h-4" /> Submit Catering Inquiry
        </button>
      </div>
    </form>
  );
}
