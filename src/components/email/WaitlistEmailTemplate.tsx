const SITE_URL = "https://orbit-connect-joy.lovable.app";
const PRODUCT_IMAGE = "https://cdn.shopify.com/s/files/1/0797/6937/0861/files/unisex-garment-dyed-heavyweight-t-shirt-black-front-69b1fccd70020.jpg?v=1773272292";

interface WaitlistEmailTemplateProps {
  recipientEmail?: string;
}

const WaitlistEmailTemplate = ({ recipientEmail = "orbiter@ibloov.com" }: WaitlistEmailTemplateProps) => {
  return (
    <div style={{
      fontFamily: "'Space Grotesk', 'Helvetica Neue', Arial, sans-serif",
      backgroundColor: "#f0f0f0",
      padding: "0",
      margin: "0",
    }}>
      <div style={{
        maxWidth: "600px",
        margin: "0 auto",
        overflow: "hidden",
      }}>
        {/* ===== TOP SECTION — Bold Blue ===== */}
        <div style={{
          backgroundColor: "hsl(224, 85%, 45%)",
          padding: "48px 32px 0",
          textAlign: "center" as const,
          position: "relative" as const,
        }}>
          {/* Logo */}
          <div style={{
            fontSize: "38px",
            fontWeight: 800,
            letterSpacing: "-1.5px",
            marginBottom: "16px",
          }}>
            <span style={{ color: "#ffffff" }}>i</span>
            <span style={{ color: "#ffffff" }}>B</span>
            <span style={{ color: "#fbbf24" }}>L</span>
            <span style={{ color: "#fbbf24" }}>oo</span>
            <span style={{ color: "#ffffff" }}>v</span>
          </div>

          <p style={{
            fontSize: "14px",
            color: "rgba(255,255,255,0.75)",
            margin: "0 0 32px",
            lineHeight: 1.6,
          }}>
            Four strangers. Four continents. One movement.<br />
            You just joined something special.
          </p>

          {/* Product image — large and overlapping */}
          <div style={{
            marginBottom: "-60px",
            position: "relative" as const,
            zIndex: 2,
          }}>
            <a href={`${SITE_URL}/product/unisex-garment-dyed-heavyweight-t-shirt`} style={{ textDecoration: "none" }}>
              <img
                src={PRODUCT_IMAGE}
                alt="Ibloov Love Campaign Tee"
                width="400"
                style={{
                  display: "block",
                  margin: "0 auto",
                  width: "75%",
                  maxWidth: "400px",
                  height: "auto",
                  borderRadius: "20px",
                  border: "4px solid rgba(255,255,255,0.2)",
                }}
              />
            </a>
          </div>
        </div>

        {/* ===== WAVY DIVIDER (SVG wave) ===== */}
        <div style={{ marginTop: "-1px", lineHeight: 0 }}>
          <svg viewBox="0 0 600 60" preserveAspectRatio="none" style={{ display: "block", width: "100%", height: "60px" }}>
            <path d="M0,0 L600,0 L600,20 Q450,60 300,30 Q150,0 0,40 Z" fill="hsl(224, 85%, 45%)" />
          </svg>
        </div>

        {/* ===== AMBER/ORANGE SECTION — Big headline ===== */}
        <div style={{
          backgroundColor: "#fbbf24",
          padding: "80px 32px 40px",
          textAlign: "center" as const,
          position: "relative" as const,
        }}>
          <h1 style={{
            fontSize: "44px",
            fontWeight: 900,
            color: "hsl(224, 85%, 20%)",
            margin: "0 0 8px",
            lineHeight: 1.05,
            letterSpacing: "-1px",
            textTransform: "uppercase" as const,
          }}>
            You're In<br />The Orbit
          </h1>

          <div style={{
            display: "inline-block",
            background: "hsl(224, 85%, 45%)",
            color: "#ffffff",
            fontSize: "14px",
            fontWeight: 700,
            padding: "10px 28px",
            borderRadius: "100px",
            margin: "16px 0 28px",
          }}>
            🚀 Welcome to AURA!
          </div>

          <p style={{
            fontSize: "15px",
            lineHeight: 1.8,
            color: "hsl(224, 85%, 25%)",
            margin: "0 auto 12px",
            maxWidth: "440px",
          }}>
            They met as strangers in Dubai — and became <strong>co-owners of a lounge together.</strong>
          </p>
          <p style={{
            fontSize: "15px",
            lineHeight: 1.8,
            color: "hsl(224, 85%, 25%)",
            margin: "0 auto 28px",
            maxWidth: "440px",
            fontWeight: 700,
          }}>
            That's not a story. That's a movement. ✊
          </p>

          {/* Flywheel pills */}
          <div style={{
            background: "rgba(255,255,255,0.5)",
            borderRadius: "16px",
            padding: "24px 20px",
            margin: "0 auto 28px",
            maxWidth: "460px",
          }}>
            <p style={{
              fontSize: "11px",
              textTransform: "uppercase" as const,
              letterSpacing: "3px",
              fontWeight: 800,
              color: "hsl(224, 85%, 30%)",
              margin: "0 0 14px",
            }}>
              The iBloov Flywheel
            </p>
            <div style={{ fontSize: "14px", fontWeight: 700, lineHeight: 2.4 }}>
              <span style={{ display: "inline-block", background: "hsl(224, 85%, 45%)", color: "#fff", padding: "5px 14px", borderRadius: "100px", margin: "3px" }}>📚 Learn</span>
              <span style={{ color: "hsl(224, 85%, 30%)" }}> → </span>
              <span style={{ display: "inline-block", background: "#10b981", color: "#fff", padding: "5px 14px", borderRadius: "100px", margin: "3px" }}>💰 Earn</span>
              <span style={{ color: "hsl(224, 85%, 30%)" }}> → </span>
              <span style={{ display: "inline-block", background: "#f97316", color: "#fff", padding: "5px 14px", borderRadius: "100px", margin: "3px" }}>🌍 Explore</span>
              <span style={{ color: "hsl(224, 85%, 30%)" }}> → </span>
              <span style={{ display: "inline-block", background: "#8b5cf6", color: "#fff", padding: "5px 14px", borderRadius: "100px", margin: "3px" }}>🤝 Belong</span>
              <span style={{ color: "hsl(224, 85%, 30%)" }}> → </span>
              <span style={{ display: "inline-block", background: "#ef4444", color: "#fff", padding: "5px 14px", borderRadius: "100px", margin: "3px" }}>👑 Own</span>
            </div>
          </div>

          {/* Mission CTA */}
          <a
            href={`${SITE_URL}/mission`}
            style={{
              display: "inline-block",
              background: "hsl(224, 85%, 20%)",
              color: "#fbbf24",
              fontSize: "15px",
              fontWeight: 800,
              padding: "16px 44px",
              borderRadius: "100px",
              textDecoration: "none",
              letterSpacing: "0.5px",
            }}
          >
            🔥 Read The Manifesto
          </a>
        </div>

        {/* ===== WAVY DIVIDER amber → white ===== */}
        <div style={{ marginTop: "-1px", lineHeight: 0 }}>
          <svg viewBox="0 0 600 50" preserveAspectRatio="none" style={{ display: "block", width: "100%", height: "50px" }}>
            <path d="M0,0 L600,0 L600,10 Q500,50 300,25 Q100,0 0,35 Z" fill="#fbbf24" />
          </svg>
        </div>

        {/* ===== WHITE SECTION — Store + CTA ===== */}
        <div style={{
          backgroundColor: "#ffffff",
          padding: "24px 32px 40px",
          textAlign: "center" as const,
        }}>
          <p style={{
            fontSize: "15px",
            lineHeight: 1.7,
            color: "hsl(220, 10%, 40%)",
            margin: "0 0 8px",
          }}>
            The product is launching soon — you'll be the first to know. 🫡
          </p>
          <p style={{
            fontSize: "15px",
            lineHeight: 1.7,
            color: "hsl(220, 10%, 40%)",
            margin: "0 0 28px",
          }}>
            In the meantime, rep the movement →
          </p>

          {/* Product mini-card */}
          <a
            href={`${SITE_URL}/product/unisex-garment-dyed-heavyweight-t-shirt`}
            style={{ textDecoration: "none", display: "block" }}
          >
            <div style={{
              border: "2px solid hsl(220, 13%, 91%)",
              borderRadius: "16px",
              overflow: "hidden",
              marginBottom: "28px",
              maxWidth: "400px",
              marginLeft: "auto",
              marginRight: "auto",
            }}>
              <div style={{ padding: "20px 24px" }}>
                <div style={{
                  display: "inline-block",
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "2px",
                  textTransform: "uppercase" as const,
                  color: "#fff",
                  background: "#fbbf24",
                  padding: "4px 12px",
                  borderRadius: "100px",
                  marginBottom: "8px",
                }}>
                  🛍️ FROM THE STORE
                </div>
                <p style={{
                  fontSize: "18px",
                  fontWeight: 800,
                  color: "hsl(220, 15%, 20%)",
                  margin: "8px 0 4px",
                }}>
                  Ibloov Love Campaign Tee
                </p>
                <p style={{
                  fontSize: "14px",
                  color: "hsl(220, 10%, 50%)",
                  margin: 0,
                }}>
                  $19.75 · 7 sizes · Rep the crew 🫶
                </p>
              </div>
            </div>
          </a>

          <a
            href={`${SITE_URL}/store`}
            style={{
              display: "inline-block",
              background: "linear-gradient(135deg, #f97316, #ef4444)",
              color: "#ffffff",
              fontSize: "15px",
              fontWeight: 800,
              padding: "16px 44px",
              borderRadius: "100px",
              textDecoration: "none",
            }}
          >
            🛍️ Support the Vision
          </a>
        </div>

        {/* ===== FOOTER — Blue again ===== */}
        <div style={{
          backgroundColor: "hsl(224, 85%, 45%)",
          padding: "36px 32px",
          textAlign: "center" as const,
        }}>
          {/* Logo small */}
          <div style={{
            fontSize: "24px",
            fontWeight: 800,
            letterSpacing: "-1px",
            marginBottom: "8px",
          }}>
            <span style={{ color: "#ffffff" }}>i</span>
            <span style={{ color: "#ffffff" }}>B</span>
            <span style={{ color: "#fbbf24" }}>L</span>
            <span style={{ color: "#fbbf24" }}>oo</span>
            <span style={{ color: "#ffffff" }}>v</span>
          </div>

          <p style={{
            fontSize: "18px",
            fontWeight: 800,
            color: "#ffffff",
            margin: "0 0 4px",
          }}>
            Welcome to the Global Crew. 🌎
          </p>
          <p style={{
            fontSize: "14px",
            color: "rgba(255,255,255,0.6)",
            margin: "0 0 20px",
          }}>
            The world just got smaller (in the best way). ✨
          </p>
          <p style={{
            fontSize: "11px",
            color: "rgba(255,255,255,0.35)",
            margin: 0,
          }}>
            Sent to {recipientEmail} ·{" "}
            <a href={SITE_URL} style={{ color: "#fbbf24", textDecoration: "none" }}>ibloov.com</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default WaitlistEmailTemplate;
