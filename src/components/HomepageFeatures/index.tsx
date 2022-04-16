import React from 'react'
import clsx from 'clsx'
import styles from './styles.module.css'

type FeatureItem = {
  title: string
  Svg: React.ComponentType<React.ComponentProps<'svg'>>
  description: JSX.Element
}

const FeatureList: FeatureItem[] = [
  {
    title: '里程碑',
    Svg: require('@site/static/img/web/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        记录自己的程序员职业开发手册，将日常的开发记录在里程碑中
      </>
    )
  },
  {
    title: 'JavaScript',
    Svg: require('@site/static/img/web/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        主要以 JavaScript 的笔记为主，将日常开发中的各种 API 和一些写法记录在此
      </>
    )
  },
  {
    title: '更多技术',
    Svg: require('@site/static/img/web/undraw_docusaurus_react.svg').default,
    description: (
      <>
        除 JavaScript 外，还有一些 Vue3、TypeScript 和一些新的技术的记录
      </>
    )
  }
]

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default function HomepageFeatures(): JSX.Element {
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
  )
}
