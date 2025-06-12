import { HeroSection } from "@/components/HeroSection";
import { MenuSection } from "@/components/MenuSection";
import { ReservationSection } from "@/components/ReservationSection";
import { GallerySection } from "@/components/GallerySection";
import { ChefSpecialsSection } from "@/components/ChefSpecialsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { EventsSection } from "@/components/EventsSection";
import { ContactSection } from "@/components/ContactSection";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { InteractiveBackground } from "@/components/InteractiveBackground";
import { AppShell, AppShellHeader, AppShellMain } from "@mantine/core";

export default function HomePage() {
  return (
    <>
      <InteractiveBackground />
      <AppShell header={{ height: 70 }}>
        <AppShellHeader>
          <Header />
        </AppShellHeader>

        <AppShellMain>
          <div id="home">
            <HeroSection />
          </div>
          <MenuSection />
          <ChefSpecialsSection />
          <ReservationSection />
          <GallerySection />
          <TestimonialsSection />
          <EventsSection />
          <ContactSection />
          <Footer />
        </AppShellMain>
      </AppShell>
    </>
  );
}
