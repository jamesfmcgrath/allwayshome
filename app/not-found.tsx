import { Metadata } from 'next';
import Link from 'next/link';
import NotFoundTracker from '../components/ui/not-found-tracker';

export const metadata: Metadata = {
  title: 'Page Not Found | All Ways Home',
  description: 'The page you are looking for could not be found.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <>
      <NotFoundTracker />
      <div className="min-h-screen flex items-center justify-center px-4 bg-gray-100">
        <div className="bg-white rounded-lg shadow-lg p-12 max-w-md w-full text-center">
          {/* Large 404 text */}
          <h1 className="text-8xl font-bold text-gray-300 mb-6">404</h1>

          {/* Main heading */}
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Page Not Found
          </h2>

          {/* Description */}
          <p className="text-gray-600 mb-8 text-lg">
            The page you're looking for doesn't exist or has been moved.
          </p>

          {/* Go back home button */}
          <Link
            href="/"
            className="inline-block bg-homestead-secondary hover:bg-homestead-heading text-white font-semibold py-3 px-8 rounded-md transition-colors duration-200"
          >
            Go back home
          </Link>
        </div>
      </div>
    </>
  );
}
