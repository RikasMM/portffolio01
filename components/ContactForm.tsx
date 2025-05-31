
import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // IMPORTANT: Replace with your actual Formspree endpoint ID
  const formspreeEndpoint = 'https://formspree.io/f/YOUR_FORMSPREE_ID_HERE'; 
  // Example: https://formspree.io/f/xqkvzppb (replace xqkvzppb with your ID)


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formspreeEndpoint.includes('YOUR_FORMSPREE_ID_HERE')) {
        setStatus('Please configure the Formspree endpoint in ContactForm.tsx');
        return;
    }

    setIsSubmitting(true);
    setStatus('Sending...');

    try {
      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        setStatus('Message sent successfully! Thanks for reaching out.');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        const data = await response.json();
        if (data.errors && data.errors.length > 0) {
            setStatus(data.errors.map((error: { field: string, message: string }) => `${error.field}: ${error.message}`).join(', '));
        } else if (data.error) {
            setStatus(`Error: ${data.error}`);
        }
         else {
            setStatus('Oops! There was a problem submitting your form.');
        }
      }
    } catch (error) {
      setStatus('Oops! There was a problem connecting to the server.');
    } finally {
        setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 md:p-10 rounded-xl shadow-2xl max-w-xl mx-auto">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          Full Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="e.g. Jane Doe"
          required
          className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-all"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Email Address
        </label>
        <input
          type="email"
          name="_replyto" 
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          required
          className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-all"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          Your Message
        </label>
        <textarea
          name="message"
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Hi there, I'd like to discuss..."
          rows={5}
          required
          className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-all"
        ></textarea>
      </div>
      <div className="text-center">
        <button
          type="submit"
          disabled={isSubmitting || formspreeEndpoint.includes('https://formspree.io/f/xgvywnvz')}
          className="bg-sky-600 hover:bg-sky-700 text-white font-semibold px-8 py-3 rounded-lg shadow-md transition-all transform hover:scale-105 duration-300 text-lg w-full md:w-auto disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
        >
          {isSubmitting ? (
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          ) : (
            <i className="fas fa-paper-plane mr-2"></i>
          )}
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </div>
      {status && (
        <p className={`mt-4 text-center text-sm ${status.includes('successfully') ? 'text-green-600' : 'text-red-600'}`}>
          {status}
        </p>
      )}
      {formspreeEndpoint.includes('YOUR_FORMSPREE_ID_HERE') && (
        <p className="text-xs text-center text-red-500 mt-2 font-semibold">
          ⚠️ Form is not active. Please update `YOUR_FORMSPREE_ID_HERE` in `ContactForm.tsx`.
        </p>
      )}
    </form>
  );
};

export default ContactForm;
