import { useState } from "react";
import { useBreakpoint } from "../hooks/useBreakpoint";
import { useLang } from "../hooks/useLang";
import Reveal from "../shared/Reveal";
import SectionLabel from "../shared/SectionLabel";
import { PROFILE } from "../data/data";
import emailjs from "@emailjs/browser";
import {
  EMAILJS_SERVICE_ID,
  EMAILJS_TEMPLATE_ID,
  EMAILJS_PUBLIC_KEY,
} from "../data/emailjs";
import styles from "../styles/sections.module.css";

export default function ContactSection() {
  const [copied, setCopied] = useState(null);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [sendError, setSendError] = useState(null);

  const bp = useBreakpoint();
  const isMobile = bp === "xs" || bp === "sm";
  const { t } = useLang();
  const ct = t.contact;

  const copy = (text, key) => {
    navigator.clipboard.writeText(text);
    setCopied(key);
    setTimeout(() => setCopied(null), 2000);
  };

  const validate = () => {
    const e = {};
    if (!formState.name.trim())
      e.name = ct.errors?.nameRequired ?? "Name is required";
    if (!formState.email.trim()) {
      e.email = ct.errors?.emailRequired ?? "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      e.email = ct.errors?.emailInvalid ?? "Enter a valid email address";
    }
    if (!formState.message.trim())
      e.message = ct.errors?.messageRequired ?? "Message is required";
    else if (formState.message.trim().length < 10)
      e.message = ct.errors?.messageTooShort ?? "Message is too short";
    return e;
  };

  const handleSend = async () => {
    const e = validate();
    if (Object.keys(e).length > 0) {
      setErrors(e);
      return;
    }

    setErrors({});
    setSendError(null);
    setSending(true);

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formState.name,
          from_email: formState.email,
          message: formState.message,
        },
        EMAILJS_PUBLIC_KEY,
      );
      setSent(true);
      setFormState({ name: "", email: "", message: "" });
      setTimeout(() => setSent(false), 4000);
    } catch (err) {
      console.error("EmailJS error:", err);
      setSendError(
        "Failed to send — please email directly at " + PROFILE.email,
      );
    } finally {
      setSending(false);
    }
  };

  const handleChange = (field, value) => {
    setFormState((s) => ({ ...s, [field]: value }));
    if (errors[field])
      setErrors((e) => {
        const next = { ...e };
        delete next[field];
        return next;
      });
    if (sendError) setSendError(null);
  };

  const contacts = [
    {
      key: "email",
      icon: "✉",
      label: ct.labels.email,
      value: PROFILE.email,
      copyable: true,
      href: null,
    },
    {
      key: "phone",
      icon: "✆",
      label: ct.labels.phone,
      value: PROFILE.phone,
      copyable: true,
      href: null,
    },
    {
      key: "github",
      icon: "⌥",
      label: ct.labels.github,
      value: PROFILE.github,
      copyable: false,
      href: `https://${PROFILE.github}`,
    },
    {
      key: "location",
      icon: "◎",
      label: ct.labels.location,
      value: t.data.profile?.location ?? PROFILE.location,
      copyable: false,
      href: null,
    },
  ];

  const errorMsg = (field) =>
    errors[field] ? (
      <span id={`${field}-error`} className={styles.errorMsg} role="alert">
        ✕ {errors[field]}
      </span>
    ) : null;

  return (
    <section
      id="contact"
      className={`${styles.contactSection} ${isMobile ? styles.contactSectionMobile : ""}`}
    >
      <div className={styles.contactContainer}>
        <Reveal>
          <SectionLabel
            number="05"
            title={t.sections.contact}
            isMobile={isMobile}
          />
        </Reveal>

        <div
          className={`${styles.contactContentGrid} ${isMobile ? styles.contactContentGridMobile : ""}`}
        >
          {/* LEFT — contact info */}
          <div>
            <div className={styles.availableBadge}>
              <span className={styles.pingWrapper}>
                <span className={styles.pingOuter} />
                <span className={styles.pingInner} />
              </span>
              <span className={styles.badgeText}>{ct.availableBadge}</span>
            </div>
            <p
              className={`${styles.contactDescription} ${isMobile ? styles.contactDescriptionMobile : ""}`}
            >
              {ct.description}
            </p>
            <div className={styles.contactsList}>
              {contacts.map((c) => (
                <div
                  key={c.key}
                  onClick={() => {
                    if (c.href)
                      window.open(c.href, "_blank", "noopener,noreferrer");
                    else if (c.copyable) copy(c.value, c.key);
                  }}
                  className={`${styles.contactCard} ${c.copyable || c.href ? styles.contactCardClickable : ""} ${copied === c.key ? styles.contactCardCopied : ""}`}
                >
                  <span className={styles.contactIcon}>{c.icon}</span>
                  <div className={styles.contactContent}>
                    <div className={styles.contactLabel}>{c.label}</div>
                    <div
                      className={`${styles.contactValue} ${isMobile ? styles.contactValueMobile : ""}`}
                    >
                      {copied === c.key ? ct.copied : c.value}
                    </div>
                  </div>
                  {c.copyable && (
                    <span className={styles.copyHint}>{ct.copyHint}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — message form */}
          <div>
            <div
              className={`${styles.formCard} ${isMobile ? styles.formCardMobile : ""}`}
            >
              <div className={styles.formComment}>{ct.formComment}</div>

              <div>
                <label className={styles.inputLabel}>{ct.nameLabel}</label>
                <input
                  value={formState.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  placeholder={ct.namePlaceholder}
                  aria-invalid={errors.name ? "true" : "false"}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  className={`${styles.input} ${errors.name ? styles.inputError : ""}`}
                  onFocus={(e) =>
                    !errors.name && e.target.classList.add(styles.inputFocus)
                  }
                  onBlur={(e) =>
                    !errors.name && e.target.classList.remove(styles.inputFocus)
                  }
                />
                {errorMsg("name")}
              </div>

              <div>
                <label className={styles.inputLabel}>{ct.emailLabel}</label>
                <input
                  type="email"
                  value={formState.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  placeholder={ct.emailPlaceholder}
                  aria-invalid={errors.email ? "true" : "false"}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  className={`${styles.input} ${errors.email ? styles.inputError : ""}`}
                  onFocus={(e) =>
                    !errors.email && e.target.classList.add(styles.inputFocus)
                  }
                  onBlur={(e) =>
                    !errors.email &&
                    e.target.classList.remove(styles.inputFocus)
                  }
                />
                {errorMsg("email")}
              </div>

              <div>
                <label className={styles.inputLabel}>{ct.messageLabel}</label>
                <textarea
                  value={formState.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  placeholder={ct.messagePlaceholder}
                  rows={4}
                  aria-invalid={errors.message ? "true" : "false"}
                  aria-describedby={
                    errors.message ? "message-error" : undefined
                  }
                  className={`${styles.input} ${styles.textarea} ${errors.message ? styles.inputError : ""}`}
                  onFocus={(e) =>
                    !errors.message && e.target.classList.add(styles.inputFocus)
                  }
                  onBlur={(e) =>
                    !errors.message &&
                    e.target.classList.remove(styles.inputFocus)
                  }
                />
                {errorMsg("message")}
              </div>

              {sendError && <p className={styles.sendError}>✕ {sendError}</p>}

              <button
                onClick={handleSend}
                disabled={sending || sent}
                aria-busy={sending}
                className={`${styles.sendButton} ${sending || sent ? styles.sendButtonDisabled : ""} ${sent ? styles.sendButtonSent : ""}`}
              >
                {sent ? ct.sentBtn : sending ? ct.sendingBtn : ct.sendBtn}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
