'use client';

import { motion } from 'framer-motion';
import ScrollReveal from '@/components/ScrollReveal';
import styles from './services.module.css';

const services = [
    {
        number: '01',
        title: 'Professional Resume Writing',
        description: 'Our expert resume writers craft ATS-optimized, role-specific resumes designed to maximize your chances of getting shortlisted. Whether you\'re targeting full-time roles, contract (W2) positions, or consulting engagements, we tailor every resume to highlight your unique strengths and align with industry expectations.',
        description2: 'Each resume undergoes multiple rounds of review, incorporating best practices from leading recruitment firms. We ensure your resume speaks the language of hiring managers and passes through automated screening systems with ease.',
        features: [
            'ATS-optimized formatting for maximum visibility',
            'Role-specific customization for your target positions',
            'Keyword optimization based on job descriptions',
            'Multiple format versions (PDF, DOCX, plain text)',
            'Unlimited revisions until you\'re satisfied',
        ],
        icon: '📄',
    },
    {
        number: '02',
        title: 'LinkedIn Profile Optimization',
        description: 'Your LinkedIn profile is often the first impression recruiters have of you. We provide a complete end-to-end makeover — from crafting a compelling headline and summary to optimizing your experience sections with industry-relevant keywords that boost your visibility in recruiter searches.',
        description2: 'Our team positions your profile to attract the right opportunities by enhancing your professional brand, securing recommendations, and strategically expanding your network within target industries and geographies.',
        features: [
            'Headline and summary optimization',
            'Keyword-rich experience sections',
            'Recruiter-friendly profile settings',
            'Strategic network expansion guidance',
            'Profile analytics and visibility tracking',
        ],
        icon: '💼',
    },
    {
        number: '03',
        title: 'Email & Communication Support',
        description: 'Professional communication is a cornerstone of successful job hunting in US and UK markets. We set up dedicated professional email accounts and manage all recruiter and client communications on your behalf, ensuring timely responses and follow-ups that align with Western hiring etiquette.',
        description2: 'From initial outreach templates to thank-you notes after interviews, our communication specialists handle every touchpoint with precision, maintaining a professional tone that reflects positively on your candidacy.',
        features: [
            'Professional email setup and management',
            'Recruiter communication templates',
            'Timely follow-up scheduling',
            'Thank-you and post-interview correspondence',
            'US/UK business etiquette guidance',
        ],
        icon: '✉️',
    },
    {
        number: '04',
        title: 'Job Marketing & Interview Scheduling',
        description: 'We don\'t wait for opportunities to come to you — we actively market your profile to recruiters, staffing agencies, and hiring partners across multiple job portals and platforms. Our team submits applications daily and weekly, ensuring continuous interview generation.',
        description2: 'Our marketing team tracks the latest openings, identifies the best-fit roles, and ensures your applications are strategically timed for maximum impact. We also coordinate and schedule all your interviews, handling logistics so you can focus on preparation.',
        features: [
            'Active profile marketing to recruiters',
            'Daily/weekly job submissions across portals',
            'Targeted applications to best-fit roles',
            'Complete interview scheduling and coordination',
            'Regular status reports and analytics',
        ],
        icon: '🚀',
    },
    {
        number: '05',
        title: 'Interview Preparation & Tech Support',
        description: 'Our interview preparation goes beyond generic coaching. We provide role-specific guidance covering technical rounds, behavioral interviews, and client-facing presentations. Each prep session is customized based on the company, role, and interview stage.',
        description2: 'Mock interviews with detailed feedback help you build confidence and refine your responses. We also provide technical setup support – ensuring your audio, video, and internet connectivity are optimized for virtual interviews.',
        features: [
            'Role-specific technical preparation',
            'Behavioral interview coaching (STAR method)',
            'Mock interviews with real-time feedback',
            'Technical setup and troubleshooting',
            'Company-specific research and insights',
        ],
        icon: '🎯',
    },
    {
        number: '06',
        title: 'Background & End-to-End Support',
        description: 'Our support doesn\'t end when you get an interview call. We provide complete guidance through background checks, documentation verification, and compliance requirements specific to US and UK hiring processes.',
        description2: 'From offer negotiation to onboarding assistance, we stand by you through every stage until you\'re successfully placed and settled in your new role. Our dedicated support team remains available even after placement to ensure a smooth transition.',
        features: [
            'Background check guidance and preparation',
            'Offer negotiation support',
            'Onboarding and first-day assistance',
            'Documentation and compliance help',
            'Post-placement support and check-ins',
        ],
        icon: '🛡️',
    },
];

const processSteps = [
    { number: 1, title: 'Consultation', desc: 'Free initial assessment of your goals and current profile' },
    { number: 2, title: 'Documentation', desc: 'Resume, LinkedIn, and email setup tailored to your targets' },
    { number: 3, title: 'Marketing', desc: 'Active job marketing and application submissions on your behalf' },
    { number: 4, title: 'Interviews', desc: 'Mock prep, scheduling, and tech support for all rounds' },
    { number: 5, title: 'Placement', desc: 'Offer negotiation, onboarding, and post-placement support' },
];

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } },
};

export default function ServicesPage() {
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
                                Our <span className="gradient-text">Services</span>
                            </h1>
                            <p className={styles.pageSubtitle}>
                                Comprehensive career support tailored to help international candidates
                                secure their target roles in US and UK markets.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Service Sections */}
            <div className="container">
                {services.map((service, i) => (
                    <section key={i} className={styles.serviceSection}>
                        <ScrollReveal direction={i % 2 === 0 ? 'left' : 'right'}>
                            <div className={`${styles.serviceLayout} ${i % 2 !== 0 ? styles.reverse : ''}`}>
                                <div className={styles.serviceInfo}>
                                    <div className={styles.serviceNumber}>{service.number}</div>
                                    <h2 className={styles.serviceDetailTitle}>{service.title}</h2>
                                    <p className={styles.serviceDetailDesc}>{service.description}</p>
                                    <p className={styles.serviceDetailDesc}>{service.description2}</p>
                                    <div className={styles.serviceFeatures}>
                                        {service.features.map((feature, j) => (
                                            <div key={j} className={styles.serviceFeature}>
                                                <span className={styles.featureCheck}>✓</span>
                                                <span>{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className={styles.serviceVisual}>
                                    <div className={styles.serviceVisualGradient} />
                                    <span className={styles.serviceVisualIcon}>{service.icon}</span>
                                </div>
                            </div>
                        </ScrollReveal>
                    </section>
                ))}
            </div>

            {/* Process Section */}
            <section className={styles.process}>
                <div className="container">
                    <ScrollReveal>
                        <div className="section__header">
                            <span className="section__label">Our Process</span>
                            <h2 className="section__title">How It Works</h2>
                            <p className="section__subtitle">
                                A proven 5-step process designed to take you from application to placement.
                            </p>
                        </div>
                    </ScrollReveal>

                    <motion.div
                        className={styles.processGrid}
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        {processSteps.map((step, i) => (
                            <motion.div key={i} className={styles.processStep} variants={itemVariants}>
                                <div className={styles.processNumber}>{step.number}</div>
                                <h3 className={styles.processTitle}>{step.title}</h3>
                                <p className={styles.processDesc}>{step.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
        </>
    );
}
