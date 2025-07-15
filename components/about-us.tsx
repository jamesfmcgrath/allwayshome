export default function AboutUs() {
  return (
    <section id="about" className="relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold text-homestead-heading md:text-4xl mb-8">
              About Us
            </h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-gray-700 leading-relaxed">
                We're a mature, experienced couple offering bespoke home and pet
                care across Ireland. After years of trusted house sits, we now
                offer professional, paid services under our own name.
              </p>
            </div>

            {/* Trust indicators */}
            <div className="mt-12 grid gap-8 sm:grid-cols-3">
              <div className="text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-homestead-heading mx-auto">
                  <span className="text-3xl">✅</span>
                </div>
                <h3 className="text-lg font-semibold text-homestead-heading mb-2">
                  Fully Insured
                </h3>
                <p className="text-gray-700">
                  Complete peace of mind with comprehensive insurance coverage
                </p>
              </div>

              <div className="text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-homestead-heading mx-auto">
                  <span className="text-3xl">🏆</span>
                </div>
                <h3 className="text-lg font-semibold text-homestead-heading mb-2">
                  Experienced
                </h3>
                <p className="text-gray-700">
                  Years of trusted house sitting experience across Ireland
                </p>
              </div>

              <div className="text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-homestead-heading mx-auto">
                  <span className="text-3xl">💚</span>
                </div>
                <h3 className="text-lg font-semibold text-homestead-heading mb-2">
                  Caring
                </h3>
                <p className="text-gray-700">
                  Your pets and home receive the same love and care as our own
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
