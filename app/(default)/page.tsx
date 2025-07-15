export const metadata = {
  title: 'All Ways Home – Trusted House & Pet Sitting in Ireland',
  description:
    'Reliable, caring house and pet sitting service in Ireland. Experienced, professional, and personal care for your home and pets.',
};

import AboutUs from '@/components/about-us';
import Contact from '@/components/contact';
import Hero from '@/components/hero-home';
import Services from '@/components/services';
import Testimonial from '@/components/testimonial';

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <AboutUs />
      <Testimonial />
      <Contact />
    </>
  );
}
