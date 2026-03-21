'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal from '@/components/ScrollReveal';
import styles from './contact.module.css';

const faqs = [
    {
        question: 'How long does the entire process take?',
        answer: 'The timeline varies depending on your goals and the competitiveness of your target market. Typically, resume and LinkedIn optimization are completed within 5–7 business days. Active job marketing begins immediately after, and most candidates start receiving interview calls within 2–4 weeks. The entire process from onboarding to placement usually takes 4–12 weeks.',
    },
    {
        question: 'Do you guarantee job placement?',
        answer: 'While we cannot guarantee specific job offers (as hiring decisions are ultimately made by employers), we guarantee our commitment to your success. Our track record speaks for itself — over 98% client satisfaction and 500+ successful placements. We continue working with you until you land a role you\'re satisfied with.',
    },
    {
        question: 'What industries do you specialize in?',
        answer: 'We have deep expertise in IT and technology sectors, including software engineering, data science, cloud computing, cybersecurity, and DevOps. However, we also successfully support candidates in finance, healthcare, consulting, marketing, and other professional services. Our strategies are adaptable to any industry.',
    },
    {
        question: 'How is your service different from other career consulting firms?',
        answer: 'Unlike traditional career services that stop at resume writing, we provide active job marketing — meaning we submit applications and promote your profile to recruiters on your behalf. Our end-to-end approach covers everything from documentation to placement, with a dedicated support team assigned to each candidate.',
    },
    {
        question: 'Do you work with candidates outside the US and UK?',
        answer: 'Yes! We work with international candidates from around the world who are targeting US and UK job markets. Our team understands the unique challenges of visa sponsorship, work authorization, and cross-border hiring processes, and we guide you through every step.',
    },
    {
        question: 'What does the initial consultation include?',
        answer: 'The free initial consultation is a 30-minute session where we review your current resume, LinkedIn profile, and career goals. We assess your profile strength, discuss target roles and markets, and recommend a personalized service plan. There\'s no obligation — it\'s designed to help you understand how we can support your career journey.',
    },
];

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });
    const [errors, setErrors] = useState({});
    const [showToast, setShowToast] = useState(false);
    const [submitError, setSubmitError] = useState('');
    const [openFaq, setOpenFaq] = useState(null);

    const validate = () => {
        const newErrors = {};
        
        // Full Name validation
        if (!formData.name.trim()) newErrors.name = 'Full name is required';
        else if (formData.name.trim().length < 3) newErrors.name = 'Full name must be at least 3 characters';

        // Email validation
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }

        // Phone validation
        const phoneDigits = formData.phone.replace(/\D/g, "");
        if (!formData.phone.trim()) {
            newErrors.phone = 'Phone number is required';
        } else if (!/^\d+$/.test(phoneDigits) || phoneDigits.length < 10 || phoneDigits.length > 15) {
            newErrors.phone = 'Phone must be 10-15 digits long';
        }

        // Message validation
        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        } else if (formData.message.trim().length < 5) {
            newErrors.message = 'Message must be at least 5 characters';
        }

        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitError('');
        
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        setErrors({});

        try {
            const { API_BASE_URL } = await import('@/src/config/api');
            
            const response = await fetch(`${API_BASE_URL}/contact`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    fullName: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    message: formData.message,
                }),
            });

            const data = await response.json();

            if (response.ok && data.success) {
                setShowToast(true);
                setFormData({ name: '', email: '', phone: '', message: '' });
                setTimeout(() => setShowToast(false), 4000);
            } else {
                setSubmitError(data.message || 'Something went wrong. Please try again.');
            }
        } catch (error) {
            console.error('Submission error:', error);
            setSubmitError('Something went wrong. Please try again.');
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors((prev) => ({ ...prev, [name]: undefined }));
        }
    };

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
                                Get In <span className="gradient-text">Touch</span>
                            </h1>
                            <p className={styles.pageSubtitle}>
                                Ready to take the next step? Reach out and let&apos;s discuss how we can help you
                                achieve your career goals.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className={styles.contactSection}>
                <div className="container">
                    <div className={styles.contactGrid}>
                        {/* Form */}
                        <ScrollReveal direction="left">
                            <div className={styles.formCard}>
                                <h2 className={styles.formTitle}>Send Us a Message</h2>
                                <p className={styles.formSubtitle}>
                                    Fill out the form below and we&apos;ll get back to you within 24 hours.
                                </p>
                                <form onSubmit={handleSubmit} noValidate>
                                    <div className={styles.formGrid}>
                                        <div className={styles.formGroup}>
                                            <label htmlFor="name" className={styles.formLabel}>Full Name *</label>
                                            <input
                                                id="name"
                                                name="name"
                                                type="text"
                                                value={formData.name}
                                                onChange={handleChange}
                                                placeholder="John Doe"
                                                className={`${styles.formInput} ${errors.name ? styles.error : ''}`}
                                            />
                                            {errors.name && <span className={styles.formError}>{errors.name}</span>}
                                        </div>
                                        <div className={styles.formGroup}>
                                            <label htmlFor="email" className={styles.formLabel}>Email Address *</label>
                                            <input
                                                id="email"
                                                name="email"
                                                type="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                placeholder="john@example.com"
                                                className={`${styles.formInput} ${errors.email ? styles.error : ''}`}
                                            />
                                            {errors.email && <span className={styles.formError}>{errors.email}</span>}
                                        </div>
                                        <div className={styles.formGroup}>
                                            <label htmlFor="phone" className={styles.formLabel}>Phone Number *</label>
                                            <input
                                                id="phone"
                                                name="phone"
                                                type="tel"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                placeholder="+1 (555) 000-0000"
                                                className={`${styles.formInput} ${errors.phone ? styles.error : ''}`}
                                            />
                                            {errors.phone && <span className={styles.formError}>{errors.phone}</span>}
                                        </div>

                                        <div className={`${styles.formGroup} ${styles.formGroupFull}`}>
                                            <label htmlFor="message" className={styles.formLabel}>Message *</label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                placeholder="Tell us about your career goals and how we can help..."
                                                className={`${styles.formTextarea} ${errors.message ? styles.error : ''}`}
                                                rows={5}
                                            />
                                            {errors.message && <span className={styles.formError}>{errors.message}</span>}
                                        </div>
                                        <button type="submit" className={styles.submitBtn}>
                                            Send Message
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
                                            </svg>
                                        </button>
                                        {submitError && <div className={styles.formError} style={{ marginTop: '10px', gridColumn: '1 / -1', textAlign: 'center' }}>{submitError}</div>}
                                    </div>
                                </form>
                            </div>
                        </ScrollReveal>

                        {/* Info Column */}
                        <ScrollReveal direction="right">
                            <div className={styles.infoColumn}>
                                <div className={styles.infoCard}>
                                    <h3 className={styles.infoTitle}>Contact Information</h3>
                                    <div className={styles.infoItems}>
                                        <div className={styles.infoItem}>
                                            <div className={styles.infoIcon}>📧</div>
                                            <div>
                                                <div className={styles.infoLabel}>Email</div>
                                                <div className={styles.infoValue}>info@unitedcareersolutions.com</div>
                                            </div>
                                        </div>
                                        <div className={styles.infoItem}>
                                            <div className={styles.infoIcon}>📞</div>
                                            <div>
                                                <div className={styles.infoLabel}>Phone</div>
                                                <div className={styles.infoValue}>+1 (555) 123-4567</div>
                                            </div>
                                        </div>
                                        <div className={styles.infoItem}>
                                            <div className={styles.infoIcon}>🕒</div>
                                            <div>
                                                <div className={styles.infoLabel}>Business Hours</div>
                                                <div className={styles.infoValue}>Mon – Fri, 9:00 AM – 6:00 PM EST</div>
                                            </div>
                                        </div>
                                        <div className={styles.infoItem}>
                                            <div className={styles.infoIcon}>📍</div>
                                            <div>
                                                <div className={styles.infoLabel}>Location</div>
                                                <div className={styles.infoValue}>New York, NY, United States</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className={styles.infoCard}>
                                    <h3 className={styles.infoTitle}>Quick Response</h3>
                                    <div className={styles.infoItems}>
                                        <div className={styles.infoItem}>
                                            <div className={styles.infoIcon}>⚡</div>
                                            <div>
                                                <div className={styles.infoLabel}>Response Time</div>
                                                <div className={styles.infoValue}>Within 24 hours</div>
                                            </div>
                                        </div>
                                        <div className={styles.infoItem}>
                                            <div className={styles.infoIcon}>🎯</div>
                                            <div>
                                                <div className={styles.infoLabel}>Free Consultation</div>
                                                <div className={styles.infoValue}>30-minute career assessment</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className={styles.faq}>
                <div className="container">
                    <ScrollReveal>
                        <div className="section__header">
                            <span className="section__label">FAQ</span>
                            <h2 className="section__title">Frequently Asked Questions</h2>
                            <p className="section__subtitle">
                                Find answers to common questions about our services and process.
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className={styles.faqGrid}>
                        {faqs.map((faq, i) => (
                            <motion.div
                                key={i}
                                className={`${styles.faqItem} ${openFaq === i ? styles.open : ''}`}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.08, duration: 0.4 }}
                            >
                                <button
                                    className={styles.faqQuestion}
                                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                    aria-expanded={openFaq === i}
                                >
                                    {faq.question}
                                    <svg className={styles.faqChevron} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="6 9 12 15 18 9" />
                                    </svg>
                                </button>
                                <AnimatePresence>
                                    {openFaq === i && (
                                        <motion.div
                                            className={styles.faqAnswer}
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                                        >
                                            <div className={styles.faqAnswerInner}>{faq.answer}</div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Success Toast */}
            <AnimatePresence>
                {showToast && (
                    <motion.div
                        className={styles.toast}
                        initial={{ opacity: 0, y: 40, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 40, scale: 0.95 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className={styles.toastIcon}>✓</div>
                        <div>
                            <div className={styles.toastText}>Your message has been sent successfully.</div>
                            <div className={styles.toastSub}>We&apos;ll get back to you within 24 hours.</div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
