import Link from 'next/link';
import styles from './Footer.module.css';

const services = [
    { label: 'Resume Writing', href: '/services' },
    { label: 'LinkedIn Optimization', href: '/services' },
    { label: 'Job Marketing', href: '/services' },
    { label: 'Interview Prep', href: '/services' },
    { label: 'Background Support', href: '/services' },
];

const company = [
    { label: 'About Us', href: '/about' },
    { label: 'Our Services', href: '/services' },
    { label: 'Contact Us', href: '/contact' },
];

const contact = [
    { label: 'info@unitedcareersolutions.com', href: 'mailto:info@unitedcareersolutions.com', icon: '📧' },
    { label: '+1 (555) 123-4567', href: 'tel:+15551234567', icon: '📞' },
    { label: 'Mon–Fri 9 AM – 6 PM EST', href: null, icon: '🕒' },
];

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.footerGrid}>
                    {/* Brand */}
                    <div className={styles.footerBrand}>
                        <Link href="/" className={styles.logo}>
                            United<span className={styles.logoAccent}>.</span>
                        </Link>
                        <p className={styles.brandDescription}>
                            Empowering international candidates to succeed in competitive global job markets with
                            end-to-end career support — from documentation to placement.
                        </p>
                        <div className={styles.socialLinks}>
                            <a href="#" className={styles.socialLink} aria-label="LinkedIn">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                    <rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
                                </svg>
                            </a>
                            <a href="#" className={styles.socialLink} aria-label="Twitter">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                                </svg>
                            </a>
                            <a href="#" className={styles.socialLink} aria-label="Facebook">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                                </svg>
                            </a>
                            <a href="#" className={styles.socialLink} aria-label="Instagram">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Services */}
                    <div className={styles.footerColumn}>
                        <h4>Services</h4>
                        <div className={styles.footerLinks}>
                            {services.map((item) => (
                                <Link key={item.label} href={item.href} className={styles.footerLink}>
                                    {item.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Company */}
                    <div className={styles.footerColumn}>
                        <h4>Company</h4>
                        <div className={styles.footerLinks}>
                            {company.map((item) => (
                                <Link key={item.label} href={item.href} className={styles.footerLink}>
                                    {item.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Contact */}
                    <div className={styles.footerColumn}>
                        <h4>Contact</h4>
                        <div className={styles.footerLinks}>
                            {contact.map((item) => (
                                item.href ? (
                                    <a key={item.label} href={item.href} className={styles.footerLink}>
                                        <span>{item.icon}</span> {item.label}
                                    </a>
                                ) : (
                                    <span key={item.label} className={styles.footerLink}>
                                        <span>{item.icon}</span> {item.label}
                                    </span>
                                )
                            ))}
                        </div>
                    </div>
                </div>

                <div className={styles.footerBottom}>
                    <p className={styles.copyright}>
                        © {new Date().getFullYear()} United Career Solutions. All rights reserved.
                    </p>
                    <div className={styles.footerBottomLinks}>
                        <a href="#" className={styles.footerBottomLink}>Privacy Policy</a>
                        <a href="#" className={styles.footerBottomLink}>Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
