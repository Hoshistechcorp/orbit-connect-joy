import { motion } from "framer-motion";
import { Trophy, ArrowRight } from "lucide-react";
import ibloovEvents from "@/assets/ibloov-events.jpg";
import ibloovPlaces from "@/assets/ibloov-places.jpg";
import ibloovWellness from "@/assets/ibloov-wellness.jpg";
import ibloovInstitute from "@/assets/ibloov-institute.jpg";

const featuredProduct = {
  name: "iBloov Events",
  description: "Create and sell tickets to any event with our comprehensive event management platform.",
  image: ibloovEvents,
};

const products = [
  { name: "iBloov Places", description: "Discover/book unique venues", image: ibloovPlaces },
  { name: "iBloov Wellness", description: "All in one mental and physical health", image: ibloovWellness },
  { name: "iBloov Institute", description: "Tourism Certifications for career growth", image: ibloovInstitute },
];

const AuraProducts = () => {
  return (
    <section id="products" className="py-20 px-6" style={{ background: "linear-gradient(180deg, hsl(220 25% 12%) 0%, hsl(220 20% 15%) 100%)" }}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white">
            The iBloov <span className="text-ibloov-orange">AURA</span>
          </h2>
          <p className="mt-4 text-white/50 max-w-xl mx-auto">
            Six powerful products working together to transform how you work, travel, and live.
          </p>
        </motion.div>

        {/* Featured product */}
        <motion.div
          className="relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-2 gap-0">
            <div className="p-8 sm:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-4">
                <Trophy className="w-4 h-4 text-ibloov-orange" />
                <span className="text-ibloov-orange text-xs font-semibold uppercase tracking-wider">Featured Product</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-4">{featuredProduct.name}</h3>
              <p className="text-white/50 leading-relaxed mb-6">{featuredProduct.description}</p>
              <motion.a
                href="https://ibloov.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-ibloov-blue font-semibold text-sm hover:underline"
                whileHover={{ x: 4 }}
              >
                Learn more <ArrowRight className="w-4 h-4" />
              </motion.a>
            </div>
            <div className="relative h-64 md:h-auto">
              <img src={featuredProduct.image} alt={featuredProduct.name} className="w-full h-full object-cover" />
            </div>
          </div>
        </motion.div>

        {/* Product grid */}
        <div className="grid sm:grid-cols-3 gap-6">
          {products.map((product, i) => (
            <motion.div
              key={product.name}
              className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <div className="h-40 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h4 className="font-display font-bold text-white text-sm mb-1">{product.name}</h4>
                <p className="text-white/40 text-xs mb-3">{product.description}</p>
                <motion.a
                  href="https://ibloov.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-ibloov-blue font-semibold text-xs hover:underline"
                  whileHover={{ x: 3 }}
                >
                  Learn more <ArrowRight className="w-3 h-3" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AuraProducts;
