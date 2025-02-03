import React, { useState } from 'react';
import { Check, Sparkles } from 'lucide-react';

export function LuckDrawForm() {
  const [state, setState] = useState({
    name: '',
    email: '',
    phone: '',
    futureService: '',
    agreeToTerms: false,
    success: false,
    errors: {},
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form validation and submission
    const errors = {};
    if (!state.name) errors.name = 'Name is required';
    if (!state.email) errors.email = 'Email is required';
    if (!state.phone) errors.phone = 'Phone is required';
    if (!state.futureService) errors.futureService = 'Please select a service';
    if (!state.agreeToTerms) errors.agreeToTerms = 'You must agree to the terms';

    if (Object.keys(errors).length === 0) {
      setState({ ...state, success: true });
    } else {
      setState({ ...state, errors });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white/90 backdrop-blur-sm rounded-lg shadow-2xl p-8 text-center">
        <h1 className="text-3xl font-bold text-[#DC0A17] mb-4">Enter the Lucky Draw!</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Your Name</label>
            <input
              type="text"
              value={state.name}
              onChange={(e) => setState({ ...state, name: e.target.value })}
              placeholder="Your Name"
              className="p-2 border rounded mb-2"
            />
            {state.errors.name && <p className="text-red-500">{state.errors.name}</p>}
          </div>
          <div>
            <label>Email</label>
            <input
              type="email"
              value={state.email}
              onChange={(e) => setState({ ...state, email: e.target.value })}
              placeholder="Your Email"
              className="p-2 border rounded mb-2"
            />
            {state.errors.email && <p className="text-red-500">{state.errors.email}</p>}
          </div>
          <div>
            <label>Phone</label>
            <input
              type="tel"
              value={state.phone}
              onChange={(e) => setState({ ...state, phone: e.target.value })}
              placeholder="Your Phone"
              className="p-2 border rounded mb-2"
            />
            {state.errors.phone && <p className="text-red-500">{state.errors.phone}</p>}
          </div>
          <div>
            <label>Future Service</label>
            <select
              value={state.futureService}
              onChange={(e) => setState({ ...state, futureService: e.target.value })}
              className="p-2 border rounded mb-2"
            >
              <option value="">Select a service</option>
              <option value="data-recovery">Data Recovery</option>
              <option value="computer-services">Computer Services</option>
              <option value="cloud-services">Cloud Services</option>
            </select>
            {state.errors.futureService && <p className="text-red-500">{state.errors.futureService}</p>}
          </div>
          <div>
            <label>
              <input
                type="checkbox"
                checked={state.agreeToTerms}
                onChange={(e) => setState({ ...state, agreeToTerms: e.target.checked })}
              />
              I agree to the terms
            </label>
            {state.errors.agreeToTerms && <p className="text-red-500">{state.errors.agreeToTerms}</p>}
          </div>
          <button type="submit" className="bg-[#DC0A17] hover:bg-[#b00813] text-white p-2 rounded mt-4">
            {state.success ? 'Success' : 'Submit'}
          </button>
        </form>
        {state.success && (
          <p className="text-green-600 mt-4 flex items-center justify-center gap-2 text-sm font-semibold bg-green-100 p-2 rounded-md">
            <Check className="size-4" /> Your entry has been submitted. Good luck!
          </p>
        )}
      </div>
    </div>
  );
}
