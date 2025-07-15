'use client';

import { useCallback, useEffect, useState } from 'react';
import {
  getProtectedEmail,
  hasExcessiveLinks,
  hasSuspiciousPatterns,
  isLikelySpam,
  validateEmail,
} from '../utils/email-protection';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [mathQuestion, setMathQuestion] = useState({ question: '', answer: 0 });
  const [userAnswer, setUserAnswer] = useState('');
  const [lastSubmission, setLastSubmission] = useState(0);
  const [showEmail, setShowEmail] = useState(false);

  // Simple email obfuscation function
  const getObfuscatedEmail = () => {
    return getProtectedEmail();
  };

  // Generate simple math question for human verification
  const generateMathQuestion = useCallback(() => {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    const operations = ['+', '-'];
    const operation = operations[Math.floor(Math.random() * operations.length)];

    let answer: number;
    let question: string;

    if (operation === '+') {
      answer = num1 + num2;
      question = `${num1} + ${num2}`;
    } else {
      answer = num1 - num2;
      question = `${num1} - ${num2}`;
    }

    setMathQuestion({ question, answer });
  }, []);

  useEffect(() => {
    generateMathQuestion();
  }, [generateMathQuestion]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isSubmitting) return;

    // Rate limiting - prevent submissions within 30 seconds
    const now = Date.now();
    if (now - lastSubmission < 30000) {
      setSubmitMessage('Please wait 30 seconds between submissions.');
      return;
    }

    // Verify math answer
    if (parseInt(userAnswer) !== mathQuestion.answer) {
      setSubmitMessage('Please solve the math problem correctly.');
      generateMathQuestion();
      setUserAnswer('');
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage('');

    const formData = new FormData(e.currentTarget);

    // Check honeypot fields
    if (formData.get('botcheck') || formData.get('website')) {
      setSubmitMessage('Spam detected. Please try again.');
      setIsSubmitting(false);
      return;
    }

    // Enhanced spam detection
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;
    const name = formData.get('name') as string;

    // Validate email format
    if (!validateEmail(email)) {
      setSubmitMessage('Please enter a valid email address.');
      setIsSubmitting(false);
      return;
    }

    // Check for spam patterns
    if (
      isLikelySpam(message) ||
      hasExcessiveLinks(message) ||
      hasSuspiciousPatterns(message)
    ) {
      setSubmitMessage(
        'Your message appears to be spam. Please try again with a different message.'
      );
      setIsSubmitting(false);
      return;
    }

    // Check for suspicious name patterns
    if (name.length < 2 || name.length > 50 || /[0-9]/.test(name)) {
      setSubmitMessage('Please enter a valid name.');
      setIsSubmitting(false);
      return;
    }

    // Check if Web3Forms API key is configured
    if (!process.env.NEXT_PUBLIC_WEB3FORMS_KEY) {
      setSubmitMessage(
        'Contact form is not properly configured. Please try again later.'
      );
      setIsSubmitting(false);
      return;
    }

    // Add timestamp and user agent for additional spam protection
    formData.append('timestamp', new Date().toISOString());
    formData.append('user_agent', navigator.userAgent);
    formData.append('referrer', document.referrer || 'direct');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setSubmitMessage('Thank you! Your message has been sent successfully.');
        (e.target as HTMLFormElement).reset();
        setUserAnswer('');
        setLastSubmission(now);
        generateMathQuestion();
      } else {
        setSubmitMessage(
          'Sorry, there was an error sending your message. Please try again.'
        );
      }
    } catch (error) {
      setSubmitMessage(
        'Sorry, there was an error sending your message. Please try again.'
      );
    }

    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="bg-homestead-base">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-16">
            <h2 className="text-3xl font-bold text-homestead-heading md:text-4xl">
              Get in Touch
            </h2>
            <p className="text-lg text-gray-700 mt-4">
              Ready to book our services or have questions? We'd love to hear
              from you.
            </p>
          </div>

          <div className="mx-auto max-w-4xl">
            <div className="grid gap-8 md:grid-cols-2">
              {/* Contact Form */}
              <div className="bg-white rounded-lg p-8 shadow-sm">
                <h3 className="text-xl font-bold text-homestead-heading mb-6">
                  Send us a message
                </h3>
                <form className="space-y-4" onSubmit={handleSubmit}>
                  {/* Web3Forms Access Key */}
                  <input
                    type="hidden"
                    name="access_key"
                    value={process.env.NEXT_PUBLIC_WEB3FORMS_KEY || ''}
                  />

                  {/* Optional: Subject line for email */}
                  <input
                    type="hidden"
                    name="subject"
                    value="New Contact Form Submission from All Ways Home"
                  />

                  {/* Optional: From name */}
                  <input
                    type="hidden"
                    name="from_name"
                    value="All Ways Home Contact Form"
                  />

                  {/* Honeypot field for spam protection - must be hidden */}
                  <input
                    type="checkbox"
                    name="botcheck"
                    className="hidden"
                    style={{ display: 'none' }}
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                  />

                  {/* Hidden field that should remain empty */}
                  <div style={{ position: 'absolute', left: '-9999px' }}>
                    <label htmlFor="website" className="sr-only">
                      Leave this field empty
                    </label>
                    <input
                      type="text"
                      id="website"
                      name="website"
                      tabIndex={-1}
                      autoComplete="off"
                      aria-hidden="true"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-homestead-secondary"
                      required
                      minLength={2}
                      maxLength={100}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-homestead-secondary"
                      required
                      maxLength={254}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-homestead-secondary"
                      required
                      minLength={10}
                      maxLength={5000}
                    />
                  </div>

                  {/* Math verification */}
                  <div>
                    <label
                      htmlFor="mathAnswer"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Please solve: {mathQuestion.question} = ?
                    </label>
                    <input
                      type="number"
                      id="mathAnswer"
                      value={userAnswer}
                      onChange={(e) => setUserAnswer(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-homestead-secondary"
                      required
                      placeholder="Enter your answer"
                    />
                  </div>

                  {/* Submit button with loading state */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-3 px-6 rounded-md font-medium transition-colors ${
                      isSubmitting ?
                        'bg-gray-400 cursor-not-allowed'
                      : 'btn-homestead-primary hover:bg-homestead-secondary'
                    }`}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>

                  {/* Success/Error message */}
                  {submitMessage && (
                    <div
                      className={`mt-4 p-3 rounded-md ${
                        submitMessage.includes('Thank you') ?
                          'bg-green-50 text-green-800 border border-green-200'
                        : 'bg-red-50 text-red-800 border border-red-200'
                      }`}
                    >
                      {submitMessage}
                    </div>
                  )}
                </form>
              </div>

              {/* Contact Info */}
              <div className="bg-homestead-section rounded-lg p-8">
                <h3 className="text-xl font-bold text-homestead-heading mb-6">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-homestead-heading">
                      <span className="text-white">📧</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-homestead-heading">
                        Email
                      </h4>
                      {!showEmail ?
                        <button
                          onClick={() => setShowEmail(true)}
                          className="text-homestead-secondary hover:text-homestead-heading cursor-pointer bg-transparent border-none underline text-left p-0"
                        >
                          Click to reveal email
                        </button>
                      : <div className="space-y-2">
                          <a
                            href={`mailto:${getObfuscatedEmail()}`}
                            className="text-homestead-secondary hover:text-homestead-heading block"
                          >
                            {getObfuscatedEmail()}
                          </a>
                          <button
                            onClick={() => setShowEmail(false)}
                            className="text-sm text-gray-500 hover:text-gray-700 cursor-pointer bg-transparent border-none underline text-left p-0"
                          >
                            Hide email
                          </button>
                        </div>
                      }
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-homestead-heading">
                      <span className="text-white">🇮🇪</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-homestead-heading">
                        Coverage
                      </h4>
                      <p className="text-homestead-secondary">
                        Nationwide across Ireland
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-homestead-heading">
                      <span className="text-white">⏰</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-homestead-heading">
                        Response Time
                      </h4>
                      <p className="text-homestead-secondary">
                        Usually within 24 hours
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
