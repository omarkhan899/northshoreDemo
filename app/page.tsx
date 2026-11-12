import Image from "next/image";
import { Suspense } from "react";
import {
  ArrowRight, ArrowUpRight, BrickWall, Building2, ClipboardCheck, Droplets,
  Fence, MapPin, MessageSquare, Phone, ShieldCheck, Trash2,
} from "lucide-react";
import { Brand, Header } from "./components/header";
import { EstimateForm } from "./components/estimate-form";
import { business, navigation, reviewPlaceholders, services } from "./content";

const trust = [
  { Icon: MapPin, label: "Locally Owned & Operated" },
  { Icon: ClipboardCheck, label: "Free Estimates" },
  { Icon: Building2, label: "Residential & Commercial" },
  { Icon: ShieldCheck, label: "Professional Cleaning Methods" },
];

const serviceIcons = [BrickWall, Building2, Trash2, Fence];

function EstimateLink({ children = "Get a Free Estimate", className = "button primary" }: {
  children?: React.ReactNode;
  className?: string;
}) {
  return <a href="#contact" className={className}>{children}<ArrowUpRight aria-hidden="true" /></a>;
}

function Hero() {
  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <div className="hero-visual">
        <Image src="/assets/services/patio-hero.webp" fill preload sizes="100vw"
          alt="Worker in a navy hoodie pressure washing a residential stone patio" />
      </div>
      <div className="wrap hero-inner">
        <p className="eyebrow">Mandeville <b>·</b> Covington <b>·</b> Northshore, LA</p>
        <h1 id="hero-title">Bring Your Property<br className="hero-break" /> Back to Life.</h1>
        <p className="hero-description">Professional pressure washing and exterior cleaning that makes your home or business look its best.</p>
        <div className="flex flex-wrap gap-3 hero-actions">
          <EstimateLink />
          <a className="button outline" href="#work">See Our Work <ArrowRight aria-hidden="true" /></a>
        </div>
        <p className="hero-trust"><span>Locally Owned &amp; Operated</span><span>Residential &amp; Commercial</span></p>
      </div>
    </section>
  );
}

function TrustStrip() {
  return (
    <div className="trust-strip">
      <ul className="wrap trust-grid">
        {trust.map(({ Icon, label }) => <li key={label}><Icon size={23} aria-hidden="true" />{label}</li>)}
      </ul>
    </div>
  );
}

function Services() {
  return (
    <section className="section services" id="services" aria-labelledby="services-title">
      <div className="wrap">
        <div className="section-intro">
          <div><p className="eyebrow">What We Do</p><h2 id="services-title">Professional Cleaning for<br /> Every Exterior Surface.</h2></div>
          <p>From everyday buildup to stubborn grime, we help keep Northshore properties looking their best.</p>
        </div>
        <div className="featured-services">
          {services.slice(0, 3).map(({ id, title, description, image }) => (
            <article className="service-card" id={id} key={id}>
              {image && <div className="service-image"><Image src={image} alt="" fill sizes="(max-width: 600px) 100vw, (max-width: 850px) 48vw, 32vw" /></div>}
              <div className="service-body">
                <h3><a href={`?service=${id}#contact`}>{title}<ArrowUpRight size={19} aria-hidden="true" /></a></h3>
                <p>{description}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="other-services">
          {services.slice(3).map(({ id, title, description }, index) => {
            const Icon = serviceIcons[index];
            return (
              <article id={id} key={id}>
                <Icon size={22} aria-hidden="true" />
                <h3><a href={`?service=${id}#contact`}>{title}</a></h3>
                <p>{description}</p>
              </article>
            );
          })}
        </div>
        <EstimateLink className="text-link">Request an Estimate</EstimateLink>
      </div>
    </section>
  );
}

function WorkShowcase() {
  return (
    <section className="section dark work" id="work" aria-labelledby="work-title">
      <div className="wrap">
        <div className="section-intro">
          <div><p className="eyebrow">Real Work. Real Results.</p><h2 id="work-title">See the Difference a<br /> Professional Clean Makes.</h2></div>
          <p>The best way to show our work is to let the results speak for themselves.</p>
        </div>
        <figure className="work-figure">
          <Image src="/assets/portfolio/driveway-before-after.webp" alt="The same driveway before and after cleaning. Dark buildup covers the left image, while the right image shows clean concrete."
            width={1536} height={1024} sizes="(max-width: 1260px) 94vw, 1200px" />
          <figcaption><span><Droplets size={19} aria-hidden="true" /> Driveway &amp; Surface Cleaning</span><EstimateLink className="text-link">Get a Free Estimate</EstimateLink></figcaption>
        </figure>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="section about" id="about" aria-labelledby="about-title">
      <div className="wrap split">
        <figure className="about-figure">
          <Image src="/assets/portfolio/team-at-work.webp" alt="A team member trimming a shrub with a hedge trimmer during a landscaping job"
            width={1080} height={1082} sizes="(max-width: 800px) 94vw, 50vw" />
          <figcaption>Our team at work</figcaption>
        </figure>
        <div className="about-copy">
          <p className="eyebrow">Your Local Northshore Team</p>
          <h2 id="about-title">Local Pride. Honest Work.<br /> Quality Results.</h2>
          <p>At NorthShore Pressure Pros, we believe great service starts with treating people and their properties right. As a locally owned, family-operated business, we’re proud to serve our neighbors in Mandeville, Covington, and the surrounding Northshore communities.</p>
          <p>Whether we’re cleaning a driveway, refreshing a patio, or tackling a commercial property, you can count on dependable service, honest pricing, and care for your property.</p>
          <div className="owner"><strong>{business.owner}</strong><span>Owner, {business.name}</span></div>
          <EstimateLink />
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="section reviews" id="reviews" aria-labelledby="reviews-title">
      <div className="wrap">
        <p className="eyebrow">What Our Customers Say</p>
        <h2 id="reviews-title">Good Work Speaks for Itself.</h2>
        <div className="review-grid">
          {reviewPlaceholders.map((review) => (
            <div className="review" key={review}>
              <MessageSquare size={24} aria-hidden="true" />
              <p>{review}</p>
              <small>Review placeholder</small>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceAreas() {
  return (
    <section className="section areas" aria-labelledby="areas-title">
      <div className="wrap split">
        <div>
          <p className="eyebrow">Proudly Serving the Northshore</p>
          <h2 id="areas-title">Your Neighborhood.<br /> Our Commitment.</h2>
          <p>We’re proud to help local homeowners and businesses keep their properties clean, welcoming, and looking their best.</p>
          <EstimateLink className="text-link">Check Service Availability</EstimateLink>
        </div>
        <ul className="area-list">
          {business.areas.map((area) => <li key={area}><MapPin aria-hidden="true" size={22} />{area}</li>)}
        </ul>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="section contact" id="contact" aria-labelledby="contact-title">
      <div className="wrap split">
        <div>
          <p className="eyebrow">Get in Touch</p>
          <h2 id="contact-title">Request a Free Estimate.</h2>
          <p>Tell us what needs cleaning and where you’re located. We’ll talk through the job and the right approach for your property.</p>
          <a href={business.phoneLink} className="text-link"><Phone aria-hidden="true" /> Call {business.phone}</a>
        </div>
        <Suspense fallback={<p>Call <a href={business.phoneLink}>{business.phone}</a> to request an estimate.</p>}><EstimateForm /></Suspense>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="section dark closing" aria-labelledby="closing-title">
      <div className="wrap section-intro">
        <div><h2 id="closing-title">Ready to Bring Your Property Back to Life?</h2>
          <p>Let’s get your driveway, patio, home exterior, or commercial property looking its best.</p></div>
        <div className="closing-actions"><EstimateLink>Get My Free Estimate</EstimateLink>
          <a href={business.phoneLink}>Or call {business.phone}</a></div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer dark">
      <div className="wrap footer-grid">
        <div>
          <Brand />
          <p className="footer-tagline">{business.tagline}</p>
          <p>Locally owned pressure washing and exterior cleaning for Mandeville, Covington, and surrounding Northshore communities.</p>
        </div>
        <nav aria-label="Footer quick links"><h2>Quick Links</h2>
          {navigation.map(({ href, label }) => <a href={href} key={href}>{label}</a>)}
        </nav>
        <nav aria-label="Footer services"><h2>Services</h2>
          {services.map(({ id, title }) => <a href={`#${id}`} key={id}>{title}</a>)}
        </nav>
        <div><h2>Contact</h2><a href={business.phoneLink}><Phone size={16} aria-hidden="true" />{business.phone}</a>
          <p>Mandeville &amp; Covington, Louisiana</p></div>
      </div>
      <div className="wrap footer-bottom"><small>© {new Date().getFullYear()} {business.name}</small>
        <a href="#home">Back to top <ArrowUpRight size={16} aria-hidden="true" /></a>
      </div>
    </footer>
  );
}

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <TrustStrip />
        <Services />
        <WorkShowcase />
        <About />
        <Testimonials />
        <ServiceAreas />
        <Contact />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
