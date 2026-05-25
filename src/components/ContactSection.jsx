import { useState } from "react";
import { useBreakpoint } from "../hooks/useBreakpoint";
import { useLang } from "../hooks/useLang";import Reveal from "../shared/Reveal";
import SectionLabel from "../shared/SectionLabel";
import { PROFILE } from "../data/data";
import { FONTS, COLORS } from "../data/tokens";
import emailjs from "@emailjs/browser";
import { EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_PUBLIC_KEY } from "../data/emailjs";

export default function ContactSection() {
  const [copied, setCopied]       = useState(null);
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors]       = useState({});
  const [sending, setSending]     = useState(false);
  const [sent, setSent]           = useState(false);
  const [sendError, setSendError] = useState(null);

  const bp       = useBreakpoint();
  const isMobile = bp === "xs" || bp === "sm";
  const px       = isMobile ? "20px" : bp === "md" ? "32px" : "48px";
  const { t }    = useLang();
  const ct       = t.contact;

  const copy = (text, key) => {
    navigator.clipboard.writeText(text);
    setCopied(key);
    setTimeout(() => setCopied(null), 2000);
  };

  const validate = () => {
    const e = {};
    if (!formState.name.trim())    e.name    = ct.errors?.nameRequired    ?? "Name is required";
    if (!formState.email.trim()) {
      e.email = ct.errors?.emailRequired ?? "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      e.email = ct.errors?.emailInvalid ?? "Enter a valid email address";
    }
    if (!formState.message.trim())                      e.message = ct.errors?.messageRequired ?? "Message is required";
    else if (formState.message.trim().length < 10)      e.message = ct.errors?.messageTooShort ?? "Message is too short";
    return e;
  };

  const handleSend = async () => {
    const e = validate();
    if (Object.keys(e).length > 0) { setErrors(e); return; }

    setErrors({});
    setSendError(null);
    setSending(true);

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        { from_name: formState.name, from_email: formState.email, message: formState.message },
        EMAILJS_PUBLIC_KEY
      );
      setSent(true);
      setFormState({ name: "", email: "", message: "" });
      setTimeout(() => setSent(false), 4000);
    } catch (err) {
      console.error("EmailJS error:", err);
      setSendError("Failed to send — please email directly at " + PROFILE.email);
    } finally {
      setSending(false);
    }
  };

  const handleChange = (field, value) => {
    setFormState((s) => ({ ...s, [field]: value }));
    if (errors[field]) setErrors((e) => { const next = { ...e }; delete next[field]; return next; });
    if (sendError) setSendError(null);
  };

  const contacts = [
    { key: "email",    icon: "✉", label: ct.labels.email,    value: PROFILE.email,              copyable: true,  href: null },
    { key: "phone",    icon: "✆", label: ct.labels.phone,    value: PROFILE.phone,              copyable: true,  href: null },
    { key: "github",   icon: "⌥", label: ct.labels.github,   value: PROFILE.github,             copyable: false, href: `https://${PROFILE.github}` },
    { key: "location", icon: "◎", label: ct.labels.location, value: t.data.profile?.location ?? PROFILE.location, copyable: false, href: null },
  ];

  const inputBase = {
    width: "100%",
    background: "rgba(255,255,255,0.04)",
    borderRadius: 4,
    padding: "12px 14px",
    fontFamily: FONTS.body,
    fontSize: 14,
    color: COLORS.white,
    outline: "none",
    transition: "border-color 0.2s",
    boxSizing: "border-box",
  };

  const inputStyle = (field) => ({
    ...inputBase,
    border: `1px solid ${errors[field] ? "rgba(239,68,68,0.6)" : COLORS.border}`,
  });

  const errorMsg = (field) =>
    errors[field] ? (
      <span style={{ fontFamily: FONTS.mono, fontSize: 9, color: "rgba(239,68,68,0.9)", marginTop: 4, display: "block", letterSpacing: "0.05em" }}>
        ✕ {errors[field]}
      </span>
    ) : null;

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
          <SectionLabel number="05" title={t.sections.contact} isMobile={isMobile} />
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
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "7px 14px", background: "rgba(34,197,94,0.08)", border: "1px solid rgba(34,197,94,0.2)", borderRadius: 20, marginBottom: 16 }}>
                <span style={{ position: "relative", display: "inline-flex", alignItems: "center", justifyContent: "center", width: 8, height: 8 }}>
                  <span style={{ position: "absolute", width: 14, height: 14, borderRadius: "50%", background: "rgba(34,197,94,0.25)", animation: "ping 1.5s cubic-bezier(0,0,0.2,1) infinite" }} />
                  <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#22c55e", flexShrink: 0, position: "relative" }} />
                </span>
                <span style={{ fontFamily: "'Fira Code', monospace", fontSize: 11, color: "#22c55e", letterSpacing: "0.05em" }}>
                  {ct.availableBadge}
                </span>
              </div>
              <style>{`@keyframes ping { 75%,100% { transform: scale(2); opacity: 0; } }`}</style>
            </Reveal>
            <Reveal delay={0.08}>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: isMobile ? 14 : 15, color: "rgba(255,255,255,0.6)", lineHeight: 1.75, margin: "0 0 24px" }}>
                {ct.description}
              </p>
            </Reveal>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {contacts.map((c, i) => (
                <Reveal key={c.key} delay={0.08 + i * 0.07}>
                  <div
                    onClick={() => {
                      if (c.href) window.open(c.href, "_blank", "noopener,noreferrer");
                      else if (c.copyable) copy(c.value, c.key);
                    }}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 14,
                      padding: "14px 16px",
                      border: `1px solid ${copied === c.key ? "rgba(34,197,94,0.3)" : "rgba(255,255,255,0.10)"}`,
                      borderRadius: 4,
                      cursor: c.copyable || c.href ? "pointer" : "default",
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
                        {copied === c.key ? ct.copied : c.value}
                      </div>
                    </div>
                    {c.copyable && (
                      <span style={{ fontFamily: "'Fira Code', monospace", fontSize: 8, color: "rgba(255,255,255,0.3)", flexShrink: 0 }}>
                        {ct.copyHint}
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
                {ct.formComment}
              </div>

              <div>
                <label style={{ fontFamily: FONTS.mono, fontSize: 9, color: COLORS.textLabel, letterSpacing: "0.12em", display: "block", marginBottom: 6 }}>
                  {ct.nameLabel}
                </label>
                <input
                  value={formState.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  placeholder={ct.namePlaceholder}
                  style={inputStyle("name")}
                  onFocus={(e) => !errors.name && (e.target.style.borderColor = "rgba(34,197,94,0.4)")}
                  onBlur={(e)  => !errors.name && (e.target.style.borderColor = COLORS.border)}
                />
                {errorMsg("name")}
              </div>

              <div>
                <label style={{ fontFamily: FONTS.mono, fontSize: 9, color: COLORS.textLabel, letterSpacing: "0.12em", display: "block", marginBottom: 6 }}>
                  {ct.emailLabel}
                </label>
                <input
                  type="email"
                  value={formState.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  placeholder={ct.emailPlaceholder}
                  style={inputStyle("email")}
                  onFocus={(e) => !errors.email && (e.target.style.borderColor = "rgba(34,197,94,0.4)")}
                  onBlur={(e)  => !errors.email && (e.target.style.borderColor = COLORS.border)}
                />
                {errorMsg("email")}
              </div>

              <div>
                <label style={{ fontFamily: FONTS.mono, fontSize: 9, color: COLORS.textLabel, letterSpacing: "0.12em", display: "block", marginBottom: 6 }}>
                  {ct.messageLabel}
                </label>
                <textarea
                  value={formState.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  placeholder={ct.messagePlaceholder}
                  rows={4}
                  style={{ ...inputStyle("message"), resize: "vertical", minHeight: 90 }}
                  onFocus={(e) => !errors.message && (e.target.style.borderColor = "rgba(34,197,94,0.4)")}
                  onBlur={(e)  => !errors.message && (e.target.style.borderColor = COLORS.border)}
                />
                {errorMsg("message")}
              </div>

              {sendError && (
                <p style={{ fontFamily: FONTS.mono, fontSize: 9, color: "rgba(239,68,68,0.9)", margin: 0, letterSpacing: "0.05em" }}>
                  ✕ {sendError}
                </p>
              )}

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
                {sent ? ct.sentBtn : sending ? ct.sendingBtn : ct.sendBtn}
              </button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}