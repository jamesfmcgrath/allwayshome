export const metadata = {
  title: 'All Ways Home - Trusted House & Pet Sitting Services Ireland',
  description:
    "Professional house and pet sitting services across Ireland. Peace of mind for your home and beloved pets while you're away.",
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
