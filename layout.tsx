import type { Metadata, Viewport } from 'next';
import './style.css';

const siteUrl = 'https://saalkoo.store';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'SAALKOO | Born for Greatness — Collection Preview',
  description: 'Explore 15 official SAALKOO Born for Greatness merchandise concepts across apparel, eyewear, music and collectibles. Coming soon; no orders or payments.',
  alternates: { canonical: '/' },
  applicationName: 'SAALKOO STORE',
  robots: { index: true, follow: true },
  openGraph: {
    title: 'SAALKOO | Born for Greatness',
    description: 'Discover the official SAALKOO collection concept preview. No orders or payments are accepted.',
    type: 'website',
    url: siteUrl,
    siteName: 'SAALKOO STORE',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary',
    title: 'SAALKOO | Born for Greatness',
    description: 'Official SAALKOO merchandise concept preview. Coming soon.',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#080808',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
