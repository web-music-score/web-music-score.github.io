import type { ReactNode } from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  emoji: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Build Scores',
    emoji: '🎼',
    description: (
      <>
        Create scores programmatically with easy to use document builder.
      </>
    ),
  },
  {
    title: 'Rendering And Playback',
    emoji: '🎵',
    description: (
      <>
        Render musical notation and play it back directly in the browser.
      </>
    ),
  },
  {
    title: 'Multiple Frameworks',
    emoji: '🧩',
    description: (
      <>
        Use with React, custom HTML elements or plain JavaScript.
      </>
    ),
  },
  {
    title: 'Written In TypeScript',
    emoji: '⚡',
    description: (
      <>
        Benefit from type definitions to support TypeScript and JavaScript.
      </>
    ),
  },
];

function Feature({ title, emoji: icon, description }: FeatureItem) {
  return (
    <div className={clsx('col col--3')}>
      <div className="text--center">
        <div style={{ fontSize: '2rem' }}>{icon}</div>
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
