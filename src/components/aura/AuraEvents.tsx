import { motion } from "framer-motion";
import { Star, Users, ArrowRight, Bell } from "lucide-react";
import ibloovEvents from "@/assets/ibloov-events.jpg";
import ibloovPlaces from "@/assets/ibloov-places.jpg";
import ibloovWellness from "@/assets/ibloov-wellness.jpg";
import ibloovInstitute from "@/assets/ibloov-institute.jpg";
import flexIt from "@/assets/flex-it.jpg";

const events = [
  { name: "iBloov Events", description: "Create, manage and promote events with advanced analytics and attendee engagement tools.", image: ibloovEvents, rating: "4.8", users: "10K+", comingSoon: false },
  { name: "iBloov Places", description: "Discover and share amazing locations with our community-driven platform.", image: ibloovPlaces, rating: "4.6", users: "5K+", comingSoon: false },
  { name: "iBloov Wellness", description: "Track your wellness journey with personalized insights and community support.", image: ibloovWellness, rating: "4.7", users: "8K+", comingSoon: false },
  { name: "iBloov Institute", description: "Advanced learning platform with interactive courses and certifications.", image: ibloovInstitute, rating: "4.9", users: "12K+", comingSoon: false },
  { name: "Flex-it by iBloov", description: "Flexible workspace management and collaboration tools for modern teams.", image: flexIt, rating: "", users: "", comingSoon: true },
];

const AuraEvents = () => {
  return (
    <section className="py-20 px-6" style={{ background: "linear-gradient(180deg, hsl(220 25% 10%) 0%, hsl(220 25% 12%) 100%)" }}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white">
            Latest Events & <span className="text-ibloov-orange">Promotions</span>
          </h2>
          <p className="mt-4 text-white/50 max-w-xl mx-auto">
            Discover exciting events and exclusive offers from the iBloov ecosystem
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, i) => (
            <motion.div
              key={event.name}
              className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -4 }}
            >
              <div className="h-44 overflow-hidden relative">
                <img
                  src={event.image}
                  alt={event.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {event.comingSoon && (
                  <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-ibloov-orange/90 text-white text-xs font-bold">
                    Coming Soon
                  </div>
                )}
              </div>
              <div className="p-5">
                <h3 className="font-display font-bold text-white mb-2">{event.name}</h3>
                <p className="text-white/40 text-sm mb-4 leading-relaxed">{event.description}</p>

                {!event.comingSoon ? (
                  <>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex items-center gap-1 text-xs text-white/60">
                        <Star className="w-3 h-3 text-ibloov-orange fill-ibloov-orange" />
                        <span className="font-semibold text-white">{event.rating}</span>
                        <span>rating</span>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-white/60">
                        <Users className="w-3 h-3" />
                        <span className="font-semibold text-white">{event.users}</span>
                        <span>users</span>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <motion.a
                        href="https://ibloov.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center px-4 py-2 rounded-lg border border-white/15 text-white/80 text-xs font-semibold hover:bg-white/5 transition-colors"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Learn More
                      </motion.a>
                      <motion.a
                        href="https://ibloov.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center px-4 py-2 rounded-lg bg-ibloov-blue text-white text-xs font-semibold hover:opacity-90 transition-opacity"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Try Now
                      </motion.a>
                    </div>
                  </>
                ) : (
                  <motion.button
                    className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-ibloov-orange/30 text-ibloov-orange text-xs font-semibold hover:bg-ibloov-orange/10 transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Bell className="w-3 h-3" />
                    Notify Me
                  </motion.button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AuraEvents;
