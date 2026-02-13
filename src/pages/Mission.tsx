import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { Heart, ExternalLink, BookOpen, Layers, Home } from "lucide-react";
import heroConnection from "@/assets/hero-connection.jpg";
import ibloovLogoClean from "@/assets/ibloov-logo-clean.png";
import globalCrew from "@/assets/global-crew.jpg";
import equationInfographic from "@/assets/equation-infographic.jpg";
import flywheelInfographic from "@/assets/flywheel-infographic.jpg";

/* ─── Scroll-reveal hook ─── */
const useReveal = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.01, rootMargin: "0px 0px 100px 0px" }
    );
    obs.observe(el);
    const timer = setTimeout(() => setVisible(true), 2000);
    return () => { obs.disconnect(); clearTimeout(timer); };
  }, []);
  return { ref, visible };
};

const Reveal = ({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) => {
  const { ref, visible } = useReveal();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(40px)",
        transition: `opacity 0.8s ease ${delay}s, transform 0.8s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
};

/* ─── Inline badge for product names in Acts ─── */
const Badge = ({ children, color = "hsl(220,15%,22%)" }: { children: React.ReactNode; color?: string }) => (
  <span
    className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-semibold mx-1 align-middle"
    style={{ background: color, color: "hsl(45,30%,92%)", border: `1px solid hsl(220,15%,28%)` }}
  >
    {children}
  </span>
);

/* ─── Color tokens ─── */
const c = {
  bg: "hsl(220,15%,8%)",
  bgWarm: "hsl(220,12%,10%)",
  cream: "hsl(45,30%,92%)",
  gold: "hsl(39,95%,55%)",
  coral: "hsl(12,80%,55%)",
  textWarm: "hsl(220,10%,70%)",
  muted: "hsl(220,10%,50%)",
  border: "hsl(220,15%,15%)",
  cardBg: "hsl(220,15%,12%)",
  cardBorder: "hsl(220,15%,18%)",
};

/* Card border colors for Four Lives */
const storyColors = ["hsl(12,80%,45%)", "hsl(45,90%,50%)", "hsl(160,60%,40%)", "hsl(260,50%,55%)"];
/* Phase top-border colors */
const phaseColors = ["hsl(224,85%,45%)", "hsl(39,95%,55%)", "hsl(160,60%,45%)", "hsl(39,95%,55%)"];
/* Subsidiary border colors */
const subColors = ["hsl(224,85%,40%)", "hsl(12,70%,45%)", "hsl(39,95%,50%)", "hsl(160,50%,40%)", "hsl(260,50%,50%)"];

const Mission = () => {
  const [scrollPct, setScrollPct] = useState(0);
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  useEffect(() => {
    const onScroll = () => {
      const pct = window.scrollY / (document.body.scrollHeight - window.innerHeight);
      setScrollPct(Math.min(pct * 100, 100));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen" style={{ background: c.bg, color: c.cream }}>
      {/* ─── Scroll progress bar ─── */}
      <div className="fixed top-0 left-0 right-0 z-[60] h-1" style={{ background: "hsl(220,15%,15%)" }}>
        <div
          className="h-full transition-all duration-150 ease-out"
          style={{
            width: `${scrollPct}%`,
            background: `linear-gradient(90deg, hsl(224,85%,45%), hsl(340,70%,55%), ${c.gold})`,
          }}
        />
      </div>

      {/* ─── Navbar ─── */}
      <header
        className="fixed top-1 left-0 right-0 z-50"
        style={{
          background: `${c.bg}e6`,
          backdropFilter: "blur(20px)",
          borderBottom: `1px solid ${c.cardBorder}`,
        }}
      >
        <nav className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <img src={ibloovLogoClean} alt="iBloov" className="h-6 w-auto" />
            <span className="font-bold text-sm tracking-wider" style={{ color: c.cream }}>AURA</span>
          </div>
          <div className="flex items-center gap-1 sm:gap-2">
            <Link
              to="/"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium transition-colors hover:bg-[hsl(220,15%,18%)]"
              style={{ color: c.textWarm }}
            >
              <Home className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Home</span>
            </Link>
            <button
              onClick={() => scrollTo("story")}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium"
              style={{ background: c.cardBorder, color: c.cream }}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Story</span>
            </button>
            <button
              onClick={() => scrollTo("ecosystem")}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium transition-colors hover:bg-[hsl(220,15%,18%)]"
              style={{ color: c.textWarm }}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Ecosystem</span>
            </button>
            <a
              href="https://ibloov.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-semibold transition-colors ml-1"
              style={{ border: `1px solid hsl(220,15%,25%)`, color: c.cream }}
            >
              <span>Invest</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </nav>
      </header>

      {/* ═══════════════ HERO ═══════════════ */}
      <section
        ref={heroRef}
        className="min-h-screen flex flex-col justify-center items-center text-center relative px-4 sm:px-8 overflow-hidden"
      >
        <motion.div className="absolute inset-0 z-0" style={{ y: heroY }}>
          <img
            src={heroConnection}
            alt="Global human connection"
            className="w-full h-full object-cover opacity-[0.08]"
          />
          <div
            className="absolute inset-0"
            style={{
              background: `
                radial-gradient(ellipse at 30% 40%, ${c.gold}12 0%, transparent 60%),
                radial-gradient(ellipse at 70% 60%, ${c.coral}0a 0%, transparent 50%),
                linear-gradient(to bottom, ${c.bg}cc 0%, ${c.bg}f2 100%)
              `,
            }}
          />
        </motion.div>

        {/* Floating hearts */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          {[
            { left: "15%", top: "20%", delay: "0s", dur: "5s", size: "1.5rem" },
            { left: "30%", top: "45%", delay: "0.8s", dur: "6s", size: "1.8rem" },
            { left: "60%", top: "20%", delay: "2.4s", dur: "8s", size: "2.4rem" },
            { left: "75%", top: "45%", delay: "3.2s", dur: "9s", size: "2.7rem" },
            { left: "90%", top: "70%", delay: "4s", dur: "10s", size: "3rem" },
          ].map((h, i) => (
            <div
              key={i}
              className="absolute animate-bounce"
              style={{
                left: h.left, top: h.top,
                animationDelay: h.delay, animationDuration: h.dur,
                opacity: 0.06, fontSize: h.size, color: c.gold,
              }}
            >
              ♥
            </div>
          ))}
        </div>

        <motion.div className="relative z-10 max-w-[900px]" style={{ opacity: heroOpacity }}>
          <motion.p
            className="text-xs font-semibold tracking-[0.3em] uppercase mb-8"
            style={{ color: c.gold }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            A Manifesto for the Connected World
          </motion.p>
          <motion.h1
            className="font-serif font-black leading-[1.05] mb-8"
            style={{ color: c.cream, fontSize: "clamp(2.8rem, 7vw, 6.5rem)" }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            The World Is <br className="hidden md:block" />
            Searching for <em className="italic" style={{ color: c.gold }}>Love.</em>
          </motion.h1>
          <motion.p
            className="font-light max-w-[640px] mx-auto leading-[1.7] mb-12"
            style={{ color: c.textWarm, fontSize: "clamp(1.1rem, 2.2vw, 1.5rem)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            Not the romantic kind. The human kind. The kind that makes strangers feel like neighbors, cultures touch without colliding, and shared experiences heal what headlines break.
          </motion.p>
          <motion.button
            className="flex flex-col items-center gap-2 mx-auto cursor-pointer hover:opacity-80 transition-opacity"
            onClick={() => scrollTo("intro")}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <span className="text-[0.7rem] tracking-[0.25em] uppercase" style={{ color: c.muted }}>
              Scroll to begin
            </span>
            <div
              className="w-px"
              style={{
                height: 48,
                background: `linear-gradient(to bottom, ${c.gold}, transparent)`,
                animation: "2s ease-in-out 0s infinite pulse-line",
              }}
            />
          </motion.button>
        </motion.div>
      </section>

      {/* ═══════════════ DIAGNOSIS — THE LOVE LEAK ═══════════════ */}
      <section id="intro" className="py-16 sm:py-32 px-4 sm:px-8" style={{ background: c.bgWarm, borderTop: `1px solid ${c.gold}1a`, borderBottom: `1px solid ${c.gold}1a` }}>
        <div className="max-w-[1100px] mx-auto">
          {/* Dripping heart */}
          <Reveal>
            <div className="flex flex-col items-center mb-8">
              <div className="relative">
                <div className="text-[4rem] md:text-[5rem] text-center" style={{ color: `${c.coral}cc` }}>❤️</div>
                <div
                  className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-8"
                  style={{ background: `linear-gradient(to bottom, ${c.coral}99, transparent)` }}
                />
              </div>
              <div className="flex gap-3 mt-2">
                {[0, 0.5, 1].map((d, i) => (
                  <span key={i} className="text-lg animate-bounce" style={{ animationDelay: `${d}s`, opacity: 0.4, color: `hsl(210,60%,60%)` }}>
                    💧
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-xs font-semibold tracking-[0.3em] uppercase text-center mb-12" style={{ color: c.muted }}>
              The World Is Leaking Love — From Everyday Life
            </p>
          </Reveal>

          {/* Stats - matching screenshot exactly */}
          <Reveal delay={0.2}>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-[900px] mx-auto">
              {[
                { emoji: "😔", value: "1 in 4", label: "adults worldwide report\nfeeling lonely" },
                { emoji: "📉", value: "$1.05T", label: "annual economic cost\nof disconnection" },
                { emoji: "🏚️", value: "60%", label: "say they lack meaningful\ncommunity" },
              ].map((s) => (
                <div key={s.value} className="text-center p-8 rounded-2xl" style={{ background: c.cardBg, border: `1px solid ${c.cardBorder}` }}>
                  <div className="text-3xl mb-4">{s.emoji}</div>
                  <div className="font-serif text-4xl md:text-5xl font-bold mb-3" style={{ color: c.gold }}>{s.value}</div>
                  <div className="text-sm whitespace-pre-line leading-relaxed" style={{ color: c.muted }}>{s.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════ FOUR LIVES ═══════════════ */}
      <section id="story" className="py-16 sm:py-32 px-4 sm:px-8">
        <div className="max-w-[1100px] mx-auto">
          <Reveal>
            <p className="text-xs font-semibold tracking-[0.3em] uppercase text-center mb-4" style={{ color: c.gold }}>
              Four Lives, One Orbit
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-center mb-4" style={{ color: c.cream }}>
              They Never Met. Until They <em className="italic" style={{ color: c.gold }}>Did.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-center mb-12 max-w-2xl mx-auto leading-relaxed" style={{ color: c.textWarm }}>
              Four strangers. Four continents. Four aching hungers for something bigger than survival. One platform that quietly forced their worlds to collide.
            </p>
          </Reveal>

          {/* 4-column cards with colored top borders */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { emoji: "🔥", loc: "Lagos, Nigeria", name: "Simi", story: "28. Surrounded by millions, starving for connection. Her fire was tired. She wanted a life where she could earn on her terms, grow fast, travel deep, and feel human again. Then one day, stuck in go-slow traffic — she saw iBloov AURA. It didn't look like an app. It looked like a doorway.", color: storyColors[0] },
              { emoji: "⚡", loc: "Shanghai, China", name: "Su", story: "26. Tech whiz drowning in neon grind and 996 shifts. Smog-choked skies, ambition eclipsing joy. She craved balance — skills that traveled, income that flexed, moments that bridged cultures. One late-night scroll changed everything.", color: storyColors[1] },
              { emoji: "🎨", loc: "Madrid, Spain", name: "Sofía", story: "29. An artist trapped in the vibrant but volatile rhythm of economic uncertainty. Tired of unstable gigs and isolated creativity, she yearned for a canvas bigger than her studio — global adventures, meaningful bonds, prosperity born from passion.", color: storyColors[2] },
              { emoji: "🏙️", loc: "New York, USA", name: "Sean", story: "27. Entrepreneur navigating the concrete jungle where skyscrapers pierce the sky and subways swallow souls. Drained by startup failures, he sought a reboot — flexible wealth-building, cross-cultural thrills, connections that healed divides.", color: storyColors[3] },
            ].map((card, i) => (
              <Reveal key={card.name} delay={i * 0.1}>
                <div
                  className="p-6 rounded-2xl h-full relative overflow-hidden"
                  style={{
                    background: c.cardBg,
                    border: `1px solid ${c.cardBorder}`,
                    borderTopColor: card.color,
                    borderTopWidth: 3,
                  }}
                >
                  <span className="text-3xl block mb-4">{card.emoji}</span>
                  <p className="text-[10px] font-semibold tracking-[0.2em] uppercase mb-1" style={{ color: c.muted }}>{card.loc}</p>
                  <h3 className="font-serif text-2xl font-bold mb-3" style={{ color: card.color }}>{card.name}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: c.textWarm }}>{card.story}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ THREE ACTS ═══════════════ */}
      <section className="py-16 sm:py-32 px-4 sm:px-8">
        <div className="max-w-[900px] mx-auto">
          {/* Act I */}
          <Reveal>
            <div className="mb-16">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-3" style={{ color: c.coral }}>Act I — The Spark</p>
              <h3 className="font-serif text-2xl font-bold mb-6" style={{ color: c.cream }}>A Basketball Bouncing in Barcelona</h3>
              <div className="space-y-5 text-[15px] leading-[1.8]" style={{ color: c.textWarm }}>
                <p>
                  Sofía opened <Badge color="hsl(160,50%,30%)">Sport Buddy</Badge> on a whim. She needed to sweat out the stress. In that gym, she met Sean — the burnt-out New Yorker on a "digital detox" trip, using <Badge color="hsl(200,50%,30%)">Kia Travel Buddy</Badge> to force himself into real-world adventures.
                </p>
                <p>
                  He was terrible at basketball. She passed him the ball with a smile. They high-fived. The game ended, but something began. <Badge color="hsl(280,40%,35%)">Loyalty & Rewards</Badge> pinged them both: <strong style={{ color: c.gold }}>+50 IBT</strong> for your first cross-border Sport Buddy connection.
                </p>
                <p>
                  He scanned the <Badge color="hsl(12,60%,40%)">Picture Share</Badge> QR on the court wall and found a photo of himself, mid-air, comically missing a layup. Sofía had tagged him. He laughed — a real, deep laugh he hadn't felt in months. He tipped her 10 euros via <Badge color="hsl(39,70%,35%)">Flex-it</Badge>. Over tapas found on <Badge color="hsl(160,40%,35%)">iBloov Place</Badge>, they shared stories. Sean talked about his dream diner. Sofía's eyes lit up.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Divider */}
          <div className="w-full h-px mb-16" style={{ background: c.cardBorder }} />

          {/* Act II */}
          <Reveal>
            <div className="mb-16">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-3" style={{ color: c.muted }}>Act II — The Convergence</p>
              <h3 className="font-serif text-2xl font-bold mb-6" style={{ color: c.cream }}>Four Orbits Align in Dubai</h3>
              <div className="space-y-5 text-[15px] leading-[1.8]" style={{ color: c.textWarm }}>
                <p>
                  Weeks later. Simi was in Dubai — a certified mixologist from <Badge color="hsl(160,50%,30%)">iBloov Learning</Badge>, working a massive festival booked through <Badge color="hsl(280,40%,35%)">Event Ticketing</Badge>. The lounge needed emergency staff. The manager posted on <Badge color="hsl(200,50%,30%)">iBloov Hub</Badge>.
                </p>
                <p>
                  Su in Shanghai saw it. Her NomadVerse profile — verified by certs — got her an instant interview. She was on a plane within 48 hours, financed by the Bank of Leisure's "Save Half, Pay Rest" plan.
                </p>
                <p>
                  Meanwhile, Sean and Sofía had arrived using the AI Concierge. They walked into the lounge. Sofía saw Simi's confident flair: <em className="italic" style={{ color: c.cream }}>"Your technique is art!"</em> Simi recognized Sofía from <Badge color="hsl(224,60%,40%)">AuraLink</Badge>: <em className="italic" style={{ color: c.cream }}>"The basketball legend from Barcelona!"</em>
                </p>
                <p>
                  In that surreal moment — Lagos, New York, Madrid, Shanghai — four orbits physically aligned. They closed the place down. They captured it all on <Badge color="hsl(12,60%,40%)">Picture Share</Badge> in a folder titled <strong style={{ color: c.cream }}>"The Global Crew, Night One."</strong>
                </p>
              </div>
            </div>
          </Reveal>

          {/* Global Crew Image */}
          <Reveal>
            <div className="mb-16">
              <img
                src={globalCrew}
                alt="The Global Crew — Simi, Su, Sofía, and Sean"
                className="w-full rounded-2xl"
                loading="lazy"
              />
              <p className="text-xs mt-3 text-center" style={{ color: c.muted }}>📸 The Global Crew, Night One — Dubai</p>
            </div>
          </Reveal>

          {/* Divider */}
          <div className="w-full h-px mb-16" style={{ background: c.cardBorder }} />

          {/* Act III */}
          <Reveal>
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-3" style={{ color: c.muted }}>Act III — The Syndicate</p>
              <h3 className="font-serif text-2xl font-bold mb-6" style={{ color: c.cream }}>From Strangers to Co-Owners</h3>
              <div className="space-y-5 text-[15px] leading-[1.8]" style={{ color: c.textWarm }}>
                <p>For six months, they were a digital tribe. Monthly check-ins on Engage. Mindfulness sessions from Mavericks Wellness. A group trip to Lagos via Kia.</p>
                <p>The trust was absolute — built layer by layer. Trust in skill, verified by Learning certs and Hub reviews. Trust in character, proven through shared play and shared tipping. Trust in vision, aligned through dialogue.</p>
                <p>Then Sean found it on LeapFranchise: a boutique lounge franchise combining Simi's mixology, Sofía's cultural performances, Su's wellness ambiance, and Sean's community model. Using Timeshare dividends, Investment Syndicates, and shared capital — they bought it. Together.</p>
                <p className="font-semibold italic" style={{ color: c.cream }}>When you own something together, you protect each other. That is how strangers become family.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════ CONNECTION EQUATION ═══════════════ */}
      <section className="py-16 sm:py-32 px-4 sm:px-8">
        <div className="max-w-[1100px] mx-auto text-center">
          <Reveal>
            <p className="text-xs font-semibold tracking-[0.3em] uppercase mb-4" style={{ color: c.gold }}>The Theory</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-12" style={{ color: c.cream }}>
              Connection Isn't Random. It's an <em className="italic" style={{ color: c.gold }}>Equation.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <img
              src={equationInfographic}
              alt="Connection Equation Infographic"
              className="w-full rounded-2xl mb-12"
              loading="lazy"
            />
          </Reveal>

          {/* 4 equation cards with left colored borders */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
            {[
              { title: "Proximity", desc: "Be in the same place →\nPlaces, Sport Buddy, Event Ticketing", color: "hsl(12,80%,50%)" },
              { title: "Shared Activity", desc: "Do something together →\nInstitute, Hub, Ticketing", color: "hsl(39,95%,55%)" },
              { title: "Repeated Interaction", desc: "Keep showing up →\nEngage, Wellness, Picture Share", color: "hsl(160,60%,45%)" },
              { title: "Shared Ownership", desc: "Build something together\n→ Timeshare, LeapFranchise", color: "hsl(260,50%,55%)" },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 0.1}>
                <div
                  className="p-5 rounded-xl h-full"
                  style={{
                    background: c.cardBg,
                    border: `1px solid ${c.cardBorder}`,
                    borderLeftColor: item.color,
                    borderLeftWidth: 3,
                  }}
                >
                  <h4 className="font-bold text-sm mb-2" style={{ color: item.color }}>{item.title}</h4>
                  <p className="text-xs leading-relaxed whitespace-pre-line" style={{ color: c.textWarm }}>{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ FLYWHEEL ═══════════════ */}
      <section className="py-16 sm:py-32 px-4 sm:px-8">
        <div className="max-w-[900px] mx-auto text-center">
          <Reveal>
            <p className="text-xs font-semibold tracking-[0.3em] uppercase mb-6" style={{ color: c.gold }}>The Flywheel</p>
          </Reveal>
          <Reveal delay={0.1}>
            <img
              src={flywheelInfographic}
              alt="iBloov AURA Flywheel"
              className="w-full rounded-2xl mb-10"
              loading="lazy"
            />
          </Reveal>
          <Reveal delay={0.2}>
            <div className="flex flex-wrap items-center justify-center gap-2 text-base font-semibold">
              {[
                { word: "Learn", color: "hsl(39,95%,55%)" },
                { word: "Earn", color: "hsl(120,50%,50%)" },
                { word: "Explore", color: "hsl(200,70%,55%)" },
                { word: "Pay", color: "hsl(280,50%,55%)" },
                { word: "Heal", color: "hsl(340,70%,55%)" },
                { word: "Belong", color: "hsl(160,60%,45%)" },
                { word: "Own", color: "hsl(12,80%,55%)" },
              ].map((item, i) => (
                <span key={item.word} className="flex items-center gap-2">
                  <span style={{ color: item.color }}>{item.word}</span>
                  {i < 6 && <span style={{ color: c.muted }}>→</span>}
                </span>
              ))}
              <span className="flex items-center gap-2">
                <span style={{ color: c.muted }}>→</span>
                <span className="font-bold" style={{ color: c.cream }}>Repeat ∞</span>
              </span>
            </div>
          </Reveal>
          <Reveal delay={0.25}>
            <p className="mt-6 text-sm" style={{ color: c.textWarm }}>
              Real life becomes a loop, not a dead end.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════ ENTERPRISE ECOSYSTEM ═══════════════ */}
      <section id="ecosystem" className="py-16 sm:py-32 px-4 sm:px-8">
        <div className="max-w-[1100px] mx-auto">
          <Reveal>
            <p className="text-xs font-semibold tracking-[0.3em] uppercase text-center mb-4" style={{ color: c.gold }}>The Enterprise Ecosystem</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-center mb-6" style={{ color: c.cream }}>
              One Platform. Every Life <em className="italic" style={{ color: c.gold }}>Function.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-center mb-14 max-w-3xl mx-auto leading-relaxed" style={{ color: c.textWarm }}>
              iBloov AURA is not a collection of apps. It is a global nervous system — linking communities, economies, and hearts through a deliberate, phased architecture that makes love compound.
            </p>
          </Reveal>

          {/* Phase cards in 2x2 grid with colored top borders and pill tags */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { phase: "Phase 1 — The Mothership", title: "Identity & Discovery", items: ["AuraLink", "Sport Buddy", "Places", "Event Ticketing", "CheckPoint", "iBloov Learning", "Hub", "Flex-it", "Mavericks Wellness", "Loyalty & Rewards"], color: phaseColors[0] },
              { phase: "Phase 2 — Community & Commerce", title: "When the Flywheel Spins", items: ["Engage", "Picture Share", "Fusion", "Element"], color: phaseColors[1] },
              { phase: "Phase 3 — Ownership & Prestige", title: "When Trust Is Built", items: ["Timeshare", "LeapFranchise", "MetaPass", "DreamPort"], color: phaseColors[2] },
            ].map((p, i) => (
              <Reveal key={p.phase} delay={i * 0.1}>
                <div
                  className="p-6 rounded-2xl h-full"
                  style={{
                    background: c.cardBg,
                    border: `1px solid ${c.cardBorder}`,
                    borderTopColor: p.color,
                    borderTopWidth: 3,
                  }}
                >
                  <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-2" style={{ color: p.color }}>{p.phase}</p>
                  <h3 className="font-serif text-xl font-bold mb-4" style={{ color: c.cream }}>{p.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {p.items.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1.5 rounded-full text-xs font-medium"
                        style={{ background: "hsl(220,15%,16%)", color: c.textWarm, border: `1px solid ${c.cardBorder}` }}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}

            {/* Full Architecture card */}
            <Reveal delay={0.3}>
              <div
                className="p-6 rounded-2xl h-full"
                style={{
                  background: c.cardBg,
                  border: `1px solid ${c.gold}33`,
                  borderTopColor: c.gold,
                  borderTopWidth: 3,
                }}
              >
                <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-2" style={{ color: c.gold }}>The Full Architecture</p>
                <p className="font-serif text-xl font-bold leading-relaxed mb-4" style={{ color: c.cream }}>
                  Identity → Skills → Income → Experiences → Payments → Wellness → Rewards → Ownership
                </p>
                <p className="text-sm leading-relaxed" style={{ color: c.textWarm }}>
                  Each step reduces hate because each step increases proximity, shared projects, shared play, shared wins, and shared ownership.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══════════════ ASSET MANAGEMENT HOLDING COMPANY ═══════════════ */}
      <section className="py-16 sm:py-32 px-4 sm:px-8">
        <div className="max-w-[1100px] mx-auto text-center">
          <Reveal>
            <p className="text-xs font-semibold tracking-[0.3em] uppercase mb-4" style={{ color: c.gold }}>The Movement Becomes a Machine</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold mb-8" style={{ color: c.cream }}>
              Asset Management <em className="italic" style={{ color: c.gold }}>Holding Company</em>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mb-14 max-w-3xl mx-auto leading-relaxed" style={{ color: c.textWarm }}>
              Each product can grow into its own company while staying tied to the AURA protocol. Revenue sits at the intersection of ticketing, venue commission, gig marketplaces, education, payments, wellness subscriptions, and tokenized rewards — multiple defensible streams in a global market already in the trillions.
            </p>
          </Reveal>

          {/* Hierarchy: Parent → AuraLink → Subsidiaries */}
          <Reveal delay={0.25}>
            <div className="space-y-4 max-w-[900px] mx-auto">
              {/* Parent */}
              <div
                className="p-6 rounded-2xl"
                style={{
                  background: c.cardBg,
                  border: `2px solid hsl(224,70%,35%)`,
                }}
              >
                <h3 className="font-serif text-xl font-bold mb-1" style={{ color: c.cream }}>iBloov Group (Parent)</h3>
                <p className="text-xs" style={{ color: c.muted }}>Strategy · Capital Allocation · Shared Infrastructure</p>
              </div>

              {/* AuraLink bar */}
              <div
                className="py-3 px-6 rounded-xl text-center"
                style={{
                  background: "linear-gradient(90deg, hsl(39,60%,25%), hsl(39,80%,30%), hsl(39,60%,25%))",
                  border: `1px solid ${c.gold}44`,
                }}
              >
                <p className="text-sm font-semibold tracking-wide" style={{ color: c.gold }}>
                  AURALINK — Shared Identity · Data · SSO · Verified Credentials Layer
                </p>
              </div>

              {/* Subsidiaries row */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                {[
                  { name: "Hub", sub: "Gig Economy", color: subColors[0] },
                  { name: "Institute", sub: "Skills & Credentials", color: subColors[1] },
                  { name: "Ticketing", sub: "Events & Experiences", color: subColors[2] },
                  { name: "Wellness", sub: "Health & Resilience", color: subColors[3] },
                  { name: "Franchise", sub: "Ownership & Expansion", color: subColors[4] },
                ].map((s) => (
                  <div
                    key={s.name}
                    className="p-4 rounded-xl text-center"
                    style={{
                      background: c.cardBg,
                      border: `1px solid ${s.color}`,
                    }}
                  >
                    <p className="font-bold text-sm" style={{ color: c.cream }}>{s.name}</p>
                    <p className="text-xs mt-1" style={{ color: c.muted }}>{s.sub}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Bullet points in 2-col grid */}
          <Reveal delay={0.3}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10 max-w-[900px] mx-auto text-left">
              {[
                "Each subsidiary has its own CEO, P&L, and can raise independently — while the AURA identity layer binds them together.",
                "Investors get optionality: bet on the full ecosystem OR invest in individual verticals with their own growth trajectory.",
                "Co-Founder CEOs are recruited for each vertical — operators who run subsidiaries as founder-level leaders with equity and autonomy.",
                "The transition to asset management happens as subsidiaries mature and generate independent cash flow.",
              ].map((text, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <span className="mt-1.5 w-5 h-5 rounded-full flex items-center justify-center shrink-0 text-xs" style={{ background: c.cardBg, border: `1px solid ${c.cardBorder}`, color: c.muted }}>—</span>
                  <p className="text-sm leading-relaxed" style={{ color: c.textWarm }}>{text}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════ PEACE TREATY ═══════════════ */}
      <section className="py-16 sm:py-32 px-4 sm:px-8 relative overflow-hidden">
        <Reveal>
          <div className="flex justify-center items-center gap-4 mb-8">
            <span className="text-2xl">🌍</span>
            <div className="flex gap-1">
              {[0, 1, 2].map(i => (
                <span key={i} className="animate-pulse" style={{ color: `${c.gold}66`, animationDelay: `${i * 0.2}s` }}>
                  <Heart className="w-3 h-3" fill="currentColor" />
                </span>
              ))}
            </div>
            <span className="text-2xl">🤝</span>
            <div className="flex gap-1">
              {[0, 1, 2].map(i => (
                <span key={i} className="animate-pulse" style={{ color: `${c.gold}66`, animationDelay: `${i * 0.2 + 0.5}s` }}>
                  <Heart className="w-3 h-3" fill="currentColor" />
                </span>
              ))}
            </div>
            <span className="text-2xl">🌎</span>
          </div>
        </Reveal>
        <div className="max-w-[900px] mx-auto text-center">
          <Reveal>
            <p className="text-xs font-semibold tracking-[0.3em] uppercase mb-4" style={{ color: c.gold }}>The Bigger Picture</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-12" style={{ color: c.cream }}>
              Every Transaction Is a Tiny <em className="italic" style={{ color: c.gold }}>Peace Treaty</em>
            </h2>
          </Reveal>
          <div className="space-y-4 text-sm leading-relaxed italic" style={{ color: c.textWarm }}>
            {[
              "A Chinese rooftop buys into a Brooklyn wall mural.",
              "A Spanish chord funds a Lagos hostel dream.",
              "A Canadian snow-shovel tips a Lagos bartender.",
              "A New York skateboard finances Chengdu tea ceremonies.",
            ].map((line, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <p>{line}</p>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.4}>
            <p className="mt-8 text-sm leading-relaxed max-w-2xl mx-auto" style={{ color: c.textWarm }}>
              Together, they are the new United Nations — no suits, just shared rooftops, soccer pitches, and tipping QR codes. The product layers aren't features. They're{" "}
              <em className="not-italic font-semibold" style={{ color: c.gold }}>feelings in motion.</em>
            </p>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════ KILL HATE STACK ═══════════════ */}
      <section className="py-16 sm:py-32 px-4 sm:px-8">
        <div className="max-w-[900px] mx-auto">
          <Reveal>
            <p className="text-xs font-semibold tracking-[0.3em] uppercase mb-4" style={{ color: c.gold }}>How the Stack Kills Hate</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-6 text-center" style={{ color: c.cream }}>
              From Tolerance to Love — Product by Product
            </h2>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="flex justify-center items-center gap-2 mb-12 text-xl">
              <span>😐</span><span style={{ color: c.muted }}>→</span>
              <span>🤝</span><span style={{ color: c.muted }}>→</span>
              <span>💪</span><span style={{ color: c.muted }}>→</span>
              <span>🏠</span><span style={{ color: c.muted }}>→</span>
              <span>❤️</span>
            </div>
          </Reveal>

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
              <Reveal key={i} delay={i * 0.06}>
                <div className="flex items-center gap-4 p-4 rounded-xl" style={{ background: c.cardBg, border: `1px solid ${c.cardBorder}` }}>
                  <span className="text-xl shrink-0">{step.icon}</span>
                  <div>
                    <span className="font-bold text-sm" style={{ color: c.cream }}>{step.name}</span>
                    <span className="text-sm" style={{ color: c.textWarm }}> → {step.effect}</span>
                  </div>
                  {i < 7 && <span className="ml-auto text-xs" style={{ color: "hsl(220,10%,30%)" }}>↓</span>}
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.5}>
            <p className="text-center mt-10 font-bold text-lg" style={{ color: c.gold }}>
              Hate cannot survive inside a healthy, repeated, embodied community.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════ FINAL CTA ═══════════════ */}
      <section className="py-16 sm:py-32 px-4 sm:px-8 text-center relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[
            { left: "10%", top: "15%", delay: "0s", dur: "5s" },
            { left: "85%", top: "25%", delay: "1s", dur: "6s" },
            { left: "20%", top: "65%", delay: "2s", dur: "7s" },
            { left: "75%", top: "75%", delay: "3s", dur: "8s" },
          ].map((h, i) => (
            <div
              key={i}
              className="absolute animate-bounce"
              style={{
                left: h.left, top: h.top,
                animationDelay: h.delay, animationDuration: h.dur,
                opacity: 0.06, fontSize: "1.5rem", color: c.gold,
              }}
            >
              ♥
            </div>
          ))}
        </div>

        <div className="max-w-[900px] mx-auto relative z-10">
          <Reveal>
            <img src={ibloovLogoClean} alt="iBloov" className="h-10 mx-auto mb-8" />
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-xs font-semibold tracking-[0.3em] uppercase mb-4" style={{ color: c.gold }}>
              This Is Your Invitation Into the Orbit
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold leading-tight mb-8" style={{ color: c.cream }}>
              The World Doesn't Need Another App.{" "}
              <br className="hidden sm:block" />
              It Needs a <em className="italic" style={{ color: c.gold }}>Movement.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="max-w-2xl mx-auto leading-relaxed mb-10" style={{ color: c.textWarm }}>
              iBloov AURA uses leisure, travel, and shared play as the softest, strongest weapon against division. It turns strangers into teammates, hosts, and co-investors. It rewards people not just for consuming — but for co-creating experiences, jobs, and assets. Together.
            </p>
          </Reveal>
          <Reveal delay={0.4}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/aura"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-bold text-sm hover:scale-105 transition-transform"
                style={{ background: c.gold, color: c.bg }}
              >
                <Heart className="w-4 h-4" />
                Enter the Orbit
              </Link>
              <Link
                to="/"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-semibold text-sm transition-colors"
                style={{ border: `1px solid hsl(220,15%,25%)`, color: c.cream }}
              >
                <Home className="w-4 h-4" />
                Back to Home
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CSS animations */}
      <style>{`
        @keyframes hero-shimmer {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.8; }
        }
        @keyframes pulse-line {
          0%, 100% { transform: scaleY(1); opacity: 1; }
          50% { transform: scaleY(0.5); opacity: 0.5; }
        }
      `}</style>
    </main>
  );
};

export default Mission;
