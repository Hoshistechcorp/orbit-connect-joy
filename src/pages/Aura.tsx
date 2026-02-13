import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AuraHero from "@/components/aura/AuraHero";
import AuraProducts from "@/components/aura/AuraProducts";
import AuraOrbitalSystem from "@/components/aura/AuraOrbitalSystem";
import AuraEvents from "@/components/aura/AuraEvents";

const Aura = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <AuraHero />
      <AuraProducts />
      <AuraOrbitalSystem />
      <AuraEvents />
      <Footer />
    </div>
  );
};

export default Aura;
