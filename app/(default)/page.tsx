export const metadata = {
  title: 'All Ways Home - Trusted House & Pet Sitting Services Ireland',
  description:
    "Professional house and pet sitting services across Ireland. Peace of mind for your home and beloved pets while you're away.",
};

import BusinessCategories from '@/components/business-categories';
import Cta from '@/components/cta';
import FeaturesPlanet from '@/components/features-planet';
import Hero from '@/components/hero-home';
import LargeTestimonial from '@/components/large-testimonial';

export default function Home() {
  return (
    <>
      <Hero />
      <BusinessCategories />
      <FeaturesPlanet />
      <LargeTestimonial />
      <Cta />
    </>
  );
}
