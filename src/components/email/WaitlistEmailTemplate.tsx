const SITE_URL = "https://orbit-connect-joy.lovable.app";
const PRODUCT_IMAGE = "https://cdn.shopify.com/s/files/1/0797/6937/0861/files/unisex-garment-dyed-heavyweight-t-shirt-black-front-69b1fccd70020.jpg?v=1773272292";
const HERO_IMAGE = "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=340&fit=crop&q=80";
const COMMUNITY_IMAGE = "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&h=260&fit=crop&q=80";

interface WaitlistEmailTemplateProps {
  recipientEmail?: string;
}

const WaitlistEmailTemplate = ({ recipientEmail = "orbiter@ibloov.com" }: WaitlistEmailTemplateProps) => {
  return (
    <div style={{
      fontFamily: "'Space Grotesk', 'Helvetica Neue', Arial, sans-serif",
      backgroundColor: "#f4f5f7",
      padding: "40px 16px",
      margin: "0",
    }}>
      <div style={{
        maxWidth: "580px",
        margin: "0 auto",
        backgroundColor: "#ffffff",
        borderRadius: "20px",
        overflow: "hidden",
        boxShadow: "0 8px 40px rgba(0,0,0,0.06)",
      }}>
        {/* Hero image full-bleed */}
        <div style={{ position: "relative" as const }}>
          <img
            src={HERO_IMAGE}
            alt="Friends connecting around the world"
            width="580"
            style={{
              display: "block",
              width: "100%",
              height: "auto",
              maxHeight: "280px",
              objectFit: "cover" as const,
            }}
          />
          {/* Gradient overlay */}
          <div style={{
            position: "absolute" as const,
            bottom: 0,
            left: 0,
            right: 0,
            height: "120px",
            background: "linear-gradient(to top, #ffffff, transparent)",
          }} />
          {/* Logo floating on image */}
          <div style={{
            position: "absolute" as const,
            top: "20px",
            left: "28px",
            fontSize: "26px",
            fontWeight: 800,
            letterSpacing: "-1px",
          }}>
            <span style={{ color: "#ffffff", textShadow: "0 1px 8px rgba(0,0,0,0.3)" }}>iB</span>
            <span style={{ color: "#fbbf24", textShadow: "0 1px 8px rgba(0,0,0,0.3)" }}>Loo</span>
            <span style={{ color: "#ffffff", textShadow: "0 1px 8px rgba(0,0,0,0.3)" }}>v</span>
          </div>
          <div style={{
            position: "absolute" as const,
            top: "24px",
            right: "28px",
          }}>
            <span style={{
              fontSize: "10px",
              fontWeight: 700,
              letterSpacing: "3px",
              color: "#0f1629",
              background: "rgba(251,191,36,0.9)",
              padding: "5px 14px",
              borderRadius: "100px",
              backdropFilter: "blur(4px)",
            }}>
              AURA
            </span>
          </div>
        </div>

        {/* Body */}
        <div style={{ padding: "8px 36px 40px" }}>
          <h1 style={{
            fontSize: "28px",
            fontWeight: 700,
            color: "hsl(220, 15%, 18%)",
            margin: "0 0 6px",
            lineHeight: 1.25,
          }}>
            You're in the orbit ✨
          </h1>
          <p style={{
            fontSize: "14px",
            fontWeight: 500,
            color: "hsl(39, 80%, 48%)",
            margin: "0 0 24px",
            letterSpacing: "0.3px",
          }}>
            Welcome to the iBloov AURA waitlist
          </p>

          <p style={{
            fontSize: "15px",
            lineHeight: 1.8,
            color: "hsl(220, 10%, 42%)",
            margin: "0 0 12px",
          }}>
            Four strangers from four continents collided in Dubai — and became
            co-owners of a lounge together. That's not just a story.
          </p>
          <p style={{
            fontSize: "15px",
            lineHeight: 1.8,
            color: "hsl(220, 10%, 42%)",
            margin: "0 0 28px",
          }}>
            That's the beginning of something much bigger.
          </p>

          {/* Flywheel — elegant card */}
          <div style={{
            background: "linear-gradient(145deg, hsl(224, 50%, 97%), hsl(39, 40%, 97%))",
            borderRadius: "14px",
            padding: "24px 28px",
            margin: "0 0 28px",
            border: "1px solid hsl(220, 20%, 92%)",
          }}>
            <p style={{
              fontSize: "12px",
              letterSpacing: "1.5px",
              fontWeight: 600,
              color: "hsl(220, 10%, 55%)",
              margin: "0 0 14px",
              textTransform: "uppercase" as const,
            }}>
              The iBloov Flywheel
            </p>
            <div style={{
              display: "flex" as const,
              flexWrap: "wrap" as const,
              gap: "6px",
              alignItems: "center" as const,
            }}>
              {[
                { emoji: "📚", label: "Learn", bg: "hsl(224, 70%, 95%)", color: "hsl(224, 85%, 40%)" },
                { emoji: "💰", label: "Earn", bg: "hsl(152, 60%, 93%)", color: "hsl(152, 70%, 30%)" },
                { emoji: "🌍", label: "Explore", bg: "hsl(39, 80%, 93%)", color: "hsl(30, 80%, 35%)" },
                { emoji: "🤝", label: "Belong", bg: "hsl(270, 60%, 95%)", color: "hsl(270, 60%, 40%)" },
                { emoji: "👑", label: "Own", bg: "hsl(0, 70%, 95%)", color: "hsl(0, 70%, 40%)" },
              ].map((step, i) => (
                <span key={i} style={{ display: "inline-flex" as const, alignItems: "center" as const }}>
                  <span style={{
                    display: "inline-block",
                    background: step.bg,
                    color: step.color,
                    fontSize: "13px",
                    fontWeight: 600,
                    padding: "6px 12px",
                    borderRadius: "8px",
                  }}>
                    {step.emoji} {step.label}
                  </span>
                  {i < 4 && (
                    <span style={{ color: "hsl(220, 10%, 75%)", margin: "0 2px", fontSize: "12px" }}>→</span>
                  )}
                </span>
              ))}
            </div>
          </div>

          {/* Community image */}
          <div style={{
            borderRadius: "14px",
            overflow: "hidden",
            marginBottom: "28px",
          }}>
            <img
              src={COMMUNITY_IMAGE}
              alt="Community gathering"
              width="508"
              style={{
                display: "block",
                width: "100%",
                height: "auto",
                maxHeight: "200px",
                objectFit: "cover" as const,
              }}
            />
          </div>

          <p style={{
            fontSize: "15px",
            lineHeight: 1.7,
            color: "hsl(220, 10%, 42%)",
            margin: "0 0 6px",
          }}>
            Read the full manifesto and our story →{" "}
            <a href={`${SITE_URL}/mission`} style={{
              color: "hsl(224, 85%, 50%)",
              fontWeight: 600,
              textDecoration: "none",
              borderBottom: "1px solid hsl(224, 85%, 80%)",
            }}>
              Mission & About
            </a>
          </p>
          <p style={{
            fontSize: "15px",
            lineHeight: 1.7,
            color: "hsl(220, 10%, 42%)",
            margin: "0 0 32px",
          }}>
            The product is launching soon — you'll be the first to know.
          </p>

          {/* CTA: Mission */}
          <div style={{ textAlign: "center" as const, marginBottom: "32px" }}>
            <a
              href={`${SITE_URL}/mission`}
              style={{
                display: "inline-block",
                background: "hsl(224, 85%, 45%)",
                color: "#ffffff",
                fontSize: "14px",
                fontWeight: 600,
                padding: "14px 36px",
                borderRadius: "10px",
                textDecoration: "none",
              }}
            >
              View our mission →
            </a>
          </div>

          {/* Divider */}
          <div style={{
            height: "1px",
            background: "linear-gradient(to right, transparent, hsl(220, 20%, 90%), transparent)",
            margin: "0 0 28px",
          }} />

          {/* Product Card — clean */}
          <a
            href={`${SITE_URL}/product/unisex-garment-dyed-heavyweight-t-shirt`}
            style={{ textDecoration: "none", display: "block" }}
          >
            <div style={{
              display: "flex" as const,
              border: "1px solid hsl(220, 20%, 92%)",
              borderRadius: "14px",
              overflow: "hidden",
              marginBottom: "24px",
            }}>
              <img
                src={PRODUCT_IMAGE}
                alt="Ibloov Love Campaign Tee"
                width="160"
                style={{
                  display: "block",
                  width: "160px",
                  minHeight: "140px",
                  objectFit: "cover" as const,
                }}
              />
              <div style={{ padding: "18px 20px", flex: "1" }}>
                <p style={{
                  fontSize: "10px",
                  fontWeight: 700,
                  letterSpacing: "1.5px",
                  textTransform: "uppercase" as const,
                  color: "hsl(39, 80%, 48%)",
                  margin: "0 0 6px",
                }}>
                  From the store
                </p>
                <p style={{
                  fontSize: "16px",
                  fontWeight: 700,
                  color: "hsl(220, 15%, 20%)",
                  margin: "0 0 6px",
                  lineHeight: 1.3,
                }}>
                  Love Campaign Tee
                </p>
                <p style={{
                  fontSize: "13px",
                  color: "hsl(220, 10%, 55%)",
                  margin: "0 0 10px",
                }}>
                  $19.75 · 7 sizes
                </p>
                <span style={{
                  fontSize: "12px",
                  fontWeight: 600,
                  color: "hsl(224, 85%, 50%)",
                }}>
                  Shop now →
                </span>
              </div>
            </div>
          </a>

          {/* CTA: Support */}
          <div style={{ textAlign: "center" as const }}>
            <a
              href={`${SITE_URL}/store`}
              style={{
                display: "inline-block",
                background: "linear-gradient(135deg, hsl(39, 90%, 52%), hsl(25, 90%, 52%))",
                color: "#ffffff",
                fontSize: "14px",
                fontWeight: 600,
                padding: "14px 36px",
                borderRadius: "10px",
                textDecoration: "none",
              }}
            >
              Support the vision →
            </a>
          </div>
        </div>

        {/* Footer */}
        <div style={{
          background: "hsl(220, 15%, 97%)",
          borderTop: "1px solid hsl(220, 20%, 92%)",
          padding: "28px 36px",
          textAlign: "center" as const,
        }}>
          <p style={{
            fontSize: "16px",
            fontWeight: 700,
            color: "hsl(220, 15%, 22%)",
            margin: "0 0 4px",
          }}>
            Welcome to the Global Crew 🌎
          </p>
          <p style={{
            fontSize: "13px",
            color: "hsl(220, 10%, 55%)",
            margin: "0 0 16px",
            lineHeight: 1.6,
          }}>
            The world just got smaller (in the best way). ✨
          </p>
          <p style={{
            fontSize: "11px",
            color: "hsl(220, 10%, 70%)",
            margin: 0,
          }}>
            Sent to {recipientEmail} ·{" "}
            <a href={SITE_URL} style={{ color: "hsl(224, 85%, 50%)", textDecoration: "none" }}>ibloov.com</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default WaitlistEmailTemplate;
