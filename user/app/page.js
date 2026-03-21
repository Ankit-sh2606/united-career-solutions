'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import ScrollReveal from '@/components/ScrollReveal';
import AnimatedCounter from '@/components/AnimatedCounter';
import styles from './home.module.css';

const services = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
    title: 'Professional Resume Writing',
    description: 'ATS-optimized, role-specific resumes designed to increase shortlisting for full-time, contract, and consulting roles.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
      </svg>
    ),
    title: 'LinkedIn Optimization',
    description: 'End-to-end profile makeover with recruiter-friendly visibility and keyword optimization aligned with your target roles.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
    title: 'Job Marketing & Scheduling',
    description: 'Active job marketing to recruiters and hiring partners with daily submissions ensuring continuous interview generation.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    title: 'Interview Preparation',
    description: 'Role-specific technical, behavioral, and client interview guidance with mock interviews and real-time feedback.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    title: 'Communication Support',
    description: 'Professional email setup and recruiter communication management with follow-ups aligned to US/UK hiring etiquette.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: 'End-to-End Support',
    description: 'Background check guidance, offer negotiation, onboarding assistance, and continuous support until successful placement.',
  },
];

const stats = [
  { number: 500, suffix: '+', label: 'Candidates Placed' },
  { number: 98, suffix: '%', label: 'Client Satisfaction' },
  { number: 20, suffix: '+', label: 'Countries Served' },
  { number: 24, suffix: '/7', label: 'Dedicated Support' },
];

const whyChoose = [
  { icon: '🎯', title: 'Dedicated Support Team', description: 'A personal career strategist assigned to guide you through every step of the process.' },
  { icon: '📄', title: 'ATS-Optimized Resumes', description: 'Resumes engineered to pass Applicant Tracking Systems and catch recruiter attention.' },
  { icon: '🌍', title: 'Global Network', description: 'Connections with recruiters and hiring managers across US and UK markets.' },
  { icon: '🔄', title: 'End-to-End Process', description: 'From documentation to placement — we handle everything so you can focus on your career.' },
];

const testimonials = [
  {
    text: "The resume and LinkedIn overhaul was a game-changer. Within weeks, I noticed a 4x increase in recruiter outreach. The team's deep understanding of the tech market made all the difference in landing my senior role.",
    name: 'Sarah J.',
    role: 'Software Engineering Manager, NY',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&q=80',
  },
  {
    text: "I struggled with navigating the UK hiring process as an international candidate. United Career Solutions provided exceptional end-to-end support, right from optimizing my profile to mock interviews.",
    name: 'Rahul M.',
    role: 'Data Scientist, London',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&q=80',
  },
  {
    text: "The job marketing service essentially put my applications on autopilot. It took the stress off my shoulders. Thanks to their continuous interview generation, I successfully secured a consulting role.",
    name: 'Elena V.',
    role: 'Product Designer, Austin',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&q=80',
  },
  {
    text: "Their interview prep sessions were incredibly thorough. They helped me understand what US companies look for and coached me through multiple rounds. I landed my dream role within two months.",
    name: 'James K.',
    role: 'Cloud Architect, Seattle',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&q=80',
  },
  {
    text: "As someone transitioning careers, I needed more than just a resume update. United Career Solutions repositioned my entire professional brand and opened doors I didn't know existed.",
    name: 'Priya S.',
    role: 'Business Analyst, Chicago',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&q=80',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export default function HomePage() {
  return (
    <>
      {/* ===== Hero Section ===== */}
      <section className={styles.hero}>
        <div className={styles.heroBg} />
        <div className="container">
          <div className={styles.heroGrid}>
            <motion.div
              className={styles.heroContent}
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div className={styles.heroBadge}>
                <span className={styles.heroBadgeDot} />
                Trusted by 500+ Professionals Worldwide
              </div>
              <h1 className={styles.heroTitle}>
                End-to-End Career Support for{' '}
                <span className={styles.heroAccent}>Global Success</span>
              </h1>
              <p className={styles.heroSubtext}>
                We provide comprehensive services to help international candidates secure interviews
                and succeed in competitive US and UK job markets. From documentation to active
                marketing and interview readiness.
              </p>
              <div className={styles.heroCta}>
                <Link href="/services" className="btn btn--primary btn--large">
                  Explore Services
                </Link>
                <Link href="/contact" className="btn btn--secondary btn--large">
                  Contact Us
                </Link>
              </div>
            </motion.div>

            <motion.div
              className={styles.heroImageWrapper}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div className={styles.heroImageContainer}>
                <div className={styles.heroImageGlow} />
                <Image
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop&q=80"
                  alt="Professional team collaborating in modern office"
                  width={600}
                  height={400}
                  priority
                  style={{ display: 'block', width: '100%', height: 'auto' }}
                />
              </div>
              <motion.div
                className={styles.heroFloatingCard}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
              >
                <div className={`${styles.floatingIcon} ${styles.floatingIconGreen}`}>✓</div>
                <div>
                  <div style={{ fontWeight: 600 }}>500+ Placed</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--color-text-secondary)' }}>Globally</div>
                </div>
              </motion.div>
              <motion.div
                className={styles.heroFloatingCard}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
              >
                <div className={`${styles.floatingIcon} ${styles.floatingIconBlue}`}>⭐</div>
                <div>
                  <div style={{ fontWeight: 600 }}>98% Satisfaction</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--color-text-secondary)' }}>Client Rating</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== Stats Section ===== */}
      <section className={styles.stats}>
        <div className="container">
          <motion.div
            className={styles.statsGrid}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {stats.map((stat, i) => (
              <motion.div key={i} className={styles.statItem} variants={itemVariants}>
                <div className={styles.statNumber}>
                  <AnimatedCounter end={stat.number} suffix={stat.suffix} />
                </div>
                <div className={styles.statLabel}>{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== Services Overview ===== */}
      <section className={styles.servicesOverview}>
        <div className="container">
          <ScrollReveal>
            <div className="section__header">
              <span className="section__label">What We Offer</span>
              <h2 className="section__title">Comprehensive Career Services</h2>
              <p className="section__subtitle">
                Tailored support at every stage of your career journey — from resume crafting to successful placement.
              </p>
            </div>
          </ScrollReveal>

          <motion.div
            className={styles.servicesGrid}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {services.map((service, i) => (
              <motion.article key={i} className={styles.serviceCard} variants={itemVariants}>
                <div className={styles.serviceIcon}>{service.icon}</div>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
                <p className={styles.serviceDescription}>{service.description}</p>
                <Link href="/services" className={styles.serviceLink}>
                  Learn More →
                </Link>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== Why Choose Us ===== */}
      <section className={styles.whyChoose}>
        <div className="container">
          <ScrollReveal>
            <div className="section__header">
              <span className="section__label">Why Choose Us</span>
              <h2 className="section__title">Built for Your Success</h2>
              <p className="section__subtitle">
                We go beyond traditional career services to deliver results that matter.
              </p>
            </div>
          </ScrollReveal>

          <motion.div
            className={styles.whyGrid}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {whyChoose.map((item, i) => (
              <motion.div key={i} className={styles.whyItem} variants={itemVariants}>
                <div className={styles.whyIcon}>{item.icon}</div>
                <h3 className={styles.whyTitle}>{item.title}</h3>
                <p className={styles.whyDescription}>{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== Testimonials ===== */}
      <section className={styles.testimonials}>
        <div className="container">
          <ScrollReveal>
            <div className="section__header">
              <span className="section__label">Success Stories</span>
              <h2 className="section__title">What Our Clients Say</h2>
              <p className="section__subtitle">
                Hear from candidates who have successfully secured roles in top global markets.
              </p>
            </div>
          </ScrollReveal>

          <motion.div
            className={styles.testimonialsGrid}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {testimonials.map((t, i) => (
              <motion.article key={i} className={styles.testimonialCard} variants={itemVariants}>
                <div className={styles.quoteIcon}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <p className={styles.testimonialText}>&ldquo;{t.text}&rdquo;</p>
                <div className={styles.testimonialAuthor}>
                  <Image
                    src={t.image}
                    alt={t.name}
                    width={48}
                    height={48}
                    className={styles.authorImage}
                  />
                  <div>
                    <div className={styles.authorName}>{t.name}</div>
                    <div className={styles.authorRole}>{t.role}</div>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== CTA Banner ===== */}
      <section className={styles.ctaBanner}>
        <div className="container">
          <ScrollReveal>
            <div className={styles.ctaInner}>
              <div className={styles.ctaContent}>
                <h2 className={styles.ctaTitle}>Ready to Launch Your Career?</h2>
                <p className={styles.ctaSubtext}>
                  Join hundreds of international professionals who have successfully transitioned
                  into rewarding roles in the US and UK markets.
                </p>
                <div className={styles.ctaButtons}>
                  <Link href="/contact" className="btn btn--primary btn--large">
                    Get Started Today
                  </Link>
                  <Link href="/services" className="btn btn--secondary btn--large">
                    View Our Services
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
