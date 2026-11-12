"use client";

import Image from "next/image";
import { ArrowUpRight, Menu, Phone, X } from "lucide-react";
import { useRef, useState } from "react";
import { business, navigation } from "../content";

export function Brand() {
  return (
    <a className="brand" href="#home" aria-label={business.name + " home"}>
      <Image src="/assets/logos/uniform-mark.webp" alt="" width={203} height={165} unoptimized />
      <span><strong>NorthShore</strong><small>Pressure Pros</small></span>
    </a>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);

  return (
    <header className="header" onKeyDown={(event) => {
      if (event.key === "Escape" && open) {
        setOpen(false);
        toggle.current?.focus();
      }
    }}>
      <a href="#main" className="skip">Skip to content</a>
      <div className="wrap header-inner">
        <Brand />
        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map(({ href, label }) => <a key={href} href={href}>{label}</a>)}
        </nav>
        <div className="header-actions">
          <a className="header-phone" href={business.phoneLink} aria-label={"Call " + business.phone}>
            <Phone size={17} aria-hidden="true" /><span>{business.phone}</span>
          </a>
          <a href="#contact" className="button primary header-estimate">Get a Free Estimate <ArrowUpRight aria-hidden="true" /></a>
          <button ref={toggle} className="menu-toggle" type="button" aria-expanded={open} aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)}>
            {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </div>
      <nav className="mobile-nav" id="mobile-nav" hidden={!open} aria-label="Mobile navigation">
        {navigation.map(({ href, label }) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
        <a href="#contact" className="button primary" onClick={() => setOpen(false)}>Get a Free Estimate <ArrowUpRight aria-hidden="true" /></a>
      </nav>
    </header>
  );
}
