'use client';

export default function Error({ error, reset }) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-white mb-4">Something went wrong!</h2>
        <p className="text-gray-400 mb-6">{error.message || 'An unexpected error occurred'}</p>
        <button
          onClick={() => reset()}
          className="rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-8 py-3 text-center text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
