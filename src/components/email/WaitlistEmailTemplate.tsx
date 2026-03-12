const SITE_URL = "https://orbit-connect-joy.lovable.app";
const PRODUCT_IMAGE = "https://cdn.shopify.com/s/files/1/0797/6937/0861/files/unisex-garment-dyed-heavyweight-t-shirt-black-front-69b1fccd70020.jpg?v=1773272292";

interface WaitlistEmailTemplateProps {
  recipientEmail?: string;
}

const WaitlistEmailTemplate = ({ recipientEmail = "orbiter@ibloov.com" }: WaitlistEmailTemplateProps) => {
  return (
    <div style={{
      fontFamily: "'Space Grotesk', 'Helvetica Neue', Arial, sans-serif",
      backgroundColor: "hsl(220, 14%, 96%)",
      padding: "40px 16px",
      minHeight: "100vh",
    }}>
      <div style={{
        maxWidth: "600px",
        margin: "0 auto",
        backgroundColor: "#ffffff",
        borderRadius: "16px",
        overflow: "hidden",
        boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
      }}>
        {/* Header */}
        <div style={{
          background: "linear-gradient(135deg, hsl(224, 85%, 45%), hsl(224, 85%, 35%))",
          padding: "48px 32px 40px",
          textAlign: "center" as const,
        }}>
          <div style={{
            fontSize: "36px",
            fontWeight: 800,
            letterSpacing: "-1px",
            marginBottom: "4px",
          }}>
            <span style={{ color: "#ffffff" }}>i</span>
            <span style={{ color: "#ffffff" }}>B</span>
            <span style={{ color: "hsl(39, 95%, 55%)" }}>L</span>
            <span style={{ color: "hsl(39, 95%, 55%)" }}>oo</span>
            <span style={{ color: "#ffffff" }}>v</span>
          </div>
          <div style={{
            fontSize: "11px",
            fontWeight: 600,
            letterSpacing: "4px",
            textTransform: "uppercase" as const,
            color: "hsl(39, 95%, 65%)",
            marginTop: "4px",
          }}>
            AURA
          </div>
        </div>

        {/* Body */}
        <div style={{ padding: "40px 32px" }}>
          <h1 style={{
            fontSize: "24px",
            fontWeight: 700,
            color: "hsl(220, 15%, 20%)",
            margin: "0 0 8px",
            lineHeight: 1.3,
          }}>
            Welcome to iBloov AURA Waitlist
          </h1>
          <p style={{
            fontSize: "16px",
            fontWeight: 600,
            color: "hsl(39, 95%, 55%)",
            margin: "0 0 24px",
          }}>
            You're officially in the orbit. 🌍
          </p>

          <p style={{
            fontSize: "15px",
            lineHeight: 1.7,
            color: "hsl(220, 10%, 40%)",
            margin: "0 0 16px",
          }}>
            Four strangers from four continents just collided in Dubai — and became co-owners of a lounge together.
          </p>
          <p style={{
            fontSize: "15px",
            lineHeight: 1.7,
            color: "hsl(220, 10%, 40%)",
            margin: "0 0 24px",
          }}>
            That's not a story. That's the beginning of the movement.
          </p>

          {/* Flywheel */}
          <div style={{
            background: "linear-gradient(135deg, hsl(224, 85%, 97%), hsl(39, 95%, 97%))",
            border: "1px solid hsl(224, 85%, 90%)",
            borderRadius: "12px",
            padding: "24px",
            margin: "0 0 24px",
            textAlign: "center" as const,
          }}>
            <p style={{
              fontSize: "14px",
              color: "hsl(220, 10%, 40%)",
              margin: "0 0 12px",
            }}>
              iBloov AURA turns strangers into teammates, travel buddies, and co-owners through one simple flywheel:
            </p>
            <div style={{
              fontSize: "16px",
              fontWeight: 700,
              color: "hsl(224, 85%, 45%)",
              letterSpacing: "0.5px",
            }}>
              Learn → Earn → Explore → Belong → Own
            </div>
          </div>

          <p style={{
            fontSize: "15px",
            lineHeight: 1.7,
            color: "hsl(220, 10%, 40%)",
            margin: "0 0 8px",
          }}>
            Read the full manifesto and our story here →{" "}
            <a href={`${SITE_URL}/mission`} style={{
              color: "hsl(224, 85%, 45%)",
              fontWeight: 600,
              textDecoration: "none",
            }}>
              Mission & About iBloov AURA
            </a>
          </p>

          <p style={{
            fontSize: "15px",
            lineHeight: 1.7,
            color: "hsl(220, 10%, 40%)",
            margin: "0 0 32px",
          }}>
            Stay tuned. The product is launching soon — you'll be the first to know.
          </p>

          {/* CTA: View Our Mission */}
          <div style={{ textAlign: "center" as const, marginBottom: "24px" }}>
            <a
              href={`${SITE_URL}/mission`}
              style={{
                display: "inline-block",
                backgroundColor: "hsl(224, 85%, 45%)",
                color: "#ffffff",
                fontSize: "14px",
                fontWeight: 700,
                padding: "14px 32px",
                borderRadius: "100px",
                textDecoration: "none",
                letterSpacing: "0.3px",
              }}
            >
              View Our Mission
            </a>
          </div>

          {/* Product Card */}
          <a
            href={`${SITE_URL}/product/unisex-garment-dyed-heavyweight-t-shirt`}
            style={{ textDecoration: "none", display: "block" }}
          >
            <div style={{
              border: "1px solid hsl(220, 13%, 91%)",
              borderRadius: "12px",
              overflow: "hidden",
              marginBottom: "24px",
              transition: "box-shadow 0.2s",
            }}>
              <img
                src={PRODUCT_IMAGE}
                alt="Unisex garment-dyed heavyweight t-shirt — Ibloov Love Campaign"
                width="600"
                style={{
                  display: "block",
                  width: "100%",
                  height: "auto",
                  objectFit: "cover" as const,
                  maxHeight: "280px",
                }}
              />
              <div style={{ padding: "16px 20px" }}>
                <p style={{
                  fontSize: "11px",
                  fontWeight: 600,
                  letterSpacing: "2px",
                  textTransform: "uppercase" as const,
                  color: "hsl(39, 95%, 55%)",
                  margin: "0 0 4px",
                }}>
                  From the Store
                </p>
                <p style={{
                  fontSize: "16px",
                  fontWeight: 700,
                  color: "hsl(220, 15%, 20%)",
                  margin: "0 0 4px",
                }}>
                  Ibloov Love Campaign Tee
                </p>
                <p style={{
                  fontSize: "14px",
                  color: "hsl(220, 10%, 50%)",
                  margin: 0,
                }}>
                  $19.75 · 7 sizes available
                </p>
              </div>
            </div>
          </a>

          {/* CTA: Support the Vision */}
          <div style={{ textAlign: "center" as const, marginBottom: "8px" }}>
            <a
              href={`${SITE_URL}/store`}
              style={{
                display: "inline-block",
                backgroundColor: "hsl(39, 95%, 55%)",
                color: "#ffffff",
                fontSize: "14px",
                fontWeight: 700,
                padding: "14px 32px",
                borderRadius: "100px",
                textDecoration: "none",
                letterSpacing: "0.3px",
              }}
            >
              Support the Vision
            </a>
          </div>
        </div>

        {/* Footer */}
        <div style={{
          borderTop: "1px solid hsl(220, 13%, 91%)",
          padding: "24px 32px",
          textAlign: "center" as const,
        }}>
          <p style={{
            fontSize: "16px",
            fontWeight: 700,
            color: "hsl(220, 15%, 20%)",
            margin: "0 0 4px",
          }}>
            Welcome to the Global Crew.
          </p>
          <p style={{
            fontSize: "14px",
            color: "hsl(220, 10%, 50%)",
            margin: "0 0 16px",
          }}>
            The world just got smaller (in the best way). ✨
          </p>
          <p style={{
            fontSize: "11px",
            color: "hsl(220, 10%, 65%)",
            margin: 0,
          }}>
            Sent to {recipientEmail} · <a href={SITE_URL} style={{ color: "hsl(224, 85%, 45%)", textDecoration: "none" }}>ibloov.com</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default WaitlistEmailTemplate;
