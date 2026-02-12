import { motion, useScroll, useTransform, type Easing } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Heart } from "lucide-react";
import heroConnection from "@/assets/hero-connection.jpg";
import ibloovLogoClean from "@/assets/ibloov-logo-clean.png";
import globalCrew from "@/assets/global-crew.jpg";
import equationInfographic from "@/assets/equation-infographic.jpg";
import flywheelInfographic from "@/assets/flywheel-infographic.jpg";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: "easeOut" as Easing },
};

const SectionLabel = ({ children }: { children: string }) => (
  <motion.p
    {...fadeUp}
    className="text-xs font-semibold tracking-[0.3em] uppercase text-ibloov-orange mb-4"
  >
    {children}
  </motion.p>
);

const StatCard = ({ emoji, value, label }: { emoji: string; value: string; label: string }) => (
  <motion.div
    {...fadeUp}
    className="flex flex-col items-center text-center p-6 rounded-2xl border border-[hsl(220,15%,18%)] bg-[hsl(220,15%,10%)]"
  >
    <span className="text-3xl mb-3">{emoji}</span>
    <span className="text-3xl font-display font-bold text-[hsl(0,0%,95%)]">{value}</span>
    <span className="text-sm text-[hsl(220,10%,60%)] mt-1">{label}</span>
  </motion.div>
);

const StoryCard = ({
  emoji,
  location,
  name,
  story,
}: {
  emoji: string;
  location: string;
  name: string;
  story: string;
}) => (
  <motion.div
    {...fadeUp}
    className="p-6 rounded-2xl border border-[hsl(220,15%,18%)] bg-[hsl(220,15%,10%)] hover:border-[hsl(var(--ibloov-orange)/0.4)] transition-colors"
  >
    <span className="text-2xl">{emoji}</span>
    <p className="text-xs text-ibloov-orange font-semibold tracking-widest uppercase mt-3">{location}</p>
    <h3 className="text-xl font-display font-bold text-[hsl(0,0%,95%)] mt-1">{name}</h3>
    <p className="text-sm text-[hsl(220,10%,60%)] mt-3 leading-relaxed">{story}</p>
  </motion.div>
);

const Mission = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div className="bg-[hsl(220,15%,8%)] text-[hsl(0,0%,95%)] min-h-screen">
      {/* Sticky Nav */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[hsl(220,15%,8%)/0.8] backdrop-blur-xl border-b border-[hsl(220,15%,18%)]">
        <nav className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-[hsl(0,0%,95%)] hover:text-ibloov-orange transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-semibold font-display">Back</span>
          </Link>
          <img src={ibloovLogoClean} alt="iBloov" className="h-7" />
        </nav>
      </header>

      {/* Hero */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: heroY }}>
          <img
            src={heroConnection}
            alt="Global human connection"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[hsl(220,15%,8%)/0.5] via-[hsl(220,15%,8%)/0.3] to-[hsl(220,15%,8%)]" />
        </motion.div>

        <motion.div
          className="relative z-10 text-center px-6 max-w-4xl"
          style={{ opacity: heroOpacity }}
        >
          <motion.img
            src={ibloovLogoClean}
            alt="iBloov"
            className="h-10 mx-auto mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          />
          <motion.p
            className="text-xs font-semibold tracking-[0.3em] uppercase text-ibloov-orange mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            A Manifesto for the Connected World
          </motion.p>
          <motion.h1
            className="font-display text-4xl sm:text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            The World Is Searching{" "}
            <br className="hidden sm:block" />
            for <em className="text-ibloov-orange not-italic font-serif">Love.</em>
          </motion.h1>
          <motion.p
            className="mt-6 text-base sm:text-lg text-[hsl(220,10%,70%)] max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            Not the romantic kind. The human kind. The kind that makes strangers feel like neighbors, cultures touch without colliding, and shared experiences heal what headlines break.
          </motion.p>
          <motion.div
            className="mt-10 flex flex-col items-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <span className="text-xs tracking-[0.2em] uppercase text-[hsl(220,10%,50%)]">Scroll to begin</span>
            <motion.div
              className="w-px h-8 bg-gradient-to-b from-[hsl(var(--ibloov-orange))] to-transparent"
              animate={{ scaleY: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Diagnosis */}
      <section className="py-24 sm:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <SectionLabel>The Diagnosis</SectionLabel>
          <motion.blockquote
            {...fadeUp}
            className="text-lg sm:text-xl italic text-[hsl(220,10%,70%)] border-l-2 border-ibloov-orange pl-6 my-8 leading-relaxed"
          >
            "People do not hate what they truly understand. And people rarely understand each other through arguments, news headlines, or timelines. They understand each other through <em className="text-ibloov-orange not-italic font-semibold">shared experiences</em>."
          </motion.blockquote>
          <motion.p {...fadeUp} className="text-[hsl(220,10%,60%)] leading-relaxed">
            The world isn't only short on money, or jobs, or technology. It's leaking love — the human kind — from everyday life. Not because people are evil. Because people are separated, exhausted, misinformed, and uninvested in each other.
          </motion.p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.h2 {...fadeUp} className="font-display text-2xl sm:text-3xl font-bold text-center mb-12">
            The World Is Leaking Love — From Everyday Life
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <StatCard emoji="😔" value="1 in 4" label="adults worldwide report feeling lonely" />
            <StatCard emoji="📉" value="$1.05T" label="annual economic cost of disconnection" />
            <StatCard emoji="🏚️" value="60%" label="say they lack meaningful community" />
          </div>
        </div>
      </section>

      {/* Four Lives */}
      <section className="py-24 sm:py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <SectionLabel>Four Lives, One Orbit</SectionLabel>
          <motion.h2 {...fadeUp} className="font-display text-3xl sm:text-4xl font-bold mb-4">
            They Never Met. Until They <em className="text-ibloov-orange not-italic font-serif">Did.</em>
          </motion.h2>
          <motion.p {...fadeUp} className="text-[hsl(220,10%,60%)] mb-12 max-w-2xl">
            Four strangers. Four continents. Four aching hungers for something bigger than survival. One platform that quietly forced their worlds to collide.
          </motion.p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <StoryCard
              emoji="🔥"
              location="Lagos, Nigeria"
              name="Simi"
              story="28. Surrounded by millions, starving for connection. Her fire was tired. She wanted a life where she could earn on her terms, grow fast, travel deep, and feel human again. Then one day, stuck in go-slow traffic — she saw iBloov AURA. It didn't look like an app. It looked like a doorway."
            />
            <StoryCard
              emoji="⚡"
              location="Shanghai, China"
              name="Su"
              story="26. Tech whiz drowning in neon grind and 996 shifts. Smog-choked skies, ambition eclipsing joy. She craved balance — skills that traveled, income that flexed, moments that bridged cultures. One late-night scroll changed everything."
            />
            <StoryCard
              emoji="🎨"
              location="Madrid, Spain"
              name="Sofía"
              story="29. An artist trapped in the vibrant but volatile rhythm of economic uncertainty. Tired of unstable gigs and isolated creativity, she yearned for a canvas bigger than her studio — global adventures, meaningful bonds, prosperity born from passion."
            />
            <StoryCard
              emoji="🏙️"
              location="New York, USA"
              name="Sean"
              story="27. Entrepreneur navigating the concrete jungle where skyscrapers pierce the sky and subways swallow souls. Drained by startup failures, he sought a reboot — flexible wealth-building, cross-cultural thrills, connections that healed divides."
            />
          </div>
        </div>
      </section>

      {/* Acts */}
      <section className="py-24 sm:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <SectionLabel>How iBloov Stitched Their Worlds Together</SectionLabel>
          <motion.h2 {...fadeUp} className="font-display text-3xl sm:text-4xl font-bold mb-12">
            The Accidental Family Nobody <em className="text-ibloov-orange not-italic font-serif">Planned</em>
          </motion.h2>

          {/* Act I */}
          <motion.div {...fadeUp} className="mb-16">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[hsl(220,10%,50%)] mb-2">Act I — The Spark</p>
            <h3 className="font-display text-xl font-bold mb-4">A Basketball Bouncing in Barcelona</h3>
            <div className="space-y-4 text-[hsl(220,10%,60%)] leading-relaxed text-sm">
              <p>Sofía opened Sport Buddy on a whim. She needed to sweat out the stress. In that gym, she met Sean — the burnt-out New Yorker on a "digital detox" trip, using Kia Travel Buddy to force himself into real-world adventures.</p>
              <p>He was terrible at basketball. She passed him the ball with a smile. They high-fived. The game ended, but something began. Loyalty & Rewards pinged them both: <strong className="text-ibloov-orange">+50 IBT</strong> for your first cross-border Sport Buddy connection.</p>
              <p>He scanned the Picture Share QR on the court wall and found a photo of himself, mid-air, comically missing a layup. Sofía had tagged him. He laughed — a real, deep laugh he hadn't felt in months. He tipped her 10 euros via Flex-it. Over tapas found on iBloov Place, they shared stories. Sean talked about his dream diner. Sofía's eyes lit up.</p>
            </div>
          </motion.div>

          {/* Act II */}
          <motion.div {...fadeUp} className="mb-16">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[hsl(220,10%,50%)] mb-2">Act II — The Convergence</p>
            <h3 className="font-display text-xl font-bold mb-4">Four Orbits Align in Dubai</h3>
            <div className="space-y-4 text-[hsl(220,10%,60%)] leading-relaxed text-sm">
              <p>Weeks later. Simi was in Dubai — a certified mixologist from iBloov Learning, working a massive festival booked through Event Ticketing. The lounge needed emergency staff. The manager posted on iBloov Hub.</p>
              <p>Su in Shanghai saw it. Her NomadVerse profile — verified by certs — got her an instant interview. She was on a plane within 48 hours, financed by the Bank of Leisure's "Save Half, Pay Rest" plan.</p>
              <p>Meanwhile, Sean and Sofía had arrived using the AI Concierge. They walked into the lounge. Sofía saw Simi's confident flair: <em>"Your technique is art!"</em> Simi recognized Sofía from AuraLink: <em>"The basketball legend from Barcelona!"</em></p>
              <p>In that surreal moment — Lagos, New York, Madrid, Shanghai — four orbits physically aligned. They closed the place down. They captured it all on Picture Share in a folder titled <strong className="text-ibloov-orange">"The Global Crew, Night One."</strong></p>
            </div>
          </motion.div>

          {/* Global Crew Image */}
          <motion.div {...fadeUp} className="mb-16">
            <img
              src={globalCrew}
              alt="The Global Crew — Simi, Su, Sofía, and Sean"
              className="w-full rounded-2xl"
              loading="lazy"
            />
            <p className="text-xs text-[hsl(220,10%,50%)] mt-3 text-center">📸 The Global Crew, Night One — Dubai</p>
          </motion.div>

          {/* Act III */}
          <motion.div {...fadeUp}>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[hsl(220,10%,50%)] mb-2">Act III — The Syndicate</p>
            <h3 className="font-display text-xl font-bold mb-4">From Strangers to Co-Owners</h3>
            <div className="space-y-4 text-[hsl(220,10%,60%)] leading-relaxed text-sm">
              <p>For six months, they were a digital tribe. Monthly check-ins on Engage. Mindfulness sessions from Mavericks Wellness. A group trip to Lagos via Kia.</p>
              <p>The trust was absolute — built layer by layer. Trust in skill, verified by Learning certs and Hub reviews. Trust in character, proven through shared play and shared tipping. Trust in vision, aligned through dialogue.</p>
              <p>Then Sean found it on LeapFranchise: a boutique lounge franchise combining Simi's mixology, Sofía's cultural performances, Su's wellness ambiance, and Sean's community model. Using Timeshare dividends, Investment Syndicates, and shared capital — they bought it. Together.</p>
              <p className="text-[hsl(0,0%,95%)] font-semibold italic">When you own something together, you protect each other. That is how strangers become family.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Equation */}
      <section className="py-24 sm:py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <SectionLabel>The Theory</SectionLabel>
          <motion.h2 {...fadeUp} className="font-display text-3xl sm:text-4xl font-bold mb-12">
            Connection Isn't Random. It's an <em className="text-ibloov-orange not-italic font-serif">Equation.</em>
          </motion.h2>
          <motion.img
            {...fadeUp}
            src={equationInfographic}
            alt="Connection Equation Infographic"
            className="w-full rounded-2xl mb-12"
            loading="lazy"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
            {[
              { title: "Proximity", desc: "Be in the same place → Places, Sport Buddy, Event Ticketing" },
              { title: "Shared Activity", desc: "Do something together → Institute, Hub, Ticketing" },
              { title: "Repeated Interaction", desc: "Keep showing up → Engage, Wellness, Picture Share" },
              { title: "Shared Ownership", desc: "Build something together → Timeshare, LeapFranchise" },
            ].map((item) => (
              <motion.div
                key={item.title}
                {...fadeUp}
                className="p-5 rounded-2xl border border-[hsl(220,15%,18%)] bg-[hsl(220,15%,10%)]"
              >
                <h4 className="font-display font-bold text-sm mb-2">{item.title}</h4>
                <p className="text-xs text-[hsl(220,10%,60%)] leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Flywheel */}
      <section className="py-24 sm:py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <SectionLabel>The Flywheel</SectionLabel>
          <motion.img
            {...fadeUp}
            src={flywheelInfographic}
            alt="iBloov AURA Flywheel"
            className="w-full rounded-2xl mb-8"
            loading="lazy"
          />
          <motion.p {...fadeUp} className="font-mono text-sm text-ibloov-orange tracking-wide">
            Learn → Earn → Explore → Pay → Heal → Belong → Own → Repeat ∞
          </motion.p>
          <motion.p {...fadeUp} className="text-[hsl(220,10%,60%)] mt-4 text-sm">
            Real life becomes a loop, not a dead end.
          </motion.p>
        </div>
      </section>

      {/* Enterprise Ecosystem */}
      <section className="py-24 sm:py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <SectionLabel>The Enterprise Ecosystem</SectionLabel>
          <motion.h2 {...fadeUp} className="font-display text-3xl sm:text-4xl font-bold mb-6">
            One Platform. Every Life <em className="text-ibloov-orange not-italic font-serif">Function.</em>
          </motion.h2>
          <motion.p {...fadeUp} className="text-[hsl(220,10%,60%)] mb-12 max-w-3xl leading-relaxed">
            iBloov AURA is not a collection of apps. It is a global nervous system — linking communities, economies, and hearts through a deliberate, phased architecture that makes love compound.
          </motion.p>

          <div className="space-y-8">
            {[
              { phase: "Phase 1 — The Mothership", title: "Identity & Discovery", items: "AuraLink · Sport Buddy · Places · Event Ticketing · CheckPoint · iBloov Learning · Hub · Flex-it · Mavericks Wellness · Loyalty & Rewards" },
              { phase: "Phase 2 — Community & Commerce", title: "When the Flywheel Spins", items: "Engage · Picture Share · Fusion · Element" },
              { phase: "Phase 3 — Ownership & Prestige", title: "When Trust Is Built", items: "Timeshare · LeapFranchise · MetaPass · DreamPort" },
            ].map((p) => (
              <motion.div
                key={p.phase}
                {...fadeUp}
                className="p-6 rounded-2xl border border-[hsl(220,15%,18%)] bg-[hsl(220,15%,10%)]"
              >
                <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[hsl(220,10%,50%)] mb-1">{p.phase}</p>
                <h3 className="font-display text-lg font-bold mb-3">{p.title}</h3>
                <p className="text-sm text-[hsl(220,10%,60%)]">{p.items}</p>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeUp} className="mt-8 p-6 rounded-2xl border border-ibloov-orange/20 bg-[hsl(220,15%,10%)]">
            <h3 className="font-display text-lg font-bold mb-3">The Full Architecture</h3>
            <p className="text-sm text-ibloov-orange font-mono">
              Identity → Skills → Income → Experiences → Payments → Wellness → Rewards → Ownership
            </p>
            <p className="text-sm text-[hsl(220,10%,60%)] mt-3 leading-relaxed">
              Each step reduces hate because each step increases proximity, shared projects, shared play, shared wins, and shared ownership.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Asset Management */}
      <section className="py-24 sm:py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <SectionLabel>The Movement Becomes a Machine</SectionLabel>
          <motion.h2 {...fadeUp} className="font-display text-3xl sm:text-4xl font-bold mb-6">
            Asset Management <em className="text-ibloov-orange not-italic font-serif">Holding Company</em>
          </motion.h2>
          <motion.p {...fadeUp} className="text-[hsl(220,10%,60%)] mb-12 max-w-3xl leading-relaxed">
            Each product can grow into its own company while staying tied to the AURA protocol. Revenue sits at the intersection of ticketing, venue commission, gig marketplaces, education, payments, wellness subscriptions, and tokenized rewards — multiple defensible streams in a global market already in the trillions.
          </motion.p>

          <motion.div {...fadeUp} className="p-6 rounded-2xl border border-[hsl(220,15%,18%)] bg-[hsl(220,15%,10%)] mb-6">
            <h3 className="font-display text-lg font-bold text-center mb-4">iBloov Group (Parent)</h3>
            <p className="text-xs text-[hsl(220,10%,50%)] text-center mb-6">Strategy · Capital Allocation · Shared Infrastructure</p>
            <p className="text-xs text-ibloov-orange text-center font-semibold mb-4">AURALINK — Shared Identity · Data · SSO · Verified Credentials Layer</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              {[
                { name: "Hub", sub: "Gig Economy" },
                { name: "Institute", sub: "Skills & Credentials" },
                { name: "Ticketing", sub: "Events & Experiences" },
                { name: "Wellness", sub: "Health & Resilience" },
                { name: "Franchise", sub: "Ownership & Expansion" },
              ].map((s) => (
                <div key={s.name} className="p-3 rounded-xl bg-[hsl(220,15%,14%)] text-center">
                  <p className="font-display font-bold text-sm">{s.name}</p>
                  <p className="text-xs text-[hsl(220,10%,50%)] mt-1">{s.sub}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="space-y-3">
            {[
              "Each subsidiary has its own CEO, P&L, and can raise independently — while the AURA identity layer binds them together.",
              "Investors get optionality: bet on the full ecosystem OR invest in individual verticals with their own growth trajectory.",
              "Co-Founder CEOs are recruited for each vertical — operators who run subsidiaries as founder-level leaders with equity and autonomy.",
              "The transition to asset management happens as subsidiaries mature and generate independent cash flow.",
            ].map((text, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                className="flex gap-3 items-start p-4 rounded-xl border border-[hsl(220,15%,18%)] bg-[hsl(220,15%,10%)]"
              >
                <span className="text-ibloov-orange font-bold mt-0.5">→</span>
                <p className="text-sm text-[hsl(220,10%,60%)] leading-relaxed">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Peace Treaty */}
      <section className="py-24 sm:py-32 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <SectionLabel>The Bigger Picture</SectionLabel>
          <motion.h2 {...fadeUp} className="font-display text-3xl sm:text-4xl font-bold mb-12">
            Every Transaction Is a Tiny <em className="text-ibloov-orange not-italic font-serif">Peace Treaty</em>
          </motion.h2>
          <div className="space-y-4 text-[hsl(220,10%,60%)] text-sm leading-relaxed italic">
            {[
              "A Chinese rooftop buys into a Brooklyn wall mural.",
              "A Spanish chord funds a Lagos hostel dream.",
              "A Canadian snow-shovel tips a Lagos bartender.",
              "A New York skateboard finances Chengdu tea ceremonies.",
            ].map((line, i) => (
              <motion.p key={i} {...fadeUp}>{line}</motion.p>
            ))}
          </div>
          <motion.p {...fadeUp} className="mt-8 text-[hsl(220,10%,60%)] text-sm leading-relaxed max-w-2xl mx-auto">
            Together, they are the new United Nations — no suits, just shared rooftops, soccer pitches, and tipping QR codes. The product layers aren't features. They're <em className="text-ibloov-orange not-italic font-semibold">feelings in motion.</em>
          </motion.p>
        </div>
      </section>

      {/* Kill Hate Stack */}
      <section className="py-24 sm:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <SectionLabel>How the Stack Kills Hate</SectionLabel>
          <motion.h2 {...fadeUp} className="font-display text-3xl sm:text-4xl font-bold mb-12 text-center">
            From Tolerance to Love — Product by Product
          </motion.h2>
          <div className="space-y-3">
            {[
              { icon: "🏀", name: "Sport Buddy", effect: "turns strangers into teammates" },
              { icon: "📍", name: "Event + Place + CheckPoint", effect: "turns teammates into a real-world crew" },
              { icon: "📚", name: "Learning + Hub", effect: "turns crew into coworkers with shared goals" },
              { icon: "🧘", name: "Mavericks Wellness", effect: "keeps the crew emotionally regulated" },
              { icon: "💳", name: "Flex-it + Bank of Leisure", effect: "makes gratitude and movement financially possible" },
              { icon: "📸", name: "Engage + Picture Share", effect: "turns memories into unbreakable bonds" },
              { icon: "🎯", name: "Loyalty & Rewards (IBT)", effect: "turns bonds into daily habits" },
              { icon: "🏠", name: "Timeshare + LeapFranchise", effect: "turns habits into shared ownership" },
            ].map((step, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                className="flex items-center gap-4 p-4 rounded-xl border border-[hsl(220,15%,18%)] bg-[hsl(220,15%,10%)]"
              >
                <span className="text-xl shrink-0">{step.icon}</span>
                <div>
                  <span className="font-display font-bold text-sm">{step.name}</span>
                  <span className="text-[hsl(220,10%,60%)] text-sm"> → {step.effect}</span>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.p {...fadeUp} className="text-center mt-10 font-display font-bold text-lg text-ibloov-orange">
            Hate cannot survive inside a healthy, repeated, embodied community.
          </motion.p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <motion.img
            {...fadeUp}
            src={ibloovLogoClean}
            alt="iBloov"
            className="h-10 mx-auto mb-8"
          />
          <SectionLabel>This Is Your Invitation Into the Orbit</SectionLabel>
          <motion.h2 {...fadeUp} className="font-display text-3xl sm:text-5xl font-bold leading-tight mb-8">
            The World Doesn't Need Another App.{" "}
            <br className="hidden sm:block" />
            It Needs a <em className="text-ibloov-orange not-italic font-serif">Movement.</em>
          </motion.h2>
          <motion.p {...fadeUp} className="text-[hsl(220,10%,60%)] max-w-2xl mx-auto leading-relaxed mb-10">
            iBloov AURA uses leisure, travel, and shared play as the softest, strongest weapon against division. It turns strangers into teammates, hosts, and co-investors. It rewards people not just for consuming — but for co-creating experiences, jobs, and assets. Together.
          </motion.p>
          <motion.div {...fadeUp}>
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-ibloov-orange text-[hsl(220,15%,8%)] font-display font-bold text-sm hover:scale-105 transition-transform"
            >
              <Heart className="w-4 h-4" />
              Enter the Orbit
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Mission;
