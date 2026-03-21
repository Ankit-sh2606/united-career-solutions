export default function Home() {
  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>🚀 Backend API Server</h1>
      <p>The API is running. Available endpoints:</p>
      <ul>
        <li><strong>POST</strong> /api/contact — Submit contact form</li>
        <li><strong>GET</strong> /api/contact/:id — Get contact by ID</li>
        <li><strong>POST</strong> /api/admin/login — Admin login</li>
        <li><strong>GET</strong> /api/admin/contacts — Get all contacts</li>
      </ul>
    </div>
  );
}
