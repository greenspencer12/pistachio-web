'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

export default function CareersForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    position: 'Barista',
    location: 'Either Location',
    experience: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center">
        <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
        <h3 className="text-2xl font-serif font-bold text-emerald-950 mb-2">Application Received!</h3>
        <p className="text-emerald-800">
          Thank you for your interest in joining Pistachio Cafe. Our management team will review your application and be in touch soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold text-neutral-800 mb-2">First Name *</label>
          <input
            type="text"
            required
            value={formData.firstName}
            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-[#fc574a] focus:border-transparent transition-all"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-neutral-800 mb-2">Last Name *</label>
          <input
            type="text"
            required
            value={formData.lastName}
            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-[#fc574a] focus:border-transparent transition-all"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold text-neutral-800 mb-2">Email Address *</label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-[#fc574a] focus:border-transparent transition-all"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-neutral-800 mb-2">Phone Number *</label>
          <input
            type="tel"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-[#fc574a] focus:border-transparent transition-all"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold text-neutral-800 mb-2">Position Desired *</label>
          <select
            value={formData.position}
            onChange={(e) => setFormData({ ...formData, position: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-[#fc574a] focus:border-transparent transition-all bg-white"
          >
            <option value="Barista">Barista</option>
            <option value="Line Cook / Kitchen Staff">Line Cook / Kitchen Staff</option>
            <option value="Shift Supervisor">Shift Supervisor</option>
            <option value="Server / Host">Server / Host</option>
            <option value="Dishwasher / Utility">Dishwasher / Utility</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-semibold text-neutral-800 mb-2">Preferred Location *</label>
          <select
            value={formData.location}
            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-[#fc574a] focus:border-transparent transition-all bg-white"
          >
            <option value="Either Location">Either Location</option>
            <option value="911 Whalley Ave (Westville)">911 Whalley Ave (Westville)</option>
            <option value="1245 Chapel St (Downtown)">1245 Chapel St (Downtown)</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-neutral-800 mb-2">A few sentences about yourself &amp; your experience *</label>
        <textarea
          rows={4}
          required
          value={formData.experience}
          onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
          placeholder="Tell us about your background, why you'd like to work at Pistachio Cafe, and your weekly availability..."
          className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-[#fc574a] focus:border-transparent transition-all"
        />
      </div>

      <button
        type="submit"
        className="w-full py-4 rounded-xl bg-[#fc574a] text-white font-semibold hover:bg-[#e0483c] transition-all shadow-lg shadow-[#fc574a]/25 flex items-center justify-center gap-2"
      >
        <Send className="w-4 h-4" /> Submit Application
      </button>
    </form>
  );
}
