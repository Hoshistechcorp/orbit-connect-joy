const SITE_URL = "https://orbit-connect-joy.lovable.app";
const PRODUCT_IMAGE = "https://cdn.shopify.com/s/files/1/0797/6937/0861/files/unisex-garment-dyed-heavyweight-t-shirt-black-front-69b1fccd70020.jpg?v=1773272292";

interface WaitlistEmailTemplateProps {
  recipientEmail?: string;
}

const WaitlistEmailTemplate = ({ recipientEmail = "orbiter@ibloov.com" }: WaitlistEmailTemplateProps) => {
  return (
    <div style={{
      fontFamily: "'Space Grotesk', 'Helvetica Neue', Arial, sans-serif",
      backgroundColor: "#0f1629",
      padding: "40px 16px",
      minHeight: "100vh",
    }}>
      <div style={{
        maxWidth: "600px",
        margin: "0 auto",
        backgroundColor: "#1a2240",
        borderRadius: "24px",
        overflow: "hidden",
        border: "1px solid rgba(255,255,255,0.08)",
      }}>
        {/* Hero Header with gradient */}
        <div style={{
          background: "linear-gradient(135deg, #1e3a8a 0%, #7c3aed 40%, #f59e0b 80%, #ef4444 100%)",
          padding: "56px 32px 48px",
          textAlign: "center" as const,
          position: "relative" as const,
        }}>
          {/* Decorative emojis */}
          <div style={{ fontSize: "32px", marginBottom: "16px", letterSpacing: "8px" }}>
            🌍✨🚀
          </div>
          <div style={{
            fontSize: "42px",
            fontWeight: 800,
            letterSpacing: "-1.5px",
            marginBottom: "8px",
          }}>
            <span style={{ color: "#ffffff" }}>i</span>
            <span style={{ color: "#ffffff" }}>B</span>
            <span style={{ color: "#fbbf24" }}>L</span>
            <span style={{ color: "#fbbf24" }}>oo</span>
            <span style={{ color: "#ffffff" }}>v</span>
          </div>
          <div style={{
            display: "inline-block",
            fontSize: "13px",
            fontWeight: 700,
            letterSpacing: "6px",
            textTransform: "uppercase" as const,
            color: "#0f1629",
            background: "#fbbf24",
            padding: "6px 20px",
            borderRadius: "100px",
          }}>
            AURA
          </div>
        </div>

        {/* Body */}
        <div style={{ padding: "40px 32px" }}>
          {/* Welcome badge */}
          <div style={{
            display: "inline-block",
            background: "linear-gradient(135deg, #fbbf24, #f97316)",
            color: "#0f1629",
            fontSize: "12px",
            fontWeight: 800,
            letterSpacing: "2px",
            textTransform: "uppercase" as const,
            padding: "6px 16px",
            borderRadius: "100px",
            marginBottom: "16px",
          }}>
            🎉 YOU'RE IN!
          </div>

          <h1 style={{
            fontSize: "28px",
            fontWeight: 800,
            color: "#ffffff",
            margin: "0 0 8px",
            lineHeight: 1.2,
          }}>
            Welcome to the Orbit
          </h1>
          <p style={{
            fontSize: "18px",
            fontWeight: 600,
            color: "#fbbf24",
            margin: "0 0 28px",
          }}>
            You're officially one of us. Let's gooo! 🔥
          </p>

          {/* Story block with colored left border */}
          <div style={{
            borderLeft: "4px solid #7c3aed",
            paddingLeft: "20px",
            marginBottom: "28px",
          }}>
            <p style={{
              fontSize: "16px",
              lineHeight: 1.8,
              color: "rgba(255,255,255,0.75)",
              margin: "0 0 12px",
            }}>
              Four strangers from four continents just collided in Dubai — and became{" "}
              <span style={{ color: "#fbbf24", fontWeight: 700 }}>co-owners of a lounge together.</span>
            </p>
            <p style={{
              fontSize: "16px",
              lineHeight: 1.8,
              color: "rgba(255,255,255,0.75)",
              margin: 0,
            }}>
              That's not a story. That's the beginning of the{" "}
              <span style={{ color: "#a78bfa", fontWeight: 700 }}>movement.</span> ✊
            </p>
          </div>

          {/* Flywheel - colorful pills */}
          <div style={{
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: "16px",
            padding: "28px 24px",
            margin: "0 0 28px",
            textAlign: "center" as const,
          }}>
            <p style={{
              fontSize: "13px",
              textTransform: "uppercase" as const,
              letterSpacing: "3px",
              fontWeight: 700,
              color: "rgba(255,255,255,0.5)",
              margin: "0 0 16px",
            }}>
              The iBloov Flywheel
            </p>
            <div style={{ fontSize: "15px", fontWeight: 700, lineHeight: 2.2 }}>
              <span style={{
                display: "inline-block",
                background: "linear-gradient(135deg, #3b82f6, #1d4ed8)",
                color: "#fff",
                padding: "4px 14px",
                borderRadius: "100px",
                margin: "2px 4px",
              }}>📚 Learn</span>
              <span style={{ color: "rgba(255,255,255,0.3)" }}> → </span>
              <span style={{
                display: "inline-block",
                background: "linear-gradient(135deg, #10b981, #059669)",
                color: "#fff",
                padding: "4px 14px",
                borderRadius: "100px",
                margin: "2px 4px",
              }}>💰 Earn</span>
              <span style={{ color: "rgba(255,255,255,0.3)" }}> → </span>
              <span style={{
                display: "inline-block",
                background: "linear-gradient(135deg, #f59e0b, #d97706)",
                color: "#fff",
                padding: "4px 14px",
                borderRadius: "100px",
                margin: "2px 4px",
              }}>🌍 Explore</span>
              <span style={{ color: "rgba(255,255,255,0.3)" }}> → </span>
              <span style={{
                display: "inline-block",
                background: "linear-gradient(135deg, #8b5cf6, #7c3aed)",
                color: "#fff",
                padding: "4px 14px",
                borderRadius: "100px",
                margin: "2px 4px",
              }}>🤝 Belong</span>
              <span style={{ color: "rgba(255,255,255,0.3)" }}> → </span>
              <span style={{
                display: "inline-block",
                background: "linear-gradient(135deg, #ef4444, #dc2626)",
                color: "#fff",
                padding: "4px 14px",
                borderRadius: "100px",
                margin: "2px 4px",
              }}>👑 Own</span>
            </div>
          </div>

          <p style={{
            fontSize: "15px",
            lineHeight: 1.7,
            color: "rgba(255,255,255,0.6)",
            margin: "0 0 8px",
          }}>
            Read the full manifesto →{" "}
            <a href={`${SITE_URL}/mission`} style={{
              color: "#a78bfa",
              fontWeight: 700,
              textDecoration: "underline",
              textUnderlineOffset: "3px",
            }}>
              Mission & About iBloov AURA
            </a>
          </p>

          <p style={{
            fontSize: "15px",
            lineHeight: 1.7,
            color: "rgba(255,255,255,0.6)",
            margin: "0 0 36px",
          }}>
            The product is launching soon — you'll be the <span style={{ color: "#fbbf24", fontWeight: 600 }}>first to know.</span> 🫡
          </p>

          {/* CTA: View Our Mission */}
          <div style={{ textAlign: "center" as const, marginBottom: "32px" }}>
            <a
              href={`${SITE_URL}/mission`}
              style={{
                display: "inline-block",
                background: "linear-gradient(135deg, #7c3aed, #3b82f6)",
                color: "#ffffff",
                fontSize: "15px",
                fontWeight: 700,
                padding: "16px 40px",
                borderRadius: "100px",
                textDecoration: "none",
                letterSpacing: "0.5px",
              }}
            >
              🚀 View Our Mission
            </a>
          </div>

          {/* Product Card - dark style */}
          <a
            href={`${SITE_URL}/product/unisex-garment-dyed-heavyweight-t-shirt`}
            style={{ textDecoration: "none", display: "block" }}
          >
            <div style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "16px",
              overflow: "hidden",
              marginBottom: "28px",
            }}>
              <img
                src={PRODUCT_IMAGE}
                alt="Ibloov Love Campaign Tee"
                width="600"
                style={{
                  display: "block",
                  width: "100%",
                  height: "auto",
                  objectFit: "cover" as const,
                  maxHeight: "300px",
                }}
              />
              <div style={{ padding: "20px 24px" }}>
                <div style={{
                  display: "inline-block",
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "2px",
                  textTransform: "uppercase" as const,
                  color: "#0f1629",
                  background: "#fbbf24",
                  padding: "4px 12px",
                  borderRadius: "100px",
                  marginBottom: "8px",
                }}>
                  🔥 FROM THE STORE
                </div>
                <p style={{
                  fontSize: "18px",
                  fontWeight: 700,
                  color: "#ffffff",
                  margin: "8px 0 4px",
                }}>
                  Ibloov Love Campaign Tee
                </p>
                <p style={{
                  fontSize: "15px",
                  color: "rgba(255,255,255,0.5)",
                  margin: 0,
                }}>
                  $19.75 · 7 sizes · Rep the movement 🫶
                </p>
              </div>
            </div>
          </a>

          {/* CTA: Support the Vision */}
          <div style={{ textAlign: "center" as const }}>
            <a
              href={`${SITE_URL}/store`}
              style={{
                display: "inline-block",
                background: "linear-gradient(135deg, #f59e0b, #ef4444)",
                color: "#ffffff",
                fontSize: "15px",
                fontWeight: 700,
                padding: "16px 40px",
                borderRadius: "100px",
                textDecoration: "none",
                letterSpacing: "0.5px",
              }}
            >
              🛍️ Support the Vision
            </a>
          </div>
        </div>

        {/* Footer */}
        <div style={{
          borderTop: "1px solid rgba(255,255,255,0.08)",
          padding: "28px 32px",
          textAlign: "center" as const,
          background: "rgba(0,0,0,0.2)",
        }}>
          <p style={{
            fontSize: "20px",
            fontWeight: 800,
            color: "#ffffff",
            margin: "0 0 4px",
          }}>
            Welcome to the Global Crew. 🌎
          </p>
          <p style={{
            fontSize: "15px",
            color: "rgba(255,255,255,0.5)",
            margin: "0 0 16px",
          }}>
            The world just got smaller (in the best way). ✨
          </p>
          <p style={{
            fontSize: "11px",
            color: "rgba(255,255,255,0.3)",
            margin: 0,
          }}>
            Sent to {recipientEmail} ·{" "}
            <a href={SITE_URL} style={{ color: "#a78bfa", textDecoration: "none" }}>ibloov.com</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default WaitlistEmailTemplate;
