export default function Services() {
  return (
    <section id="services" className="bg-homestead-section">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
            <h2 className="text-3xl font-bold text-homestead-heading md:text-4xl">
              Our Services
            </h2>
            <p className="text-lg text-gray-700 mt-4">
              Professional, reliable care tailored to your home and pets
            </p>
          </div>

          {/* Services grid */}
          <div className="mx-auto max-w-sm items-start gap-6 sm:max-w-none sm:grid sm:grid-cols-2 lg:grid-cols-4">
            {/* Pet Care */}
            <div className="group mb-8 bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow sm:mb-0">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-homestead-heading">
                <span className="text-2xl">🐾</span>
              </div>
              <h3 className="mb-2 text-xl font-bold text-homestead-heading">
                Pet Care
              </h3>
              <p className="text-gray-700">
                Feeding, walks, companionship, and love for your furry family
                members
              </p>
            </div>

            {/* House Care */}
            <div className="group mb-8 bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow sm:mb-0">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-homestead-heading">
                <span className="text-2xl">🏠</span>
              </div>
              <h3 className="mb-2 text-xl font-bold text-homestead-heading">
                House Care
              </h3>
              <p className="text-gray-700">
                Plants, bins, laundry, post collection, and maintaining your
                home
              </p>
            </div>

            {/* Security Presence */}
            <div className="group mb-8 bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow sm:mb-0">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-homestead-heading">
                <span className="text-2xl">🔒</span>
              </div>
              <h3 className="mb-2 text-xl font-bold text-homestead-heading">
                Security Presence
              </h3>
              <p className="text-gray-700">
                Occupied look for your home, giving you complete peace of mind
              </p>
            </div>

            {/* Custom Extras */}
            <div className="group mb-8 bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow sm:mb-0">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-homestead-heading">
                <span className="text-2xl">⭐</span>
              </div>
              <h3 className="mb-2 text-xl font-bold text-homestead-heading">
                Custom Extras
              </h3>
              <p className="text-gray-700">
                We adapt to your specific needs and requirements
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
