'use client';

import Link from 'next/link';
import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Application error:', error);
  }, [error]);

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-4"
      style={{ backgroundColor: '#f8f5f2' }}
    >
      <div className="max-w-md w-full text-center">
        {/* Logo */}
        <div className="mb-8">
          <Link href="/" className="inline-block">
            <img
              src="/images/allwayshomelogo.svg"
              alt="All Ways Home"
              className="h-12 w-auto mx-auto"
            />
          </Link>
        </div>

        {/* Error Message */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-homestead-heading mb-4">
            Oops!
          </h1>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Something went wrong
          </h2>
          <p className="text-gray-600 mb-8">
            We're sorry, but something unexpected happened. Please try
            refreshing the page or contact us if the problem persists.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="space-y-4">
          <button
            onClick={reset}
            className="inline-block w-full btn-homestead-primary shadow-sm"
          >
            Try Again
          </button>

          <Link
            href="/"
            className="inline-block w-full btn-homestead-secondary shadow-sm"
          >
            Go to Homepage
          </Link>

          <Link
            href="/#contact"
            className="inline-block w-full btn-sm text-homestead-secondary hover:text-homestead-heading underline"
          >
            Report this issue
          </Link>
        </div>

        {/* Error Details (in development) */}
        {process.env.NODE_ENV === 'development' && (
          <div className="mt-8 p-4 bg-red-50 border border-red-200 rounded-lg text-left">
            <h3 className="font-semibold text-red-800 mb-2">Error Details:</h3>
            <p className="text-sm text-red-700 font-mono break-all">
              {error.message}
            </p>
            {error.digest && (
              <p className="text-sm text-red-600 mt-2">
                Error ID: {error.digest}
              </p>
            )}
          </div>
        )}

        {/* Decorative Element */}
        <div className="mt-12 opacity-50">
          <svg
            className="w-16 h-16 mx-auto text-homestead-heading"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.072 16.5c-.77.833.192 2.5 1.732 2.5z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
