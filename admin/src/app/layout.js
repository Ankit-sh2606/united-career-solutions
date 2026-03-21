import './globals.css';

export const metadata = {
  title: 'Admin Panel | United Career Solutions',
  description: 'Admin dashboard to manage contact form submissions.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
