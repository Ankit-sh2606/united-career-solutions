export const metadata = {
  title: "Backend API Server",
  description: "United Career Solutions Backend API",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
