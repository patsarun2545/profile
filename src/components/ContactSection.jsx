import { useState } from "react";
import { useBreakpoint } from "../hooks/useBreakpoint";
import Reveal from "../shared/Reveal";
import SectionLabel from "../shared/SectionLabel";
import { PROFILE } from "../data/data";

export default function ContactSection() {
  const [copied, setCopied] = useState(null);
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const bp = useBreakpoint();
  const isMobile = bp === "xs" || bp === "sm";
  const px = isMobile ? "20px" : bp === "md" ? "32px" : "48px";

  const copy = (text, key) => {
    navigator.clipboard.writeText(text);
    setCopied(key);
    setTimeout(() => setCopied(null), 2000);
  };

  const handleSend = () => {
    if (!formState.name || !formState.email || !formState.message) return;
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSent(true);
      setFormState({ name: "", email: "", message: "" });
      setTimeout(() => setSent(false), 4000);
    }, 1200);
  };

  const contacts = [
    { key: "email", icon: "✉", label: "Email", value: PROFILE.email, copyable: true },
    { key: "phone", icon: "✆", label: "Phone", value: PROFILE.phone, copyable: true },
    { key: "github", icon: "⌥", label: "GitHub", value: PROFILE.github, copyable: false },
    { key: "location", icon: "◎", label: "Location", value: PROFILE.location, copyable: false },
  ];

  const inputStyle = {
    width: "100%",
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.12)",
    borderRadius: 4,
    padding: "12px 14px",
    fontFamily: "'DM Sans', sans-serif",
    fontSize: 14,
    color: "#fff",
    outline: "none",
    transition: "border-color 0.2s",
    boxSizing: "border-box",
  };

  return (
    <section
      id="contact"
      style={{
        padding: `${isMobile ? 80 : 120}px ${px} ${isMobile ? 60 : 100}px`,
        borderTop: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <Reveal>
          <SectionLabel number="05" title="Contact" isMobile={isMobile} />
        </Reveal>

        <div
          style={{
            marginTop: isMobile ? 36 : 56,
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
            gap: isMobile ? 40 : 56,
            alignItems: "start",
          }}
        >
          {/* LEFT — contact info */}
          <div>
            <Reveal delay={0.05}>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: isMobile ? 14 : 15, color: "rgba(255,255,255,0.6)", lineHeight: 1.75, margin: "0 0 24px" }}>
                Currently looking for new opportunities — whether it's a full-time role, freelance project, or just a chat about tech. My inbox is always open.
              </p>
            </Reveal>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {contacts.map((c, i) => (
                <Reveal key={c.key} delay={0.08 + i * 0.07}>
                  <div
                    onClick={() => c.copyable && copy(c.value, c.key)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 14,
                      padding: "14px 16px",
                      border: `1px solid ${copied === c.key ? "rgba(34,197,94,0.3)" : "rgba(255,255,255,0.10)"}`,
                      borderRadius: 4,
                      cursor: c.copyable ? "pointer" : "default",
                      transition: "all 0.2s",
                      background: copied === c.key ? "rgba(34,197,94,0.08)" : "rgba(255,255,255,0.02)",
                    }}
                  >
                    <span style={{ fontSize: 15, color: "#22c55e", fontFamily: "'Fira Code', monospace", flexShrink: 0, width: 20, textAlign: "center" }}>
                      {c.icon}
                    </span>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontFamily: "'Fira Code', monospace", fontSize: 8, color: "rgba(255,255,255,0.4)", letterSpacing: "0.15em", marginBottom: 2 }}>
                        {c.label}
                      </div>
                      <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: isMobile ? 12 : 13, color: "rgba(255,255,255,0.7)", wordBreak: "break-all" }}>
                        {copied === c.key ? "✓ Copied!" : c.value}
                      </div>
                    </div>
                    {c.copyable && (
                      <span style={{ fontFamily: "'Fira Code', monospace", fontSize: 8, color: "rgba(255,255,255,0.3)", flexShrink: 0 }}>
                        copy
                      </span>
                    )}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* RIGHT — message form */}
          <Reveal delay={0.15} direction="left">
            <div
              style={{
                border: "1px solid rgba(255,255,255,0.10)",
                borderRadius: 4,
                padding: isMobile ? "22px 18px" : "32px 28px",
                background: "rgba(255,255,255,0.015)",
                display: "flex",
                flexDirection: "column",
                gap: 14,
              }}
            >
              <div style={{ fontFamily: "'Fira Code', monospace", fontSize: 10, color: "rgba(34,197,94,0.6)", letterSpacing: "0.15em", marginBottom: 2 }}>
                // send a message
              </div>

              <div>
                <label style={{ fontFamily: "'Fira Code', monospace", fontSize: 9, color: "rgba(255,255,255,0.4)", letterSpacing: "0.12em", display: "block", marginBottom: 6 }}>
                  NAME
                </label>
                <input
                  value={formState.name}
                  onChange={(e) => setFormState((s) => ({ ...s, name: e.target.value }))}
                  placeholder="Your name"
                  style={inputStyle}
                  onFocus={(e) => (e.target.style.borderColor = "rgba(34,197,94,0.4)")}
                  onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.12)")}
                />
              </div>

              <div>
                <label style={{ fontFamily: "'Fira Code', monospace", fontSize: 9, color: "rgba(255,255,255,0.4)", letterSpacing: "0.12em", display: "block", marginBottom: 6 }}>
                  EMAIL
                </label>
                <input
                  type="email"
                  value={formState.email}
                  onChange={(e) => setFormState((s) => ({ ...s, email: e.target.value }))}
                  placeholder="your@email.com"
                  style={inputStyle}
                  onFocus={(e) => (e.target.style.borderColor = "rgba(34,197,94,0.4)")}
                  onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.12)")}
                />
              </div>

              <div>
                <label style={{ fontFamily: "'Fira Code', monospace", fontSize: 9, color: "rgba(255,255,255,0.4)", letterSpacing: "0.12em", display: "block", marginBottom: 6 }}>
                  MESSAGE
                </label>
                <textarea
                  value={formState.message}
                  onChange={(e) => setFormState((s) => ({ ...s, message: e.target.value }))}
                  placeholder="What's on your mind?"
                  rows={4}
                  style={{ ...inputStyle, resize: "vertical", minHeight: 90 }}
                  onFocus={(e) => (e.target.style.borderColor = "rgba(34,197,94,0.4)")}
                  onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.12)")}
                />
              </div>

              <button
                onClick={handleSend}
                disabled={sending || sent}
                style={{
                  padding: "12px 24px",
                  background: sent ? "rgba(34,197,94,0.12)" : "#22c55e",
                  color: sent ? "#22c55e" : "#1a1a1a",
                  border: sent ? "1px solid rgba(34,197,94,0.4)" : "none",
                  fontFamily: "'Fira Code', monospace",
                  fontSize: 12,
                  letterSpacing: "0.08em",
                  fontWeight: 700,
                  borderRadius: 2,
                  cursor: sending || sent ? "default" : "pointer",
                  transition: "all 0.3s",
                  opacity: sending ? 0.7 : 1,
                }}
              >
                {sent ? "✓ Message Sent!" : sending ? "sending..." : "Send Message →"}
              </button>

              <p style={{ fontFamily: "'Fira Code', monospace", fontSize: 9, color: "rgba(255,255,255,0.22)", margin: 0, lineHeight: 1.6 }}>
                // demo form — or reach out directly via email
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}