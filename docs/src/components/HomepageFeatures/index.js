import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'The best of both worlds',
    Png: require('@site/static/img/intro/bestofboth.png'),
    description: (
      <>
        Combine MongoDB Atlas — the only multi-cloud document database service that gives you the versatility you need to build sophisticated and resilient applications that can adapt to changing customer demands and market trends.

        With Kubernetes — the industry leading, open source, container orchestration platform that automates the deployment, management and scaling of containerized applications
      </>
    ),
  },
  {
    title: 'Get started today',
    Png: require('@site/static/img/intro/kubernetes.png'),
    description: (
      <>
        Choose your platform of preference and learn how to deploy the trial version of the MongoDB Atlas Operator using our quick start guides.
      </>
    ),
  },
  {
    title: 'The simplicity you want — where you want it',
    Png: require('@site/static/img/intro/simplicity.png'),
    description: (
      <>
        The Atlas Operator is free with MongoDB Atlas. So when we say you get “the freedom to run anywhere”, that now includes Kubernetes. MongoDB Atlas works the same way in any deployment environment. Try it out the trial version of the Atlas Operator today.
      </>
    ),
  },
];

function Feature({Svg, title, description, Png}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {Svg &&
        <Svg className={styles.featureSvg} role="img" />
        }
        {Png && 
        <img src={Png.default} />
        }
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
