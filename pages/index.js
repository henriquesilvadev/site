import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hello, I’m <strong className={`${utilStyles.h5MktgFluid} ${utilStyles.h4SmMktgFluid} ${utilStyles.textGrayMktg} ${utilStyles.lhCondensed} ${utilStyles.textSemiboldMktg} ${utilStyles.mb5Fluid}`} >Henrique</strong>. I’m a software engineer. You can contact me on{' '}
          <a className={`${utilStyles.textGradientPurpleCoral } ${utilStyles.noWrap}`} href="https://www.linkedin.com/in/henriquesilvadev" target="_blank">LinkdIn</a> |
          <a className={`${utilStyles.textGradientPurpleCoral} ${utilStyles.noWrap}`} href="https://github.com/henriquehsilva" target="_blank"> Github</a> |
          <a className={`${utilStyles.textGradientPurpleCoral} ${utilStyles.noWrap}`} href="https://twitter.com/henriquesdev" target="_blank"> Twitter</a> |
          <a className={`${utilStyles.textGradientPurpleCoral} ${utilStyles.noWrap}`} href="https://www.instagram.com/henriquesilvadev" target="_blank"> Instagram</a>.
        </p>
      </section>
      <section className={utilStyles.headingMd}>
        <p>
        Programmer, mathematician, and eternal learner in search of meaning in the world through sketches of calculation and lines of code.
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a className={`${utilStyles.textGradientPurpleCoral } ${utilStyles.noWrap}`}>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
