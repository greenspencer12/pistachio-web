'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, Calendar } from 'lucide-react';

export default function SpaceRentalForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    location: 'chapel',
    eventType: 'Birthday Party',
    date: '',
    time: '18:00',
    guestCount: '35',
    hostName: '',
    hostContact: '',
    details: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center">
        <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
        <h3 className="text-2xl font-serif font-bold text-emerald-950 mb-2">Reservation Request Received!</h3>
        <p className="text-emerald-800 text-sm">
          Your space rental inquiry has been submitted and queued for calendar synchronization. Our event coordinator will contact you to finalize arrangements.
        </p>
      </div>
    );
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-stone-700 uppercase mb-1">Select Location *</label>
          <select
            value={formData.location}
            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
            className="w-full px-4 py-2.5 rounded-xl border border-stone-300 text-sm focus:outline-none focus:border-[#fc574a] bg-white"
          >
            <option value="chapel">Pistachio 2 (1245 Chapel St - Downtown)</option>
            <option value="whalley">Pistachio 1 (911 Whalley Ave - Westville)</option>
          </select>
        </div>
        <div>
          <label className="block text-xs font-semibold text-stone-700 uppercase mb-1">Event Type *</label>
          <select
            value={formData.eventType}
            onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
            className="w-full px-4 py-2.5 rounded-xl border border-stone-300 text-sm focus:outline-none focus:border-[#fc574a] bg-white"
          >
            <option>Birthday Party</option>
            <option>Baby / Bridal Shower</option>
            <option>Corporate Meeting / Workshop</option>
            <option>Graduation / Academic Gathering</option>
            <option>Other Private Event</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label className="block text-xs font-semibold text-stone-700 uppercase mb-1">Desired Date *</label>
          <input
            type="date"
            required
            value={formData.date}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            className="w-full px-4 py-2.5 rounded-xl border border-stone-300 text-sm focus:outline-none focus:border-[#fc574a]"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-stone-700 uppercase mb-1">Start Time *</label>
          <input
            type="time"
            required
            value={formData.time}
            onChange={(e) => setFormData({ ...formData, time: e.target.value })}
            className="w-full px-4 py-2.5 rounded-xl border border-stone-300 text-sm focus:outline-none focus:border-[#fc574a]"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-stone-700 uppercase mb-1">Guest Count *</label>
          <input
            type="number"
            min="10"
            max="120"
            required
            value={formData.guestCount}
            onChange={(e) => setFormData({ ...formData, guestCount: e.target.value })}
            className="w-full px-4 py-2.5 rounded-xl border border-stone-300 text-sm focus:outline-none focus:border-[#fc574a]"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-stone-700 uppercase mb-1">Host Name *</label>
          <input
            type="text"
            required
            placeholder="Full Name"
            value={formData.hostName}
            onChange={(e) => setFormData({ ...formData, hostName: e.target.value })}
            className="w-full px-4 py-2.5 rounded-xl border border-stone-300 text-sm focus:outline-none focus:border-[#fc574a]"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-stone-700 uppercase mb-1">Host Email / Phone *</label>
          <input
            type="text"
            required
            placeholder="Email or Phone Number"
            value={formData.hostContact}
            onChange={(e) => setFormData({ ...formData, hostContact: e.target.value })}
            className="w-full px-4 py-2.5 rounded-xl border border-stone-300 text-sm focus:outline-none focus:border-[#fc574a]"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-stone-700 uppercase mb-1">Special Requests or Catering Needs</label>
        <textarea
          rows={3}
          value={formData.details}
          onChange={(e) => setFormData({ ...formData, details: e.target.value })}
          placeholder="Tell us about decorative setups, cake service, or catering platters needed..."
          className="w-full px-4 py-2.5 rounded-xl border border-stone-300 text-sm focus:outline-none focus:border-[#fc574a]"
        />
      </div>

      <div>
        <button
          type="submit"
          className="w-full sm:w-auto text-sm px-8 py-3 rounded-xl bg-[#fc574a] text-white font-semibold hover:bg-[#e0483c] transition-all shadow-md shadow-[#fc574a]/20 flex items-center justify-center gap-2"
        >
          <Send className="w-4 h-4" /> Request Reservation &amp; Check Calendar
        </button>
      </div>
    </form>
  );
}
