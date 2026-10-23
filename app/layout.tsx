import type { Metadata } from 'next';
import './style.css';
export const metadata: Metadata = {title:'SAALKOO | Official Merchandise',description:'Official SAALKOO merchandise. Born for Greatness collection.'};
export default function RootLayout({children}:{children:React.ReactNode}) {return <html lang="en"><body>{children}</body></html>}
