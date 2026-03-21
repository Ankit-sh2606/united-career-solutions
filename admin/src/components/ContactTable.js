"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { API_BASE_URL } from '@/config/api';

export default function ContactTable() {
  const [contacts, setContacts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('admin_token');
    
    // Auth protection
    if (!token) {
      router.push('/login');
      return;
    }

    const fetchContacts = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/admin/contacts`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        
        const data = await res.json();
        
        if (!res.ok) {
          throw new Error('Failed to load contact submissions');
        }

        if (data.success && data.data) {
          setContacts(data.data);
        } else {
          throw new Error('Failed to load contact submissions');
        }
      } catch (err) {
        setError(err.message || 'Failed to load contact submissions');
      } finally {
        setLoading(false);
      }
    };

    fetchContacts();
  }, [router]);

  if (loading) {
    return <div className="loading">Loading contact submissions...</div>;
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  return (
    <div className="table-wrapper">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Full Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Message</th>
            <th>Submitted At</th>
          </tr>
        </thead>
        <tbody>
          {contacts.length === 0 ? (
            <tr>
              <td colSpan="6" style={{ textAlign: 'center' }}>No contact submissions found.</td>
            </tr>
          ) : (
            contacts.map((contact) => (
              <tr key={contact._id}>
                <td>{contact._id.slice(-6)}</td>
                <td>{contact.fullName}</td>
                <td><a href={`mailto:${contact.email}`}>{contact.email}</a></td>
                <td>{contact.phone}</td>
                <td style={{ maxWidth: '300px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }} title={contact.message}>
                  {contact.message}
                </td>
                <td>{new Date(contact.createdAt).toLocaleDateString()} {new Date(contact.createdAt).toLocaleTimeString()}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
