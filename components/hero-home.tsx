import PageIllustration from '@/components/page-illustration';

export default function HeroHome() {
  return (
    <section className="relative">
      <PageIllustration />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="pb-12 pt-32 md:pb-20 md:pt-40">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-16">
            <h1
              className="mb-6 text-5xl font-bold text-homestead-heading md:text-6xl"
              data-aos="zoom-y-out"
              data-aos-delay={150}
            >
              Trusted House and Pet Sitting <br className="max-lg:hidden" />
              in Ireland
            </h1>
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-lg text-gray-700"
                data-aos="zoom-y-out"
                data-aos-delay={300}
              >
                Reliable, caring, and experienced — your home and pets are in
                good hands.
              </p>
              <div className="relative">
                <div
                  className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center"
                  data-aos="zoom-y-out"
                  data-aos-delay={450}
                >
                  <a
                    className="btn group mb-4 w-full btn-homestead-primary shadow-sm sm:mb-0 sm:w-auto"
                    href="#contact"
                  >
                    <span className="relative inline-flex items-center">
                      Get in Touch{' '}
                      <span className="ml-1 tracking-normal text-homestead-accent transition-transform group-hover:translate-x-0.5">
                        -&gt;
                      </span>
                    </span>
                  </a>
                  <a
                    className="btn w-full btn-homestead-secondary shadow-sm sm:ml-4 sm:w-auto"
                    href="#services"
                  >
                    Our Services
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Hero image */}
          <div
            className="mx-auto max-w-3xl"
            data-aos="zoom-y-out"
            data-aos-delay={600}
          >
            <div className="relative rounded-2xl px-5 py-3 shadow-xl bg-homestead-section">
              <div className="relative mb-4 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-4 text-homestead-heading">
                    🏠 + 🐾 = ❤️
                  </h3>
                  <p className="text-lg text-homestead-secondary">
                    Your home secure, your pets happy
                  </p>
                </div>
              </div>
              <div className="text-center space-y-4">
                <div className="flex justify-center space-x-8">
                  <div className="text-center">
                    <div className="text-4xl mb-2">🏠</div>
                    <p className="text-sm font-medium text-homestead-heading">
                      House Sitting
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl mb-2">🐕</div>
                    <p className="text-sm font-medium text-homestead-heading">
                      Dog Care
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl mb-2">🐱</div>
                    <p className="text-sm font-medium text-homestead-heading">
                      Cat Care
                    </p>
                  </div>
                </div>
                <p className="text-sm text-homestead-secondary">
                  Professional, insured, and trusted across Ireland
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
