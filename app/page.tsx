import Navbar from '@/components/navbar';
import Hero from '@/components/hero';
import Details from '@/components/details';
import Itinerary from '@/components/itinerary';
import RsvpRegistry from '@/components/rsvp-registry';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Details />
      <Itinerary />
      <RsvpRegistry />
    </main>
  );
}
