import type { Metadata } from 'next';
import ServicesClient from './ServicesClient';

// App Router Metadata Export
export const metadata: Metadata = {
  title: 'Technical & Academic Research Consultancy | ProjectAssignments.com',
  description: 'Specialized technical advisory, research methodology consulting, and engineering guidance for Cybersecurity, IT Systems, DBA Dissertations, and Executive MBA projects.',
  keywords: [
    'cybersecurity consulting',
    'IT capstone advisory',
    'DBA methodology support',
    'MBA strategic research guidance',
    'academic technical consultancy'
  ]
};

export default function ServicesPage() {
  return <ServicesClient />;
}