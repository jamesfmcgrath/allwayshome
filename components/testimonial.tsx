export default function LargeTestimonial() {
  return (
    <section>
      <div className="mx-auto max-w-2xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="space-y-3 text-center">
            <p className="text-2xl font-bold text-gray-900">
              "James and Jennifer were the ideal pet/house sitters. Cú and Dini
              were so well cared for and I think our house was cleaner when we
              came back than when we left! They were very self sufficient, only
              messaging to let us know the fur babies were doing well.
              <em className="italic text-gray-500">
                {' '}
                Couldn't recommend them enough
              </em>
              , I hope we see them again."
            </p>
            <div className="text-sm font-medium text-gray-500">
              <span className="text-gray-700">Roxanne</span>{' '}
              <span className="text-gray-400">/</span>{' '}
              <span className="text-homestead-secondary">
                TrustedHousesitters.com
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
