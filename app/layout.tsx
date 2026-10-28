import './globals.css';
import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'OAuth Path — Plan your provider approval', description: 'A clear path from OAuth setup to provider approval.' };
export default function RootLayout({ children }: { children: React.ReactNode }) { return <html lang="en"><body>{children}</body></html>; }
