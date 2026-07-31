import type { ReactNode } from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import styles from './index.module.css';
import Admonition from '@theme/Admonition';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <img
          src="/img/logo.png"
          alt={siteConfig.title}
          width={80}
          height={80}
          className={styles.logo}
        />

        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>

        <p className={styles.manifestoLabel}>Manifesto</p>

        <p className="hero__subtitle">
          <i>{siteConfig.tagline}</i>
        </p>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Web Music Score is a TypeScript/JavaScript library for rendering and playing music notation directly in the browser.">
      <Admonition type="info" title="Website Address">
        Planning to abandon custom domain web-musicscore.org.<br />
        use <a href="https://web-music-score.github.io">https://web-music-score.github.io</a> instead.
      </Admonition>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
