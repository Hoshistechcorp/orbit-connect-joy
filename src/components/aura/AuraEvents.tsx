import { motion } from "framer-motion";
import { Star, Users, ChevronLeft, ChevronRight } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
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
          className="text-center mb-12"
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

        {/* Full-width carousel */}
        <Carousel
          opts={{ align: "center", loop: true }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {events.map((event) => (
              <CarouselItem key={event.name} className="pl-4 basis-[90%] sm:basis-[70%] lg:basis-[60%]">
                <div className="relative rounded-2xl overflow-hidden h-[320px] sm:h-[400px] md:h-[450px] group">
                  {/* Background image */}
                  <img
                    src={event.image}
                    alt={event.name}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Dark overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20" />

                  {/* Coming soon badge */}
                  {event.comingSoon && (
                    <div className="absolute top-4 right-4 px-4 py-1.5 rounded-full bg-ibloov-orange text-white text-xs font-bold z-10">
                      Coming Soon
                    </div>
                  )}

                  {/* Content overlay at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                    <h3 className="font-display font-bold text-white text-2xl sm:text-3xl mb-2">{event.name}</h3>
                    <p className="text-white/70 text-sm sm:text-base mb-4 max-w-lg">{event.description}</p>

                    {!event.comingSoon && (
                      <>
                        <div className="flex items-center gap-4 mb-5">
                          <div className="flex items-center gap-1.5 text-sm text-white/70">
                            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                            <span className="font-semibold text-white">{event.rating}</span>
                            <span>rating</span>
                          </div>
                          <div className="flex items-center gap-1.5 text-sm text-white/70">
                            <Users className="w-4 h-4 text-ibloov-blue" />
                            <span className="font-semibold text-white">{event.users}</span>
                            <span>users</span>
                          </div>
                        </div>
                        <div className="flex gap-3">
                          <a
                            href="https://ibloov.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-2.5 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm text-white text-sm font-semibold hover:bg-white/20 transition-colors"
                          >
                            Learn More
                          </a>
                          <a
                            href="https://ibloov.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-2.5 rounded-full bg-white text-foreground text-sm font-semibold hover:bg-white/90 transition-colors"
                          >
                            Try Now
                          </a>
                        </div>
                      </>
                    )}

                    {event.comingSoon && (
                      <button className="px-6 py-2.5 rounded-full border border-ibloov-orange/40 text-ibloov-orange text-sm font-semibold hover:bg-ibloov-orange/10 transition-colors">
                        Notify Me
                      </button>
                    )}
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4 sm:left-8 h-10 w-10 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20" />
          <CarouselNext className="right-4 sm:right-8 h-10 w-10 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20" />
        </Carousel>

        {/* Dots indicator */}
        <div className="flex justify-center gap-2 mt-6">
          {events.map((_, i) => (
            <div key={i} className={`w-2 h-2 rounded-full ${i === 0 ? "bg-white" : "bg-white/30"}`} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AuraEvents;
