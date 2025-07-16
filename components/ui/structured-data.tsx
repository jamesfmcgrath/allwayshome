export default function StructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'All Ways Home',
    description:
      'Reliable, caring house and pet sitting service in Ireland. Experienced, professional, and personal care for your home and pets.',
    url: 'https://allwayshome.ie',
    telephone: '+353-XXX-XXXX', // Replace with actual phone number
    email: 'info@allwayshome.ie', // Replace with actual email
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IE',
      addressLocality: 'Ireland',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 53.1424, // Ireland approximate center
      longitude: -7.6921,
    },
    openingHours: 'Mo-Su 00:00-23:59', // 24/7 availability
    areaServed: {
      '@type': 'Country',
      name: 'Ireland',
    },
    serviceType: ['House Sitting', 'Pet Sitting', 'Home Care'],
    priceRange: '€€', // Adjust as needed
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '1', // Update with actual reviews
    },
    sameAs: [
      // Add your social media URLs here
      // 'https://www.facebook.com/allwayshome',
      // 'https://www.instagram.com/allwayshome',
      // 'https://www.linkedin.com/company/allwayshome',
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
}
