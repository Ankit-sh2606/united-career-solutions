'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import ScrollReveal from '@/components/ScrollReveal';
import styles from './about.module.css';

const values = [
    { icon: '🤝', title: 'Integrity', desc: 'Honest, transparent communication at every step' },
    { icon: '⭐', title: 'Excellence', desc: 'Relentless pursuit of the highest quality outcomes' },
    { icon: '❤️', title: 'Client-First', desc: 'Your success is our sole measure of achievement' },
    { icon: '💡', title: 'Innovation', desc: 'Continuously evolving our methods and strategies' },
    { icon: '🌍', title: 'Global Vision', desc: 'Deep understanding of international career markets' },
];

const team = [
    { name: 'Michael Chen', role: 'Founder & CEO', emoji: '👨‍💼', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&q=80' },
    { name: 'Ananya Sharma', role: 'Head of Career Services', emoji: '👩‍💼', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&q=80' },
    { name: 'David Brooks', role: 'Senior Resume Strategist', emoji: '👨‍💻', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&q=80' },
    { name: 'Sofia Martinez', role: 'Client Relations Manager', emoji: '👩‍🏫', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&q=80' },
];

const differentiators = [
    { icon: '📢', title: 'We Market YOU', desc: 'We don\'t just write resumes — we actively market your profile to recruiters and hiring managers every day.' },
    { icon: '🔄', title: 'End-to-End Support', desc: 'From your first consultation to post-placement check-ins, we handle everything so you can focus on your career.' },
    { icon: '🌐', title: 'Deep Market Knowledge', desc: 'Our team has extensive experience with US and UK hiring processes, compliance requirements, and industry norms.' },
];

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } },
};

export default function AboutPage() {
    return (
        <>
            {/* Hero */}
            <section className={styles.pageHero}>
                <div className={styles.pageHeroContent}>
                    <div className="container">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h1 className={styles.pageTitle}>
                                About <span className="gradient-text">United Career Solutions</span>
                            </h1>
                            <p className={styles.pageSubtitle}>
                                Bridging the gap between international talent and global opportunity since day one.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Story Section */}
            <section className={styles.story}>
                <div className="container">
                    <ScrollReveal>
                        <div className={styles.storyGrid}>
                            <div className={styles.storyContent}>
                                <span className={styles.storyLabel}>Our Story</span>
                                <h2 className={styles.storyTitle}>
                                    Empowering Careers Across Borders
                                </h2>
                                <p className={styles.storyText}>
                                    United Career Solutions was founded with a singular vision: to empower
                                    international professionals with the tools, guidance, and support needed
                                    to thrive in the world&apos;s most competitive job markets.
                                </p>
                                <p className={styles.storyText}>
                                    We understand the unique challenges that international candidates face —
                                    from navigating unfamiliar hiring processes to competing against local
                                    talent. Our team of experienced career professionals has helped hundreds
                                    of candidates successfully land roles across the United States and
                                    United Kingdom.
                                </p>
                                <p className={styles.storyText}>
                                    Our approach goes far beyond traditional career services. We don&apos;t
                                    just polish your resume and send you on your way. We become your dedicated
                                    career partner, actively marketing your profile, preparing you for every
                                    interview, and standing beside you until you&apos;re successfully placed.
                                </p>
                            </div>
                            <div className={styles.storyImage}>
                                <Image
                                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=500&fit=crop&q=80"
                                    alt="Team collaboration in modern office"
                                    width={600}
                                    height={500}
                                    style={{ width: '100%', height: 'auto', display: 'block' }}
                                />
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Mission & Vision */}
                    <ScrollReveal delay={0.2}>
                        <div className={styles.missionVision}>
                            <div className={styles.mvCard}>
                                <div className={styles.mvIcon}>🎯</div>
                                <h3 className={styles.mvTitle}>Our Mission</h3>
                                <p className={styles.mvText}>
                                    To empower international professionals with comprehensive career support,
                                    bridging the gap between talent and opportunity in global markets. We are
                                    committed to providing personalized, end-to-end services that maximize
                                    every candidate&apos;s potential for success.
                                </p>
                            </div>
                            <div className={styles.mvCard}>
                                <div className={styles.mvIcon}>🔭</div>
                                <h3 className={styles.mvTitle}>Our Vision</h3>
                                <p className={styles.mvText}>
                                    To be the most trusted career partner for international candidates seeking
                                    success in the USA and UK job markets. We envision a world where geographic
                                    boundaries don&apos;t limit career growth, and every talented professional
                                    has access to global opportunities.
                                </p>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Values */}
            <section className={styles.values}>
                <div className="container">
                    <ScrollReveal>
                        <div className="section__header">
                            <span className="section__label">Our Values</span>
                            <h2 className="section__title">What Drives Us</h2>
                            <p className="section__subtitle">
                                The principles that guide every interaction and decision we make.
                            </p>
                        </div>
                    </ScrollReveal>

                    <motion.div
                        className={styles.valuesGrid}
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        {values.map((value, i) => (
                            <motion.div key={i} className={styles.valueCard} variants={itemVariants}>
                                <div className={styles.valueIcon}>{value.icon}</div>
                                <h3 className={styles.valueTitle}>{value.title}</h3>
                                <p className={styles.valueDesc}>{value.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Team */}
            <section className={styles.team}>
                <div className="container">
                    <ScrollReveal>
                        <div className="section__header">
                            <span className="section__label">Our Team</span>
                            <h2 className="section__title">Meet the Experts</h2>
                            <p className="section__subtitle">
                                A passionate team of career professionals dedicated to your success.
                            </p>
                        </div>
                    </ScrollReveal>

                    <motion.div
                        className={styles.teamGrid}
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                    >
                        {team.map((member, i) => (
                            <motion.div key={i} className={styles.teamCard} variants={itemVariants}>
                                <div className={styles.teamImageWrapper}>
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        width={400}
                                        height={400}
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    />
                                </div>
                                <div className={styles.teamInfo}>
                                    <h3 className={styles.teamName}>{member.name}</h3>
                                    <p className={styles.teamRole}>{member.role}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Differentiators */}
            <section className={styles.differentiators}>
                <div className="container">
                    <ScrollReveal>
                        <div className="section__header">
                            <span className="section__label">Why We&apos;re Different</span>
                            <h2 className="section__title">What Sets Us Apart</h2>
                            <p className="section__subtitle">
                                We go beyond traditional services to deliver real, measurable career results.
                            </p>
                        </div>
                    </ScrollReveal>

                    <motion.div
                        className={styles.diffGrid}
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        {differentiators.map((diff, i) => (
                            <motion.div key={i} className={styles.diffCard} variants={itemVariants}>
                                <div className={styles.diffIcon}>{diff.icon}</div>
                                <h3 className={styles.diffTitle}>{diff.title}</h3>
                                <p className={styles.diffDesc}>{diff.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
        </>
    );
}
