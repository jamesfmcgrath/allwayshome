export default function Contact() {
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
                <form
                  className="space-y-4"
                  action="mailto:info@allwayshome.ie"
                  method="post"
                  encType="text/plain"
                >
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-homestead-secondary"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-homestead-secondary"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-homestead-secondary"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full btn-homestead-primary py-3 px-6 rounded-md font-medium transition-colors"
                  >
                    Send Message
                  </button>
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
                      <a
                        href="mailto:info@allwayshome.ie"
                        className="text-homestead-secondary hover:text-homestead-heading"
                      >
                        info@allwayshome.ie
                      </a>
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
