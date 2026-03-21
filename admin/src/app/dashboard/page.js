"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import ContactTable from '@/components/ContactTable';

export default function DashboardPage() {
  const router = useRouter();
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('admin_token');
    
    // Auth protection for the dashboard page itself
    if (!token) {
      router.replace('/login');
    } else {
      setIsAuthorized(true);
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('admin_token');
    router.push('/login');
  };

  // Don't render the dashboard frame until checking localStorage prevents flicker
  if (!isAuthorized) {
    return null; 
  }

  return (
    <main className="dashboard-container">
      <div className="dashboard-header">
        <h1>Admin Dashboard</h1>
        <button onClick={handleLogout} className="btn-logout">
          Logout
        </button>
      </div>
      
      <section>
        <h2>Contact Form Submissions</h2>
        <p style={{ marginBottom: '1.5rem', color: '#666' }}>
          Below is a list of all inquiries received via the frontend contact form.
        </p>
        
        <ContactTable />
      </section>
    </main>
  );
}
