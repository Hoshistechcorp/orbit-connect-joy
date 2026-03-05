import { useState } from "react";
import { motion } from "framer-motion";
import { Trophy } from "lucide-react";
import ibloovEvents from "@/assets/ibloov-events.jpg";
import ibloovPlaces from "@/assets/ibloov-places.jpg";
import ibloovWellness from "@/assets/ibloov-wellness.jpg";
import ibloovInstitute from "@/assets/ibloov-institute.jpg";
import flexIt from "@/assets/flex-it.jpg";
import AuraLinkHeroCard from "./AuraLinkHeroCard";

const featuredProduct = {
  name: "iBloov Events",
  description: "Create and sell tickets to any event with our comprehensive event management platform.",
  image: ibloovEvents,
};

const products = [
  { name: "iBloov Places", description: "Discover/book unique venues", image: ibloovPlaces, bg: "bg-blue-50", comingSoon: false },
  { name: "iBloov Wellness", description: "All in one mental and physical health", image: ibloovWellness, bg: "bg-orange-50", comingSoon: false },
  { name: "iBloov Institute", description: "Tourism Certifications for career growth", image: ibloovInstitute, bg: "bg-purple-50", comingSoon: false },
  { name: "Flex-it by iBloov", description: "Flexible service marketplace for all your needs", image: flexIt, bg: "bg-white", comingSoon: false },
  { name: "iBloov Franchise Hub", description: "Connect with franchise opportunities worldwide", image: ibloovInstitute, bg: "bg-rose-50", comingSoon: true },
  { name: "iBloov Element", description: "For your pop up events and trade fair", image: ibloovEvents, bg: "bg-amber-50", comingSoon: true },
];

const AuraProducts = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleProducts = showAll ? products : products.slice(0, 3);

  return (
    <section id="products" className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* AuraLink Hero Card — largest card first */}
        <AuraLinkHeroCard />

        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-foreground">
            The iBloov <span className="text-ibloov-orange">AURA</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Six powerful products working together to transform how you work, travel, and live.
          </p>
        </motion.div>

        {/* Featured product - light card with gradient button */}
        <motion.div
          className="rounded-3xl overflow-hidden bg-muted mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-2 gap-0">
            <div className="p-8 sm:p-12 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-ibloov-blue text-white text-xs font-semibold w-fit mb-6">
                <Trophy className="w-3.5 h-3.5" />
                Featured Product
              </div>
              <h3 className="text-2xl sm:text-4xl font-display font-bold text-foreground mb-4">{featuredProduct.name}</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">{featuredProduct.description}</p>
              <motion.a
                href="https://ibloov.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-gradient-to-r from-ibloov-blue to-purple-500 text-white font-semibold text-sm w-full max-w-sm hover:opacity-90 transition-opacity"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Learn more
              </motion.a>
            </div>
            <div className="relative h-64 md:h-auto flex items-center justify-center p-8">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl transform rotate-3 scale-105" />
                <img src={featuredProduct.image} alt={featuredProduct.name} className="relative w-full max-w-md rounded-2xl shadow-2xl" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Product grid - pastel colored cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {visibleProducts.map((product, i) => (
            <div
              key={product.name}
              className={`rounded-3xl overflow-hidden ${product.bg} border border-border/50 group relative hover:-translate-y-1 transition-transform`}
            >
              {product.comingSoon && (
                <div className="absolute top-4 right-4 z-10 px-4 py-1 rounded-full bg-ibloov-orange text-white text-xs font-bold">
                  Coming Soon
                </div>
              )}
              <div className="p-6 text-center">
                <h4 className="font-display font-bold text-foreground text-xl mb-2">{product.name}</h4>
                <p className="text-muted-foreground text-sm mb-6">{product.description}</p>
                <div className="h-48 flex items-center justify-center mb-6">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="max-h-full w-auto rounded-xl shadow-lg group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <motion.a
                  href="https://ibloov.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full px-6 py-3.5 rounded-full bg-foreground text-background font-semibold text-sm hover:opacity-90 transition-opacity text-center"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Learn more
                </motion.a>
              </div>
            </div>
          ))}
        </div>

        {/* Show More/Less toggle */}
        <div className="flex justify-center mt-10">
          <motion.button
            onClick={() => setShowAll(!showAll)}
            className="px-8 py-3.5 rounded-full bg-foreground text-background font-semibold text-sm hover:opacity-90 transition-opacity"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {showAll ? "Show Less Products" : "Show More Products"}
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default AuraProducts;
