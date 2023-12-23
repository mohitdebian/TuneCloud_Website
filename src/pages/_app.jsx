import 'focus-visible';
// import { Analytics } from '@vercel/analytics/react';
import PlausibleProvider from 'next-plausible';

import '@/styles/tailwind.css';
import '@/styles/carbon-ads.css';

export default function App({Component, pageProps}) {
  return (
    <PlausibleProvider domain="responsively.app">
      <Component {...pageProps} />
{/*       <Analytics /> */}
    </PlausibleProvider>
  );
}
