import Head from 'next/head';

// import { Analytics } from '@vercel/analytics/react';

import {CallToAction} from '@/components/CallToAction';
import {Faqs} from '@/components/Faqs';
import {Footer} from '@/components/Footer';
import {Header} from '@/components/Header';
import {Hero} from '@/components/Hero';
import {PrimaryFeatures} from '@/components/PrimaryFeatures';
import {SecondaryFeatures} from '@/components/SecondaryFeatures';
import {Testimonials} from '@/components/Testimonials';
import {BlurBG} from '@/components/BlurBG';

export default function Home() {
  return (
    <div className="relative">
      {/* <Image
        className="absolute top-0 max-w-none -translate-y-1/4"
        src={backgroundImage}
        alt=""
        style={{objectFit: 'cover', objectPosition: 'center'}}
        unoptimized
      /> */}

      <Head>
        <title>TuneCloud - Listen Ad Free</title>
        <meta
          name="description"
          content="Your Ultimate Ad-Free Music Experience!"
        />
        <link rel="canonical" href="https://responsively.app/" />
      </Head>

      <main className="relative">
        <div className="relative">
          <BlurBG bgColor="none" bubbleType="2" />
          <div className="relative z-10">
            <Header />
            <Hero />
          </div>
        </div>
        <PrimaryFeatures />
        <SecondaryFeatures />
        <CallToAction />
        <Testimonials />
        <Faqs />
      </main>
      <Footer />
    </div>
  );
}
