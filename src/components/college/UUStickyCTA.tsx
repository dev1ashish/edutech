"use client";

import { useEffect, useState } from "react";
import { SITE } from "@/lib/site";
import { POPUP_EVENT } from "./UULeadPopup";

export function UUStickyCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openPopup = () => {
    window.dispatchEvent(new Event(POPUP_EVENT));
  };

  return (
    <div
      className={`uu-sticky ${show ? "uu-sticky-on" : ""}`}
      aria-hidden={!show}
    >
      <a
        href={`https://wa.me/${SITE.whatsapp}?text=Hi%2C%20I%27d%20like%20admissions%20info%20for%20Uttaranchal%20University`}
        target="_blank"
        rel="noopener noreferrer"
        className="uu-sticky-btn uu-sticky-wa"
        aria-label="Chat on WhatsApp"
      >
        <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden>
          <path d="M20.52 3.48A11.86 11.86 0 0012.04 0C5.5 0 .19 5.31.19 11.85c0 2.09.55 4.13 1.59 5.93L0 24l6.4-1.68a11.85 11.85 0 005.64 1.43h.01c6.54 0 11.85-5.31 11.85-11.85 0-3.17-1.23-6.15-3.48-8.42zM12.05 21.6h-.01a9.74 9.74 0 01-4.96-1.36l-.36-.21-3.8 1 1.02-3.7-.24-.38a9.74 9.74 0 01-1.5-5.2c0-5.41 4.4-9.81 9.83-9.81a9.7 9.7 0 016.93 2.87 9.72 9.72 0 012.87 6.94c0 5.42-4.41 9.85-9.78 9.85z" />
        </svg>
        <span>WhatsApp</span>
      </a>
      <button
        type="button"
        className="uu-sticky-btn uu-sticky-apply"
        onClick={openPopup}
      >
        <span>Apply Now</span>
      </button>
    </div>
  );
}
